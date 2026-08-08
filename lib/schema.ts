import { getSql } from './db';

/**
 * Idempotent schema bootstrap. Called once per process (memoised) before any
 * query, so the app works against a fresh Neon database without a separate
 * migration step. `persons` holds the memory profile (F1); `messages` holds the
 * conversation history (F2).
 *
 * Semantic recall (pgvector) is intentionally out of scope for increment 2 —
 * the F2 system prompt injects the remembered facts directly. See ENV-SETUP.md.
 *
 * Growth/community tables (F13 stories, F15 tributes, F16 geo_seen) are added
 * here too so a fresh Neon database bootstraps in one pass. All user-submitted
 * content is gated behind a pending -> approved moderation flow.
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

      // ---- F16: coarse geo census (no IP / precise location stored) ----
      await sql`
        CREATE TABLE IF NOT EXISTS geo_seen (
          country_code CHAR(2) PRIMARY KEY,
          first_seen TIMESTAMPTZ DEFAULT now()
        )
      `;

      // ---- F13: user stories (Voices) ----
      await sql`
        CREATE TABLE IF NOT EXISTS stories (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          user_id TEXT,
          relation TEXT NOT NULL,
          display_label TEXT,
          quote TEXT NOT NULL,
          story_text TEXT,
          consent_public BOOLEAN NOT NULL DEFAULT false,
          show_relation BOOLEAN NOT NULL DEFAULT true,
          status TEXT NOT NULL DEFAULT 'pending',
          created_at TIMESTAMPTZ DEFAULT now()
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS idx_stories_status ON stories(status, created_at DESC)`;

      // ---- F15: memorial wall tributes ----
      await sql`
        CREATE TABLE IF NOT EXISTS tributes (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          user_id TEXT,
          label TEXT,
          relation TEXT NOT NULL,
          message TEXT NOT NULL,
          country TEXT,
          anonymous BOOLEAN NOT NULL DEFAULT true,
          status TEXT NOT NULL DEFAULT 'pending',
          created_at TIMESTAMPTZ DEFAULT now()
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS idx_tributes_status ON tributes(status, created_at DESC)`;
    })().catch((err) => {
      ensured = null;
      throw err;
    });
  }
  return ensured;
}
