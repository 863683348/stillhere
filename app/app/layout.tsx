import type { Metadata } from 'next';

/**
 * Everything under /app is private. Spec §4 requires it to stay out of the
 * index — this metadata plus the X-Robots-Tag header in next.config.ts.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
