import { NextResponse } from 'next/server';
import { adminKeyMatches } from '@/lib/admin';
import {
  listPendingStories,
  listPendingTributes,
  setStoryStatus,
  setTributeStatus,
  type ModStatus,
} from '@/lib/community';

export const dynamic = 'force-dynamic';

/**
 * Moderation endpoint (F13/F15). Protected by x-admin-key.
 * GET  → list everything pending review
 * POST → { kind: 'story'|'tribute', id, action: 'approve'|'reject' }
 */
export async function GET(req: Request) {
  if (!adminKeyMatches(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const [stories, tributes] = await Promise.all([listPendingStories(), listPendingTributes()]);
  return NextResponse.json({ stories, tributes });
}

export async function POST(req: Request) {
  if (!adminKeyMatches(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  const kind = body?.kind;
  const id = typeof body?.id === 'string' ? body.id : '';
  const action = body?.action;
  if (kind !== 'story' && kind !== 'tribute') {
    return NextResponse.json({ error: 'kind must be story or tribute' }, { status: 400 });
  }
  if (action !== 'approve' && action !== 'reject') {
    return NextResponse.json({ error: 'action must be approve or reject' }, { status: 400 });
  }
  if (!id) {
    return NextResponse.json({ error: 'id is required' }, { status: 400 });
  }

  const status: ModStatus = action === 'approve' ? 'approved' : 'rejected';
  const ok =
    kind === 'story' ? await setStoryStatus(id, status) : await setTributeStatus(id, status);

  return NextResponse.json({ ok });
}
