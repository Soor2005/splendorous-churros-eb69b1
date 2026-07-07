# AGENTS.md

## Project Overview

Landing page for **Flow Ledger**, an AI-powered desktop time tracking app for Windows,
currently in **closed beta**. The page's conversion goal is to get visitors onto the
beta waitlist (never a direct download). Built with TanStack Start and deployed on
Netlify, with a small server-function backend for the waitlist form.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Backend | TanStack Start server functions (`createServerFn`), running as Netlify Functions |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Email | Resend HTTP API (no SDK) |
| Storage | Airtable or Supabase, both via REST (pluggable, env-driven) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   ├── favicon.ico, favicon-*.png, apple-touch-icon.png, icon-*.png
│   └── logo.png                    # Brand mark used in NavBar / Footer / meta tags
├── src/
│   ├── components/
│   │   ├── NavBar.tsx              # Fixed/sticky nav: logo, section links, waitlist CTA
│   │   ├── Hero.tsx                # Headline, subtext, CTAs, CSS/SVG app mockup panel
│   │   ├── Countdown.tsx           # Beta launch countdown (Days/Hours/Min/Sec), live-updating
│   │   ├── Features.tsx            # 4 feature cards
│   │   ├── ProductPreview.tsx      # "A Smarter Way to Track Your Day" mockup + floating badges
│   │   ├── HowItWorks.tsx          # 4-step animated process
│   │   ├── Stats.tsx               # 3 animated counter cards
│   │   ├── BuiltFor.tsx            # Audience cards (Developers, Designers, etc.)
│   │   ├── Roadmap.tsx             # "What's Coming Next" timeline with status badges
│   │   ├── BetaProgram.tsx         # "Join the Closed Beta" — benefits + <WaitlistForm />
│   │   ├── WaitlistForm.tsx        # Functional email signup: validation, loading, honeypot
│   │   ├── PrivacyFirst.tsx        # "Built With Privacy" principle cards
│   │   ├── FAQ.tsx                 # Animated accordion
│   │   ├── FinalCTA.tsx            # Closing CTA panel
│   │   └── Footer.tsx              # Logo, copyright, Privacy/Terms/Contact links
│   ├── server/
│   │   ├── waitlist.ts             # createServerFn: validation, honeypot, rate limit, save, email
│   │   ├── storage.ts              # Pluggable persistence (Airtable → Supabase, env-driven)
│   │   ├── email.ts                # Resend REST calls: admin notification + visitor confirmation
│   │   └── rateLimit.ts            # In-memory sliding-window limiter, keyed by IP
│   ├── routes/
│   │   ├── __root.tsx              # Root layout: SEO meta, Open Graph tags, favicon links
│   │   ├── index.tsx               # Landing page — composes all sections above
│   │   ├── privacy.tsx             # Placeholder privacy policy page
│   │   └── terms.tsx               # Placeholder terms of service page
│   ├── config.ts                   # WAITLIST_URL, BETA_ACCESS_URL, LAUNCH_DATE, site metadata
│   ├── router.tsx                  # TanStack Router setup (routeTree is generated)
│   └── styles.css                  # Tailwind import + scrollbar/selection theming
├── .env.example                     # All env vars the server functions read — copy to .env
├── netlify.toml                     # Build command, publish dir, dev server settings
└── vite.config.ts                   # TanStack Start, React, Tailwind, Netlify plugins
```

## Key Conventions

- **No download CTAs**: every CTA reads `WAITLIST_URL` (pre-launch) or `BETA_ACCESS_URL`
  (post-launch) from `src/config.ts` — never hardcode a URL in a component.
- **Countdown**: `LAUNCH_DATE` in `src/config.ts` is an ISO 8601 string with a UTC
  offset (`Z`), so `Countdown.tsx` resolves to the same absolute instant for every
  visitor regardless of local timezone. Change that one constant to reschedule launch.
  Once `Date.now()` passes `LAUNCH_DATE`, the section automatically swaps to a
  "Beta is Live!" state with a `BETA_ACCESS_URL` CTA.
- **Waitlist backend**: `WaitlistForm.tsx` calls the `subscribeToWaitlist` server
  function (`src/server/waitlist.ts`) directly — TanStack Start's Vite plugin compiles
  this into a real RPC call, so no separate API route wiring is needed. The handler:
  1. Rejects submissions where the honeypot field was filled (bot detection).
  2. Validates the email server-side (defense in depth beyond the client check).
  3. Rate-limits by IP (see `rateLimit.ts` — per-instance in-memory by default; swap in
     Upstash Redis via `UPSTASH_REDIS_REST_URL` / `TOKEN` for durable, cross-instance
     limits in production).
  4. Persists the entry via `storage.ts` (Airtable if `AIRTABLE_*` env vars are set,
     else Supabase if `SUPABASE_*` vars are set, else it logs a warning and skips
     persistence — useful for local dev without a backend).
  5. Sends an admin notification (visitor email, submission time, referrer, user agent)
     and a visitor confirmation email via `email.ts` (Resend REST API).
- **Secrets stay server-side only**: everything in `.env` is read via `process.env.*`
  inside `src/server/*.ts`, which only runs on the server — none of it is bundled to
  the client. See `.env.example` for the full list and set the same keys in Netlify's
  dashboard for production.
- **Theme**: dark-first design (`#0B0B12` background, `#7C6CF2` accent). The `<html>`
  element carries a `dark` class; no light-mode toggle was implemented.
- Routing is file-based (TanStack Router) — add a new page by adding a file under
  `src/routes/`; the route tree is generated automatically at build/dev time.

## Development Commands

```bash
cp .env.example .env   # fill in Resend + storage credentials for local testing
npm run dev             # Start dev server (port 3000)
npm run build           # Production build → dist/client + server functions
```
