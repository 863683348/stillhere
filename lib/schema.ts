import { getSql } from './db';

/**
 * Idempotent schema bootstrap. Called once per process (memoised) before any
 * query, so the app works against a fresh Neon database without a separate
 * migration step. `persons` holds the memory profile (F1); `messages` holds the
 * conversation history (F2).
 *
 * Semantic recall (pgvector) is intentionally out of scope for increment 2 —
 * the F2 system prompt injects the remembered facts directly. See ENV-SETUP.md.
 */
let ensured: Promise<void> | null = null;

export function ensureSchema(): Promise<void> {
  if (!ensured) {
    ensured = (async () => {
      const sql = getSql();
      await sql`
        CREATE TABLE IF NOT EXISTS persons (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          user_id TEXT NOT NULL,
          name TEXT NOT NULL,
          relationship TEXT,
          memories TEXT,
          tone TEXT,
          writing_sample TEXT,
          created_at TIMESTAMPTZ DEFAULT now()
        )
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS messages (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          person_id UUID NOT NULL REFERENCES persons(id) ON DELETE CASCADE,
          role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
          content TEXT NOT NULL,
          created_at TIMESTAMPTZ DEFAULT now()
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS idx_persons_user ON persons(user_id)`;
      await sql`CREATE INDEX IF NOT EXISTS idx_messages_person ON messages(person_id, created_at)`;
    })().catch((err) => {
      ensured = null;
      throw err;
    });
  }
  return ensured;
}
