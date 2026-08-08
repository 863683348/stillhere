'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { Crown, LogOut, Trash2 } from 'lucide-react';
import type { Dictionary } from '@/locales/en';
import type { User } from 'next-auth';
import styles from './page.module.css';

function avatarFallback(name: string | null | undefined, email: string | null | undefined) {
  if (name) {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
  return email?.[0]?.toUpperCase() ?? '?';
}

export function SettingsForm({ user, t }: { user: User; t: Dictionary }) {
  const [displayName, setDisplayName] = useState(user.name ?? '');
  const [saved, setSaved] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth.js Google OAuth profile names are read-only in this MVP.
    // We still allow the user to set a preferred display name locally.
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className={styles.stack}>
      {/* Profile card */}
      <section className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.avatar} aria-hidden>
            {avatarFallback(user.name, user.email)}
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>{user.name || t.app.sidebar.guest}</span>
            <span className={styles.profileEmail}>{user.email}</span>
          </div>
        </div>

        <form onSubmit={handleSave} className={styles.form}>
          <label htmlFor="displayName" className={styles.label}>
            {t.app.settings.displayName}
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className={styles.input}
          />

          <label htmlFor="email" className={styles.label}>
            {t.app.settings.email}
          </label>
          <input
            id="email"
            type="email"
            value={user.email ?? ''}
            disabled
            className={`${styles.input} ${styles.inputDisabled}`}
          />

          <div className={styles.formActions}>
            <button type="submit" className="btn btn-primary">
              {saved ? t.app.settings.saved : t.app.settings.save}
            </button>
          </div>
        </form>
      </section>

      {/* Subscription */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <Crown size={20} strokeWidth={1.5} className={styles.cardIcon} aria-hidden />
          <h2 className={styles.cardTitle}>{t.app.settings.subscription.heading}</h2>
        </div>
        <p className={styles.cardBody}>{t.app.settings.subscription.body}</p>
        <a href="/pricing" className={styles.cardLink}>
          {t.app.settings.subscription.cta}
        </a>
      </section>

      {/* Sign out */}
      <section className={styles.card}>
        <div className={styles.rowBetween}>
          <div>
            <h2 className={styles.cardTitle}>{t.app.settings.signOut.heading}</h2>
            <p className={styles.cardBody}>{t.app.settings.signOut.body}</p>
          </div>
          <button
            type="button"
            className={`btn btn-secondary ${styles.actionBtn}`}
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            <LogOut size={16} strokeWidth={1.5} aria-hidden />
            <span>{t.app.signOut}</span>
          </button>
        </div>
      </section>

      {/* Delete account */}
      <section className={`${styles.card} ${styles.dangerCard}`}>
        <h2 className={styles.dangerTitle}>{t.app.settings.deleteAccount.heading}</h2>
        <p className={styles.cardBody}>{t.app.settings.deleteAccount.body}</p>
        <button
          type="button"
          className={`btn ${styles.dangerBtn}`}
          onClick={() => setDeleting((v) => !v)}
        >
          <Trash2 size={16} strokeWidth={1.5} aria-hidden />
          <span>{deleting ? t.app.settings.deleteAccount.confirm : t.app.settings.deleteAccount.cta}</span>
        </button>
      </section>
    </div>
  );
}
