import type { Metadata } from 'next';
import { resolveLocale } from '@/lib/locale-server';
import type { Locale } from '@/lib/i18n';

/**
 * Locale resolution for public/marketing pages (P0-2 of the SEO pass).
 *
 * Priority: an explicit `?lang=en` query wins (this is the crawlable English
 * URL we expose to search engines), then the `locale` cookie, then default.
 *
 * Without this, Googlebot — which never carries our cookie — would only ever see
 * the default (zh) HTML, leaving the English variant effectively unindexed.
 */
export async function resolvePageLocale(
  searchParams?: Promise<{ lang?: string }>,
): Promise<Locale> {
  if (searchParams) {
    const sp = await searchParams;
    if (sp?.lang === 'en') return 'en';
  }
  return resolveLocale();
}

/**
 * Canonical + hreflang alternate block for a public route.
 *
 * - The canonical points at the page's OWN url (zh → `/faq`, en → `/faq?lang=en`),
 *   so each language variant is its own indexable document.
 * - `languages` cross-links zh-CN / en / x-default so Google serves the right one
 *   by region and never shows the wrong-language result.
 */
export function buildAlternates(
  path: string,
  locale: Locale,
): Metadata['alternates'] {
  const en = `${path}?lang=en`;
  return {
    canonical: locale === 'en' ? en : path,
    languages: {
      'zh-CN': path,
      en,
      'x-default': path,
    },
  };
}
