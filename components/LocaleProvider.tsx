'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import {
  getDictionary,
  LOCALE_COOKIE,
  DEFAULT_LOCALE,
  isLocale,
  type Locale,
} from '@/lib/i18n';
import type { Dictionary } from '@/locales';

type LocaleContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  t: getDictionary(DEFAULT_LOCALE),
  setLocale: () => {},
});

/**
 * Wraps the whole app. Seeded with the server-resolved locale so the first paint
 * matches the cookie (no hydration mismatch), then drives client components via
 * context. The <LocaleToggle> updates both the cookie and this context.
 */
export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  // On mount, honour an explicit `?lang=zh|en` in the URL, then the `locale`
  // cookie. This makes the ?lang=zh alternates (hreflang/sitemap) and a prior
  // LocaleToggle choice apply to the client-rendered chrome on the statically
  // pre-rendered marketing pages (whose server HTML is always the default
  // locale). No hydration mismatch: the server renders initialLocale.
  useEffect(() => {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (isLocale(urlLang)) {
      document.cookie = `${LOCALE_COOKIE}=${urlLang}; path=/; max-age=31536000; samesite=lax`;
      setLocaleState(urlLang);
      return;
    }
    const cookieLang = document.cookie
      .split('; ')
      .find((c) => c.startsWith(`${LOCALE_COOKIE}=`))
      ?.split('=')[1];
    if (isLocale(cookieLang)) setLocaleState(cookieLang);
  }, []);

  const setLocale = (next: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    setLocaleState(next);
  };

  return (
    <LocaleContext.Provider value={{ locale, t: getDictionary(locale), setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useDictionary() {
  return useContext(LocaleContext);
}
