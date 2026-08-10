import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * /api/chat/demo is deliberately disabled (2026-08-10).
 *
 * The /demo page is now a fully static scripted preview (see app/demo/page.tsx)
 * and no longer calls this endpoint. Leaving the route live would let anyone
 * curl it directly to burn DeepSeek tokens + Fast Origin Transfer, so it
 * answers 410 Gone. If a live no-signup demo ever returns, re-enable the old
 * handler (see git history) — but cap it hard (IP + daily quota + max_tokens).
 */
export async function POST() {
  return NextResponse.json(
    { error: 'The live demo chat has been retired; the preview is static now.' },
    { status: 410 },
  );
}
