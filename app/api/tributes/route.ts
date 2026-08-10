import { NextResponse } from 'next/server';
import { createTribute, listApprovedTributes, isValidRelation } from '@/lib/community';

export const dynamic = 'force-dynamic';

/**
 * GET /api/tributes — public list of approved tributes only.
 * POST /api/tributes — anonymous submission; always lands as 'pending'.
 *
 * GET is public, near-static data: let the CDN hold it for 5 minutes so repeat
 * reads never hit the origin (cuts Fast Origin Transfer in/out for this route).
 */
export async function GET() {
  const tributes = await listApprovedTributes();
  return NextResponse.json(
    { tributes },
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
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const label = typeof body.label === 'string' ? body.label.trim() : '';
  const country = typeof body.country === 'string' ? body.country.trim().toUpperCase() : '';
  const anonymous = body.anonymous !== false; // default true

  if (!isValidRelation(relation)) {
    return NextResponse.json({ error: 'relation is required' }, { status: 400 });
  }
  if (message.length < 2 || message.length > 280) {
    return NextResponse.json({ error: 'message must be 2–280 characters' }, { status: 400 });
  }
  if (label.length > 60) {
    return NextResponse.json({ error: 'label is too long' }, { status: 400 });
  }
  if (country && !/^[A-Z]{2}$/.test(country)) {
    return NextResponse.json({ error: 'invalid country code' }, { status: 400 });
  }

  await createTribute({
    label: label || undefined,
    relation,
    message,
    country: country || undefined,
    anonymous,
  });

  return NextResponse.json({ ok: true }, { status: 202 });
}
