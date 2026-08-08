import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await resolveLocale());
  return {
    title: t.faq.meta.title,
    description: t.faq.meta.description,
    alternates: { canonical: '/faq' },
  };
}

export default async function FaqPage() {
  const t = getDictionary(await resolveLocale());
  const { heading, intro, items } = t.faq;

  return (
    <MarketingShell>
      <section className={`container ${styles.head}`}>
        <h1 className="h1">{heading}</h1>
        <p className={`lead ${styles.intro}`}>{intro}</p>
      </section>

      <section className="container">
        <dl className={styles.list}>
          {items.map((item) => (
            <div key={item.question} className={styles.item}>
              <dt className={styles.question}>{item.question}</dt>
              <dd className={styles.answer}>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </MarketingShell>
  );
}
