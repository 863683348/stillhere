import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { getDictionary } from '@/lib/i18n';

const t = getDictionary();

export const metadata: Metadata = {
  title: t.legal.terms.title,
  description: t.legal.terms.description,
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  const { heading, draftNote, points } = t.legal.terms;
  return <LegalPage heading={heading} draftNote={draftNote} points={points} />;
}
