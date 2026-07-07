import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Clock3, PartyPopper, Sparkles } from 'lucide-react'
import { BETA_ACCESS_URL, LAUNCH_DATE, WAITLIST_URL } from '../config'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

function getTimeLeft(): TimeLeft {
  // LAUNCH_DATE carries a UTC offset, so Date.parse resolves to the same
  // absolute instant no matter what timezone the visitor's browser is in —
  // the countdown is always correct relative to that instant.
  const total = new Date(LAUNCH_DATE).getTime() - Date.now()

  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((total / (1000 * 60)) % 60)
  const seconds = Math.floor((total / 1000) % 60)

  return { days, hours, minutes, seconds, total }
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const isLive = timeLeft.total <= 0

  const units = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds },
    ],
    [timeLeft],
  )

  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C6CF2]/20 blur-[130px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14 text-center shadow-[0_30px_90px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-14"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7C6CF2]/40 bg-[#7C6CF2]/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#B4A9FF] shadow-[0_0_20px_-4px_rgba(124,108,242,0.8)]">
          <Clock3 size={12} />
          {isLive ? 'BETA LIVE' : 'LAUNCH COUNTDOWN'}
        </span>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          {isLive ? 'Beta is Live!' : 'Launching Soon'}
        </h2>
        <p className="mt-3 text-lg font-medium text-white/80">
          Exclusive Beta Access for Selected Early Users
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55">
          {isLive
            ? 'Flow Ledger has officially launched into beta. Selected waitlist members are being invited in batches — grab your access below.'
            : 'Only a limited number of people on the waitlist will receive beta invitations. Join now to maximize your chances of early access.'}
        </p>

        {isLive ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-center gap-6"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/25 to-emerald-400/5 text-emerald-300">
              <PartyPopper size={28} />
            </div>
            <a
              href={BETA_ACCESS_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#8C7CFF] to-[#7C6CF2] px-8 py-4 text-sm font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_15px_40px_-10px_rgba(124,108,242,0.8)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Access
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        ) : (
          <>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 gap-2.5 sm:gap-4">
              {units.map((unit) => (
                <div
                  key={unit.label}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-4 shadow-[0_0_30px_-12px_rgba(124,108,242,0.6)] sm:px-4 sm:py-6"
                >
                  <div className="relative h-9 overflow-hidden sm:h-12">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={unit.value}
                        initial={{ y: 16, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -16, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold tabular-nums tracking-tight text-transparent sm:text-4xl"
                      >
                        {String(unit.value).padStart(2, '0')}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-white/40 sm:text-xs">
                    {unit.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex justify-center">
              <a
                href={WAITLIST_URL}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#8C7CFF] to-[#7C6CF2] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_10px_30px_-8px_rgba(124,108,242,0.7)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles size={16} />
                Reserve My Spot
              </a>
            </div>
          </>
        )}
      </motion.div>
    </section>
  )
}
