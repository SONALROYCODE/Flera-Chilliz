import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const navLinks = [
    { name: 'Approach', href: '#toolkit' },
    { name: 'Services', href: '#services' },
    { name: 'Why Flera', href: '#why-flera' },
    { name: 'Engagements', href: '#engagements' },
    { name: 'Insights', href: '#insights' },
    { name: 'Company', href: '#company' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3.5" stroke="currentColor" strokeWidth="1.7" />
          <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="7.5" cy="7.5" r="1.1" fill="currentColor" />
          <path d="M11.5 16.5V12.2c0-1.1 0.8-1.7 1.8-1.7s1.7 0.6 1.7 1.7v4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://x.com',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 4.5c-0.8 0.4-1.6 0.6-2.5 0.7 0.9-0.5 1.6-1.4 1.9-2.4-0.9 0.5-1.8 0.9-2.8 1.1-0.8-0.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 0.4 0 0.7 0.1 1-3.7-0.2-7-2-9.2-4.7-0.4 0.7-0.6 1.4-0.6 2.3 0 1.6 0.8 2.9 2 3.7-0.7 0-1.4-0.2-2-0.6v0.1c0 2.2 1.6 4 3.6 4.4-0.4 0.1-0.8 0.2-1.2 0.2-0.3 0-0.6 0-0.8-0.1 0.6 1.8 2.3 3.1 4.2 3.1-1.5 1.2-3.4 1.9-5.5 1.9-0.4 0-0.7 0-1.1-0.1 2 1.3 4.4 2 6.9 2 8.3 0 12.8-6.9 12.8-12.8 0-0.2 0-0.4 0-0.6 0.9-0.6 1.7-1.4 2.3-2.3z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="3.8" />
          <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M13.5 8.5h-1.5c-0.8 0-1.5 0.7-1.5 1.5v2H9v2.5h1.5V19h2.5v-4.5h2l0.5-2.5h-2.5V10.5c0-0.3 0.2-0.5 0.5-0.5h1.5V8.5z" />
        </svg>
      ),
    },
  ]

  return (
    <footer id="footer" className="w-full bg-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Centered Logo */}
        <div className="mb-6 flex justify-center">
          <img 
            src="/logo.svg" 
            alt="FLERA CHILLIZ FZ - LLC" 
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </div>

        {/* Centered Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2.5 mb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] sm:text-[14px] text-[#18181B] hover:text-[#7234F8] font-normal transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Sub-tagline */}
        <p className="text-[12px] sm:text-[13px] text-[#52525B] font-normal text-center mb-12 sm:mb-16">
          Independent technology partner Built for ambitious teams
        </p>

        {/* Bottom Row: Copyright (Left) & Circular Social Icons (Right) */}
        <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-100">
          {/* Copyright Left */}
          <p className="text-[12px] sm:text-[13px] text-[#52525B] font-normal">
            © 2026 Flera Chilliz FZ LLC
          </p>

          {/* Social Icons Right */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EFF2F6] hover:bg-black text-[#4B5563] hover:text-white flex items-center justify-center transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] cursor-pointer"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
