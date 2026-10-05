import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    role: 'Product Leader',
    company: 'Digital Platform Partner',
    avatar: '/assets/testimonials/product_leader.jpg',
    quote: 'Flera Chilliz brought structure, speed, and strong technical judgement to a complex digital initiative.'
  },
  {
    id: 2,
    role: 'Operations Director',
    company: 'Growth-Stage Technology Company',
    avatar: '/assets/testimonials/operations_director.png',
    quote: 'Their team translated our requirements into a scalable product experience our customers can rely on.'
  },
  {
    id: 3,
    role: 'Technology Executive',
    company: 'Enterprise Services Organization',
    avatar: '/assets/testimonials/tech_executive.png',
    quote: 'From discovery to launch, Flera Chilliz was responsive, practical, and relentlessly focused on quality.'
  },
  {
    id: 4,
    role: 'Founder',
    company: 'B2B SaaS Company',
    avatar: '/assets/testimonials/founder.png',
    quote: 'The collaboration gave us the confidence to modernize our platform without compromising our roadmap.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Testimonials Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#F3ECFF] text-[#7D33FF] text-xs font-bold tracking-wide">
            Testimonials
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-black leading-tight mb-3">
            Built for Ambitious Teams
          </h2>
          <p className="text-[#555555] text-xs sm:text-base font-normal leading-relaxed">
            Long-term client relationships are built on clear communication, quality delivery, and dependable results.
          </p>
        </div>

        {/* 2x2 Grid on Desktop/Tablet, Stacked 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#F3ECFF] border border-[#7D33FF]/15 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Profile Avatar */}
              <img
                src={item.avatar}
                alt={item.role}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mb-4 border-2 border-white shadow-sm"
              />

              {/* Title & Organization */}
              <h3 className="font-bold text-black text-lg sm:text-xl tracking-tight mb-1">
                {item.role}
              </h3>
              <p className="text-[#555555] text-xs sm:text-sm font-normal mb-3">
                {item.company}
              </p>

              {/* 5-Star Rating */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#7D33FF] text-[#7D33FF]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#444444] text-xs sm:text-sm leading-relaxed font-normal">
                "{item.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
