import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Loader2, RefreshCcw, XCircle } from 'lucide-react'
import { subscribeToWaitlist } from '../server/waitlist'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'loading' | 'success' | 'error'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  // Hidden honeypot field. Left blank by real visitors; bots that
  // auto-fill every field trip it and get silently ignored server-side.
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isValidEmail = useMemo(() => EMAIL_REGEX.test(email.trim()), [email])
  const isSubmitting = status === 'loading'

  async function submit(e?: React.FormEvent) {
    e?.preventDefault()

    if (!isValidEmail || isSubmitting) return

    setStatus('loading')
    setErrorMessage('')

    try {
      await subscribeToWaitlist({
        data: { email: email.trim(), honeypot: company },
      })
      setStatus('success')
    } catch (err) {
      console.error('[waitlist] Submission failed:', err)
      const message =
        err instanceof Error && err.message
          ? err.message
          : 'Something went wrong. Please check your connection and try again.'
      setErrorMessage(message)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-8 text-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
          <CheckCircle2 size={24} />
        </div>
        <p className="text-base font-semibold text-white">You&apos;re on the list!</p>
        <p className="text-sm text-white/60">
          Check your inbox for a confirmation email. We&apos;ll notify you at{' '}
          <span className="font-medium text-white/80">{email.trim()}</span> if you&apos;re
          selected for the beta.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="mx-auto mt-12 max-w-xl">
      <form onSubmit={submit} noValidate className="flex flex-col gap-3 sm:flex-row">
        {/* Honeypot — visually hidden from real users, but present in the DOM for bots to fill in. */}
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />

        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          placeholder="you@example.com"
          disabled={isSubmitting}
          className="w-full flex-1 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#7C6CF2]/60 focus:bg-white/[0.06] disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!isValidEmail || isSubmitting}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#8C7CFF] to-[#7C6CF2] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_10px_30px_-8px_rgba(124,108,242,0.7)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Join the Beta Waitlist
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </form>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -6, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-3 flex items-start gap-2 overflow-hidden rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-left"
          >
            <XCircle size={16} className="mt-0.5 shrink-0 text-red-300" />
            <div className="flex-1 text-sm text-red-200/90">{errorMessage}</div>
            <button
              type="button"
              onClick={() => submit()}
              className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-red-100 underline-offset-2 hover:underline"
            >
              <RefreshCcw size={12} />
              Retry
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-4 text-center text-xs text-white/40">
        We&apos;ll only email you about beta access and launch updates. No spam, ever.
      </p>
    </div>
  )
}
