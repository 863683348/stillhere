import { cookies } from 'next/headers';
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from '@/lib/i18n';

/**
 * Server-only. Reads the `locale` cookie set by <LocaleToggle>; falls back to the
 * default when absent. Awaiting cookies() opts any page that calls this into
 * dynamic rendering — intended for the /app* area which is already
 * force-dynamic (per-user content, needs the cookie for i18n).
 */
export async function resolveLocale(): Promise<Locale> {
  try {
    const cookieLocale = (await cookies()).get(LOCALE_COOKIE)?.value;
    if (isLocale(cookieLocale)) return cookieLocale;
  } catch {
    // Not within a request scope (e.g. a static build pass) — fall through.
  }
  return DEFAULT_LOCALE;
}

/**
 * Static-safe locale resolver for public marketing pages (homepage, blog, faq,
 * pricing, …). Deliberately does NOT read cookies()/headers() so these pages
 * stay statically pre-rendered and CDN-cacheable — reading request headers in
 * the root layout would force every marketing page to render dynamically on
 * each request (origin FOT).
 *
 * Language switching on public pages is handled client-side by
 * <LocaleProvider> (seeded with the default locale) and via ?lang=zh URLs for
 * the zh alternates (see lib/seo.ts buildAlternates). The small trade-off: a
 * visitor who set the zh cookie and lands directly on "/" sees the default
 * (en) for the very first render before hydration applies their preference —
 * crawlable HTML stays deterministic and static, which is what we want.
 */
export function resolveStaticLocale(): Locale {
  return DEFAULT_LOCALE;
}
