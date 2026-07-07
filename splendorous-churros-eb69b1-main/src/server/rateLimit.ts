// Best-effort in-memory rate limiter, keyed by IP address.
//
// NOTE: on serverless platforms (Netlify Functions) each warm instance has
// its own memory, so this limiter is per-instance rather than global. It
// still stops basic script abuse from a single client. For durable,
// cross-instance rate limiting in production, wire this up to Upstash Redis
// (or similar) using the UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
// env vars — see .env.example.

type Bucket = {
  count: number
  windowStart: number
}

const WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5
const MAX_TRACKED_KEYS = 5000

const buckets = new Map<string, Bucket>()

function sweepExpired(now: number) {
  if (buckets.size < MAX_TRACKED_KEYS) return
  for (const [key, bucket] of buckets) {
    if (now - bucket.windowStart > WINDOW_MS) {
      buckets.delete(key)
    }
  }
}

export function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  sweepExpired(now)

  const existing = buckets.get(key)

  if (!existing || now - existing.windowStart > WINDOW_MS) {
    buckets.set(key, { count: 1, windowStart: now })
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 }
  }

  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 }
  }

  existing.count += 1
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - existing.count }
}
