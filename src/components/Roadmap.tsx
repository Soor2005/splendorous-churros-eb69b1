import { motion } from 'framer-motion'
import {
  BarChart3,
  Cloud,
  Goal,
  Laptop,
  Puzzle,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Status = 'In Development' | 'Coming Soon' | 'Planned'

const STATUS_STYLES: Record<Status, string> = {
  'In Development':
    'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  'Coming Soon': 'border-[#7C6CF2]/40 bg-[#7C6CF2]/10 text-[#B4A9FF]',
  Planned: 'border-white/15 bg-white/5 text-white/50',
}

const ROADMAP: Array<{
  icon: LucideIcon
  title: string
  description: string
  status: Status
}> = [
  {
    icon: Sparkles,
    title: 'AI Weekly Reports',
    description: 'Receive AI-generated productivity summaries and actionable recommendations.',
    status: 'In Development',
  },
  {
    icon: Cloud,
    title: 'Cloud Sync',
    description: 'Securely sync tasks, sessions, projects, and settings across devices.',
    status: 'In Development',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Collaborate with teammates, share projects, and view team productivity.',
    status: 'Coming Soon',
  },
  {
    icon: Laptop,
    title: 'Native macOS App',
    description: 'A native macOS version, built from the ground up for Apple Silicon.',
    status: 'Coming Soon',
  },
  {
    icon: Puzzle,
    title: 'Custom Integrations',
    description: 'Connect Flow Ledger with Google Calendar, Slack, Notion, GitHub, and more.',
    status: 'Coming Soon',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain deeper insights with productivity trends, focus patterns, and custom reports.',
    status: 'Planned',
  },
  {
    icon: Goal,
    title: 'Goals & Habit Tracking',
    description: 'Set goals, build habits, and track streaks alongside your daily focus time.',
    status: 'Planned',
  },
  {
    icon: Smartphone,
    title: 'Mobile Companion App',
    description: 'Check your stats and insights on the go with a lightweight mobile app.',
    status: 'Planned',
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7C6CF2]/40 bg-[#7C6CF2]/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#B4A9FF]">
            🟣 NOW IN BETA
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            What's Coming Next
          </h2>
          <p className="mt-4 text-white/60">
            Flow Ledger is under active development. Here's a look at what our beta
            community is helping us build next.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Vertical timeline line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {ROADMAP.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, x: i % 2 === 0 ? -12 : 12 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6CF2]/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-20px_rgba(124,108,242,0.5)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7C6CF2]/0 blur-2xl transition-colors duration-300 group-hover:bg-[#7C6CF2]/20" />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C6CF2]/25 to-[#7C6CF2]/5 text-[#B4A9FF] transition-transform duration-300 group-hover:scale-110">
                    <item.icon size={20} />
                  </div>
                  <span
                    className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide ${STATUS_STYLES[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
