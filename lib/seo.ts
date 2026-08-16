import type { Metadata } from 'next';
import { resolveLocale } from '@/lib/locale-server';
import type { Locale } from '@/lib/i18n';

/**
 * Locale resolution for public/marketing pages (P0-2 of the SEO pass).
 *
 * Priority: an explicit `?lang=zh` query wins (this is the crawlable Chinese
 * URL we expose to search engines), then the `locale` cookie, then default.
 *
 * The default locale is now English (DEFAULT_LOCALE = 'en'), so Googlebot —
 * which never carries our cookie — sees the English HTML by default, and the
 * Chinese variant is served from `?lang=zh` as its own indexable document.
 */
export async function resolvePageLocale(
  searchParams?: Promise<{ lang?: string }>,
): Promise<Locale> {
  if (searchParams) {
    const sp = await searchParams;
    if (sp?.lang === 'zh') return 'zh';
    if (sp?.lang === 'en') return 'en';
  }
  return resolveLocale();
}

/**
 * Canonical + hreflang alternate block for a public route.
 *
 * - The canonical points at the page's OWN url (en → `/faq`, zh → `/faq?lang=zh`),
 *   so each language variant is its own indexable document.
 * - `languages` cross-links zh-CN / en / x-default; x-default now points at the
 *   bare URL (English), matching the English-first default.
 */
export function buildAlternates(
  path: string,
  locale: Locale,
): Metadata['alternates'] {
  const zh = `${path}?lang=zh`;
  return {
    canonical: locale === 'zh' ? zh : path,
    languages: {
      'zh-CN': zh,
      en: path,
      'x-default': path,
    },
  };
}
