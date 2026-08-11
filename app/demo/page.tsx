import Link from 'next/link';
import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { getDictionary, DEFAULT_LOCALE } from '@/lib/i18n';
import { buildAlternates } from '@/lib/seo';
import styles from './page.module.css';

/**
 * Demo is a fully static, scripted preview — it does NOT call the chat API.
 *
 * - No headers(), no cookies(), no DB, no /api/chat/demo fetch.
 * - Single locale (DEFAULT_LOCALE) so Next can pre-render this page at build
 *   and serve it from the CDN with zero origin traffic.
 * - The real conversation experience lives behind /app/new (signed-in).
 *
 * If we ever need an EN version of this preview we can either add a second
 * pre-rendered route or fall back to dynamic + s-maxage — but today the demo
 * is not an SEO entry point and keeping it static is the right trade-off.
 */
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(DEFAULT_LOCALE);
  return {
    title: t.demo.meta.title,
    description: t.demo.meta.description,
    keywords: t.demo.meta.keywords,
    alternates: buildAlternates('/demo', DEFAULT_LOCALE),
    robots: { index: true, follow: true },
  };
}

export default function DemoPage() {
  const t = getDictionary(DEFAULT_LOCALE);
  const { heading, intro, disclaimer, examplesHeading, examplesIntro, examples, createLabel, createCta } = t.demo;

  return (
    <MarketingShell>
      <section className={`container ${styles.wrap}`}>
        <h1 className={`h1 ${styles.heading}`}>{heading}</h1>
        <p className={`body-secondary ${styles.intro}`}>{intro}</p>

        <p className={styles.disclaimer} role="note">
          {disclaimer}
        </p>

        <div className={styles.chatShell} aria-label={examplesHeading}>
          <div className={styles.streamHeader}>
            <h2 className={`h3 ${styles.examplesHeading}`}>{examplesHeading}</h2>
            <p className={`caption ${styles.examplesIntro}`}>{examplesIntro}</p>
          </div>
          <div className={styles.stream}>
            {examples.map((msg, i) => (
              <div
                key={i}
                className={`${styles.row} ${msg.role === 'user' ? styles.rowUser : styles.rowAssistant}`}
              >
                <div className={`${styles.bubble} ${msg.role === 'user' ? styles.bubbleUser : styles.bubbleAssistant}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <Link href="/app/new" className="btn btn-primary">
            {createCta}
          </Link>
          <span className={styles.ctaLabel}>{createLabel}</span>
        </div>
      </section>
    </MarketingShell>
  );
}