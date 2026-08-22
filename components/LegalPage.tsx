import { Fragment, type ReactNode } from 'react';
import { ShieldCheck } from 'lucide-react';
import { MarketingShell } from './MarketingShell';
import styles from './LegalPage.module.css';

type LegalPageProps = {
  heading: string;
  draftNote: string;
  points: readonly string[];
};

/** Renders inline <a href="...">label</a> anchors inside legal copy as real links. */
function renderRichText(text: string): ReactNode {
  const parts = text.split(/(<a\s[^>]*>.*?<\/a>)/g);
  return parts.map((part, i) => {
    if (!part.startsWith('<a')) return <Fragment key={i}>{part}</Fragment>;
    const href = part.match(/href="([^"]*)"/)?.[1] ?? '#';
    const label = part.replace(/<a\s[^>]*>/, '').replace(/<\/a>/, '');
    return (
      <a key={i} href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  });
}

/**
 * Scaffold for the F12 legal set. The binding text is drafted with counsel in a
 * later increment; what is here are the commitments that text will be built
 * around, stated plainly. Better an honest short page than plausible-looking
 * filler that nobody has actually agreed to.
 */
export function LegalPage({ heading, draftNote, points }: LegalPageProps) {
  return (
    <MarketingShell>
      <article className={`container ${styles.page}`}>
        <h1 className="h1">{heading}</h1>
        <p className={`body-secondary ${styles.draftNote}`}>{draftNote}</p>

        <ul className={styles.points}>
          {points.map((point) => (
            <li key={point} className={styles.point}>
              <ShieldCheck className={styles.pointIcon} size={16} strokeWidth={1.75} aria-hidden />
              <span>{renderRichText(point)}</span>
            </li>
          ))}
        </ul>
      </article>
    </MarketingShell>
  );
}
