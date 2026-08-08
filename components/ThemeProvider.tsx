'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  applyTheme,
  readStoredPreference,
  resolveTheme,
  THEME_STORAGE_KEY,
  type ResolvedTheme,
  type ThemePreference,
} from '@/lib/theme';

type ThemeContextValue = {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  setPreference: (next: ThemePreference) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Theme state lives here, but the *first paint* is handled by the inline script
 * in app/layout.tsx. This provider only takes over once React is running, which
 * is why nothing here renders theme-dependent markup — no hydration mismatch,
 * no "mounted" flicker guard needed. Visual swaps are done in CSS off the
 * `[data-theme]` attribute.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>('system');
  const [resolved, setResolved] = useState<ResolvedTheme>('light');

  // Adopt whatever the pre-paint script already decided.
  useEffect(() => {
    const stored = readStoredPreference();
    setPreferenceState(stored);
    setResolved(resolveTheme(stored));
  }, []);

  // Follow the OS while the user has not pinned a theme.
  useEffect(() => {
    if (preference !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => {
      const next: ResolvedTheme = media.matches ? 'dark' : 'light';
      setResolved(next);
      applyTheme(next);
    };

    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, [preference]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);

    try {
      if (next === 'system') window.localStorage.removeItem(THEME_STORAGE_KEY);
      else window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode). The choice still applies
      // for this session; it just will not be remembered.
    }

    const nextResolved = resolveTheme(next);
    setResolved(nextResolved);
    applyTheme(nextResolved);
  }, []);

  const toggle = useCallback(() => {
    // Toggling always pins an explicit choice — an ambiguous third state in a
    // two-state control is worse than losing "follow the system".
    const current = document.documentElement.getAttribute('data-theme');
    setPreference(current === 'dark' ? 'light' : 'dark');
  }, [setPreference]);

  const value = useMemo<ThemeContextValue>(
    () => ({ preference, resolved, setPreference, toggle }),
    [preference, resolved, setPreference, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
