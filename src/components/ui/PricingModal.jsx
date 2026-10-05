import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'

export default function PricingModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white text-[#000000] rounded-[36px] max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-black/10 z-10 my-8 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#888888] hover:text-[#000000] flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000000] text-white text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0D49FF]" />
              Plans & Memberships
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
              Flexible Membership Options
            </h3>
            <p className="text-[#888888] text-sm mt-2 font-normal max-w-md mx-auto">
              Get direct access to senior IT & design expertise with predictable monthly plans. Pause or cancel anytime.
            </p>
          </div>

          {/* Plan Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#090d1f] text-white rounded-3xl p-6 border border-blue-500/30 relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg">Pro Subscription</span>
                  <span className="text-[10px] font-bold bg-[#0D49FF] text-white px-2.5 py-0.5 rounded-full uppercase">
                    Popular
                  </span>
                </div>
                <div className="text-3xl font-extrabold mb-2">$4,890 <span className="text-xs text-zinc-400 font-normal">/mo</span></div>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  Two active requests at a time with 24-48 hour turnaround and full design system maintenance.
                </p>
              </div>
              <button 
                onClick={onClose}
                className="w-full bg-[#0D49FF] hover:bg-blue-600 text-white py-3 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Subscribe Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-zinc-50 rounded-3xl p-6 border border-black/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg text-[#000000]">Starter Plan</span>
                  <span className="text-[10px] font-bold bg-zinc-200 text-[#888888] px-2.5 py-0.5 rounded-full uppercase">
                    Standard
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-[#000000] mb-2">$2,490 <span className="text-xs text-[#888888] font-normal">/mo</span></div>
                <p className="text-xs text-[#888888] leading-relaxed mb-4">
                  One active request at a time. Ideal for ongoing design & component iterations.
                </p>
              </div>
              <button 
                onClick={onClose}
                className="w-full bg-[#000000] hover:bg-zinc-800 text-white py-3 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Subscribe Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-blue-50 border border-blue-200/70 rounded-2xl p-4 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#0D49FF] flex-shrink-0" />
            <p className="text-xs text-blue-950 font-medium">
              <span className="font-bold">No Long-Term Contracts:</span> Pause or cancel anytime with one click. Guaranteed high-fidelity output.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
