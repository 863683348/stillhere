import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';
import { Lamp } from './Lamp';
import { ThemeToggle } from './ThemeToggle';
import styles from './SiteHeader.module.css';

/**
 * Deliberately thin. The home page is allowed exactly one call to action
 * (uiux §6.2), so "Pricing" here is a quiet text link, not a second button.
 */
export function SiteHeader() {
  const t = getDictionary();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={t.brand.wordmarkAlt}>
          <Lamp size={22} variant="still" />
          <span>{t.brand.name}</span>
        </Link>

        <nav className={styles.actions}>
          <Link href="/pricing" className={styles.navLink}>
            {t.nav.pricing}
          </Link>
          <ThemeToggle label={t.nav.toggleTheme} />
        </nav>
      </div>
    </header>
  );
}
