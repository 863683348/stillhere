'use client';

import Link from 'next/link';
import { useDictionary } from './LocaleProvider';
import { Lamp } from './Lamp';
import styles from './SiteFooter.module.css';

/**
 * Client component: same reason as SiteHeader — keeps cookies() out of the
 * statically pre-rendered marketing pages so vercel.json caching applies.
 * Locale is read from <LocaleProvider> (client-side switching).
 */
export function SiteFooter() {
  const { t } = useDictionary();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.identity}>
          <Lamp size={18} variant="still" />
          <span className={styles.tagline}>{t.footer.tagline}</span>
        </div>

        <nav className={styles.links}>
          <Link href="/pricing" className={styles.link}>
            {t.footer.links.pricing}
          </Link>
          <Link href="/faq" className={styles.link}>
            {t.footer.links.faq}
          </Link>
          <Link href="/privacy" className={styles.link}>
            {t.footer.links.privacy}
          </Link>
          <Link href="/terms" className={styles.link}>
            {t.footer.links.terms}
          </Link>
          <Link href="/contact" className={styles.link}>
            {t.footer.links.contact}
          </Link>
        </nav>

        <p className={styles.copyright}>
          © {year} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
