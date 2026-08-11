import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { StoryForm } from '@/components/StoryForm';
import { getDictionary } from '@/lib/i18n';
import { resolvePageLocale, buildAlternates } from '@/lib/seo';
import { listApprovedStories } from '@/lib/community';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const locale = await resolvePageLocale(searchParams);
  const t = getDictionary(locale);
  return {
    title: t.stories.meta.title,
    description: t.stories.meta.description,
    keywords: t.stories.meta.keywords,
    alternates: buildAlternates('/stories', locale),
    robots: { index: true, follow: true },
    openGraph: {
      url: '/stories',
      title: `${t.stories.meta.title} · ${t.brand.name}`,
      description: t.stories.meta.description,
      type: 'website',
      siteName: t.brand.name,
      locale: locale === 'en' ? 'en_US' : 'zh_CN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.stories.meta.title} · ${t.brand.name}`,
      description: t.stories.meta.description,
    },
  };
}

export default async function StoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const t = getDictionary(await resolvePageLocale(searchParams));
  const stories = await listApprovedStories();
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
