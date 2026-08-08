/**
 * Minimal gate for the moderation endpoints (F13/F15). The review API is the only
 * mutating path for user-submitted content; it is protected by a shared admin key
 * passed as the `x-admin-key` header. Not a full RBAC system — intentional for a
 * v1.5 growth feature. Set ADMIN_REVIEW_KEY in Vercel + .env.local.
 */
export function adminKeyMatches(req: Request): boolean {
  const expected = process.env.ADMIN_REVIEW_KEY;
  if (!expected) return false;
  const provided = req.headers.get('x-admin-key');
  if (!provided) return false;
  return provided === expected;
}
