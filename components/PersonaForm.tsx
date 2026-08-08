'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDictionary } from '@/components/LocaleProvider';
import styles from './PersonaForm.module.css';

export function PersonaForm() {
  const { t } = useDictionary();
  const router = useRouter();
  const n = t.app.new;

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (saving) return;
    setError('');
    setSaving(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get('name') ?? '').trim(),
      relationship: String(form.get('relationship') ?? '').trim(),
      memories: String(form.get('memories') ?? '').trim(),
      tone: String(form.get('tone') ?? '').trim(),
      writingSample: String(form.get('writingSample') ?? '').trim(),
    };

    if (!payload.name) {
      setError(n.error);
      setSaving(false);
      return;
    }

    try {
      const res = await fetch('/api/persons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('bad status');
      const data = (await res.json()) as { person: { id: string } };
      router.push(`/app/${data.person.id}`);
    } catch {
      setError(n.error);
      setSaving(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          {n.name}
        </label>
        <input
          id="name"
          name="name"
          className={styles.input}
          placeholder={n.namePlaceholder}
          required
          autoComplete="off"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="relationship">
          {n.relationship}
        </label>
        <input
          id="relationship"
          name="relationship"
          className={styles.input}
          placeholder={n.relationshipPlaceholder}
          autoComplete="off"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="memories">
          {n.memories}
        </label>
        <textarea
          id="memories"
          name="memories"
          className={styles.textarea}
          placeholder={n.memoriesPlaceholder}
          rows={4}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="tone">
          {n.tone}
        </label>
        <textarea
          id="tone"
          name="tone"
          className={styles.textarea}
          placeholder={n.tonePlaceholder}
          rows={3}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="writingSample">
          {n.writingSample}
        </label>
        <textarea
          id="writingSample"
          name="writingSample"
          className={styles.textarea}
          placeholder={n.writingSamplePlaceholder}
          rows={2}
        />
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}

      <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={saving}>
        {saving ? n.saving : n.submit}
      </button>
    </form>
  );
}
