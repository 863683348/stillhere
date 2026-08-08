import { cookies } from 'next/headers';
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from '@/lib/i18n';

/**
 * Server-only. Reads the `locale` cookie set by <LocaleToggle>; falls back to the
 * default when absent. Awaiting cookies() opts any page that calls this into
 * dynamic rendering — acceptable for this product (the app area is already
 * force-dynamic, and the marketing site gaining per-request locale is a feature).
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
