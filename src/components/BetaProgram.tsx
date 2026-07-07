import { motion } from 'framer-motion'
import {
  Award,
  Headphones,
  MessageSquareHeart,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { WaitlistForm } from './WaitlistForm'

const BENEFITS: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Sparkles, label: 'Early access to new features' },
  { icon: MessageSquareHeart, label: 'Direct feedback to the developer' },
  { icon: Headphones, label: 'Priority support' },
  { icon: Award, label: 'Lifetime early adopter badge' },
  { icon: UsersRound, label: 'Exclusive beta community' },
]

export function BetaProgram() {
  return (
    <section id="beta" className="relative px-4 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C6CF2]/20 blur-[130px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 backdrop-blur-xl sm:px-14"
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7C6CF2]/40 bg-[#7C6CF2]/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#B4A9FF] shadow-[0_0_20px_-4px_rgba(124,108,242,0.8)]">
            🟣 CLOSED BETA
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Join the Closed Beta
          </h2>
          <p className="mx-auto mt-4 text-white/60">
            Flow Ledger is under active development, and early users are helping shape
            what it becomes. Join the waitlist for a chance at early access and a
            direct line to the team building it.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C6CF2]/25 to-[#7C6CF2]/5 text-[#B4A9FF]">
                <benefit.icon size={16} />
              </div>
              <p className="text-sm font-medium text-white/85">{benefit.label}</p>
            </motion.div>
          ))}
        </div>

        <WaitlistForm />
      </motion.div>
    </section>
  )
}
