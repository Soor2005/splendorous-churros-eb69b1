// Pluggable persistence for waitlist signups.
//
// Configure ONE of the following via environment variables (see
// .env.example). If neither is configured, the entry is not persisted
// anywhere but the request still succeeds and emails still send — this
// keeps local development working without any backend set up.

export type WaitlistEntry = {
  email: string
  submittedAt: string
  referrer: string | null
  userAgent: string | null
  ip: string
}

async function saveToAirtable(entry: WaitlistEntry): Promise<boolean> {
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const table = process.env.AIRTABLE_TABLE_NAME

  if (!apiKey || !baseId || !table) return false

  const res = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        Email: entry.email,
        'Submitted At': entry.submittedAt,
        Referrer: entry.referrer ?? '',
        'User Agent': entry.userAgent ?? '',
        IP: entry.ip,
      },
    }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    console.error('[waitlist] Airtable save failed:', res.status, text)
    throw new Error('We could not save your spot right now. Please try again shortly.')
  }

  return true
}

async function saveToSupabase(entry: WaitlistEntry): Promise<boolean> {
  const url = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const table = process.env.SUPABASE_TABLE_NAME ?? 'waitlist'

  if (!url || !serviceKey) return false

  const res = await fetch(`${url}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      email: entry.email,
      submitted_at: entry.submittedAt,
      referrer: entry.referrer,
      user_agent: entry.userAgent,
      ip: entry.ip,
    }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    console.error('[waitlist] Supabase save failed:', res.status, text)
    throw new Error('We could not save your spot right now. Please try again shortly.')
  }

  return true
}

export async function saveWaitlistEntry(entry: WaitlistEntry): Promise<{ backend: string }> {
  if (await saveToAirtable(entry)) return { backend: 'airtable' }
  if (await saveToSupabase(entry)) return { backend: 'supabase' }

  console.warn(
    '[waitlist] No storage backend configured (AIRTABLE_* or SUPABASE_*). ' +
      'The signup was NOT persisted to a database — see .env.example.',
  )
  return { backend: 'none' }
}
