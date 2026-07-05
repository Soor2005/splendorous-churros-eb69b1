import { motion } from 'framer-motion'
import { ArrowRight, Bell, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { WAITLIST_URL } from '../config'

export function FinalCTA() {
  return (
    <section className="relative px-4 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C6CF2]/20 blur-[130px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center backdrop-blur-xl sm:px-16"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7C6CF2]/40 bg-[#7C6CF2]/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#B4A9FF] shadow-[0_0_20px_-4px_rgba(124,108,242,0.8)]">
          🟣 NOW IN BETA
        </span>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to experience the future of productivity?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Join the beta waitlist and be notified when Flow Ledger is ready for public
          release.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WAITLIST_URL}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#8C7CFF] to-[#7C6CF2] px-9 py-4 text-base font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_15px_40px_-10px_rgba(124,108,242,0.8)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Join Beta Waitlist
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={WAITLIST_URL}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-9 py-4 text-base font-semibold text-white/85 backdrop-blur transition-colors hover:bg-white/10"
          >
            <Bell size={16} />
            Notify Me at Launch
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/45">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles size={15} /> Free during beta
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users size={15} /> Limited early-access spots
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={15} /> No spam, ever
          </span>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-white/40">
          <span className="font-semibold text-white/55">Beta Notice:</span> Flow
          Ledger is under active development. Some features are still being refined
          ahead of public release. Your feedback helps us shape every update.
        </p>
      </motion.div>
    </section>
  )
}
