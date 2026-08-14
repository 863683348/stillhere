import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarketingShell } from '@/components/MarketingShell';
import { JsonLd } from '@/components/JsonLd';
import { getDictionary } from '@/lib/i18n';
import { resolvePageLocale, buildAlternates } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog/posts';
import styles from './page.module.css';

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
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const locale = await resolvePageLocale(searchParams);
  const t = getDictionary(locale);
  const lang = locale === 'en' ? post.en : post.zh;
  const path = `/blog/${slug}`;
  return {
    title: lang.title,
    description: lang.excerpt,
    alternates: buildAlternates(path, locale),
    openGraph: {
      url: locale === 'en' ? `${path}?lang=en` : path,
      title: lang.title,
      description: lang.excerpt,
      type: 'article',
      siteName: t.brand.name,
      locale: locale === 'en' ? 'en_US' : 'zh_CN',
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
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const locale = await resolvePageLocale(searchParams);
  const t = getDictionary(locale);
  const lang = locale === 'en' ? post.en : post.zh;

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
    inLanguage: locale === 'en' ? 'en' : 'zh',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
    publisher: { '@type': 'Organization', name: t.brand.name, url: SITE_URL },
  };

  return (
    <MarketingShell>
      <JsonLd data={[articleLd, ...(faqLd ? [faqLd] : [])]} />
      <article className={`container ${styles.article}`}>
        <Link href="/blog" className={styles.back}>
          ← {t.blog.heading}
        </Link>
        <p className={`caption ${styles.date}`}>{post.date}</p>
        <h1 className={`h1 ${styles.title}`}>{lang.title}</h1>
        <div
          className={styles.body}
          // Body is trusted, first-party HTML authored in lib/blog/posts.ts.
          dangerouslySetInnerHTML={{ __html: lang.body }}
        />
        {lang.faq && lang.faq.length > 0 ? (
          <section className={styles.faq} aria-label={locale === 'en' ? 'Questions' : '问题'}>
            <h2 className="h2">{locale === 'en' ? 'Questions people ask' : '常问的问题'}</h2>
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
            <section className={styles.related} aria-label={locale === 'en' ? 'Related notes' : '相关阅读'}>
              <h2 className="h2">{locale === 'en' ? 'Related notes' : '相关阅读'}</h2>
              <ul className={styles.relatedList}>
                {related.map((p) => {
                  const rl = locale === 'en' ? p.en : p.zh;
                  const href = locale === 'en' ? `/blog/${p.slug}?lang=en` : `/blog/${p.slug}`;
                  return (
                    <li key={p.slug}>
                      <Link href={href} className={styles.relatedLink}>
                        {rl.title}
                      </Link>
                      <p className="caption">{p.date}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
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
