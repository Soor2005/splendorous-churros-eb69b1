import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 4800, suffix: '+', label: 'Beta testers already onboard' },
  { value: 92000, suffix: '+', label: 'Focus sessions completed in beta' },
  { value: 120000, suffix: '+', label: 'AI productivity insights generated' },
]

export function Stats() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 sm:grid-cols-3">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 text-center backdrop-blur"
    >
      <p className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-3 text-sm text-white/55">{label}</p>
    </motion.div>
  )
}
