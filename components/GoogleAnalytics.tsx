import Script from 'next/script';

/**
 * Google Analytics 4 (gtag.js).
 *
 * Loaded ONLY on production (NODE_ENV=production AND not a Vercel preview) so
 * local dev and PR previews never pollute the real analytics property.
 *
 * The measurement ID comes from NEXT_PUBLIC_GA4_ID. A literal fallback is kept
 * so the site tracks even before the env var is set in every environment; the
 * env value always wins when present.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID ?? 'G-1Y2TH0QBHT';

export function GoogleAnalytics() {
  const isProduction =
    process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV !== 'preview';
  if (!isProduction) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
