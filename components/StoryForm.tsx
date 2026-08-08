'use client';

import { useState } from 'react';
import { useDictionary } from '@/components/LocaleProvider';
import styles from './Community.module.css';

const RELATION_KEYS = [
  'parent',
  'grandparent',
  'partner',
  'child',
  'sibling',
  'friend',
  'pet',
  'other',
] as const;

export function StoryForm() {
  const { t } = useDictionary();
  const s = t.stories.submit;

  const [relation, setRelation] = useState('');
  const [displayLabel, setDisplayLabel] = useState('');
  const [quote, setQuote] = useState('');
  const [story, setStory] = useState('');
  const [consent, setConsent] = useState(false);
  const [showRelation, setShowRelation] = useState(true);
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!relation || !quote.trim() || !consent) {
      setStatus('error');
      return;
    }
    setStatus('saving');
    try {
      const res = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          relation,
          displayLabel: displayLabel.trim(),
          quote: quote.trim(),
          storyText: story.trim(),
          consentPublic: true,
          showRelation,
        }),
      });
      setStatus(res.ok ? 'done' : 'error');
      if (res.ok) {
        setRelation('');
        setDisplayLabel('');
        setQuote('');
        setStory('');
        setConsent(false);
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="story-relation">
          {s.relation}
        </label>
        <select
          id="story-relation"
          className={styles.select}
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          required
        >
          <option value="" disabled>
            —
          </option>
          {RELATION_KEYS.map((k) => (
            <option key={k} value={k}>
              {t.community.relations[k]}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="story-label">
          {s.displayLabel}
        </label>
        <input
          id="story-label"
          className={styles.input}
          value={displayLabel}
          onChange={(e) => setDisplayLabel(e.target.value)}
          placeholder={s.displayLabelPlaceholder}
          maxLength={60}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="story-quote">
          {s.quote}
        </label>
        <input
          id="story-quote"
          className={styles.input}
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder={s.quotePlaceholder}
          maxLength={200}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="story-text">
          {s.story}
        </label>
        <textarea
          id="story-text"
          className={styles.textarea}
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder={s.storyPlaceholder}
          maxLength={1000}
        />
      </div>

      <label className={styles.checkboxRow}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={showRelation}
          onChange={(e) => setShowRelation(e.target.checked)}
        />
        <span>{s.showRelation}</span>
      </label>

      <label className={styles.checkboxRow}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
        />
        <span>{s.consent}</span>
      </label>

      {status === 'error' && <p className={styles.error}>{s.error}</p>}
      {status === 'done' && <p className={styles.success}>{s.success}</p>}

      <button type="submit" className="btn btn-primary" disabled={status === 'saving'}>
        {status === 'saving' ? s.saving : s.submit}
      </button>
    </form>
  );
}
