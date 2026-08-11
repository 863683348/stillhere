import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { BLOG_POSTS } from '@/lib/blog/posts';

type Entry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
};

/** /app/* is intentionally absent — private surface, never indexed (spec §4). */
const STATIC_ROUTES: Entry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/demo', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/stories', changeFrequency: 'weekly', priority: 0.5 },
  { path: '/wall', changeFrequency: 'weekly', priority: 0.5 },
];

const POST_ROUTES: Entry[] = BLOG_POSTS.map((p) => ({
  path: `/blog/${p.slug}`,
  changeFrequency: 'monthly',
  priority: 0.6,
}));

const ROUTES = [...STATIC_ROUTES, ...POST_ROUTES];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        'zh-CN': `${SITE_URL}${path}`,
        en: `${SITE_URL}${path}?lang=en`,
      },
    },
  }));
}
