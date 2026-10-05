import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { sendContactEmail } from '../../services/emailService'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

export default function GetInTouch() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setLoading(true)
    setErrorMsg('')

    try {
      await sendContactEmail({ name, email })
      setSubmitted(true)
      setName('')
      setEmail('')
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Email sending failed:', err)
      setErrorMsg('Failed to send email. Please try again later or contact directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="w-full flex justify-center">
      {/* Outer White Border Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-[630px] p-2.5 sm:p-3 bg-white rounded-[42px] sm:rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.10)]"
      >
        {/* Inner Card */}
        <div className="w-full bg-[#ebecef] border border-white/80 rounded-[32px] sm:rounded-[38px] overflow-hidden flex flex-col">
          {/* Upper Card Content */}
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col items-center text-center">
            {/* Contact Pill Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#18181b] text-white text-xs font-medium shadow-[0_4px_14px_rgba(0,0,0,0.3)]">
                Contact
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#000000] leading-tight mb-3">
              Get in Touch
            </h2>

            {/* Subtitle */}
            <p className="text-[#666666] text-sm sm:text-base font-normal leading-relaxed max-w-xs sm:max-w-sm mb-8 sm:mb-10">
              Have a project in mind? I'll respond within 6 hours.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-[460px] space-y-3.5 mb-10 sm:mb-12">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-13 sm:h-14 px-6 rounded-full bg-white text-black text-sm sm:text-base placeholder:text-zinc-400 border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-13 sm:h-14 px-6 rounded-full bg-white text-black text-sm sm:text-base placeholder:text-zinc-400 border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-2xl bg-red-50 text-red-600 border border-red-200 text-xs sm:text-sm font-medium flex items-center gap-2 justify-center">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-13 sm:h-14 rounded-full bg-[#1c1c1e] hover:bg-black disabled:bg-zinc-700 text-white font-medium text-sm sm:text-base transition-all shadow-[0_14px_32px_-6px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_36px_-4px_rgba(0,0,0,0.45)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Message sent!</span>
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </form>

            {/* Contact Information */}
            <div className="w-full flex flex-col items-center">
              <span className="text-xs sm:text-sm text-[#71717a] font-medium block text-center mb-1.5">
                Let's Connect
              </span>

              <a
                href="tel:+971503172744"
                className="text-base sm:text-lg font-bold text-[#000000] block text-center tracking-tight mb-1"
              >
                +971 503172744
              </a>

              <a
                href="mailto:flera@flerachillizfzllc.com"
                className="text-xl sm:text-2xl lg:text-[32px] font-extrabold text-[#000000] block text-center tracking-tight leading-tight break-all sm:break-normal mb-8"
              >
                flera@flerachillizfzllc.com
              </a>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl border border-black/5 shadow-[0_4px_14px_rgba(0,0,0,0.06)] flex items-center justify-center text-zinc-800 hover:text-black hover:scale-105 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl border border-black/5 shadow-[0_4px_14px_rgba(0,0,0,0.06)] flex items-center justify-center text-zinc-800 hover:text-black hover:scale-105 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl border border-black/5 shadow-[0_4px_14px_rgba(0,0,0,0.06)] flex items-center justify-center text-zinc-800 hover:text-black hover:scale-105 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.66a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Text Bar inside Card */}
          <div className="w-full bg-white py-4 px-6 border-t border-black/5 text-center">
            <p className="text-xs sm:text-sm text-zinc-600 font-medium tracking-tight">
              © 2026 <span className="font-bold text-black">Flerachillizfzllc</span> . All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
