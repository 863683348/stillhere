import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

/**
 * Chrome shared by the public/marketing routes. Kept out of the root layout so
 * that /app/* can grow its own shell (persona rail, chat header) without having
 * to unpick a marketing header first.
 */
export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
