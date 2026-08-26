import { unstable_cache } from 'next/cache';
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

// ── Cached variants (Next data cache via unstable_cache) ─────────────────────
//
// These are wrapped in unstable_cache (revalidate: 5 min) instead of an
// in-process TTL so the pages that render them can be STATICALLY prerendered
// (ISR) and served from the CDN with the vercel.json Cache-Control headers.
// The old in-memory approach only deduped concurrent requests on one server and
// never let Next treat the page as static — every request still hit the origin
// and got `Cache-Control: private, no-cache, no-store` (the P0 this fixes).

/** getStats() cached for 5 minutes. Callers should still wrap in try/catch. */
export const getStatsCached = unstable_cache(
  async (): Promise<SiteStats> => getStats(),
  ['site-stats'],
  { revalidate: 300 },
);

/** listApprovedStories() cached for 5 minutes (public /stories page). */
export const listApprovedStoriesCached = unstable_cache(
  async (limit = 30): Promise<Story[]> => listApprovedStories(limit),
  ['approved-stories'],
  { revalidate: 300 },
);

/** listApprovedTributes() cached for 5 minutes (public /wall page). */
export const listApprovedTributesCached = unstable_cache(
  async (limit = 60): Promise<Tribute[]> => listApprovedTributes(limit),
  ['approved-tributes'],
  { revalidate: 300 },
);

let geoDay = '';
let geoSeenToday = new Set<string>();

/**
 * recordGeo() deduplicated per country per UTC day: the first visitor from a
 * country each day issues the INSERT; everyone else that day skips the SQL
 * entirely (the DB row is already a no-op upsert, so this saves round-trips).
 */
export async function recordGeoCached(countryCode?: string | null): Promise<void> {
  if (!countryCode || countryCode.length !== 2) return;
  const day = new Date().toISOString().slice(0, 10);
  if (geoDay !== day) {
    geoDay = day;
    geoSeenToday = new Set();
  }
  const key = countryCode.toUpperCase();
  if (geoSeenToday.has(key)) return;
  geoSeenToday.add(key);
  await recordGeo(key);
}

/** Record a country once (upsert; repeated countries are a no-op). */
export async function recordGeo(countryCode?: string | null): Promise<void> {
  if (!countryCode || countryCode.length !== 2) return;
  await ensureSchema();
  const sql = getSql();
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
