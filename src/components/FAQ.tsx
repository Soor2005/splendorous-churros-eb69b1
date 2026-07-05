import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const FAQS: Array<{ question: string; answer: string }> = [
  {
    question: 'Is Flow Ledger free during beta?',
    answer:
      'Yes. Flow Ledger is completely free while it\'s in private beta. We\'ll share pricing details well ahead of the public launch, and beta users will get preferential early-adopter pricing.',
  },
  {
    question: 'Which operating systems are supported?',
    answer:
      'The beta currently runs on Windows 10 and 11. We\'re actively working on support for additional platforms based on beta community demand.',
  },
  {
    question: 'Is macOS coming?',
    answer:
      'Yes — a native macOS app is on our roadmap and currently marked as "Coming Soon." Join the waitlist to be notified the moment it\'s ready to test.',
  },
  {
    question: 'Will cloud sync be available?',
    answer:
      'Cloud sync is in active development. It will let you securely sync tasks, sessions, projects, and settings across all your devices once released.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'Yes. Flow Ledger tracks activity locally on your device first, so tracking keeps working even without an internet connection.',
  },
  {
    question: 'How can I provide feedback?',
    answer:
      'Beta users get access to a private community and direct feedback channel with the developer, so your input shapes what gets built next.',
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
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? 'border-[#7C6CF2]/40 bg-white/[0.05]'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold sm:text-base">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7C6CF2]/15 text-[#B4A9FF]"
                  >
                    <Plus size={15} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/60">
                        {faq.answer}
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
