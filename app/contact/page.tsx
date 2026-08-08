import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { MarketingShell } from '@/components/MarketingShell';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await resolveLocale());
  return {
    title: t.contact.meta.title,
    description: t.contact.meta.description,
    alternates: { canonical: '/contact' },
  };
}

export default async function ContactPage() {
  const t = getDictionary(await resolveLocale());
  const { heading, intro, emailLabel, email, responseNote } = t.contact;

  return (
    <MarketingShell>
      <section className={`container ${styles.wrap}`}>
        <h1 className="h1">{heading}</h1>
        <p className={`lead ${styles.intro}`}>{intro}</p>

        <div className={styles.card}>
          <span className={styles.label}>{emailLabel}</span>
          <a className={styles.email} href={`mailto:${email}`}>
            <Mail className={styles.emailIcon} size={18} strokeWidth={1.75} aria-hidden />
            {email}
          </a>
          <p className={`caption ${styles.note}`}>{responseNote}</p>
        </div>
      </section>
    </MarketingShell>
  );
}
