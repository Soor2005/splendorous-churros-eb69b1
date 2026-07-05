import { motion } from 'framer-motion'
import {
  CalendarClock,
  Clock,
  LayoutGrid,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type FloatingBadge = {
  icon: LucideIcon
  label: string
  sub: string
  className: string
  delay: number
}

const BADGES: Array<FloatingBadge> = [
  {
    icon: Clock,
    label: 'Automatic Time Tracking',
    sub: 'Zero manual entry',
    className: '-left-6 top-10 sm:-left-14',
    delay: 0.2,
  },
  {
    icon: Target,
    label: 'Focus Sessions',
    sub: '25:00 remaining',
    className: '-right-4 top-2 sm:-right-12',
    delay: 0.35,
  },
  {
    icon: Sparkles,
    label: 'AI Productivity Insights',
    sub: 'Peak hours: 9–11 AM',
    className: '-left-8 bottom-28 sm:-left-16',
    delay: 0.5,
  },
  {
    icon: CalendarClock,
    label: 'Calendar Integration',
    sub: 'Synced with Google Calendar',
    className: '-right-6 bottom-36 sm:-right-16',
    delay: 0.65,
  },
  {
    icon: LayoutGrid,
    label: 'Projects & Tasks',
    sub: '12 active this week',
    className: 'left-1/2 -bottom-8 -translate-x-1/2',
    delay: 0.8,
  },
]

export function ProductPreview() {
  return (
    <section className="relative overflow-hidden px-4 py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C6CF2]/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7C6CF2]/40 bg-[#7C6CF2]/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#B4A9FF]">
            PRODUCT PREVIEW
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            A Smarter Way to Track Your Day
          </h2>
          <p className="mt-4 text-white/60">
            One quiet app running in the background — surfacing everything you need to
            know about how you actually spend your time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-24 max-w-3xl sm:mt-28"
        >
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-[#7C6CF2]/25 via-[#5B4FE0]/10 to-transparent blur-3xl" />

          {/* Desktop app window */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_40px_100px_-24px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-xs text-white/40">Flow Ledger — Dashboard</span>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:col-span-2">
                <p className="text-xs text-white/40">This week's activity</p>
                <div className="mt-4 h-32 sm:h-40">
                  <div className="flex h-full items-end gap-2">
                    {[35, 55, 40, 70, 85, 60, 45].map((h, i) => (
                      <div key={i} className="flex-1">
                        <div
                          className="rounded-t-md bg-gradient-to-t from-[#7C6CF2]/40 to-[#9C8CFF]"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7C6CF2]/20 text-[#B4A9FF]">
                    <TrendingUp size={16} />
                  </div>
                  <p className="mt-3 text-2xl font-semibold tracking-tight">6h 12m</p>
                  <p className="text-xs text-white/40">Focused today</p>
                </div>
                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                    <Sparkles size={16} />
                  </div>
                  <p className="mt-3 text-sm font-medium">3 AI insights ready</p>
                  <p className="text-xs text-white/40">Updated 2m ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating glassmorphism callouts */}
          {BADGES.map((badge) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: badge.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute hidden w-52 items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] p-3.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl md:flex ${badge.className}`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C6CF2]/30 to-[#7C6CF2]/10 text-[#B4A9FF]">
                <badge.icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-white/90">{badge.label}</p>
                <p className="truncate text-[11px] text-white/45">{badge.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
