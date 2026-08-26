import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarketingShell } from '@/components/MarketingShell';
import { JsonLd } from '@/components/JsonLd';
import { getDictionary, DEFAULT_LOCALE } from '@/lib/i18n';
import { buildAlternates } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog/posts';
import styles from './page.module.css';

// Static route: every post is pre-rendered at build (generateStaticParams) in
// the default (English) locale and served from the CDN with the vercel.json
// Cache-Control. No searchParams/cookies() server-side — reading them would
// force dynamic rendering and drop the caching.
export const dynamic = 'force-static';

// 相关文章：按标题+摘要英文单词重合度取 3 篇（排除自身），供底部内链
function getRelatedPosts(slug: string, limit = 3): typeof BLOG_POSTS {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const tokenize = (s: string) =>
    new Set(
      (s || '')
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter((w) => w.length > 3)
    );
  const curTokens = tokenize(current.en.title + ' ' + current.en.excerpt);
  const scored = BLOG_POSTS.filter((p) => p.slug !== slug)
    .map((p) => {
      const t = tokenize(p.en.title + ' ' + p.en.excerpt);
      let score = 0;
      curTokens.forEach((w) => { if (t.has(w)) score++; });
      return { p, score };
    })
    .sort((a, b) => b.score - a.score || (a.p.date < b.p.date ? 1 : -1));
  return scored.slice(0, limit).map((s) => s.p);
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const t = getDictionary(DEFAULT_LOCALE);
  const lang = post.en;
  const path = `/blog/${slug}`;
  return {
    title: lang.title,
    description: lang.excerpt,
    alternates: buildAlternates(path, DEFAULT_LOCALE),
    openGraph: {
      url: path,
      title: lang.title,
      description: lang.excerpt,
      type: 'article',
      siteName: t.brand.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: lang.title,
      description: lang.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = getDictionary(DEFAULT_LOCALE);
  const lang = post.en;

  const faqLd =
    lang.faq && lang.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: lang.faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: lang.title,
    description: lang.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'en',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
    publisher: { '@type': 'Organization', name: t.brand.name, url: SITE_URL },
  };

  const selfUrl = `${SITE_URL}/blog/${slug}`;
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.nav.home, item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: t.nav.blog, item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: lang.title, item: selfUrl },
    ],
  };

  return (
    <MarketingShell>
      <JsonLd data={[articleLd, breadcrumbLd, ...(faqLd ? [faqLd] : [])]} />
      <article className={`container ${styles.article}`}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <ol className={styles.breadcrumbList}>
            <li>
              <Link href="/" className={styles.breadcrumbLink}>
                {t.nav.home}
              </Link>
            </li>
            <li aria-hidden="true" className={styles.breadcrumbSep}>
              /
            </li>
            <li>
              <Link href="/blog" className={styles.breadcrumbLink}>
                {t.nav.blog}
              </Link>
            </li>
            <li aria-hidden="true" className={styles.breadcrumbSep}>
              /
            </li>
            <li aria-current="page" className={styles.breadcrumbCurrent}>
              {lang.title}
            </li>
          </ol>
        </nav>
        <p className={`caption ${styles.date}`}>{post.date}</p>
        <h1 className={`h1 ${styles.title}`}>{lang.title}</h1>
        <div
          className={styles.body}
          // Body is trusted, first-party HTML authored in lib/blog/posts.ts.
          dangerouslySetInnerHTML={{ __html: lang.body }}
        />
        {lang.faq && lang.faq.length > 0 ? (
          <section className={styles.faq} aria-label="Questions">
            <h2 className="h2">Questions people ask</h2>
            {lang.faq.map((f, i) => (
              <div key={i} className={styles.faqItem}>
                <h3 className="h3">{f.q}</h3>
                <p className="body-secondary">{f.a}</p>
              </div>
            ))}
          </section>
        ) : null}
        {(() => {
          const related = getRelatedPosts(slug);
          if (!related.length) return null;
          return (
            <section className={styles.related} aria-label="Related notes">
              <h2 className="h2">Related notes</h2>
              <ul className={styles.relatedList}>
                {related.map((p) => {
                  return (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className={styles.relatedLink}>
                        {p.en.title}
                      </Link>
                      <p className="caption">{p.date}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })()}
        {(() => {
          const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
          const i = sorted.findIndex((p) => p.slug === slug);
          if (i < 0) return null;
          const newer = i > 0 ? sorted[i - 1] : null; // 上一篇（更新的）
          const older = i < sorted.length - 1 ? sorted[i + 1] : null; // 下一篇（更旧的）
          if (!newer && !older) return null;
          const title = (p: (typeof BLOG_POSTS)[number]) => p.en.title;
          return (
            <nav aria-label="Post navigation" className={styles.pager}>
              {newer ? (
                <Link href={`/blog/${newer.slug}`} className={`${styles.pagerLink} ${styles.pagerPrev}`}>
                  <span className={`caption ${styles.pagerLabel}`}>← {t.nav.prevNote}</span>
                  <span className={styles.pagerTitle}>{title(newer)}</span>
                </Link>
              ) : (
                <span />
              )}
              {older ? (
                <Link href={`/blog/${older.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
                  <span className={`caption ${styles.pagerLabel}`}>{t.nav.nextNote} →</span>
                  <span className={styles.pagerTitle}>{title(older)}</span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          );
        })()}
        <p className={styles.cta}>
          <Link href="/" className="btn btn-primary">
            {t.home.hero.cta}
          </Link>
        </p>
      </article>
    </MarketingShell>
  );
}
