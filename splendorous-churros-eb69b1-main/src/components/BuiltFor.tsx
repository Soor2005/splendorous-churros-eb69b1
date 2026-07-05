import { motion } from 'framer-motion'
import { Code2, GraduationCap, Palette, Rocket, Briefcase, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const AUDIENCES: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Code2,
    title: 'Developers',
    description: 'Track deep work across your editor, terminal, and tools without breaking flow.',
  },
  {
    icon: Palette,
    title: 'Designers',
    description: 'See how much time each project really takes, from research to final polish.',
  },
  {
    icon: Briefcase,
    title: 'Freelancers',
    description: 'Turn tracked hours into accurate, defensible client invoices — automatically.',
  },
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Understand your study habits and build focus routines that actually stick.',
  },
  {
    icon: Rocket,
    title: 'Founders',
    description: 'Know exactly where your hours go across product, sales, and everything else.',
  },
  {
    icon: UsersRound,
    title: 'Remote Teams',
    description: 'Give distributed teams shared visibility into effort without micromanaging.',
  },
]

export function BuiltFor() {
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
            Built For
          </h2>
          <p className="mt-4 text-white/60">
            Wherever your work happens, Flow Ledger adapts to how you actually get
            things done.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6CF2]/40 hover:bg-white/[0.05]"
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
