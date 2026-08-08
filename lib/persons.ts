import { getSql } from './db';
import { ensureSchema } from './schema';
import type { Person, Message } from './types';

type PersonRow = {
  id: string;
  user_id: string;
  name: string;
  relationship: string | null;
  memories: string | null;
  tone: string | null;
  writing_sample: string | null;
  created_at: Date;
};

type MessageRow = {
  id: string;
  person_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: Date;
};

function toPerson(r: PersonRow): Person {
  return {
    id: r.id,
    userId: r.user_id,
    name: r.name,
    relationship: r.relationship,
    memories: r.memories,
    tone: r.tone,
    writingSample: r.writing_sample,
    createdAt: r.created_at.toISOString(),
  };
}

function toMessage(r: MessageRow): Message {
  return {
    id: r.id,
    personId: r.person_id,
    role: r.role,
    content: r.content,
    createdAt: r.created_at.toISOString(),
  };
}

export async function listPersons(userId: string): Promise<Person[]> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<PersonRow[]>`
    SELECT id, user_id, name, relationship, memories, tone, writing_sample, created_at
    FROM persons
    WHERE user_id = ${userId}
    ORDER BY created_at DESC
  `;
  return rows.map(toPerson);
}

export async function getPerson(id: string, userId: string): Promise<Person | null> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<PersonRow[]>`
    SELECT id, user_id, name, relationship, memories, tone, writing_sample, created_at
    FROM persons
    WHERE id = ${id} AND user_id = ${userId}
  `;
  const row = rows[0];
  return row ? toPerson(row) : null;
}

export async function createPerson(
  input: {
    name: string;
    relationship?: string;
    memories?: string;
    tone?: string;
    writingSample?: string;
  },
  userId: string,
): Promise<Person> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<PersonRow[]>`
    INSERT INTO persons (user_id, name, relationship, memories, tone, writing_sample)
    VALUES (
      ${userId},
      ${input.name},
      ${input.relationship ?? null},
      ${input.memories ?? null},
      ${input.tone ?? null},
      ${input.writingSample ?? null}
    )
    RETURNING id, user_id, name, relationship, memories, tone, writing_sample, created_at
  `;
  const row = rows[0];
  if (!row) throw new Error('Failed to create person');
  return toPerson(row);
}

export async function updatePerson(
  id: string,
  userId: string,
  patch: Partial<{
    name: string;
    relationship: string | null;
    memories: string | null;
    tone: string | null;
    writingSample: string | null;
  }>,
): Promise<Person | null> {
  const current = await getPerson(id, userId);
  if (!current) return null;

  const name = patch.name ?? current.name;
  const relationship = patch.relationship !== undefined ? patch.relationship : current.relationship;
  const memories = patch.memories !== undefined ? patch.memories : current.memories;
  const tone = patch.tone !== undefined ? patch.tone : current.tone;
  const writingSample =
    patch.writingSample !== undefined ? patch.writingSample : current.writingSample;

  const sql = getSql();
  const rows = await sql<PersonRow[]>`
    UPDATE persons
    SET name = ${name},
        relationship = ${relationship},
        memories = ${memories},
        tone = ${tone},
        writing_sample = ${writingSample}
    WHERE id = ${id} AND user_id = ${userId}
    RETURNING id, user_id, name, relationship, memories, tone, writing_sample, created_at
  `;
  const row = rows[0];
  return row ? toPerson(row) : null;
}

export async function deletePerson(id: string, userId: string): Promise<boolean> {
  await ensureSchema();
  const sql = getSql();
  const result = await sql`DELETE FROM persons WHERE id = ${id} AND user_id = ${userId}`;
  return (result.count ?? 0) > 0;
}

export async function listMessages(personId: string, userId: string): Promise<Message[]> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<MessageRow[]>`
    SELECT m.id, m.person_id, m.role, m.content, m.created_at
    FROM messages m
    JOIN persons p ON p.id = m.person_id
    WHERE m.person_id = ${personId} AND p.user_id = ${userId}
    ORDER BY m.created_at ASC
  `;
  return rows.map(toMessage);
}

export async function addMessage(
  personId: string,
  role: 'user' | 'assistant',
  content: string,
): Promise<Message> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<MessageRow[]>`
    INSERT INTO messages (person_id, role, content)
    VALUES (${personId}, ${role}, ${content})
    RETURNING id, person_id, role, content, created_at
  `;
  const row = rows[0];
  if (!row) throw new Error('Failed to save message');
  return toMessage(row);
}
