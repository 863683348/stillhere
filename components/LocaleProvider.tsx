'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { getDictionary, LOCALE_COOKIE, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';
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
