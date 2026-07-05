import { motion } from 'framer-motion'
import { ArrowRight, Timer, TrendingUp, Zap } from 'lucide-react'
import { WAITLIST_URL } from '../config'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-40 pb-24 sm:pt-48">
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#7C6CF2]/25 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-[#5B4FE0]/20 blur-[110px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7C6CF2]/40 bg-[#7C6CF2]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#B4A9FF] shadow-[0_0_20px_-4px_rgba(124,108,242,0.8)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B4A9FF]" />
            NOW IN PRIVATE BETA
          </div>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Track Every Minute.
            <br />
            Stay Focused.{' '}
            <span className="bg-gradient-to-r from-[#7C6CF2] via-[#9C8CFF] to-[#7C6CF2] bg-clip-text text-transparent">
              Get More Done.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
            Flow Ledger runs quietly in the background, automatically tracking your work
            and measuring real productivity — so you can build focus without ever
            touching a manual timer. A premium productivity app, currently in closed
            beta.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WAITLIST_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#8C7CFF] to-[#7C6CF2] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_10px_30px_-8px_rgba(124,108,242,0.7)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Join the Beta Waitlist
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/85 backdrop-blur transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>

          <p className="mt-5 text-xs text-white/40">
            Limited beta spots &middot; Windows 10 &amp; 11 &middot; No spam, ever
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <AppMockup />
        </motion.div>
      </div>
    </section>
  )
}

function AppMockup() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[#7C6CF2]/30 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.02] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 text-xs text-white/40">Flow Ledger</span>
        </div>

        <div className="space-y-5 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/40">Today's focus time</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight">5h 42m</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7C6CF2]/20 text-[#B4A9FF]">
              <Timer size={20} />
            </div>
          </div>

          <div className="h-24 rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <div className="flex h-full items-end gap-1.5">
              {[40, 65, 30, 80, 55, 90, 70, 45, 60, 95, 50, 75].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full bg-gradient-to-t from-[#7C6CF2]/40 to-[#9C8CFF]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
              <TrendingUp size={16} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Productivity up 23% this week</p>
              <p className="text-xs text-white/40">AI insight</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C6CF2]/20 text-[#B4A9FF]">
              <Zap size={16} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Focus session in progress</p>
              <p className="text-xs text-white/40">25:00 remaining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
