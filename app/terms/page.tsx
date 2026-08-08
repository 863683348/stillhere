import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await resolveLocale());
  return {
    title: t.legal.terms.title,
    description: t.legal.terms.description,
    alternates: { canonical: '/terms' },
  };
}

export default async function TermsPage() {
  const t = getDictionary(await resolveLocale());
  const { heading, draftNote, points } = t.legal.terms;
  return <LegalPage heading={heading} draftNote={draftNote} points={points} />;
}
