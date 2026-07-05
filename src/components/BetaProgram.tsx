import { motion } from 'framer-motion'
import { ArrowRight, Award, Headset, MessageSquareHeart, Sparkles, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { WAITLIST_URL } from '../config'

const BENEFITS: Array<{ icon: LucideIcon; title: string }> = [
  { icon: Sparkles, title: 'Early access to new features' },
  { icon: MessageSquareHeart, title: 'Direct feedback to the developer' },
  { icon: Headset, title: 'Priority support' },
  { icon: Award, title: 'Lifetime early adopter badge' },
  { icon: Users, title: 'Exclusive beta community' },
]

export function BetaProgram() {
  return (
    <section id="beta" className="relative overflow-hidden px-4 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C6CF2]/15 blur-[130px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 backdrop-blur-xl sm:px-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7C6CF2]/40 bg-[#7C6CF2]/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#B4A9FF]">
            🟣 NOW IN BETA
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Join the Closed Beta
          </h2>
          <p className="mt-4 text-white/60">
            Flow Ledger is under active development. Early users help shape the
            product before it opens to the public — your feedback goes straight into
            what we build next.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C6CF2]/20 text-[#B4A9FF]">
                <benefit.icon size={16} />
              </div>
              <p className="text-sm font-medium text-white/85">{benefit.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={WAITLIST_URL}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#8C7CFF] to-[#7C6CF2] px-8 py-3.5 text-base font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_15px_40px_-10px_rgba(124,108,242,0.8)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Join the Beta Waitlist
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
