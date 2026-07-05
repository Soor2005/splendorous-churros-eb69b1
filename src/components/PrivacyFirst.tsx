import { motion } from 'framer-motion'
import { Eye, HardDrive, Lock, ShieldCheck, UserCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const PRINCIPLES: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: HardDrive,
    title: 'Local-First Tracking',
    description: 'Activity is tracked and processed on your device first, by default.',
  },
  {
    icon: UserCheck,
    title: 'Your Data Belongs to You',
    description: 'You can export or delete everything Flow Ledger has recorded, anytime.',
  },
  {
    icon: Lock,
    title: 'No Selling of Personal Data',
    description: 'We will never sell your activity, insights, or personal information.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    description: 'Encryption and least-privilege access are built in from day one.',
  },
  {
    icon: Eye,
    title: 'Transparent Analytics',
    description: 'Clear, plain-language explanations of exactly what is measured and why.',
  },
]

export function PrivacyFirst() {
  return (
    <section className="relative px-4 py-28">
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
            Productivity tracking should never come at the cost of trust. Privacy is a
            foundation, not an afterthought.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6CF2]/40 hover:bg-white/[0.05] ${
                i === 3 ? 'sm:col-span-1' : ''
              } ${i >= 3 ? 'lg:col-start-auto' : ''}`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7C6CF2]/0 blur-2xl transition-colors duration-300 group-hover:bg-[#7C6CF2]/20" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C6CF2]/25 to-[#7C6CF2]/5 text-[#B4A9FF] transition-transform duration-300 group-hover:scale-110">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
