import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SignOutButton } from '@/components/SignOutButton';
import { LocaleToggle } from '@/components/LocaleToggle';
import { Lamp } from '@/components/Lamp';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import styles from './layout.module.css';

/**
 * /app shell. The middleware already bounces anonymous visitors to sign-in, but
 * we re-check here so a directly-rendered route can never leak without a session.
 */
export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/app');
  }
  const t = getDictionary(await resolveLocale());

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link href="/app" className={styles.brand}>
          <Lamp size={22} variant="still" />
          <span>{t.brand.name}</span>
        </Link>
        <div className={styles.actions}>
          <LocaleToggle />
          <ThemeToggle label={t.nav.toggleTheme} />
          <SignOutButton label={t.app.signOut} />
        </div>
      </header>
      <main id="main" className={styles.main}>
        {children}
      </main>
    </div>
  );
}
