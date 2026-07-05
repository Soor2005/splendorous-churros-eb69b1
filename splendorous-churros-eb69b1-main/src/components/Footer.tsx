import { SITE_NAME } from '../config'

export function Footer() {
  const year = 2026

  return (
    <footer className="border-t border-white/10 px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg">
            <img src="/logo.png" alt={`${SITE_NAME} logo`} className="h-full w-full object-cover" />
          </span>
          <span className="text-sm">{SITE_NAME}</span>
        </a>

        <p className="text-xs text-white/40">
          &copy; {year} {SITE_NAME}. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-xs text-white/50">
          <a href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="transition-colors hover:text-white">
            Terms
          </a>
          <a href="mailto:hello@flowledger.app" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
