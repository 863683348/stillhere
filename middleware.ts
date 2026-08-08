export { auth as middleware } from '@/auth';

// Everything under /app requires a session. Unauthenticated visitors are sent to
// the Auth.js sign-in page with a callbackUrl back to where they started.
export const config = {
  matcher: ['/app/:path*'],
};
