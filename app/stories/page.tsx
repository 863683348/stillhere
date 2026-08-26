import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { StoryForm } from '@/components/StoryForm';
import { getDictionary, DEFAULT_LOCALE } from '@/lib/i18n';
import { buildAlternates } from '@/lib/seo';
import { listApprovedStoriesCached } from '@/lib/community';
import styles from './page.module.css';

// ISR: statically pre-rendered and revalidated hourly; the DB read is cached via
// unstable_cache (5 min) so this page serves from the CDN (vercel.json s-maxage)
// instead of every request hitting the origin + Neon.
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(DEFAULT_LOCALE);
  return {
    title: t.stories.meta.title,
    description: t.stories.meta.description,
    keywords: t.stories.meta.keywords,
    alternates: buildAlternates('/stories', DEFAULT_LOCALE),
    robots: { index: true, follow: true },
    openGraph: {
      url: '/stories',
      title: `${t.stories.meta.title} · ${t.brand.name}`,
      description: t.stories.meta.description,
      type: 'website',
      siteName: t.brand.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.stories.meta.title} · ${t.brand.name}`,
      description: t.stories.meta.description,
    },
  };
}

export default async function StoriesPage() {
  const t = getDictionary(DEFAULT_LOCALE);
  // Cached DB read; fall back to an empty list if Neon is cold/unreachable so
  // the ISR prerender (and the live page) never 500s.
  let stories: Awaited<ReturnType<typeof listApprovedStoriesCached>> = [];
  try {
    stories = await listApprovedStoriesCached();
  } catch (err) {
    console.error('[stories] listApprovedStoriesCached failed; serving empty list:', err);
  }
  const relations = t.community.relations as unknown as Record<string, string>;

  return (
    <MarketingShell>
      <section className={`container ${styles.wrap}`}>
        <h1 className={`h1 ${styles.heading}`}>{t.stories.heading}</h1>
        <p className={`body-secondary ${styles.intro}`}>{t.stories.intro}</p>

        <div className={styles.grid}>
          {stories.length === 0 ? (
            <p className={styles.empty}>{t.stories.empty.body}</p>
          ) : (
            stories.map((s) => (
              <article key={s.id} className={styles.card}>
                <p className={styles.quote}>“{s.quote}”</p>
                {s.storyText && <p className={styles.story}>{s.storyText}</p>}
                <p className={styles.by}>
                  {s.showRelation ? relations[s.relation] ?? '' : ''}
                  {s.displayLabel ? ` · ${s.displayLabel}` : ''}
                </p>
              </article>
            ))
          )}
        </div>

        <div className={styles.submitBlock}>
          <h2 className={`h2 ${styles.submitHeading}`}>{t.stories.submit.heading}</h2>
          <StoryForm />
        </div>
      </section>
    </MarketingShell>
  );
}
