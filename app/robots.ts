import type { MetadataRoute } from 'next';
import { AI_TRAINING_CRAWLERS, SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/app/'],
      },
      // search=yes, ai-train=no — stated in machine-readable form.
      ...AI_TRAINING_CRAWLERS.map((userAgent) => ({ userAgent, disallow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
