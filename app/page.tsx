import Link from 'next/link';
import { Ban, BookOpen, Download, Lock, MessageCircle, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Lamp } from '@/components/Lamp';
import { MarketingShell } from '@/components/MarketingShell';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import styles from './page.module.css';

const VALUE_ICONS: Record<string, LucideIcon> = {
  voice: MessageCircle,
  memory: BookOpen,
  export: Download,
};

export default async function HomePage() {
  const t = getDictionary(await resolveLocale());
  const { hero, trust, value, honesty, closing } = t.home;

  const trustItems = [
    { key: 'privacy', icon: Lock, ...trust.privacy },
    { key: 'noTraining', icon: Ban, ...trust.noTraining },
    { key: 'neverDeleted', icon: ShieldCheck, ...trust.neverDeleted },
  ];

  return (
    <MarketingShell>
      {/* ---------- First screen: one sentence, one light ---------- */}
      <section className={`container ${styles.hero}`}>
        <Lamp
          size="clamp(88px, 20vw, 132px)"
          variant="ignite"
          label={hero.lampAlt}
          className={styles.heroLamp}
        />

        <h1 className={`h1 ${styles.heroTitle}`}>{hero.title}</h1>
        <p className={`lead ${styles.heroSubtitle}`}>{hero.subtitle}</p>

        <Link href="/app/new" className={`btn btn-primary ${styles.heroCta}`}>
          {hero.cta}
        </Link>

        <ul className={styles.trust} aria-label={trust.heading}>
          {trustItems.map(({ key, icon: Icon, label, detail }) => (
            <li key={key} className={styles.trustItem} title={detail}>
              <Icon className={styles.trustIcon} size={16} strokeWidth={1.75} aria-hidden />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- How it works ---------- */}
      <section className={`container ${styles.valueSection}`}>
        <h2 className="h2">{value.heading}</h2>
        <p className={`body-secondary ${styles.valueIntro}`}>{value.intro}</p>

        <div className={styles.valueList}>
          {value.items.map((item) => {
            const Icon = VALUE_ICONS[item.key] ?? MessageCircle;
            return (
              <article key={item.key} className={styles.valueRow}>
                <Icon className={styles.valueIcon} size={22} strokeWidth={1.5} aria-hidden />
                <h3 className={`h3 ${styles.valueTitle}`}>{item.title}</h3>
                <p className={`body-secondary ${styles.valueBody}`}>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ---------- The line we do not hide ---------- */}
      <section className={`container ${styles.honesty}`}>
        <p className={styles.honestyQuote}>{honesty.quote}</p>
        <p className={`caption ${styles.honestyNote}`}>{honesty.note}</p>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="container">
        <div className={`stack-center ${styles.closing}`}>
          <h2 className="h2">{closing.title}</h2>
          <p className={`body-secondary ${styles.closingBody}`}>{closing.body}</p>
          <Link href="/app/new" className="btn btn-primary">
            {closing.cta}
          </Link>
        </div>
      </section>
    </MarketingShell>
  );
}
