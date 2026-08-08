import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { JsonLd } from '@/components/JsonLd';
import { getDictionary } from '@/lib/i18n';
import { resolvePageLocale, buildAlternates } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';
import styles from './page.module.css';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const locale = await resolvePageLocale(searchParams);
  const t = getDictionary(locale);
  return {
    title: t.blog.meta.title,
    description: t.blog.meta.description,
    alternates: buildAlternates('/blog', locale),
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const locale = await resolvePageLocale(searchParams);
  const t = getDictionary(locale);
  const { heading, intro, posts } = t.blog;

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: heading,
    description: t.blog.meta.description,
    url: `${SITE_URL}/blog`,
  };

  return (
    <MarketingShell>
      <JsonLd data={blogJsonLd} />
      <section className={`container ${styles.head}`}>
        <h1 className="h1">{heading}</h1>
        <p className={`lead ${styles.intro}`}>{intro}</p>
      </section>

      <section className="container">
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.title} className={styles.item}>
              <article>
                <h2 className={`h3 ${styles.title}`}>{post.title}</h2>
                <p className={`caption ${styles.date}`}>{post.date}</p>
                <p className={`body-secondary ${styles.excerpt}`}>{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </MarketingShell>
  );
}
