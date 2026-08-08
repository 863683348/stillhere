import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { getDictionary } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await resolveLocale());
  return {
    title: t.legal.privacy.title,
    description: t.legal.privacy.description,
    alternates: { canonical: '/privacy' },
  };
}

export default async function PrivacyPage() {
  const t = getDictionary(await resolveLocale());
  const { heading, draftNote, points } = t.legal.privacy;
  return <LegalPage heading={heading} draftNote={draftNote} points={points} />;
}
