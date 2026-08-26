'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useDictionary } from './LocaleProvider';
import { Lamp } from './Lamp';
import { ThemeToggle } from './ThemeToggle';
import { LocaleToggle } from './LocaleToggle';
import { SignInButton } from './SignInButton';
import styles from './SiteHeader.module.css';

/**
 * Client component on purpose: the public/marketing pages are statically
 * pre-rendered (CDN-cacheable), so we must NOT read cookies()/auth() server-side
 * here — that would force every marketing page dynamic and nullify the
 * vercel.json Cache-Control headers. Locale comes from <LocaleProvider> and the
 * sign-in state from useSession() (fetched in the browser).
 */
export function SiteHeader() {
  const { t } = useDictionary();
  const { data: session } = useSession();

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
