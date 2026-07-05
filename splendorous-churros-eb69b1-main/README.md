# Flow Ledger — Landing Page

Marketing site for **Flow Ledger**, an AI-powered desktop time tracking and productivity
app for Windows. The single goal of this page is to drive Windows installer downloads.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7, file-based routing)
- Tailwind CSS 4
- Framer Motion for scroll/entrance animations
- Lucide React icons
- Deployed on Netlify (no backend required)

## Project Structure

```
src/
├── components/       # NavBar, Hero, Features, Stats, DownloadSection, Footer
├── routes/           # / (landing page), /privacy, /terms
├── config.ts         # DOWNLOAD_URL and site metadata constants
└── styles.css        # Tailwind import + global theme styling
```

## Updating the download link

The Windows installer URL lives in a single place: `src/config.ts` (`DOWNLOAD_URL`).
Update that constant with your GitHub Releases or Cloudflare R2 link — every download
button on the site reads from it.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
```

Output is written to `dist/client` and deployed via Netlify (`netlify.toml`).
