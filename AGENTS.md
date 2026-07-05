# AGENTS.md

## Project Overview

Landing page for **Flow Ledger**, an AI-powered desktop time tracking app for Windows.
The page has one conversion goal: get visitors to download the Windows installer. Built
with TanStack Start and deployed on Netlify with no backend.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── NavBar.tsx            # Fixed/sticky nav: logo, Features, Download links, CTA
│   │   ├── Hero.tsx               # Headline, subtext, CTAs, CSS/SVG app mockup panel
│   │   ├── Features.tsx           # 4 feature cards (icon, title, description, hover lift)
│   │   ├── Stats.tsx              # 3 animated counter cards ("Why Flow Ledger")
│   │   ├── DownloadSection.tsx    # Final CTA panel with trust badges
│   │   └── Footer.tsx             # Logo, copyright, Privacy/Terms/Contact links
│   ├── routes/
│   │   ├── __root.tsx             # Root layout: SEO meta, Open Graph tags, favicon
│   │   ├── index.tsx              # Landing page — composes all sections above
│   │   ├── privacy.tsx            # Placeholder privacy policy page
│   │   └── terms.tsx              # Placeholder terms of service page
│   ├── config.ts                  # DOWNLOAD_URL + site name/description constants
│   ├── router.tsx                 # TanStack Router setup (routeTree is generated)
│   └── styles.css                 # Tailwind import + scrollbar/selection theming
├── netlify.toml                    # Build command, publish dir, dev server settings
└── vite.config.ts                  # TanStack Start, React, Tailwind, Netlify plugins
```

## Key Conventions

- **Download link**: every "Download for Windows" button reads `DOWNLOAD_URL` from
  `src/config.ts`. Update that one constant to point at the real installer (GitHub
  Releases / Cloudflare R2) — never hardcode the URL in a component.
- **Theme**: dark-first design (`#0B0B12` background, `#7C6CF2` accent). The `<html>`
  element carries a `dark` class; a light-mode toggle was not implemented since the
  brief calls for dark-by-default and no theme switcher was requested.
- **No hero image asset**: the hero's device mockup is hand-built with Tailwind + Lucide
  icons (bar chart, focus session card, AI insight card) rather than a screenshot, since
  no product screenshot was supplied. Swap in a real screenshot in `Hero.tsx`
  (`AppMockup`) once one is available.
- Routing is file-based (TanStack Router) — add a new page by adding a file under
  `src/routes/`; the route tree is generated automatically at build/dev time.
- No backend, database, or forms are used — this is a static marketing page.

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build → dist/client
```
