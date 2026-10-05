import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Layers, UserCheck, Maximize2, Zap, Puzzle, ArrowUpRight } from 'lucide-react'

const benefits = [
  {
    id: 'strategy',
    title: 'Business-First Strategy',
    description: 'Every recommendation starts with your goals, constraints, and opportunities—not a one-size-fits-all solution.',
    icon: <TrendingUp className="w-6 h-6 text-[#7234F8]" strokeWidth={2.2} />
  },
  {
    id: 'engineering',
    title: 'Scalable Engineering',
    description: 'Flexible architecture and dependable engineering that can grow with your product, users, and operations.',
    icon: <Layers className="w-6 h-6 text-[#7234F8]" strokeWidth={2.2} />
  },
  {
    id: 'design',
    title: 'Human-Centered Design',
    description: 'Clear, intuitive digital experiences that make sophisticated technology simple to use.',
    icon: <UserCheck className="w-6 h-6 text-[#7234F8]" strokeWidth={2.2} />
  },
  {
    id: 'security',
    title: 'Secure by Design',
    description: 'Security and reliability are considered from discovery through deployment and beyond.',
    icon: <Maximize2 className="w-6 h-6 text-[#7234F8]" strokeWidth={2.2} />
  },
  {
    id: 'delivery',
    title: 'Collaborative Delivery',
    description: 'Transparent communication, shared progress, and a team that works as an extension of yours.',
    icon: <Zap className="w-6 h-6 text-[#7234F8]" strokeWidth={2.2} />
  },
  {
    id: 'partnership',
    title: 'Long-Term Partnership',
    description: 'Ongoing support and practical guidance to help you keep improving after launch.',
    icon: <Puzzle className="w-6 h-6 text-[#7234F8]" strokeWidth={2.2} />
  }
]

export default function Toolkit({ onOpenPricing }) {
  return (
    <section id="toolkit" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative font-sans">
      {/* Top Benefits Pill Badge (Screenshot 3 Match) */}
      <div className="flex justify-center mb-5">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-1 rounded-full bg-[#EDE6FF] text-[#7234F8] text-[13px] font-medium tracking-normal border border-[#D8C7FF]/60 shadow-[0_2px_12px_rgba(114,52,248,0.12)]"
        >
          Benefits
        </motion.span>
      </div>

      {/* Main Section Header (Screenshot 3 Match) */}
      <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#09090B] tracking-tight mb-4 max-w-3xl mx-auto leading-[1.15]"
        >
          Technology That Moves Your Business Forward
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#52525B] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Expertise across the full digital lifecycle—delivered with clarity, care, and commercial focus.
        </motion.p>
      </div>

      {/* 3x2 Benefits Cards Grid (Screenshot 3 Match) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -4 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{ backgroundColor: '#F2EDFC' }}
            className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 text-center flex flex-col items-center shadow-[0_10px_30px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 group cursor-pointer"
          >
            {/* White Circular Icon Container */}
            <div className="w-14 h-14 rounded-full bg-white shadow-xs border border-[#ECE5FF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            {/* Card Title */}
            <h3 className="text-lg sm:text-xl font-bold text-[#09090B] tracking-tight mb-2.5">
              {item.title}
            </h3>

            {/* Card Description */}
            <p className="text-[#52525B] text-xs sm:text-[14px] leading-relaxed font-normal max-w-xs">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
