import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function About({ onOpenPricing }) {
  const navigate = useNavigate()

  return (
    <section
      id="about"
      className="relative font-sans bg-[#FAFAFA] overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* About Badge */}
        <div className="flex justify-center mb-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#EDE6FF] text-[#7234F8] border border-[#7234F8]/20 shadow-xs"
          >
            About
          </motion.span>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#09090B] tracking-tight leading-[1.12] mb-6"
        >
          Your Technology Partner for What's Next
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#52525B] leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Flera chilliz FZ LLC is a modern technology and IT solutions company
          helping organizations turn complex ideas into capable digital products.
          From UI/UX and custom software to cloud, cyber security, AI,
          automation, DevOps, and digital marketing, we bring the right expertise
          together to create measurable progress.
        </motion.p>

        {/* Meet Flera Chilliz Button - Navigates to /about page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={() => navigate('/about')}
            className="bg-[#7234F8] hover:bg-[#5B21D4] text-white px-9 py-3.5 rounded-full text-sm sm:text-base font-semibold shadow-[0_8px_25px_rgba(114,52,248,0.38)] hover:shadow-[0_12px_36px_rgba(114,52,248,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <span>Meet Flera Chilliz</span>
            <ArrowUpRight className="w-4.5 h-4.5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}