import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { JsonLd } from '@/components/JsonLd';
import { getDictionary, DEFAULT_LOCALE } from '@/lib/i18n';
import { buildAlternates } from '@/lib/seo';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(DEFAULT_LOCALE);
  return {
    title: t.faq.meta.title,
    description: t.faq.meta.description,
    keywords: t.faq.meta.keywords,
    alternates: buildAlternates('/faq', DEFAULT_LOCALE),
    openGraph: {
      url: '/faq',
      title: `${t.faq.meta.title} · ${t.brand.name}`,
      description: t.faq.meta.description,
      type: 'website',
      siteName: t.brand.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.faq.meta.title} · ${t.brand.name}`,
      description: t.faq.meta.description,
    },
  };
}

export default function FaqPage() {
  const t = getDictionary(DEFAULT_LOCALE);
  const { heading, intro, items } = t.faq;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };

  return (
    <MarketingShell>
      <JsonLd data={faqJsonLd} />
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
