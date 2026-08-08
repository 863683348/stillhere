import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { getDictionary } from '@/lib/i18n';

const t = getDictionary();

export const metadata: Metadata = {
  title: t.legal.privacy.title,
  description: t.legal.privacy.description,
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  const { heading, draftNote, points } = t.legal.privacy;
  return <LegalPage heading={heading} draftNote={draftNote} points={points} />;
}
