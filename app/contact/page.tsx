import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { MarketingShell } from '@/components/MarketingShell';
import { getDictionary, DEFAULT_LOCALE } from '@/lib/i18n';
import { buildAlternates } from '@/lib/seo';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(DEFAULT_LOCALE);
  return {
    title: t.contact.meta.title,
    description: t.contact.meta.description,
    keywords: t.contact.meta.keywords,
    alternates: buildAlternates('/contact', DEFAULT_LOCALE),
    openGraph: {
      url: '/contact',
      title: `${t.contact.meta.title} · ${t.brand.name}`,
      description: t.contact.meta.description,
      type: 'website',
      siteName: t.brand.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.contact.meta.title} · ${t.brand.name}`,
      description: t.contact.meta.description,
    },
  };
}

export default function ContactPage() {
  const t = getDictionary(DEFAULT_LOCALE);
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
