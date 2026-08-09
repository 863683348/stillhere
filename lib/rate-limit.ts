/**
 * Minimal in-memory fixed-window rate limiter.
 *
 * Single-instance only — good enough for Vercel serverless abuse protection on
 * the public demo endpoint and the per-user chat throttle. If the app later
 * runs multiple regions/instances, swap the store for Upstash Redis; this keeps
 * zero infra dependencies today.
 */

type Bucket = { count: number; resetAt: number };

const WINDOW_MS = 60_000;
const MAX_ENTRIES = 20_000;
const store = new Map<string, Bucket>();

/** Drop expired entries once the map grows past a safe bound. */
function sweep(now: number) {
  if (store.size < MAX_ENTRIES) return;
  for (const [key, bucket] of store) {
    if (bucket.resetAt <= now) store.delete(key);
  }
}

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

/**
 * Fixed-window limiter: allows `max` hits per `windowMs` per `key`.
 * Returns 429-worthy info when the budget is exhausted.
 */
export function rateLimit(
  key: string,
  max = 10,
  windowMs = WINDOW_MS,
): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const bucket = store.get(key);
  if (!bucket || bucket.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: max - 1, retryAfterSeconds: 0 };
  }

  bucket.count += 1;
  if (bucket.count > max) {
    return {
      ok: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }
  return { ok: true, remaining: max - bucket.count, retryAfterSeconds: 0 };
}

/** Best-effort client IP from Vercel's proxy headers. */
export function clientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0];
    if (first) return first.trim();
  }
  return req.headers.get('x-real-ip') ?? 'unknown';
}

// ── Daily quota (natural-day budget, e.g. "300 chats per day") ───────────────

type DailyBucket = { count: number; day: string };

const dailyStore = new Map<string, DailyBucket>();

/** Current UTC calendar day key, e.g. "2026-08-09". Resets at midnight UTC. */
function dayKey(now: Date): string {
  return now.toISOString().slice(0, 10);
}

export interface DailyQuotaResult {
  ok: boolean;
  remaining: number;
  /** ISO timestamp of when the quota resets (next UTC midnight). */
  resetsAt: string;
}

/**
 * Natural-day quota: allows `max` calls per UTC calendar day per `key`.
 * In-memory (single instance) — same trade-off as `rateLimit`.
 */
export function dailyQuota(key: string, max: number): DailyQuotaResult {
  const now = new Date();
  const day = dayKey(now);
  const resetsAt = new Date(now);
  resetsAt.setUTCHours(24, 0, 0, 0);

  const bucket = dailyStore.get(key);
  if (!bucket || bucket.day !== day) {
    dailyStore.set(key, { count: 1, day });
    return { ok: true, remaining: max - 1, resetsAt: resetsAt.toISOString() };
  }

  bucket.count += 1;
  if (bucket.count > max) {
    return { ok: false, remaining: 0, resetsAt: resetsAt.toISOString() };
  }
  return { ok: true, remaining: max - bucket.count, resetsAt: resetsAt.toISOString() };
}
