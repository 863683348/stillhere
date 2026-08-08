import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { AppSidebar } from '@/components/AppSidebar';
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
      <AppSidebar t={t} session={session} />
      <div className={styles.content}>
        <main id="main" className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}
