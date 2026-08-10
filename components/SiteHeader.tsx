import Link from 'next/link';
import { auth } from '@/auth';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import { Lamp } from './Lamp';
import { ThemeToggle } from './ThemeToggle';
import { LocaleToggle } from './LocaleToggle';
import { SignInButton } from './SignInButton';
import styles from './SiteHeader.module.css';

export async function SiteHeader() {
  const t = getDictionary(await resolveLocale());
  const session = await auth();

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
          <Link href="/blog" className={styles.navLink}>
            {t.nav.blog}
          </Link>
          {session ? (
            <Link href="/app" className={styles.navLink}>
              {t.nav.enter}
            </Link>
          ) : (
            <SignInButton label={t.nav.signInGoogle} />
          )}
          <LocaleToggle />
          <ThemeToggle label={t.nav.toggleTheme} />
        </nav>
      </div>
    </header>
  );
}
