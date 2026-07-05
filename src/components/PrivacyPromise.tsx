import { motion } from 'framer-motion'
import { Eye, HardDrive, Lock, ShieldCheck, UserCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const PRINCIPLES: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: HardDrive,
    title: 'Local-first tracking',
    description: 'Activity is tracked and stored on your device first, by default.',
  },
  {
    icon: UserCheck,
    title: 'Your data belongs to you',
    description: 'Export or delete your data at any time — it\'s always yours.',
  },
  {
    icon: ShieldCheck,
    title: 'No selling of personal data',
    description: 'We don\'t sell, rent, or share your data with advertisers. Ever.',
  },
  {
    icon: Lock,
    title: 'Secure by design',
    description: 'Data is encrypted in transit and at rest wherever it\'s stored.',
  },
  {
    icon: Eye,
    title: 'Transparent analytics',
    description: 'We\'ll always tell you exactly what\'s tracked and why.',
  },
]

export function PrivacyPromise() {
  return (
    <section id="privacy" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Built With Privacy
          </h2>
          <p className="mt-4 text-white/60">
            Productivity tracking should never come at the cost of your privacy.
            Here's how we're designing Flow Ledger from day one.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6CF2]/40 hover:bg-white/[0.05] ${
                i === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7C6CF2]/0 blur-2xl transition-colors duration-300 group-hover:bg-[#7C6CF2]/20" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C6CF2]/25 to-[#7C6CF2]/5 text-[#B4A9FF] transition-transform duration-300 group-hover:scale-110">
                <principle.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
