import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { TributeForm } from '@/components/TributeForm';
import { getDictionary } from '@/lib/i18n';
import { resolvePageLocale, buildAlternates } from '@/lib/seo';
import { listApprovedTributes } from '@/lib/community';
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
    title: t.wall.meta.title,
    description: t.wall.meta.description,
    alternates: buildAlternates('/wall', locale),
    robots: { index: true, follow: true },
  };
}

export default async function WallPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const t = getDictionary(await resolvePageLocale(searchParams));
  const tributes = await listApprovedTributes();
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
