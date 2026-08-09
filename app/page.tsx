import Link from 'next/link';
import { headers } from 'next/headers';
import type { Metadata } from 'next';
import { Ban, BookOpen, Download, Lock, MessageCircle, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Lamp } from '@/components/Lamp';
import { MarketingShell } from '@/components/MarketingShell';
import { getDictionary } from '@/lib/i18n';
import { resolvePageLocale, buildAlternates } from '@/lib/seo';
import { getStats, recordGeo, formatStat } from '@/lib/community';
import styles from './page.module.css';

// Fallback stats shown if the database is briefly unavailable — keeps the page
// serving rather than 500-ing every visitor when Neon is cold or unreachable.
// Mirrors the "cold-start floor" used by formatStat (>= floor shows real value).
const FALLBACK_STATS = { people: 0, words: 0, countries: 0 };

const VALUE_ICONS: Record<string, LucideIcon> = {
  voice: MessageCircle,
  memory: BookOpen,
  export: Download,
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const locale = await resolvePageLocale(searchParams);
  const t = getDictionary(locale);
  return {
    title: t.home.meta.title,
    description: t.home.meta.description,
    alternates: buildAlternates('/', locale),
    robots: { index: true, follow: true },
  };
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const t = getDictionary(await resolvePageLocale(searchParams));
  const { hero, trust, value, honesty, closing, socialProof } = t.home;

  // DB calls are wrapped in try/catch so a Neon cold-start or transient
  // connection failure doesn't 500 the whole landing page. The fallback
  // floor (50/1000/10) still makes the social-proof band look populated.
  let stats = FALLBACK_STATS;
  try {
    stats = await getStats();
  } catch (err) {
    console.error('[home] getStats failed; serving fallback stats:', err);
  }

  let country: string | null = null;
  try {
    const incoming = await headers();
    country = incoming.get('cf-ipcountry') || incoming.get('x-vercel-ip-country') || null;
    if (country) await recordGeo(country);
  } catch (err) {
    console.error('[home] recordGeo failed; continuing without geo:', err);
    country = null;
  }

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

        <div className={styles.heroActions}>
          <Link href="/app/new" className={`btn btn-primary ${styles.heroCta}`}>
            {hero.cta}
          </Link>
          <Link href="/demo" className={`btn ${styles.heroCtaSecondary}`}>
            {hero.secondaryCta}
          </Link>
        </div>

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

      {/* ---------- Social proof (F16) ---------- */}
      <section className={`container ${styles.socialProof}`}>
        <h2 className="h2">{socialProof.heading}</h2>
        <div className={styles.socialGrid}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{formatStat(stats.people, 50)}</span>
            <span className={styles.statLabel}>{socialProof.people}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>{formatStat(stats.words, 1000)}</span>
            <span className={styles.statLabel}>{socialProof.words}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>{formatStat(stats.countries, 10)}</span>
            <span className={styles.statLabel}>{socialProof.countries}</span>
          </div>
        </div>
        <p className={`caption ${styles.socialNote}`}>{socialProof.note}</p>
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
