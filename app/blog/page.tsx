import type { Metadata } from 'next';
import Link from 'next/link';
import { MarketingShell } from '@/components/MarketingShell';
import { JsonLd } from '@/components/JsonLd';
import { getDictionary, DEFAULT_LOCALE } from '@/lib/i18n';
import { buildAlternates } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';
import { BLOG_POSTS } from '@/lib/blog/posts';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(DEFAULT_LOCALE);
  return {
    title: t.blog.meta.title,
    description: t.blog.meta.description,
    keywords: t.blog.meta.keywords,
    alternates: buildAlternates('/blog', DEFAULT_LOCALE),
    openGraph: {
      url: '/blog',
      title: `${t.blog.meta.title} · ${t.brand.name}`,
      description: t.blog.meta.description,
      type: 'website',
      siteName: t.brand.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.blog.meta.title} · ${t.brand.name}`,
      description: t.blog.meta.description,
    },
  };
}

export default function BlogPage() {
  const t = getDictionary(DEFAULT_LOCALE);
  const { heading, intro } = t.blog;

  // Newest first — never rely on the data file's array order; sort explicitly
  // so future posts appended at the end still show up on top.
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

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
          {sortedPosts.map((post) => {
            return (
              <li key={post.slug} className={styles.item}>
                <Link href={`/blog/${post.slug}`} className={styles.link}>
                  <article>
                    <h2 className={`h3 ${styles.title}`}>{post.en.title}</h2>
                    <p className={`caption ${styles.date}`}>{post.date}</p>
                    <p className={`body-secondary ${styles.excerpt}`}>{post.en.excerpt}</p>
                  </article>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </MarketingShell>
  );
}
