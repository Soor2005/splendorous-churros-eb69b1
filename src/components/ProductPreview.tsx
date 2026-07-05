import { motion } from 'framer-motion'
import {
  CalendarClock,
  Clock,
  KanbanSquare,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type FloatingCard = {
  icon: LucideIcon
  title: string
  subtitle: string
  className: string
  delay: number
}

const FLOATING_CARDS: Array<FloatingCard> = [
  {
    icon: Clock,
    title: 'Automatic Time Tracking',
    subtitle: 'Zero manual entry',
    className: 'left-[-6%] top-[8%] sm:left-[-8%]',
    delay: 0,
  },
  {
    icon: Target,
    title: 'Focus Sessions',
    subtitle: '25:00 remaining',
    className: 'right-[-6%] top-[4%] sm:right-[-9%]',
    delay: 0.6,
  },
  {
    icon: Sparkles,
    title: 'AI Productivity Insights',
    subtitle: 'Peak focus at 10am',
    className: 'left-[-8%] bottom-[16%] sm:left-[-11%]',
    delay: 1.2,
  },
  {
    icon: CalendarClock,
    title: 'Calendar Integration',
    subtitle: 'Synced with Google Calendar',
    className: 'right-[-5%] bottom-[22%] sm:right-[-8%]',
    delay: 1.8,
  },
  {
    icon: KanbanSquare,
    title: 'Projects & Tasks',
    subtitle: '12 active, 3 due today',
    className: 'left-[18%] bottom-[-8%] sm:left-[22%]',
    delay: 2.4,
  },
]

export function ProductPreview() {
  return (
    <section id="preview" className="relative overflow-hidden px-4 py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C6CF2]/15 blur-[140px]" />
      </div>

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
          A first look at the Flow Ledger desktop app — currently being refined with
          our beta community before public release.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-24 max-w-4xl sm:mt-28"
      >
        {/* Desktop app mockup */}
        <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-[#7C6CF2]/25 via-transparent to-transparent blur-3xl" />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_40px_100px_-24px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 text-xs text-white/40">Flow Ledger — Dashboard (Beta)</span>
          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-[220px_1fr] sm:p-7">
            {/* Sidebar */}
            <div className="hidden space-y-2 sm:block">
              {['Dashboard', 'Projects', 'Focus Sessions', 'Insights', 'Calendar'].map(
                (item, i) => (
                  <div
                    key={item}
                    className={`rounded-lg px-3 py-2 text-xs font-medium ${
                      i === 0
                        ? 'bg-[#7C6CF2]/20 text-[#B4A9FF]'
                        : 'text-white/45'
                    }`}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            {/* Main panel */}
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-[11px] text-white/40">Focus time</p>
                  <p className="mt-1 text-xl font-semibold">5h 42m</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-[11px] text-white/40">Deep work sessions</p>
                  <p className="mt-1 text-xl font-semibold">4</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-[11px] text-white/40">Productivity score</p>
                  <p className="mt-1 flex items-center gap-1 text-xl font-semibold text-emerald-300">
                    87 <TrendingUp size={14} />
                  </p>
                </div>
              </div>

              <div className="h-36 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex h-full items-end gap-1.5">
                  {[35, 55, 40, 70, 50, 85, 65, 45, 75, 90, 60, 80, 50, 68].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-full bg-gradient-to-t from-[#7C6CF2]/40 to-[#9C8CFF]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                  <p className="text-xs font-medium">Design review — Flow Ledger</p>
                  <p className="mt-1 text-[11px] text-white/40">Due today &middot; 2h 10m logged</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                  <p className="text-xs font-medium">Weekly AI insight ready</p>
                  <p className="mt-1 text-[11px] text-white/40">Generated 5 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating glassmorphism callouts */}
        {FLOATING_CARDS.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: card.delay * 0.15 }}
            className={`absolute z-10 hidden w-52 rounded-xl border border-white/15 bg-white/[0.06] p-3.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl md:block ${card.className}`}
            style={{
              animation: `float 6s ease-in-out ${card.delay}s infinite`,
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C6CF2]/30 to-[#7C6CF2]/10 text-[#B4A9FF]">
                <card.icon size={15} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold">{card.title}</p>
                <p className="truncate text-[11px] text-white/45">{card.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
