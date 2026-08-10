import { NextResponse } from 'next/server';
import { createStory, listApprovedStories, isValidRelation } from '@/lib/community';

export const dynamic = 'force-dynamic';

/**
 * GET /api/stories — public list of approved stories only.
 * POST /api/stories — anonymous submission; always lands as 'pending'.
 *
 * GET is public, near-static data: let the CDN hold it for 5 minutes so repeat
 * reads never hit the origin (cuts Fast Origin Transfer in/out for this route).
 */
export async function GET() {
  const stories = await listApprovedStories();
  return NextResponse.json(
    { stories },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=300',
      },
    },
  );
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
