import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowUpRight } from 'lucide-react'

const faqs = [
  {
    question: 'What services does Flera Chilliz LLC provide?',
    answer: 'We offer end-to-end technology and digital product services, including modern web app development, UI/UX design systems, cloud architecture, API integrations, and ongoing IT support.'
  },
  {
    question: 'How do you begin a new technology project?',
    answer: 'We start with an initial alignment session to understand your goals, technical requirements, and timeline. From there, we define a clear scope, architecture plan, and immediate project milestones.'
  },
  {
    question: 'Can you work with our existing team and systems?',
    answer: 'Yes! We seamlessly integrate with your in-house engineering and design teams, adopting your tools, code repositories, and communication channels.'
  },
  {
    question: 'How do you approach security and reliability?',
    answer: 'Security is embedded into every step of our engineering process—utilizing encrypted communications, strict code audits, automated testing, and SOC-2 compliant cloud infrastructure.'
  },
  {
    question: 'What engagement models are available?',
    answer: 'We provide flexible engagement options including project-based deliverables, dedicated team extensions, and flexible subscription plans tailored to your ongoing technical needs.'
  },
  {
    question: 'Can I pause or cancel my subscription anytime?',
    answer: "Yes, absolutely! Billing cycles are based on a flexible 31-day period. If you sign up and decide to pause, your billing cycle freezes and remaining service days can be used whenever you're ready."
  }
]

export default function FAQ({ onOpenPricing }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative font-sans">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#F3ECFF] text-[#7D33FF] text-xs font-bold tracking-wide">
            FAQ
          </span>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-black leading-tight mb-3">
            Questions, Answered
          </h2>
          <p className="text-[#555555] text-xs sm:text-base font-normal leading-relaxed">
            Straightforward answers for teams evaluating their next technology initiative.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-3.5 mb-14 sm:mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="bg-[#f4f5f8] border border-black/[0.04] rounded-2xl sm:rounded-[22px] overflow-hidden transition-all duration-200 group"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 sm:py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`font-semibold text-sm sm:text-base tracking-tight pr-2 transition-colors duration-200 ${
                    isOpen ? 'text-[#2563EB]' : 'text-black group-hover:text-[#2563EB]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className="shrink-0 flex items-center justify-center transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#2563EB]" />
                    ) : (
                      <Plus className="w-5 h-5 text-zinc-400 group-hover:text-[#2563EB] transition-colors" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-5 text-[#555555] text-xs sm:text-sm leading-relaxed border-t border-black/5 pt-3 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* CTA Card Section Immediately Below FAQ */}
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-[#F2EDFC] border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] py-10 px-6 sm:py-12 sm:px-8 text-center shadow-xs relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#09090B] tracking-tight leading-snug mb-3">
              Ready to Build What’s Next?
            </h3>
            
            <p className="text-[#3F3F46] text-sm sm:text-[15px] font-normal max-w-lg mx-auto mb-6 leading-relaxed">
              Tell us what you’re planning. We’ll help you define the right path forward.
            </p>

            <div className="flex justify-center mb-4">
              <button
                onClick={onOpenPricing}
                className="bg-[#7234F8] hover:bg-black text-white px-7 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-[13px] sm:text-[14px] shadow-[0_4px_16px_rgba(114,52,248,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-all duration-200 cursor-pointer inline-flex items-center justify-center"
              >
                <span>Start a conversation</span>
              </button>
            </div>

            <p className="text-[#52525B] text-[13px] sm:text-[14px] font-normal leading-relaxed max-w-[260px] mx-auto text-center">
              No pressure—just a focused conversation with our technology team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
