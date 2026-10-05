import React from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export default function Pricing({ onOpenPricing }) {
  const standardFeatures = [
    { text: 'Custom AI chatbot development', included: true },
    { text: 'Basic natural language processing', included: true },
    { text: 'Up to 3 integrations', included: true },
    { text: 'Monthly performance reports', included: true },
    { text: 'Email support', included: true },
    { text: 'Dedicated account manager', included: false },
    { text: 'Custom analytics dashboard', included: false },
    { text: 'Regular updates and optimization', included: false },
  ]

  const premiumFeatures = [
    { text: 'Advanced AI chatbot development', included: true },
    { text: 'Enhanced natural language processing', included: true },
    { text: 'Unlimited integrations', included: true },
    { text: 'Weekly performance reports', included: true },
    { text: 'Priority email and phone support', included: true },
    { text: 'Dedicated account manager', included: true },
    { text: 'Custom analytics dashboard', included: true },
    { text: 'Regular updates and optimization', included: true },
  ]

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative font-sans">
      {/* ========================================================================= */}
      {/* 1. Pre-pricing Project Inquiry Banner (Screenshot 1 Match)                */}
      {/* ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-20 sm:mb-24"
      >
        <p className="text-[#52525B] text-base sm:text-lg font-semibold mb-2">
          Have a project in mind?
        </p>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#09090B] tracking-tight leading-tight">
          Let's turn your idea into a powerful digital product.
        </h3>
      </motion.div>

      {/* ========================================================================= */}
      {/* 2. Main Section Header (Screenshot 1 & 2 Match)                           */}
      {/* ========================================================================= */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        {/* Top 'Plans' Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center mb-5"
        >
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#EDE6FF] text-[#7234F8] text-[13px] font-medium tracking-normal border border-[#D8C7FF]/60 shadow-[0_2px_12px_rgba(114,52,248,0.12)]">
            Plans
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#09090B] tracking-tight mb-4 max-w-3xl mx-auto leading-[1.15]"
        >
          Flexible Engagements, Built Around Your Goals
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#52525B] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Choose focused support for a defined initiative or a dedicated technology partnership for ongoing growth.
        </motion.p>
      </div>

      {/* ========================================================================= */}
      {/* 3. 2 Side-by-Side Pricing Cards Grid (Screenshots 2, 3, 4 Match)          */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* ------------------------------------------------------------------------- */}
        {/* CARD 1: Standard Plan                                                     */}
        {/* ------------------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ backgroundColor: '#f3ecff' }}
          className="border border-[#E2D9F8] rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_10px_35px_rgba(114,52,248,0.03)]"
        >
          <div>
            {/* Plan Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight mb-3">
              Standard
            </h3>

            {/* Price Row */}
            <div className="flex items-baseline gap-1.5 mb-1.5">
              <span className="text-4xl sm:text-[46px] font-extrabold text-[#7234F8] tracking-tight leading-none">
                2,499
              </span>
              <span className="text-[#7234F8] font-bold text-base sm:text-lg">
                / month
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-[#71717A] text-sm sm:text-[15px] font-normal mb-8">
              Perfect for starters and small teams.
            </p>

            {/* Features List */}
            <div className="space-y-3.5">
              {standardFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {item.included ? (
                    <div className="w-5 h-5 rounded-full border border-[#7234F8] flex items-center justify-center text-[#7234F8] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center text-zinc-400 shrink-0">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  )}
                  <span className={`text-sm sm:text-[15px] ${item.included ? 'text-[#09090B] font-medium' : 'text-[#71717A] font-normal'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10">
            <button
              onClick={onOpenPricing}
              className="w-full bg-white hover:bg-zinc-50 text-[#09090B] hover:text-[#2563EB] font-semibold text-base py-3.5 rounded-full text-center shadow-xs border border-black/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Get started
            </button>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------------------- */}
        {/* CARD 2: Premium Plan                                                      */}
        {/* ------------------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ backgroundColor: '#f3ecff' }}
          className="border border-[#E2D9F8] rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_10px_35px_rgba(114,52,248,0.03)]"
        >
          <div>
            {/* Plan Name with Crown */}
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight">
                Premium
              </h3>
              <span className="text-xl leading-none">👑</span>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-1.5 mb-1.5">
              <span className="text-4xl sm:text-[46px] font-extrabold text-[#7234F8] tracking-tight leading-none">
                5,499
              </span>
              <span className="text-[#7234F8] font-bold text-base sm:text-lg">
                / month
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-[#71717A] text-sm sm:text-[15px] font-normal mb-8">
              Exclusive and advanced features
            </p>

            {/* Features List */}
            <div className="space-y-3.5">
              {premiumFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#7234F8] flex items-center justify-center text-[#7234F8] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-[15px] text-[#09090B] font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10">
            <button
              onClick={onOpenPricing}
              className="w-full bg-white hover:bg-zinc-50 text-[#09090B] hover:text-[#2563EB] font-semibold text-base py-3.5 rounded-full text-center shadow-xs border border-black/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Get started
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
