import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { ModerationClient } from '@/components/ModerationClient';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Moderation',
    robots: { index: false, follow: false },
  };
}

export default function AdminModerationPage() {
  return (
    <MarketingShell>
      <section className={`container ${styles.wrap}`}>
        <h1 className={styles.heading}>Moderation</h1>
        <p className={styles.intro}>
          Review submitted stories and tributes before they appear publicly.
        </p>
        <ModerationClient />
      </section>
    </MarketingShell>
  );
}
