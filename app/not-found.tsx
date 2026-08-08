import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Lamp } from '@/components/Lamp';
import { MarketingShell } from '@/components/MarketingShell';
import { getDictionary } from '@/lib/i18n';

const t = getDictionary();

export const metadata: Metadata = {
  title: t.notFound.title,
  robots: { index: false, follow: true },
};

export default function NotFound() {
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
