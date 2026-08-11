import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LocaleProvider } from '@/components/LocaleProvider';
import { JsonLd } from '@/components/JsonLd';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { getDictionary, type Locale } from '@/lib/i18n';
import { resolveLocale } from '@/lib/locale-server';
import { SITE_URL } from '@/lib/site';
import { THEME_INIT_SCRIPT } from '@/lib/theme';
import './globals.css';

/** Global, language-independent structured data (P0-1). */
const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'StillHere',
  url: SITE_URL,
  description:
    'A private space to talk with an AI reflection shaped by your own memories of someone you miss.',
  sameAs: [],
};

const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'StillHere',
  url: SITE_URL,
};

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await resolveLocale());
  return {
    metadataBase: new URL('https://stillherememory.com'),
    title: {
      default: t.home.meta.title,
      template: `%s · ${t.brand.name}`,
    },
    description: t.home.meta.description,
    keywords: t.home.meta.keywords,
    applicationName: t.brand.name,
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      siteName: t.brand.name,
      locale: 'zh_CN',
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
    // GSC / Bing verification. Leave the env vars unset until the user pastes the
    // codes from Search Console / Bing Webmaster; Next omits the meta tag when
    // undefined, so there is no empty/placeholder tag in the meantime.
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      other: process.env.BING_SITE_VERIFICATION
        ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
        : undefined,
    },
  };
}

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale: Locale = await resolveLocale();
  const t = getDictionary(locale);

  return (
    /*
      suppressHydrationWarning: the inline script below writes data-theme onto
      <html> before React hydrates. That is the intended behaviour, not drift.
    */
    <html lang={locale} suppressHydrationWarning>
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
        <JsonLd data={ORG_JSON_LD} />
        <JsonLd data={WEBSITE_JSON_LD} />
        <a className="skip-link" href="#main">
          {t.nav.skipToContent}
        </a>
        <LocaleProvider initialLocale={locale}>
          <ThemeProvider>{children}</ThemeProvider>
        </LocaleProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
