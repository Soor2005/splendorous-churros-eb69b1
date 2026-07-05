import { motion } from 'framer-motion'
import { Brain, LayoutGrid, Sparkles, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const STEPS: Array<{
  icon: LucideIcon
  step: string
  title: string
  description: string
}> = [
  {
    icon: LayoutGrid,
    step: '01',
    title: 'Work Normally',
    description: 'Flow Ledger runs quietly in the background.',
  },
  {
    icon: Sparkles,
    step: '02',
    title: 'Automatic Tracking',
    description: 'Apps, websites and work sessions are categorized automatically.',
  },
  {
    icon: Brain,
    step: '03',
    title: 'AI Analysis',
    description: 'Your productivity patterns are analyzed to generate insights.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Improve Every Day',
    description: 'Understand where your time goes and build better habits.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-white/60">
            No setup, no manual timers. Flow Ledger quietly does the work for you.
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line for large screens */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6CF2]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C6CF2]/25 to-[#7C6CF2]/5 text-[#B4A9FF] transition-transform duration-300 group-hover:scale-110">
                  <step.icon size={22} />
                </div>
                <span className="text-xs font-semibold tracking-widest text-white/25">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
