import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { getDictionary, DEFAULT_LOCALE } from '@/lib/i18n';
import { buildAlternates } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(DEFAULT_LOCALE);
  return {
    title: t.legal.terms.title,
    description: t.legal.terms.description,
    alternates: buildAlternates('/terms', DEFAULT_LOCALE),
  };
}

export default function TermsPage() {
  const t = getDictionary(DEFAULT_LOCALE);
  const { heading, draftNote, points } = t.legal.terms;
  return <LegalPage heading={heading} draftNote={draftNote} points={points} />;
}
