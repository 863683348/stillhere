import { NextResponse } from 'next/server';
import { buildSystemPrompt, DEEPSEEK_MODEL } from '@/lib/deepseek';
import { DEMO_PERSON } from '@/lib/demo-persona';
import { rateLimit, dailyQuota, clientIp } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

const STREAM_HEADERS = {
  'Content-Type': 'text/plain; charset=utf-8',
  'Cache-Control': 'no-cache, no-transform',
  'X-Accel-Buffering': 'no',
};

const MAX_MESSAGE_LEN = 2000;
const MAX_TOKENS = 300;
const DAILY_DEMO_QUOTA = 50;
/** Per-window cap enforced client-side (sessionStorage) + re-checked here. */
const WINDOW_TURNS = 10;

/**
 * Public, no-signup demo chat (F14). Reuses the F2 engine but:
 *  - requires no session
 *  - never persists anything (no addMessage)
 *  - always answers as the fictional DEMO_PERSON
 * The UI labels this clearly so visitors know it is a demo, not a real persona.
 *
 * Abuse guard: this is the most exposed endpoint on the site (no auth), so it
 * gets a per-IP throttle (5/min) + a per-IP daily budget (50/day) + a per-window
 * cap (10 turns, carried via `x-demo-turns`) + a small max_tokens cap.
 */
export async function POST(req: Request) {
  const ip = clientIp(req);

  const rl = rateLimit(`demo:${ip}`, 5, 60_000);
  if (!rl.ok) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment and try again.' },
      { status: 429, headers: { 'Retry-After': String(rl.retryAfterSeconds) } },
    );
  }

  // Per-window cap: the client sends its sessionStorage counter with each
  // request; reject once it passes the 10-turn budget. (Client UI also blocks
  // input at 10 — this header check is the server-side backstop.)
  const turnsHeader = Number(req.headers.get('x-demo-turns'));
  if (Number.isFinite(turnsHeader) && turnsHeader > WINDOW_TURNS) {
    return NextResponse.json(
      { error: `This demo visit is limited to ${WINDOW_TURNS} conversations.` },
      { status: 429 },
    );
  }

  const dq = dailyQuota(`demo:${ip}`, DAILY_DEMO_QUOTA);
  if (!dq.ok) {
    return NextResponse.json(
      {
        error: `You have used today's demo limit (${DAILY_DEMO_QUOTA}). It resets at midnight UTC.`,
        remaining: 0,
        resetsAt: dq.resetsAt,
      },
      { status: 429 },
    );
  }

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  if (!message) {
    return NextResponse.json({ error: 'message is required' }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LEN) {
    return NextResponse.json({ error: 'message is too long' }, { status: 400 });
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'DeepSeek API key is not configured' }, { status: 500 });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const upstream = await fetch('https://api.deepseek.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: DEEPSEEK_MODEL,
            messages: [
              { role: 'system', content: buildSystemPrompt(DEMO_PERSON) },
              { role: 'user', content: message },
            ],
            stream: true,
            temperature: 0.8,
            max_tokens: MAX_TOKENS,
          }),
        });

        if (!upstream.ok || !upstream.body) {
          controller.enqueue(
            encoder.encode('[The light flickers — the model could not be reached. Please try again.]'),
          );
          controller.close();
          return;
        }

        const reader = upstream.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) continue;
            const data = trimmed.slice(5).trim();
            if (data === '[DONE]') continue;
            try {
              const json = JSON.parse(data);
              const token = json?.choices?.[0]?.delta?.content;
              if (token) {
                controller.enqueue(encoder.encode(token));
              }
            } catch {
              // keep-alive / partial frame
            }
          }
        }
      } catch {
        controller.enqueue(
          encoder.encode('[Something went quiet. Please try again in a moment.]'),
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, { headers: STREAM_HEADERS });
}
