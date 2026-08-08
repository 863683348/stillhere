import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getPerson, updatePerson, deletePerson, listMessages } from '@/lib/persons';

export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, ctx: Ctx) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await ctx.params;
  const person = await getPerson(id, session.user.email);
  if (!person) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  const messages = await listMessages(id, session.user.email);
  return NextResponse.json({ person, messages });
}

export async function PATCH(req: Request, ctx: Ctx) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await ctx.params;
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;

  const patch: Parameters<typeof updatePerson>[2] = {};
  if (typeof body?.name === 'string') patch.name = body.name.trim();
  if ('relationship' in (body ?? {})) {
    patch.relationship = typeof body?.relationship === 'string' ? body.relationship : null;
  }
  if ('memories' in (body ?? {})) {
    patch.memories = typeof body?.memories === 'string' ? body.memories : null;
  }
  if ('tone' in (body ?? {})) {
    patch.tone = typeof body?.tone === 'string' ? body.tone : null;
  }
  if ('writingSample' in (body ?? {})) {
    patch.writingSample = typeof body?.writingSample === 'string' ? body.writingSample : null;
  }

  const person = await updatePerson(id, session.user.email, patch);
  if (!person) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ person });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await ctx.params;
  const ok = await deletePerson(id, session.user.email);
  if (!ok) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
