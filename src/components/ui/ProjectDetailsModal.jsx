import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, UserCheck, SlidersHorizontal, Calendar } from 'lucide-react'
import GetInTouch from '../../sections/GetInTouch/GetInTouch'
import { projectsData } from '../../sections/Projects/Projects'

export default function ProjectDetailsModal({ project, isOpen, onClose, onOpenPricing, onSelectProject }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#f2f3f6] text-black font-sans scroll-smooth"
      >
        {/* Ambient Silk Wave Overlay */}
        <div className="silk-wave-pattern" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          {/* Top Navigation: Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex items-center"
          >
            <button
              onClick={onClose}
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-black/10 shadow-md flex items-center justify-center text-black group-hover:scale-105 transition-all">
                <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-black font-bold text-sm sm:text-base tracking-tight group-hover:opacity-75 transition-opacity">
                Back to home
              </span>
            </button>
          </motion.div>

          {/* Project Header Pill Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[32px] border border-black/5 shadow-[0_12px_36px_rgba(0,0,0,0.06)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
          >
            <div className="flex items-center gap-4">
              {project.logoUrl ? (
                <img
                  src={project.logoUrl}
                  alt={`${project.title} logo`}
                  className="h-8 sm:h-10 max-w-[140px] object-contain shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#dbe4ff] flex items-center justify-center shrink-0 shadow-sm">
                  <span className="font-extrabold text-[#3B52F6] text-sm">P</span>
                </div>
              )}
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#000000] tracking-tight leading-tight">
                  {project.title}
                </h1>
                <p className="text-[#666666] text-xs sm:text-sm font-normal mt-0.5">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Live Preview / CTA Button */}
            <motion.button
              onClick={() => {
                if (project.liveUrl && project.liveUrl !== '#') {
                  window.open(project.liveUrl, '_blank')
                } else if (onOpenPricing) {
                  onOpenPricing()
                }
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#18181b] hover:bg-[#000000] text-white font-semibold text-sm px-7 py-3 rounded-full shadow-md whitespace-nowrap cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <span>Live Preview</span>
            </motion.button>
          </motion.div>

          {/* Main Full-Width Project Hero Showcase Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[32px] p-3 sm:p-4 border border-black/5 shadow-2xl mb-8 overflow-hidden group"
          >
            <div className="rounded-[24px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover max-h-[700px] shadow-sm transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          {/* 3 Grid Stat/Feature Cards (Client, Service, Date) — exact match to Framer screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
          >
            {/* Card 1: Client */}
            <div className="bg-white rounded-[32px] sm:rounded-[38px] p-8 sm:p-10 border border-black/5 shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col items-center text-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f0f2f5] flex items-center justify-center text-black mb-5 shadow-inner">
                <UserCheck className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
              </div>
              <span className="text-[#777777] text-xs sm:text-sm font-medium tracking-normal mb-1">Client</span>
              <h3 className="text-[#000000] text-lg sm:text-2xl font-bold tracking-tight">{project.client || 'Batool'}</h3>
            </div>

            {/* Card 2: Service */}
            <div className="bg-white rounded-[32px] sm:rounded-[38px] p-8 sm:p-10 border border-black/5 shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col items-center text-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f0f2f5] flex items-center justify-center text-black mb-5 shadow-inner">
                <SlidersHorizontal className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
              </div>
              <span className="text-[#777777] text-xs sm:text-sm font-medium tracking-normal mb-1">Service</span>
              <h3 className="text-[#000000] text-lg sm:text-2xl font-bold tracking-tight">{project.service || 'UIUX Designer'}</h3>
            </div>

            {/* Card 3: Date */}
            <div className="bg-white rounded-[32px] sm:rounded-[38px] p-8 sm:p-10 border border-black/5 shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col items-center text-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f0f2f5] flex items-center justify-center text-black mb-5 shadow-inner">
                <Calendar className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
              </div>
              <span className="text-[#777777] text-xs sm:text-sm font-medium tracking-normal mb-1">Date</span>
              <h3 className="text-[#000000] text-lg sm:text-2xl font-bold tracking-tight">{project.date || 'May 5, 2024'}</h3>
            </div>
          </motion.div>

          {/* Overview Section Card — Exact Replica of Framer Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 border border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#000000] tracking-tight mb-6">
              Overview:
            </h2>

            {/* Inner Light Gray Card Container matching Framer screenshots */}
            <div className="bg-[#f3f4f7] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 text-[#444444] leading-relaxed text-sm sm:text-base space-y-6">
              {/* Intro Paragraph 1 */}
              <p className="leading-relaxed">
                {project.overviewParagraph1 || `${project.client || 'Batool'} is a beautifully crafted portfolio website designed for professional photographers and creative studios who want to showcase their work in an elegant and immersive way. With a focus on minimal yet striking UI/UX design and seamless Framer development, Sienna brings photography to life with a smooth and visually captivating digital experience.`}
              </p>

              {/* Intro Paragraph 2 */}
              <p className="leading-relaxed">
                {project.overviewParagraph2 || `Built for ${project.client || 'Batool'}, a professional photographer with her own studio, this website serves as a stunning online gallery, allowing her to present her work with sophistication, clarity, and impact.`}
              </p>

              {/* Subheading: Why Terra? */}
              <div className="pt-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#000000] tracking-tight mb-4">
                  {project.whyTitle || `Why ${project.title}?`}
                </h3>

                {/* Bullet Points List with Emojis */}
                <ul className="space-y-3 font-normal text-[#333333]">
                  {(project.features || [
                    '📷 A seamless design that lets the photography take center stage.',
                    '💖 Smooth interactions and fast-loading galleries.',
                    '🪐 High-resolution displays with an immersive viewing experience.',
                    '🔹 Subtle animations that enhance storytelling.',
                    '✨ Designed to attract clients and industry professionals.'
                  ]).map((featureText, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span>{featureText}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Closing Paragraph 1 */}
              <p className="pt-2 leading-relaxed">
                {project.closingText1 || `With ${project.client || 'Batool'}, a photographer's portfolio is more than just a gallery—it's an artistic journey that captivates and inspires.`}
              </p>

              {/* Closing Paragraph 2 with Camera Icon */}
              <p className="font-medium text-[#222222] leading-relaxed">
                {project.closingText2 || `📷 Let your photography shine—${project.client || 'Batool'} is where moments become timeless.`}
              </p>
            </div>
          </motion.div>

          {/* Portfolio Showcase Images — All on one card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="bg-white rounded-[32px] p-3 sm:p-4 border border-black/5 shadow-2xl mb-12 overflow-hidden"
          >
            <div className="space-y-4">
              <img
                src="https://framerusercontent.com/images/hQwEz0EkXrNXgbXFcF7mrXT8A.png?width=1800&height=1360"
                alt="Portfolio categories grid showcase"
                className="w-full h-auto rounded-[24px] object-cover"
                loading="lazy"
              />
              <img
                src="https://framerusercontent.com/images/mNIsrF5KQyMn7iQ6WaOIfsBg.png?width=1800&height=1360"
                alt="Sienna - How I bring your vision to life"
                className="w-full h-auto rounded-[24px] object-cover"
                loading="lazy"
              />
              <img
                src="https://framerusercontent.com/images/1EkAT3TkNP2SImF92p1GUM3aEw.png?width=1800&height=1360"
                alt="Explore more masterpieces in photography"
                className="w-full h-auto rounded-[24px] object-cover"
                loading="lazy"
              />
              <img
                src="https://framerusercontent.com/images/yi7KGnlrBwv9ProjPG7IgqEv6mI.jpg?width=1800&height=1360"
                alt="Portfolio final showcase"
                className="w-full h-auto rounded-[24px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Next Project Section — matching Framer design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 mb-12"
          >
            {(() => {
              const currentIndex = projectsData.findIndex(p => p.id === project.id)
              const nextIndex = (currentIndex + 1) % projectsData.length
              const nextProject = projectsData[nextIndex]
              return (
                <div className="text-center">
                  <h2 className="text-4xl sm:text-5xl font-bold text-[#000000] tracking-tight mb-3">
                    Next Project
                  </h2>
                  <p className="text-[#888888] text-sm sm:text-base font-normal max-w-md mx-auto mb-10">
                    Get a sneak peek at what's coming next—innovation in the making
                  </p>

                  {/* Next Project Card — Full card matching Projects section */}
                  <motion.div
                    whileHover={{ scale: 1.01, y: -3 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      if (onSelectProject) {
                        onSelectProject(nextProject)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    }}
                    className="w-full h-[400px] sm:h-[480px] lg:h-[520px] bg-white rounded-[36px] overflow-hidden border border-black/10 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer relative"
                  >
                    <img
                      src={nextProject.image}
                      alt={nextProject.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Floating info bar — always visible */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 bg-white/95 backdrop-blur-xl rounded-[24px] sm:rounded-[26px] p-2.5 sm:p-3.5 px-4 sm:px-6 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-black/8">
                      <div className="flex items-center gap-2.5 sm:gap-3.5 overflow-hidden min-w-0 pr-2">
                        {nextProject.logoUrl && (
                          <img
                            src={nextProject.logoUrl}
                            alt={`${nextProject.title} logo`}
                            className="h-6 sm:h-7 max-w-[110px] object-contain shrink-0"
                          />
                        )}
                        <div className="min-w-0 text-left">
                          <h4 className="font-bold text-[#000000] text-sm sm:text-lg tracking-tight truncate leading-tight">
                            {nextProject.title}
                          </h4>
                          {nextProject.subtitle && (
                            <p className="text-[#777777] text-[11px] sm:text-xs font-normal truncate mt-0.5">
                              {nextProject.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <span className="shrink-0 bg-[#eef0f4] text-zinc-900 font-semibold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1 shadow-sm">
                        View Project ↗
                      </span>
                    </div>
                  </motion.div>
                </div>
              )
            })()}
          </motion.div>

          {/* Contact Section at the Bottom of Project Detail View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="w-full"
          >
            <GetInTouch />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
