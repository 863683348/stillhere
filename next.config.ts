import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV !== 'production';

/**
 * Content-Security-Policy
 *
 * Spec §8.5 requires CSP at scaffold time. This is the pragmatic baseline:
 * `'unsafe-inline'` is still needed for (a) the pre-paint theme script in
 * app/layout.tsx and (b) Next.js hydration payload scripts.
 *
 * TODO(Phase 5 security audit): switch to a nonce-based CSP via middleware
 * (`headers().get('x-nonce')`) and drop 'unsafe-inline' from script-src.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self'" + (isDev ? ' ws: http://localhost:*' : ''),
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

/**
 * Static-asset / page caching strategy (keeps Fast Origin Transfer near zero):
 *  - icon.svg: immutable for a year (it only changes with a redeploy)
 *  - opengraph-image: 1 day (also covered by the export cacheControl in the file)
 *  - sitemap/robots: 1 day (metadata routes are regenerated per deploy)
 *  - public marketing pages: 60s browser + 10min CDN s-maxage — static content
 *    that the edge should serve instead of the origin
 *  - /app/* (logged-in surface): explicitly no-store — private, per-user pages
 *    must never be cached by the CDN
 */
const assetCacheHeaders = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }];
const ogCacheHeaders = [{ key: 'Cache-Control', value: 'public, max-age=86400, immutable' }];
const pageCacheHeaders = [{ key: 'Cache-Control', value: 'public, max-age=60, s-maxage=600' }];
const privateNoStore = [
  { key: 'Cache-Control', value: 'private, no-store, max-age=0' },
  { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      // Spec §4: the whole application surface is private and must not be indexed.
      {
        source: '/app/:path*',
        headers: privateNoStore,
      },
      // ── caching layer ────────────────────────────────────────────────────
      { source: '/icon.svg', headers: assetCacheHeaders },
      { source: '/opengraph-image', headers: ogCacheHeaders },
      { source: '/opengraph-image/:size*', headers: ogCacheHeaders },
      { source: '/sitemap.xml', headers: ogCacheHeaders },
      { source: '/robots.txt', headers: ogCacheHeaders },
      // Public static marketing pages: let the CDN hold them.
      { source: '/', headers: pageCacheHeaders },
      { source: '/faq', headers: pageCacheHeaders },
      { source: '/blog', headers: pageCacheHeaders },
      { source: '/pricing', headers: pageCacheHeaders },
      { source: '/contact', headers: pageCacheHeaders },
      { source: '/privacy', headers: pageCacheHeaders },
      { source: '/terms', headers: pageCacheHeaders },
      { source: '/stories', headers: pageCacheHeaders },
      { source: '/wall', headers: pageCacheHeaders },
      { source: '/demo', headers: pageCacheHeaders },
      { source: '/login', headers: pageCacheHeaders },
      { source: '/faq/:path*', headers: pageCacheHeaders },
    ];
  },
};

export default nextConfig;
