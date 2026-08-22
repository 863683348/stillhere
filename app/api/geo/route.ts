import { NextResponse } from 'next/server';
import { recordGeoCached } from '@/lib/community';

/**
 * POST /api/geo — anonymous geo beacon.
 *
 * The landing page is statically pre-rendered (no headers() on the server), so
 * we can't read the visitor's country during SSR. The page fires this beacon
 * from the client; the country comes from Vercel's request header here, on the
 * edge function, and is recorded once per country per UTC day (recordGeoCached
 * already dedupes). Keeping this off the page lets / stay a static asset and the
 * CDN cache headers in next.config.ts apply — cutting origin re-renders.
 *
 * GET is not exposed: this is a write-only beacon.
 */
export async function POST(req: Request) {
  const country =
    req.headers.get('x-vercel-ip-country') ||
    req.headers.get('cf-ipcountry') ||
    null;

  // Fire-and-forget style: never fail the client beacon on a DB hiccup.
  try {
    await recordGeoCached(country);
  } catch (err) {
    console.error('[geo] recordGeoCached failed:', err);
  }

  return NextResponse.json({ ok: true });
}
