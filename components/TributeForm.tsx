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

export function TributeForm() {
  const { t } = useDictionary();
  const w = t.wall.submit;

  const [label, setLabel] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');
  const [anonymous, setAnonymous] = useState(true);
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!relation || !message.trim()) {
      setStatus('error');
      return;
    }
    setStatus('saving');
    try {
      const res = await fetch('/api/tributes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          label: label.trim(),
          relation,
          message: message.trim(),
          country: country.trim().toUpperCase(),
          anonymous,
        }),
      });
      setStatus(res.ok ? 'done' : 'error');
      if (res.ok) {
        setLabel('');
        setRelation('');
        setMessage('');
        setCountry('');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="tribute-label">
          {w.label}
        </label>
        <input
          id="tribute-label"
          className={styles.input}
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder={w.labelPlaceholder}
          maxLength={60}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="tribute-relation">
          {w.relation}
        </label>
        <select
          id="tribute-relation"
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
        <label className={styles.label} htmlFor="tribute-message">
          {w.message}
        </label>
        <textarea
          id="tribute-message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={w.messagePlaceholder}
          maxLength={280}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="tribute-country">
          {w.country}
        </label>
        <input
          id="tribute-country"
          className={styles.input}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="e.g. US, CN, GB"
          maxLength={2}
        />
      </div>

      <label className={styles.checkboxRow}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
        />
        <span>{w.anonymous}</span>
      </label>

      {status === 'error' && <p className={styles.error}>{w.error}</p>}
      {status === 'done' && <p className={styles.success}>{w.success}</p>}

      <button type="submit" className="btn btn-primary" disabled={status === 'saving'}>
        {status === 'saving' ? w.saving : w.submit}
      </button>
    </form>
  );
}
