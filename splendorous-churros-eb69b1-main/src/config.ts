// Single source of truth for waitlist / early-access destinations.
// Every CTA on the site points at the beta signup section below.
export const WAITLIST_URL = '#beta'

// Where the primary CTA points once the countdown reaches zero and the
// beta officially goes live (e.g. a download page, installer link, or an
// app-store listing). Defaults to the waitlist section until you have a
// real destination.
export const BETA_ACCESS_URL = '#beta'

// The exact instant the beta launches, as an ISO 8601 string WITH a UTC
// offset (the trailing "Z"). Because this is an absolute point in time
// rather than a wall-clock time, the countdown below resolves to the same
// moment for every visitor regardless of their local timezone — update
// this single constant to reschedule the launch.
export const LAUNCH_DATE = '2026-09-15T17:00:00Z'

export const SITE_NAME = 'Flow Ledger'
export const SITE_TAGLINE = 'The Smarter Way to Track Your Day — Now in Beta'
export const SITE_DESCRIPTION =
  'Flow Ledger is an upcoming AI-powered desktop app that automatically tracks your work, measures real productivity, and helps you build deeper focus. Currently in closed beta — join the waitlist for early access.'
