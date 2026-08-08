import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import { SettingsForm } from './SettingsForm';
import styles from './page.module.css';

export const metadata = {
  title: '个人设置',
};

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const session = await auth();
  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/app/settings');
  }

  const t = getDictionary(await resolveLocale());

  return (
    <div className={styles.wrap}>
      <h1 className="h2">{t.app.settings.heading}</h1>
      <SettingsForm user={session.user} t={t} />
    </div>
  );
}
