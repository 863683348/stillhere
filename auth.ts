import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

/**
 * Auth.js v5 (next-auth beta). JWT session strategy — no database adapter needed,
 * so the Neon connection is used only for our own `persons` / `messages` tables.
 *
 * `trustHost: true` is required on Vercel / proxied hosts; without it Auth.js
 * rejects the request as an untrusted host.
 *
 * NOTE: next-auth@5.0.0-beta.32 switched the Google provider to OIDC, which makes
 * a live `discoveryRequest` to accounts.google.com on every sign-in. That fetch is
 * flaky on Vercel and surfaces as a generic "Configuration" error (sign-in dies
 * before even reaching Google). Pinning the three OAuth2 endpoints explicitly makes
 * Auth.js skip discovery and use the standard Google OAuth2 flow — same behaviour,
 * no fragile network dependency.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        url: 'https://accounts.google.com/o/oauth2/v2/auth',
        params: { scope: 'openid email profile' },
      },
      token: { url: 'https://oauth2.googleapis.com/token' },
      userinfo: { url: 'https://www.googleapis.com/oauth2/v3/userinfo' },
    }),
  ],
  session: { strategy: 'jwt' },
  trustHost: true,
});

