'use client';

import { signOut } from 'next-auth/react';

/**
 * Client-side sign-out. `next-auth/react` posts to the session endpoint and
 * lands the user back on the marketing site.
 */
export function SignOutButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => signOut({ callbackUrl: '/' })}
      aria-label={label}
      title={label}
    >
      {label}
    </button>
  );
}
