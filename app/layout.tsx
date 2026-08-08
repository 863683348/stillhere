import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { getDictionary } from '@/lib/i18n';
import { THEME_INIT_SCRIPT } from '@/lib/theme';
import './globals.css';

const t = getDictionary();

export const metadata: Metadata = {
  metadataBase: new URL('https://stillherememory.com'),
  title: {
    default: t.home.meta.title,
    template: `%s · ${t.brand.name}`,
  },
  description: t.home.meta.description,
  applicationName: t.brand.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: t.brand.name,
    locale: 'en_US',
    url: '/',
    title: t.home.meta.title,
    description: t.home.meta.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: t.home.meta.title,
    description: t.home.meta.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  // Browser chrome cannot read CSS custom properties, so these two literals
  // must mirror --surface-base in styles/tokens.css by hand. Only place in the
  // app where a colour is duplicated outside the token layer.
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f5' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1917' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /*
      suppressHydrationWarning: the inline script below writes data-theme onto
      <html> before React hydrates. That is the intended behaviour, not drift.
    */
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          {t.nav.skipToContent}
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
