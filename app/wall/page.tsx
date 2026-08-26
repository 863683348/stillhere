import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { TributeForm } from '@/components/TributeForm';
import { getDictionary, DEFAULT_LOCALE } from '@/lib/i18n';
import { buildAlternates } from '@/lib/seo';
import { listApprovedTributesCached } from '@/lib/community';
import styles from './page.module.css';

// ISR: statically pre-rendered and revalidated hourly; the DB read is cached via
// unstable_cache (5 min) so this page serves from the CDN (vercel.json s-maxage)
// instead of every request hitting the origin + Neon.
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(DEFAULT_LOCALE);
  return {
    title: t.wall.meta.title,
    description: t.wall.meta.description,
    keywords: t.wall.meta.keywords,
    alternates: buildAlternates('/wall', DEFAULT_LOCALE),
    robots: { index: true, follow: true },
    openGraph: {
      url: '/wall',
      title: `${t.wall.meta.title} · ${t.brand.name}`,
      description: t.wall.meta.description,
      type: 'website',
      siteName: t.brand.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.wall.meta.title} · ${t.brand.name}`,
      description: t.wall.meta.description,
    },
  };
}

export default async function WallPage() {
  const t = getDictionary(DEFAULT_LOCALE);
  // Cached DB read; fall back to an empty list if Neon is cold/unreachable so
  // the ISR prerender (and the live page) never 500s.
  let tributes: Awaited<ReturnType<typeof listApprovedTributesCached>> = [];
  try {
    tributes = await listApprovedTributesCached();
  } catch (err) {
    console.error('[wall] listApprovedTributesCached failed; serving empty list:', err);
  }
  const relations = t.community.relations as unknown as Record<string, string>;

  return (
    <MarketingShell>
      <section className={`container ${styles.wrap}`}>
        <h1 className={`h1 ${styles.heading}`}>{t.wall.heading}</h1>
        <p className={`body-secondary ${styles.intro}`}>{t.wall.intro}</p>

        <div className={styles.wall}>
          {tributes.length === 0 ? (
            <p className={styles.empty}>{t.wall.empty.body}</p>
          ) : (
            tributes.map((tr) => (
              <article key={tr.id} className={styles.note}>
                <p className={styles.message}>{tr.message}</p>
                <p className={styles.by}>
                  {relations[tr.relation] ?? ''}
                  {!tr.anonymous && tr.label ? ` · ${tr.label}` : ''}
                  {tr.country ? ` · ${tr.country}` : ''}
                </p>
              </article>
            ))
          )}
        </div>

        <div className={styles.submitBlock}>
          <h2 className={`h2 ${styles.submitHeading}`}>{t.wall.submit.heading}</h2>
          <TributeForm />
        </div>
      </section>
    </MarketingShell>
  );
}
