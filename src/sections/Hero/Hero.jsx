import React from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowUpRight } from 'lucide-react'

const partnerLogos = [
  { 
    name: 'logoipsum', 
    icon: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 bg-[#1a1a2e] rounded-sm" />
        <div className="w-4 h-4 bg-[#1a1a2e] rounded-full" />
        <div className="w-4 h-4 bg-[#1a1a2e] rounded-full" />
      </div>
    ) 
  },
  { 
    name: 'LOGOIPSUM', 
    icon: (
      <svg className="w-7 h-7 fill-current text-[#1a1a2e]" viewBox="0 0 24 24">
        <rect x="2" y="9" width="2.5" height="6" rx="1.25" />
        <rect x="6" y="6" width="2.5" height="12" rx="1.25" />
        <rect x="10" y="3" width="2.5" height="18" rx="1.25" />
        <rect x="14" y="6" width="2.5" height="12" rx="1.25" />
        <rect x="18" y="10" width="2.5" height="4" rx="1.25" />
      </svg>
    ) 
  },
  { 
    name: 'logoipsum', 
    icon: (
      <svg className="w-6 h-6 text-[#1a1a2e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4 L10 10 L4 16" />
        <path d="M12 4 L18 10 L12 16" />
        <path d="M8 20 h8" />
      </svg>
    ) 
  },
  { 
    name: 'logoipsum', 
    icon: (
      <svg className="w-14 h-7 text-[#1a1a2e]" viewBox="0 0 56 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M4 12 C4 6.5 7.8 3 12 3 C16.2 3 20 6.5 20 12 C20 17.5 16.2 21 12 21 C7.8 21 4 17.5 4 12Z" />
        <path d="M20 12 C20 6.5 23.8 3 28 3 C32.2 3 36 6.5 36 12 C36 17.5 32.2 21 28 21 C23.8 21 20 17.5 20 12Z" />
        <path d="M36 12 C36 6.5 39.8 3 44 3 C48.2 3 52 6.5 52 12 C52 17.5 48.2 21 44 21 C39.8 21 36 17.5 36 12Z" />
      </svg>
    ) 
  },
  { 
    name: 'LOGOIPSUM', 
    icon: (
      <svg className="w-6 h-6 fill-current text-[#1a1a2e]" viewBox="0 0 24 24">
        <path d="M12 2C9.5 5 9.5 8 11 11c1.5-3 1.5-6-1-9zm-2 5c-2.5 1.5-3.5 4-2 6.5 2-1 3-3.5 2-6.5zm4 0c2.5 1.5 3.5 4 2 6.5-2-1-3-3.5-2-6.5zm-4 6c-2 2-2 5 0 7 1.5-2 1.5-5 0-7zm4 0c2 2 2 5 0 7-1.5-2-1.5-5 0-7zM11.5 18v4h1v-4h-1z" />
      </svg>
    ) 
  }
]

const avatars = [
  {
    img: '/assets/testimonials/founder.png',
    quote: '"Transformed our business"'
  },
  {
    img: '/assets/testimonials/tech_executive.png',
    quote: '"Incredibly fast"'
  },
  {
    img: '/assets/testimonials/operations_director.png',
    quote: '"Worth every penny"'
  },
  {
    img: '/assets/testimonials/product_leader.jpg',
    quote: '"Absolutely amazing"'
  }
]

export default function Hero({ onOpenPricing }) {
  return (
    <section id="hero" className="pt-24 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center relative font-sans">
      {/* Top Badge: Design • Code • Growth */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center mb-6"
      >
        <div className="relative group cursor-pointer select-none rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
          {/* Ambient blue glow underneath in normal state (Screenshot 1) */}
          <div className="absolute -inset-1 rounded-full bg-blue-500/30 opacity-100 group-hover:opacity-0 blur-md transition-opacity duration-300" />
          
          {/* Button Capsule Container */}
          <div className="relative px-5 py-2 rounded-full overflow-hidden border border-blue-400/30 group-hover:border-black/[0.08] shadow-[0_4px_16px_rgba(37,99,235,0.35)] group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-center">
            
            {/* Normal / No Hover State Background (Screenshot 1: Vibrant Blue with glowing white-blue center) */}
            <div 
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
              style={{
                background: 'radial-gradient(ellipse 70% 90% at 50% 50%, #ffffff 0%, #93c5fd 25%, #3b82f6 60%, #1d4ed8 100%)'
              }}
            />

            {/* Hover State Background (Screenshot 2: White pill with soft light-blue center glow) */}
            <div 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(ellipse 65% 85% at 50% 50%, rgba(56,189,248,0.4) 0%, rgba(37,99,235,0.15) 45%, #ffffff 85%)'
              }}
            />

            {/* Text Content */}
            <span className="relative z-10 text-[13px] font-medium tracking-normal text-[#09090B] flex items-center justify-center gap-1.5 leading-none">
              <span>Design</span>
              <span className="text-[10px]">•</span>
              <span>Code</span>
              <span className="text-[10px]">•</span>
              <span>Growth</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Headline (Screenshot 2 Match: Transforming Ideas Into Digital \n Solutions) */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-[#09090B] leading-[1.1] tracking-tight max-w-5xl mx-auto"
      >
        Transforming Ideas Into Digital<br className="hidden sm:inline" /> Solutions
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 text-[#52525B] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal"
      >
        Flera Chilliz LLC designs and delivers secure, scalable technology that helps ambitious businesses build, launch, and grow.
      </motion.p>

      {/* CTA Button: Start a project */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-7 flex items-center justify-center"
      >
        <button
          onClick={onOpenPricing}
          className="bg-[#7234F8] hover:bg-white text-white hover:text-[#09090B] border border-transparent hover:border-[#E4E4E7] px-8 py-3.5 rounded-full text-sm font-semibold shadow-[0_8px_25px_rgba(114,52,248,0.4)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          Start a project
        </button>
      </motion.div>

      {/* Trust & Reviews Badge Pill (Screenshot 2 Match) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 inline-flex items-center gap-3 bg-white border border-[#E4E4E7] rounded-full px-4 sm:px-5 py-2 shadow-xs"
      >
        {/* Avatars Stack with Pop-up Tooltips on Hover */}
        <div className="flex items-center -space-x-2">
          {avatars.map((item, idx) => (
            <div key={idx} className="relative group/avatar">
              {/* Pop-up Tooltip on Hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 scale-90 pointer-events-none group-hover/avatar:opacity-100 group-hover/avatar:scale-100 transition-all duration-200 ease-out z-50 whitespace-nowrap">
                <div className="bg-white border border-[#EDE6FF] px-3.5 py-1.5 rounded-full shadow-[0_8px_25px_rgba(114,52,248,0.2)] flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-semibold text-[#7234F8] tracking-tight">
                    {item.quote}
                  </span>
                </div>
                <div className="w-2.5 h-2.5 bg-white border-r border-b border-[#EDE6FF] rotate-45 mx-auto -mt-1.5 shadow-xs" />
              </div>

              {/* Avatar Image */}
              <img
                src={item.img}
                alt={`Client ${idx + 1}`}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs transition-all duration-300 group-hover/avatar:scale-125 group-hover/avatar:z-30 group-hover/avatar:shadow-md cursor-pointer relative z-10"
              />
            </div>
          ))}
        </div>

        {/* 5 Stars and Text */}
        <div className="flex items-center gap-2 text-left">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#7234F8] text-[#7234F8]" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-semibold text-[#09090B] tracking-tight">
            Trusted technology partner for modern businesses
          </span>
        </div>
      </motion.div>

      {/* Client Logos Revolving Marquee Ticker (Screenshot 2 Style) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-14 w-full overflow-hidden relative py-5"
      >
        {/* Left and Right gradient fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#e4e7ec] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#e4e7ec] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity
          }}
          className="flex items-center gap-14 sm:gap-20 whitespace-nowrap w-max"
        >
          {/* Duplicated 4 times for a seamless 100% infinite revolving loop */}
          {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2.5 sm:gap-3 text-[#1a1a2e] shrink-0">
              {logo.icon}
              {logo.name && (
                <span className="text-sm sm:text-base font-bold tracking-wide text-[#1a1a2e]">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

