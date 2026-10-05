import React, { useState } from 'react'
import { motion } from 'framer-motion'

const marqueeLogos = [
  {
    name: 'Wave',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-current text-zinc-600" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm5.31-3.1L6.1 5.69C7.45 4.63 9.15 4 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.55-1.69 4.9z"/>
      </svg>
    )
  },
  {
    name: 'Petals',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-current text-zinc-600" viewBox="0 0 24 24">
        <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm-6 6a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0-4-4zm12 0a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm-6 6a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0-4-4z"/>
      </svg>
    )
  },
  {
    name: 'Spark',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-current text-zinc-600" viewBox="0 0 24 24">
        <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/>
      </svg>
    )
  },
  {
    name: 'Target',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-current stroke-[2.2] text-zinc-600" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
      </svg>
    )
  },
  {
    name: 'NotionStyle',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-current text-zinc-600" viewBox="0 0 24 24">
        <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3h13A1.5 1.5 0 0 1 20 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19.5v-15zM8.5 7v10h2.5v-5.5l4.5 5.5H18V7h-2.5v5.5L11 7H8.5z"/>
      </svg>
    )
  },
  {
    name: 'Lightning',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-current text-zinc-600" viewBox="0 0 24 24">
        <path d="M11 21l1-7H7l6-11-1 7h5l-6 11z"/>
      </svg>
    )
  },
  {
    name: 'Infinity',
    icon: (
      <svg className="w-9 h-9 sm:w-10 sm:h-10 fill-none stroke-current stroke-[2.4] text-zinc-600" viewBox="0 0 24 24">
        <path d="M18.178 8c3 0 4.5 2 4.5 4s-1.5 4-4.5 4c-2.3 0-3.962-1.782-5.178-3.178C11.782 11.438 10.12 9.656 7.822 9.656c-3 0-4.5 2-4.5 4s1.5 4 4.5 4c2.3 0 3.962-1.782 5.178-3.178C14.218 13.094 15.88 11.312 18.178 11.312z"/>
      </svg>
    )
  }
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
      setEmail('')
    }
  }

  return (
    <section id="newsletter" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative font-sans">
      {/* Newsletter Outer Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white rounded-[36px] border border-black/5 shadow-[0_16px_50px_rgba(0,0,0,0.05)] pt-10 sm:pt-14 pb-8 sm:pb-10 px-8 sm:px-14 text-center relative overflow-hidden flex flex-col justify-between"
      >
        <div>
          {/* Dark Badge Pill */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#18181b] text-white text-xs font-normal tracking-wide shadow-md">
              Newsletter
            </span>
          </div>

          {/* Heading - Thinner font weight matching left reference */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-0.02em] text-[#000000] leading-[1.18] mb-3 max-w-xl mx-auto">
            Join 100+ Experts Taking Their Brand to the Next Level
          </h2>

          {/* Subtitle */}
          <p className="text-[#666666] text-sm sm:text-base font-normal max-w-md mx-auto mb-8">
            Unlock top-tier design and scale your brand with confidence
          </p>

          {/* Email Form - Responsive: Column on narrow windows, Horizontal row on wider desktop windows */}
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-12 w-full">
            <div className="w-full relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white border border-black/10 rounded-full px-6 py-3.5 text-sm text-[#000000] placeholder:text-[#999999] shadow-sm text-center md:text-left focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.03, 
                rotate: -2, 
                y: -3,
                boxShadow: '0 18px 30px -5px rgba(0, 0, 0, 0.35)' 
              }}
              whileTap={{ scale: 0.97, rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="w-full md:w-auto bg-[#18181b] hover:bg-[#000000] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.25)] cursor-pointer whitespace-nowrap relative overflow-hidden group border border-white/10 text-center shrink-0"
            >
              <span className="relative z-10">{submitted ? 'Subscribed!' : 'Subscribe'}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </motion.button>
          </form>
        </div>

        {/* Infinite Scrolling Logo Marquee Ticker inside bottom of Card (Matching Screenshot 2) */}
        <div className="pt-6 border-t border-black/5 overflow-hidden relative w-full -mb-2">
          {/* Left & Right gradient fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ 
              duration: 20, 
              ease: 'linear', 
              repeat: Infinity 
            }}
            className="flex items-center gap-12 sm:gap-16 whitespace-nowrap w-max opacity-60 hover:opacity-90 transition-opacity"
          >
            {/* Duplicated array 3 times for smooth 100% infinite marquee loop */}
            {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center shrink-0">
                {logo.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
