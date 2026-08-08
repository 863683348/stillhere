import { zh, en, type Dictionary } from '@/locales';

/**
 * i18n without /[locale]/ routing (spec §9).
 *
 * - getDictionary(locale) is pure + synchronous → safe in both server and client
 *   components. Client components must never import the server-only resolveLocale
 *   (that one pulls in next/headers and would break the client bundle).
 * - The active locale is carried in the `locale` cookie, set by <LocaleToggle>.
 * - DEFAULT_LOCALE is 'zh' (the product's primary audience).
 */
export const SUPPORTED_LOCALES = ['zh', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'zh';
export const LOCALE_COOKIE = 'locale';

const dictionaries: Record<Locale, Dictionary> = { zh, en };

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

/** Pure + synchronous. Falls back to DEFAULT_LOCALE for an unknown locale. */
export function getDictionary(locale: Locale = DEFAULT_LOCALE): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
