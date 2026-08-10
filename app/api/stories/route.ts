import { NextResponse } from 'next/server';
import { createStory, listApprovedStories, isValidRelation } from '@/lib/community';

// ISR for the public GET: Vercel caches the response on the CDN for 300s.
// (Manual Cache-Control headers get stripped on serverless functions — this is
// the supported way to cache a Route Handler response. `force-dynamic` would
// override this, so it must NOT be set here.)
export const revalidate = 300;

/**
 * GET /api/stories — public list of approved stories only.
 * POST /api/stories — anonymous submission; always lands as 'pending'.
 *
 * Response is trimmed: the /stories page renders via SSR (listApprovedStories),
 * no client consumes storyText from this endpoint — dropping it shrinks the
 * payload ~90% for any direct API consumer / crawler.
 */
export async function GET() {
  // Pick fields explicitly (avoids the destructured-unused-var lint), omitting
  // storyText to keep the payload ~90% smaller for API consumers / crawlers.
  const stories = (await listApprovedStories()).map((s) => ({
    id: s.id,
    relation: s.relation,
    displayLabel: s.displayLabel,
    quote: s.quote,
    showRelation: s.showRelation,
    createdAt: s.createdAt,
  }));
  return NextResponse.json({ stories });
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  const relation = typeof body.relation === 'string' ? body.relation : '';
  const quote = typeof body.quote === 'string' ? body.quote.trim() : '';
  const storyText = typeof body.storyText === 'string' ? body.storyText.trim() : '';
  const displayLabel = typeof body.displayLabel === 'string' ? body.displayLabel.trim() : '';
  const consentPublic = body.consentPublic === true;
  const showRelation = body.showRelation === true;

  if (!isValidRelation(relation)) {
    return NextResponse.json({ error: 'relation is required' }, { status: 400 });
  }
  if (quote.length < 2 || quote.length > 200) {
    return NextResponse.json({ error: 'quote must be 2–200 characters' }, { status: 400 });
  }
  if (storyText.length > 1000) {
    return NextResponse.json({ error: 'story is too long' }, { status: 400 });
  }
  if (displayLabel.length > 60) {
    return NextResponse.json({ error: 'display label is too long' }, { status: 400 });
  }
  if (!consentPublic) {
    return NextResponse.json({ error: 'consent is required' }, { status: 400 });
  }

  await createStory({
    relation,
    displayLabel: displayLabel || undefined,
    quote,
    storyText: storyText || undefined,
    consentPublic,
    showRelation,
  });

  return NextResponse.json({ ok: true }, { status: 202 });
}
