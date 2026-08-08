import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Hammer } from 'lucide-react';
import { Lamp } from '@/components/Lamp';
import { getDictionary } from '@/lib/i18n';
import styles from './page.module.css';

const t = getDictionary();

export const metadata: Metadata = {
  title: t.create.meta.title,
  description: t.create.meta.description,
  robots: { index: false, follow: false },
};

/**
 * Scaffold for F1 (persona creation, ≤3 clicks / ≤60s). The real three-field
 * form lands in increment 2; this keeps the route alive and on-brand rather
 * than serving a bare 404 to anyone who follows the hero call to action.
 */
export default function CreatePersonaPage() {
  const { heading, body, buildNote, back } = t.create;

  return (
    <div className={`container ${styles.screen}`}>
      <Lamp size={72} variant="breathe" className={styles.lamp} />

      <h1 className="h1">{heading}</h1>
      <p className={`body-secondary ${styles.body}`}>{body}</p>

      <p className={`caption ${styles.note}`}>
        <Hammer className={styles.noteIcon} size={16} strokeWidth={1.75} aria-hidden />
        <span>{buildNote}</span>
      </p>

      <Link href="/" className={styles.back}>
        <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
        <span>{back}</span>
      </Link>
    </div>
  );
}
