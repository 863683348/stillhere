# StillHere

A private space to keep talking with someone you have lost. This repository is
the Next.js 15 front end.

Source of truth for behaviour and design lives one directory up:

- `stillhere-spec.md` — the locked contract (§6 design tokens, §5 pages, §8 constraints)
- `stillhere-03-uiux.md` — design tokens, type scale, the lamp, page designs
- `stillhere-02-architecture.md` — stack, API surface, security gates

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run typecheck  # tsc --noEmit — the CI gate
npm run lint
npm run build
```

Node 20+ is required (developed against Node 22).

`npm install` reaches the network for `next/font/google`, which downloads and
self-hosts Newsreader and Inter at build time. An offline `next build` will fail
on that step; see "Fonts" below for the offline fallback.

---

## What is in here so far

Increment 1 — scaffold, design token system, landing page.

| Route        | Rendering | Notes                                                 |
| ------------ | --------- | ----------------------------------------------------- |
| `/`          | SSG       | Hero, trust row, how-it-works, AI disclosure, closing |
| `/pricing`   | SSG       | Free / Remember / Forever                             |
| `/privacy`   | SSG       | Commitment scaffold — binding text pending counsel    |
| `/terms`     | SSG       | Commitment scaffold — binding text pending counsel    |
| `/app/new`   | CSR       | Placeholder for F1 persona creation (increment 2)     |
| `robots.txt` | generated | Blocks the training-crawler list in `lib/site.ts`     |
| `sitemap.xml`| generated | Public routes only                                    |

Not built yet: auth, chat, memory, media, payments, the remaining legal pages.

---

## Layout

```
app/
  layout.tsx          root shell, fonts, metadata, pre-paint theme script
  globals.css         imports the three style layers
  page.tsx            landing page
  pricing/            pricing
  privacy/ terms/     legal scaffolds
  app/                private surface (noindex) — app/app/new is the F1 placeholder
  robots.ts sitemap.ts not-found.tsx
components/           Lamp, ThemeProvider, ThemeToggle, SiteHeader, SiteFooter, …
lib/                  theme.ts, i18n.ts, site.ts
locales/en.ts         every user-facing string
styles/
  tokens.css          design tokens — the only file with literal colours
  typography.css      serif/sans type scale
  base.css            reset, page shell, buttons, reduced-motion
```

---

## House rules

These are enforced in review. They are not stylistic preferences.

**Colour.** Components reference `var(--token)` only. `styles/tokens.css` is the
single place a hex value may appear. The one documented exception is
`themeColor` in `app/layout.tsx`, because browser chrome cannot read CSS
variables — keep it in sync with `--surface-base` by hand.

**Icons.** `lucide-react`, at 16 / 20 / 24px, `strokeWidth` 1.5–1.75. One icon
set, no mixing. No emoji as an icon, anywhere. Check before you push:

```bash
grep -rP '[\x{1F300}-\x{1F9FF}\x{2600}-\x{26FF}\x{2700}-\x{27BF}]' \
  app components lib locales styles
```

**Copy.** Everything goes through `locales/en.ts`; no literal strings in
components. No exclamation marks. Never write "resurrect", "immortal",
"replace", or claim a persona is a real person. Prefer "reflection",
"remember", "still here".

**Motion.** `--dur-base` is 400ms, roughly twice the usual — that pace is the
point. Ease with `--ease-gentle`. No bounce, no confetti, no spinners: waiting
is shown by the lamp breathing. Every animation is keyframes-only, so the
resting state is already the visible one and nothing disappears if the
animation never runs. `prefers-reduced-motion` is handled globally in
`styles/base.css`.

**Mobile.** 375px with no horizontal overflow. Tap targets ≥44px. Inputs at
≥16px so iOS does not zoom. Bottom-anchored UI respects
`env(safe-area-inset-bottom)`.

**Forbidden imagery.** No gravestones, crosses, angel wings, doves, butterflies,
stars, or feathers. No purple-to-pink gradients. The mark is a light, and only a
light. Dark mode is night, not death — hence warm ink-brown, never `#000`.

---

## Theming

`lib/theme.ts` exports `THEME_INIT_SCRIPT`, injected inline in `<head>` so
`data-theme` is set before first paint. Nobody gets a white flash at 2am, which
is when this product is actually used.

`ThemeProvider` takes over after hydration and follows the OS until the user
picks a side. Theme-dependent visuals — including the sun/moon swap in
`ThemeToggle` — are done in CSS off the `[data-theme]` attribute rather than in
React state, so there is no hydration mismatch and no mounted-guard flicker.

---

## Fonts

`next/font/google` self-hosts Newsreader (serif headings, weight 400 — a lighter
serif carries more weight here than a bold sans) and Inter (body and UI). They
are exposed as `--font-newsreader` and `--font-inter` and consumed through
`--font-serif` / `--font-sans` in `styles/tokens.css`.

If you need a fully offline build, replace the two `next/font/google` calls in
`app/layout.tsx` with a `<link rel="stylesheet">` to Google Fonts, or vendor the
woff2 files into `public/` and use `next/font/local`. Nothing else changes,
because everything downstream reads the two CSS variables.

---

## Security headers

`next.config.ts` sets CSP, HSTS, `X-Frame-Options`, `X-Content-Type-Options`,
`Referrer-Policy` and `Permissions-Policy`, plus `X-Robots-Tag: noindex` on
`/app/*`.

The CSP still allows `'unsafe-inline'` for scripts, which the pre-paint theme
script and Next's hydration payload both need. Moving to a nonce-based policy in
middleware is a Phase 5 task and is flagged with a `TODO` in the config.
