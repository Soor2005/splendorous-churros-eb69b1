// Email delivery via the Resend HTTP API (https://resend.com). Uses fetch
// directly rather than the Resend SDK to avoid an extra dependency — swap
// this out for Nodemailer/SMTP or another provider if preferred, the shape
// of sendAdminNotification / sendConfirmationEmail below is what the rest
// of the app calls.

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

async function sendViaResend(payload: { to: string; subject: string; html: string }) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !from) {
    console.warn(
      '[waitlist] RESEND_API_KEY / RESEND_FROM_EMAIL not set — skipping email send. See .env.example.',
    )
    return
  }

  const res = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
    }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    console.error('[waitlist] Resend send failed:', res.status, text)
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function sendAdminNotification(details: {
  email: string
  submittedAt: string
  referrer: string | null
  userAgent: string | null
}) {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL

  if (!adminEmail) {
    console.warn('[waitlist] ADMIN_NOTIFICATION_EMAIL not set — skipping admin notification.')
    return
  }

  await sendViaResend({
    to: adminEmail,
    subject: `New Flow Ledger waitlist signup — ${details.email}`,
    html: `
      <h2 style="font-family:sans-serif">New waitlist signup</h2>
      <p style="font-family:sans-serif"><strong>Email:</strong> ${escapeHtml(details.email)}</p>
      <p style="font-family:sans-serif"><strong>Submitted:</strong> ${new Date(details.submittedAt).toUTCString()}</p>
      <p style="font-family:sans-serif"><strong>Referrer:</strong> ${escapeHtml(details.referrer ?? 'Direct / unknown')}</p>
      <p style="font-family:sans-serif"><strong>User agent:</strong> ${escapeHtml(details.userAgent ?? 'Unknown')}</p>
    `,
  })
}

export async function sendConfirmationEmail(details: { email: string }) {
  await sendViaResend({
    to: details.email,
    subject: "You're on the Flow Ledger beta waitlist 🎉",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
        <h2>Thanks for joining the Flow Ledger beta waitlist!</h2>
        <p>We've received your request for early access. Flow Ledger is currently
        in closed beta, and invitations are sent out in limited batches to
        selected users.</p>
        <p>We'll email you at this address if you're selected — no action is
        needed from you right now.</p>
        <p>— The Flow Ledger team</p>
      </div>
    `,
  })
}
