import { motion } from 'framer-motion'
import { Brain, LayoutTemplate, Sparkles, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const STEPS: Array<{
  icon: LucideIcon
  step: string
  title: string
  description: string
}> = [
  {
    icon: LayoutTemplate,
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
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-white/60">
            From invisible tracking to actionable insight — in four simple steps.
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-[3.25rem] left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6CF2]/40 hover:bg-white/[0.05]"
            >
              <span className="absolute right-4 top-4 text-xs font-semibold text-white/20">
                {step.step}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C6CF2]/25 to-[#7C6CF2]/5 text-[#B4A9FF] transition-transform duration-300 group-hover:scale-110">
                <step.icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
