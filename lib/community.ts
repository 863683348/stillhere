import { getSql } from './db';
import { ensureSchema } from './schema';

/**
 * Growth & community layer (F13 stories, F15 tributes, F16 stats).
 *
 * Privacy rules baked in:
 * - All user-submitted content is created with status 'pending' and only ever
 *   shown publicly after an explicit approve() call.
 * - We store no IP and no precise location. The only geo signal is a coarse
 *   ISO-3166-1 alpha-2 country code (from the edge `cf-ipcountry` header),
 *   and even that is reduced to a distinct-count for the stats band.
 */

export type ModStatus = 'pending' | 'approved' | 'rejected';

export type Story = {
  id: string;
  relation: string;
  displayLabel: string | null;
  quote: string;
  storyText: string | null;
  showRelation: boolean;
  createdAt: string;
};

export type Tribute = {
  id: string;
  label: string | null;
  relation: string;
  message: string;
  country: string | null;
  anonymous: boolean;
  createdAt: string;
};

export type SiteStats = {
  /** distinct people remembered (distinct persons.user_id) */
  people: number;
  /** distinct conversations' user turns (messages where role='user') */
  words: number;
  /** distinct countries seen (geo_seen) */
  countries: number;
};

const RELATIONS = [
  'parent',
  'grandparent',
  'partner',
  'child',
  'sibling',
  'friend',
  'pet',
  'other',
] as const;

export function isValidRelation(value: unknown): value is string {
  return typeof value === 'string' && (RELATIONS as readonly string[]).includes(value);
}

// ---------------------------------------------------------------------------
// Stories (F13)
// ---------------------------------------------------------------------------

export async function createStory(input: {
  relation: string;
  displayLabel?: string;
  quote: string;
  storyText?: string;
  consentPublic: boolean;
  showRelation: boolean;
}): Promise<void> {
  await ensureSchema();
  const sql = getSql();
  await sql`
    INSERT INTO stories (relation, display_label, quote, story_text, consent_public, show_relation, status)
    VALUES (
      ${input.relation},
      ${input.displayLabel ?? null},
      ${input.quote},
      ${input.storyText ?? null},
      ${input.consentPublic},
      ${input.showRelation},
      'pending'
    )
  `;
}

export async function listApprovedStories(limit = 30): Promise<Story[]> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<StoryRow[]>`
    SELECT id, relation, display_label, quote, story_text, show_relation, created_at
    FROM stories
    WHERE status = 'approved'
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map(toStory);
}

export async function listPendingStories(): Promise<Story[]> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<StoryRow[]>`
    SELECT id, relation, display_label, quote, story_text, show_relation, created_at
    FROM stories
    WHERE status = 'pending'
    ORDER BY created_at DESC
  `;
  return rows.map(toStory);
}

export async function setStoryStatus(id: string, status: ModStatus): Promise<boolean> {
  await ensureSchema();
  const sql = getSql();
  const result = await sql`
    UPDATE stories SET status = ${status} WHERE id = ${id} AND status <> ${status}
  `;
  return (result.count ?? 0) > 0;
}

// ---------------------------------------------------------------------------
// Tributes (F15)
// ---------------------------------------------------------------------------

export async function createTribute(input: {
  label?: string;
  relation: string;
  message: string;
  country?: string;
  anonymous: boolean;
}): Promise<void> {
  await ensureSchema();
  const sql = getSql();
  await sql`
    INSERT INTO tributes (label, relation, message, country, anonymous, status)
    VALUES (
      ${input.label ?? null},
      ${input.relation},
      ${input.message},
      ${input.country ?? null},
      ${input.anonymous},
      'pending'
    )
  `;
}

export async function listApprovedTributes(limit = 60): Promise<Tribute[]> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<TributeRow[]>`
    SELECT id, label, relation, message, country, anonymous, created_at
    FROM tributes
    WHERE status = 'approved'
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map(toTribute);
}

export async function listPendingTributes(): Promise<Tribute[]> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<TributeRow[]>`
    SELECT id, label, relation, message, country, anonymous, created_at
    FROM tributes
    WHERE status = 'pending'
    ORDER BY created_at DESC
  `;
  return rows.map(toTribute);
}

export async function setTributeStatus(id: string, status: ModStatus): Promise<boolean> {
  await ensureSchema();
  const sql = getSql();
  const result = await sql`
    UPDATE tributes SET status = ${status} WHERE id = ${id} AND status <> ${status}
  `;
  return (result.count ?? 0) > 0;
}

// ---------------------------------------------------------------------------
// Stats (F16)
// ---------------------------------------------------------------------------

export async function getStats(): Promise<SiteStats> {
  await ensureSchema();
  const sql = getSql();
  const peopleRow = await sql<{ c: number }[]>`SELECT COUNT(DISTINCT user_id)::int AS c FROM persons`;
  const wordsRow = await sql<{ c: number }[]>`SELECT COUNT(*)::int AS c FROM messages WHERE role = 'user'`;
  const countriesRow = await sql<{ c: number }[]>`SELECT COUNT(*)::int AS c FROM geo_seen`;
  return {
    people: peopleRow[0]?.c ?? 0,
    words: wordsRow[0]?.c ?? 0,
    countries: countriesRow[0]?.c ?? 0,
  };
}

export async function recordGeo(countryCode?: string | null): Promise<void> {
  if (!countryCode || countryCode.length !== 2) return;
  await ensureSchema();
  const sql = getSql();
  // Upsert: the same country appearing again is a no-op.
  await sql`
    INSERT INTO geo_seen (country_code) VALUES (${countryCode.toUpperCase()})
    ON CONFLICT (country_code) DO NOTHING
  `;
}

/** Cold-start floor so the band never reads as empty. Returns a display string. */
export function formatStat(value: number, floor: number): string {
  if (value >= floor) {
    return value.toLocaleString('en-US');
  }
  return `${floor.toLocaleString('en-US')}+`;
}

// ---------------------------------------------------------------------------
// Row mappers
// ---------------------------------------------------------------------------

type StoryRow = {
  id: string;
  relation: string;
  display_label: string | null;
  quote: string;
  story_text: string | null;
  show_relation: boolean;
  created_at: Date;
};

type TributeRow = {
  id: string;
  label: string | null;
  relation: string;
  message: string;
  country: string | null;
  anonymous: boolean;
  created_at: Date;
};

function toStory(r: StoryRow): Story {
  return {
    id: r.id,
    relation: r.relation,
    displayLabel: r.display_label,
    quote: r.quote,
    storyText: r.story_text,
    showRelation: r.show_relation,
    createdAt: r.created_at.toISOString(),
  };
}

function toTribute(r: TributeRow): Tribute {
  return {
    id: r.id,
    label: r.label,
    relation: r.relation,
    message: r.message,
    country: r.country,
    anonymous: r.anonymous,
    createdAt: r.created_at.toISOString(),
  };
}
