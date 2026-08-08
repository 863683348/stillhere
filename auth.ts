import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

/**
 * Auth.js v5 (next-auth beta). JWT session strategy — no database adapter needed,
 * so the Neon connection is used only for our own `persons` / `messages` tables.
 *
 * `trustHost: true` is required on Vercel / proxied hosts; without it Auth.js
 * rejects the request as an untrusted host.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  session: { strategy: 'jwt' },
  trustHost: true,
});
