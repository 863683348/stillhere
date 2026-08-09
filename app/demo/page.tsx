import Link from 'next/link';
import type { Metadata } from 'next';
import { MarketingShell } from '@/components/MarketingShell';
import { Chat } from '@/components/Chat';
import { getDictionary } from '@/lib/i18n';
import { resolvePageLocale, buildAlternates } from '@/lib/seo';
import { DEMO_GREETING } from '@/lib/demo-persona';
import type { Message } from '@/lib/types';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const locale = await resolvePageLocale(searchParams);
  const t = getDictionary(locale);
  return {
    title: t.demo.meta.title,
    description: t.demo.meta.description,
    alternates: buildAlternates('/demo', locale),
    robots: { index: true, follow: true },
  };
}

export default async function DemoPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const t = getDictionary(await resolvePageLocale(searchParams));
  const initial: Message[] = [DEMO_GREETING as Message];

  return (
    <MarketingShell>
      <section className={`container ${styles.wrap}`}>
        <h1 className={`h1 ${styles.heading}`}>{t.demo.heading}</h1>
        <p className={`body-secondary ${styles.intro}`}>{t.demo.intro}</p>

        <p className={styles.disclaimer} role="note">
          {t.demo.disclaimer}
        </p>

        <div className={styles.chatShell}>
          <Chat
            personId="demo"
            initialMessages={initial}
            endpoint="/api/chat/demo"
            maxTurns={10}
            turnsNote={t.demo.turnsNote}
            turnsLeftTemplate={t.demo.turnsLeft}
            turnsExhausted={t.demo.turnsExhausted}
          />
        </div>

        <div className={styles.cta}>
          <Link href="/app/new" className="btn btn-primary">
            {t.demo.createCta}
          </Link>
          <span className={styles.ctaLabel}>{t.demo.createLabel}</span>
        </div>
      </section>
    </MarketingShell>
  );
}
