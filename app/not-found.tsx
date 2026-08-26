import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Lamp } from '@/components/Lamp';
import { MarketingShell } from '@/components/MarketingShell';
import { getDictionary, DEFAULT_LOCALE } from '@/lib/i18n';

// Static-safe on purpose: a not-found.tsx that reads cookies()/headers() opts the
// WHOLE app into dynamic rendering (the 404 boundary is part of every route's
// tree), which nullifies CDN caching on all marketing pages. The 404 page is a
// build-time static document in the default locale — nothing to localize at
// request time.
export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(DEFAULT_LOCALE);
  return {
    title: t.notFound.title,
    robots: { index: false, follow: true },
  };
}

export default function NotFound() {
  const t = getDictionary(DEFAULT_LOCALE);
  const { heading, body, cta } = t.notFound;

  return (
    <MarketingShell>
      <section className="container stack-center section">
        <Lamp size={56} variant="breathe" />
        <h1 className="h1" style={{ marginTop: 'var(--space-6)' }}>
          {heading}
        </h1>
        <p className="body-secondary measure" style={{ margin: 'var(--space-4) 0 var(--space-6)' }}>
          {body}
        </p>
        <Link href="/" className="btn btn-secondary">
          <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
          {cta}
        </Link>
      </section>
    </MarketingShell>
  );
}
