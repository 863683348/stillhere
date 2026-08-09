'use client';

import { useState, useRef, useEffect } from 'react';
import { useDictionary } from '@/components/LocaleProvider';
import type { Message } from '@/lib/types';
import { Send } from 'lucide-react';
import styles from './Chat.module.css';

/** Per-window (sessionStorage) conversation counter — one key per Chat instance. */
function turnsKey(personId: string): string {
  return `stillhere-chat-turns:${personId}`;
}

function readTurns(key: string): number {
  try {
    return Number(window.sessionStorage.getItem(key) ?? 0);
  } catch {
    return 0;
  }
}

function writeTurns(key: string, n: number) {
  try {
    window.sessionStorage.setItem(key, String(n));
  } catch {
    // Storage unavailable (private mode) — the in-memory counter still enforces the UI.
  }
}

export function Chat({
  personId,
  initialMessages,
  endpoint = '/api/chat',
  maxTurns,
  turnsNote,
  turnsLeftTemplate,
  turnsExhausted,
}: {
  personId: string;
  initialMessages: Message[];
  endpoint?: string;
  /** Optional per-window conversation cap (e.g. 10 for the public demo). */
  maxTurns?: number;
  turnsNote?: string;
  turnsLeftTemplate?: string;
  turnsExhausted?: string;
}) {
  const { t } = useDictionary();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [turnsUsed, setTurnsUsed] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);

  // Hydrate the per-window turn counter after mount (sessionStorage is
  // browser-only, so we cannot read it during SSR/hydration).
  useEffect(() => {
    setTurnsUsed(readTurns(turnsKey(personId)));
  }, [personId]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const exhausted = maxTurns != null && turnsUsed >= maxTurns;
  const turnsLeft = maxTurns != null ? maxTurns - turnsUsed : 0;

  async function send() {
    const text = input.trim();
    if (!text || streaming || exhausted) return;
    setInput('');
    setStreaming(true);

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      personId,
      role: 'user',
      content: text,
      createdAt: new Date().toISOString(),
    };
    const assistantMsg: Message = {
      id: `a-${Date.now()}`,
      personId,
      role: 'assistant',
      content: '',
      createdAt: new Date().toISOString(),
    };
    setMessages((m) => [...m, userMsg, assistantMsg]);
    // Count the turn immediately (before the upstream call) so the UI cap is
    // enforced even if the model call fails.
    setTurnsUsed((n) => {
      const next = n + 1;
      writeTurns(turnsKey(personId), next);
      return next;
    });

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Lets the demo API enforce the same per-window cap server-side.
          'x-demo-turns': String(turnsUsed + 1),
        },
        body: JSON.stringify({ personId, message: text }),
      });
      if (!res.body) throw new Error('no body');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        const snapshot = full;
        setMessages((m) => m.map((msg) => (msg.id === assistantMsg.id ? { ...msg, content: snapshot } : msg)));
      }
    } catch {
      setMessages((m) =>
        m.map((msg) => (msg.id === assistantMsg.id ? { ...msg, content: t.app.chat.thinking } : msg)),
      );
    } finally {
      setStreaming(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.stream}>
        {messages.length === 0 ? (
          <p className={styles.empty}>{t.app.chat.empty}</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.row} ${msg.role === 'user' ? styles.rowUser : styles.rowAssistant}`}
            >
              <div className={`${styles.bubble} ${msg.role === 'user' ? styles.bubbleUser : styles.bubbleAssistant}`}>
                {msg.content || (streaming ? t.app.chat.thinking : '')}
              </div>
            </div>
          ))
        )}
        <div ref={endRef} />
      </div>

      {maxTurns != null && (
        <div className={styles.turnsBar} role="status">
          {exhausted
            ? (turnsExhausted ?? '')
            : `${turnsNote ?? ''} ${turnsLeftTemplate?.replace('{n}', String(turnsLeft)) ?? ''}`.trim()}
        </div>
      )}

      <div className={styles.inputRow}>
        <textarea
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={t.app.chat.placeholder}
          rows={2}
          disabled={streaming || exhausted}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => void send()}
          disabled={streaming || !input.trim() || exhausted}
          aria-label={t.app.chat.send}
        >
          <Send size={18} strokeWidth={1.75} aria-hidden />
          <span>{t.app.chat.send}</span>
        </button>
      </div>
    </div>
  );
}
