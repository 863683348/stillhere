import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { listPersons, createPerson } from '@/lib/persons';

export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const persons = await listPersons(session.user.email);
  return NextResponse.json({ persons });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  if (!name) {
    return NextResponse.json({ error: 'A name is required' }, { status: 400 });
  }

  const person = await createPerson(
    {
      name,
      relationship: typeof body?.relationship === 'string' ? body.relationship : undefined,
      memories: typeof body?.memories === 'string' ? body.memories : undefined,
      tone: typeof body?.tone === 'string' ? body.tone : undefined,
      writingSample: typeof body?.writingSample === 'string' ? body.writingSample : undefined,
    },
    session.user.email,
  );

  return NextResponse.json({ person }, { status: 201 });
}
