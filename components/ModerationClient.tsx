'use client';

import { useState } from 'react';
import { useDictionary } from '@/components/LocaleProvider';
import styles from './ModerationClient.module.css';

type PendingStory = {
  id: string;
  relation: string;
  displayLabel: string | null;
  quote: string;
  storyText: string | null;
};

type PendingTribute = {
  id: string;
  label: string | null;
  relation: string;
  message: string;
  country: string | null;
};

export function ModerationClient() {
  const { t } = useDictionary();
  const [key, setKey] = useState('');
  const [stories, setStories] = useState<PendingStory[]>([]);
  const [tributes, setTributes] = useState<PendingTribute[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  async function load() {
    setError('');
    try {
      const res = await fetch('/api/admin/review', { headers: { 'x-admin-key': key } });
      if (!res.ok) {
        setError('Unauthorized');
        return;
      }
      const data = await res.json();
      setStories(data.stories ?? []);
      setTributes(data.tributes ?? []);
      setLoaded(true);
    } catch {
      setError('Failed to load');
    }
  }

  async function act(kind: 'story' | 'tribute', id: string, action: 'approve' | 'reject') {
    const res = await fetch('/api/admin/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
      body: JSON.stringify({ kind, id, action }),
    });
    if (res.ok) {
      if (kind === 'story') setStories((s) => s.filter((x) => x.id !== id));
      else setTributes((s) => s.filter((x) => x.id !== id));
    }
  }

  const relations = t.community.relations as unknown as Record<string, string>;

  if (!loaded) {
    return (
      <div className={styles.gate}>
        <input
          className={styles.input}
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="admin key"
          aria-label="admin key"
        />
        <button className="btn btn-primary" onClick={() => load()} disabled={!key}>
          Load pending
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <button className={styles.reload} onClick={() => load()}>
        Reload
      </button>

      <h2 className={styles.section}>Stories ({stories.length})</h2>
      {stories.length === 0 && <p className={styles.empty}>Nothing pending.</p>}
      {stories.map((s) => (
        <div key={s.id} className={styles.item}>
          <p className={styles.meta}>
            {relations[s.relation] ?? s.relation}
            {s.displayLabel ? ` · ${s.displayLabel}` : ''}
          </p>
          <p className={styles.quote}>“{s.quote}”</p>
          {s.storyText && <p className={styles.story}>{s.storyText}</p>}
          <div className={styles.actions}>
            <button className={styles.approve} onClick={() => act('story', s.id, 'approve')}>
              Approve
            </button>
            <button className={styles.reject} onClick={() => act('story', s.id, 'reject')}>
              Reject
            </button>
          </div>
        </div>
      ))}

      <h2 className={styles.section}>Tributes ({tributes.length})</h2>
      {tributes.length === 0 && <p className={styles.empty}>Nothing pending.</p>}
      {tributes.map((tr) => (
        <div key={tr.id} className={styles.item}>
          <p className={styles.meta}>
            {relations[tr.relation] ?? tr.relation}
            {tr.label ? ` · ${tr.label}` : ''}
            {tr.country ? ` · ${tr.country}` : ''}
          </p>
          <p className={styles.quote}>{tr.message}</p>
          <div className={styles.actions}>
            <button className={styles.approve} onClick={() => act('tribute', tr.id, 'approve')}>
              Approve
            </button>
            <button className={styles.reject} onClick={() => act('tribute', tr.id, 'reject')}>
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
