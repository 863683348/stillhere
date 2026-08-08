import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';
import { Lamp } from './Lamp';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  const t = getDictionary();
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
          <Link href="/privacy" className={styles.link}>
            {t.footer.links.privacy}
          </Link>
          <Link href="/terms" className={styles.link}>
            {t.footer.links.terms}
          </Link>
        </nav>

        <p className={styles.copyright}>
          © {year} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
