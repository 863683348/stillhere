import { en, type Dictionary } from '@/locales/en';

/**
 * v1.0 ships English only (spec §9 — a Chinese site carries policy risk, PRD R7).
 *
 * The indirection is deliberate: components never hold literal copy, so adding
 * `/[locale]/` routing later is a change to this file, not to every component.
 */
export const SUPPORTED_LOCALES = ['en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

const dictionaries: Record<Locale, Dictionary> = { en };

export function getDictionary(locale: Locale = DEFAULT_LOCALE): Dictionary {
  return dictionaries[locale];
}
