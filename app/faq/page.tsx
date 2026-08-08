import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { JsonLd } from '@/components/JsonLd';
import { getDictionary } from '@/lib/i18n';
import { resolvePageLocale, buildAlternates } from '@/lib/seo';
import styles from './page.module.css';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const locale = await resolvePageLocale(searchParams);
  const t = getDictionary(locale);
  return {
    title: t.faq.meta.title,
    description: t.faq.meta.description,
    alternates: buildAlternates('/faq', locale),
    openGraph: {
      url: '/faq',
      title: `${t.faq.meta.title} · ${t.brand.name}`,
      description: t.faq.meta.description,
      type: 'website',
      siteName: t.brand.name,
      locale: locale === 'en' ? 'en_US' : 'zh_CN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.faq.meta.title} · ${t.brand.name}`,
      description: t.faq.meta.description,
    },
  };
}

export default async function FaqPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const locale = await resolvePageLocale(searchParams);
  const t = getDictionary(locale);
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
