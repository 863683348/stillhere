import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Infinity as InfinityIcon } from 'lucide-react';
import { MarketingShell } from '@/components/MarketingShell';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await resolveLocale());
  return {
    title: t.pricing.meta.title,
    description: t.pricing.meta.description,
    alternates: { canonical: '/pricing' },
    openGraph: {
      url: '/pricing',
      title: `${t.pricing.meta.title} · ${t.brand.name}`,
      description: t.pricing.meta.description,
    },
  };
}

export default async function PricingPage() {
  const t = getDictionary(await resolveLocale());
  const { heading, intro, tiers, recommended, promise, footnote } = t.pricing;

  return (
    <MarketingShell>
      <section className={`container ${styles.head}`}>
        <h1 className="h1">{heading}</h1>
        <p className={`lead ${styles.intro}`}>{intro}</p>
      </section>

      <section className="container">
        <ul className={styles.tiers}>
          {tiers.map((tier) => {
            const featured = tier.key === 'remember';
            const tierClass = [
              styles.tier,
              tier.key === 'free' ? styles.tierFree : '',
              featured ? styles.tierFeatured : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <li key={tier.key} className={tierClass}>
                <div className={styles.tierHead}>
                  <h2 className="h3">{tier.name}</h2>
                  {featured ? <span className={styles.badge}>{recommended}</span> : null}
                </div>

                <p className={styles.price}>
                  <span className="numeral">{tier.price}</span>
                  {tier.cadence ? <span className={styles.cadence}>{tier.cadence}</span> : null}
                </p>

                <ul className={styles.features}>
                  {tier.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`${styles.feature} ${feature.starred ? styles.featureStarred : ''}`}
                    >
                      {feature.starred ? (
                        <InfinityIcon
                          className={`${styles.featureIcon} ${styles.featureIconStarred}`}
                          size={16}
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      ) : (
                        <Check
                          className={styles.featureIcon}
                          size={16}
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/app/new"
                  className={`btn ${featured ? 'btn-primary' : 'btn-secondary'} ${styles.tierCta}`}
                >
                  {tier.cta}
                </Link>
              </li>
            );
          })}
        </ul>

        <p className={styles.promise}>{promise}</p>
        <p className={`caption ${styles.footnote}`}>{footnote}</p>
      </section>
    </MarketingShell>
  );
}
