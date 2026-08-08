export const THEME_STORAGE_KEY = 'stillhere-theme';

export type ThemePreference = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

/**
 * Runs before first paint (injected inline in <head>) so the page never flashes
 * a white screen at 2am. Keep it dependency-free, synchronous and tiny.
 *
 * It resolves the stored preference — or the OS setting — to a concrete
 * `data-theme` value on <html>. Every theme-dependent style, including the
 * sun/moon icon swap in ThemeToggle, keys off that attribute, which is why
 * there is no hydration mismatch to work around.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY,
)};var s=localStorage.getItem(k);var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var e=document.documentElement;e.setAttribute('data-theme',t);e.style.colorScheme=t;}catch(_){}})();`;

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference === 'light' || preference === 'dark') return preference;
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function readStoredPreference(): ThemePreference {
  if (typeof window === 'undefined') return 'system';
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'system';
  } catch {
    // Private mode / storage disabled — fall back to the OS setting.
    return 'system';
  }
}

export function applyTheme(resolved: ResolvedTheme): void {
  const el = document.documentElement;
  el.setAttribute('data-theme', resolved);
  el.style.colorScheme = resolved;
}
