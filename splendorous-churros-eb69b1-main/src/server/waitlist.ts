import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader, getRequestIP } from '@tanstack/react-start/server'
import { checkRateLimit } from './rateLimit'
import { saveWaitlistEntry } from './storage'
import { sendAdminNotification, sendConfirmationEmail } from './email'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type WaitlistInput = {
  email: string
  // Hidden field real users never fill in — a filled honeypot means a bot.
  honeypot: string
}

export const subscribeToWaitlist = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown): WaitlistInput => {
    if (typeof data !== 'object' || data === null) {
      throw new Error('Invalid request.')
    }
    const { email, honeypot } = data as Record<string, unknown>
    return {
      email: typeof email === 'string' ? email.trim().toLowerCase() : '',
      honeypot: typeof honeypot === 'string' ? honeypot : '',
    }
  })
  .handler(async ({ data }) => {
    // Bots that fill the honeypot get a silent "success" so they don't
    // learn the field is a trap and adapt.
    if (data.honeypot) {
      return { ok: true as const }
    }

    if (!EMAIL_REGEX.test(data.email)) {
      throw new Error('Please enter a valid email address.')
    }

    const ip = getRequestIP({ xForwardedFor: true }) ?? 'unknown'
    const { allowed } = checkRateLimit(ip)
    if (!allowed) {
      throw new Error('Too many attempts. Please wait a few minutes and try again.')
    }

    const submittedAt = new Date().toISOString()
    const referrer = getRequestHeader('referer') ?? null
    const userAgent = getRequestHeader('user-agent') ?? null

    // Persist first — if this throws, the client sees a clear error and can
    // retry without emails going out for an entry that was never saved.
    await saveWaitlistEntry({ email: data.email, submittedAt, referrer, userAgent, ip })

    const [adminResult, confirmResult] = await Promise.allSettled([
      sendAdminNotification({ email: data.email, submittedAt, referrer, userAgent }),
      sendConfirmationEmail({ email: data.email }),
    ])

    if (adminResult.status === 'rejected') {
      console.error('[waitlist] Failed to send admin notification email:', adminResult.reason)
    }
    if (confirmResult.status === 'rejected') {
      console.error('[waitlist] Failed to send confirmation email:', confirmResult.reason)
    }

    return { ok: true as const }
  })
