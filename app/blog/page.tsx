import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await resolveLocale());
  return {
    title: t.blog.meta.title,
    description: t.blog.meta.description,
    alternates: { canonical: '/blog' },
  };
}

export default async function BlogPage() {
  const t = getDictionary(await resolveLocale());
  const { heading, intro, posts } = t.blog;

  return (
    <MarketingShell>
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
