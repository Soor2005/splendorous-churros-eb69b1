import { motion } from 'framer-motion'
import { CalendarClock, Clock, Sparkles, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const FEATURES: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Clock,
    title: 'Automatic Time Tracking',
    description:
      'Flow Ledger detects what you\'re working on and logs it automatically — no start/stop timers, no manual entries.',
  },
  {
    icon: Sparkles,
    title: 'AI Productivity Insights',
    description:
      'Get personalized, AI-generated insights that reveal your peak focus hours and where your time really goes.',
  },
  {
    icon: Target,
    title: 'Focus Sessions & Pomodoro Timer',
    description:
      'Built-in focus sessions and a Pomodoro timer help you work in distraction-free sprints and recover faster.',
  },
  {
    icon: CalendarClock,
    title: 'Projects, Tasks & Calendar Integration',
    description:
      'Organize work into projects and tasks, then sync with your calendar to see effort and schedule side by side.',
  },
]

export function Features() {
  return (
    <section id="features" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Built to disappear into your workflow
          </h2>
          <p className="mt-4 text-white/60">
            Flow Ledger works silently in the background so you can focus on the work —
            not on tracking it.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6CF2]/40 hover:bg-white/[0.05]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7C6CF2]/0 blur-2xl transition-colors duration-300 group-hover:bg-[#7C6CF2]/20" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C6CF2]/25 to-[#7C6CF2]/5 text-[#B4A9FF] transition-transform duration-300 group-hover:scale-110">
                <feature.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
