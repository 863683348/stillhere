import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { getDictionary } from '@/lib/i18n';
import { resolvePageLocale, buildAlternates } from '@/lib/seo';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const locale = await resolvePageLocale(searchParams);
  const t = getDictionary(locale);
  return {
    title: t.legal.terms.title,
    description: t.legal.terms.description,
    alternates: buildAlternates('/terms', locale),
  };
}

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const t = getDictionary(await resolvePageLocale(searchParams));
  const { heading, draftNote, points } = t.legal.terms;
  return <LegalPage heading={heading} draftNote={draftNote} points={points} />;
}
