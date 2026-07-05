import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS: Array<{ question: string; answer: string }> = [
  {
    question: 'Is Flow Ledger free during beta?',
    answer:
      'Yes. Flow Ledger is completely free for everyone who joins the closed beta. Pricing for the public release has not been finalized.',
  },
  {
    question: 'Which operating systems are supported?',
    answer:
      'The beta currently supports Windows 10 and 11. Support for additional platforms is on the roadmap.',
  },
  {
    question: 'Is macOS coming?',
    answer:
      'Yes, a native macOS app is in development and listed on our roadmap as "Coming Soon."',
  },
  {
    question: 'Will cloud sync be available?',
    answer:
      'Cloud sync is actively being built so your projects, sessions, and settings stay in sync across devices.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'Yes. Flow Ledger tracks activity locally first, so core tracking continues to work without an internet connection.',
  },
  {
    question: 'How can I provide feedback?',
    answer:
      'Beta users get access to a private feedback channel and direct communication with the team building Flow Ledger.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative px-4 py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-white/60">
            Everything you need to know about the Flow Ledger beta.
          </p>
        </motion.div>

        <div className="mt-14 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-white/90 sm:text-base">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/60"
                  >
                    <ChevronDown size={15} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/55">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
