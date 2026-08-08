import postgres, { type Sql } from 'postgres';

/**
 * Lazily-created Neon/Postgres client.
 *
 * We avoid constructing at module load so that `next build` (which never touches
 * the database) and local runs without DATABASE_URL set do not crash on import.
 * The first real query triggers construction; if DATABASE_URL is missing it
 * throws a clear, actionable error instead of a cryptic connection failure.
 */
let _sql: Sql | null = null;

export function getSql(): Sql {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is not set. See ENV-SETUP.md for the connection string.');
  }
  if (!_sql) {
    _sql = postgres(connectionString, { prepare: false, max: 5 });
  }
  return _sql;
}
