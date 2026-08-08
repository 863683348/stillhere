'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import styles from './ThemeToggle.module.css';

/**
 * The label stays constant in both directions ("switch between light and dark")
 * so the accessible name never differs between server and client render.
 */
export function ThemeToggle({ label }: { label: string }) {
  const { toggle } = useTheme();

  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label={label} title={label}>
      <Sun className={styles.iconLight} size={20} strokeWidth={1.5} aria-hidden />
      <Moon className={styles.iconDark} size={20} strokeWidth={1.5} aria-hidden />
    </button>
  );
}
