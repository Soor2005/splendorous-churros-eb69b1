import { motion } from 'framer-motion'
import {
  BarChart3,
  Cloud,
  Compass,
  Laptop,
  ListChecks,
  Puzzle,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Status = 'In Development' | 'Coming Soon' | 'Planned'

const STATUS_STYLES: Record<Status, string> = {
  'In Development':
    'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
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
    description:
      'Receive AI-generated productivity summaries and actionable recommendations.',
    status: 'In Development',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Collaborate with teammates, share projects, and view team productivity.',
    status: 'Coming Soon',
  },
  {
    icon: Cloud,
    title: 'Cloud Sync',
    description: 'Securely sync tasks, sessions, projects, and settings across devices.',
    status: 'In Development',
  },
  {
    icon: Laptop,
    title: 'Native macOS App',
    description: 'A native macOS version is currently in development and coming soon.',
    status: 'Coming Soon',
  },
  {
    icon: Puzzle,
    title: 'Custom Integrations',
    description: 'Connect Flow Ledger with Google Calendar, Slack, Notion, GitHub, and more.',
    status: 'Planned',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain deeper insights with productivity trends, focus patterns, and reports.',
    status: 'Planned',
  },
  {
    icon: ListChecks,
    title: 'Goals & Habit Tracking',
    description: 'Set goals, build habits, and track progress alongside your tracked time.',
    status: 'Planned',
  },
  {
    icon: Smartphone,
    title: 'Mobile Companion App',
    description: 'Check insights and manage focus sessions on the go from your phone.',
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
            <Compass size={12} /> ROADMAP
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            What&apos;s Coming Next
          </h2>
          <p className="mt-4 text-white/60">
            Flow Ledger is under active development. Here&apos;s a look at what&apos;s
            being built for beta users next.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#7C6CF2]/50 via-white/10 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-6 sm:space-y-8">
            {ROADMAP.map((item, i) => {
              const alignRight = i % 2 === 1
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: alignRight ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
                  className={`relative flex items-start gap-5 sm:w-1/2 ${
                    alignRight ? 'sm:ml-auto sm:flex-row-reverse sm:text-right sm:pl-10' : 'sm:pr-10'
                  }`}
                >
                  <span className="absolute left-0 top-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0B0B12] text-[#B4A9FF] sm:static">
                    <item.icon size={22} />
                  </span>

                  <div
                    className={`group relative ml-[4.5rem] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6CF2]/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-20px_rgba(124,108,242,0.5)] sm:ml-0`}
                  >
                    <div
                      className={`flex items-center gap-3 ${alignRight ? 'sm:flex-row-reverse' : ''}`}
                    >
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span
                        className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${STATUS_STYLES[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
