import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../sections/Navbar/Navbar'

export default function NotFound() {
  const handleReturnHome = () => {
    window.location.href = '/'
  }

  const handleOpenContact = () => {
    window.location.href = '/#contact'
  }

  return (
    <div className="min-h-screen w-full text-[#09090B] bg-[#FAFAFA] relative selection:bg-[#7234F8] selection:text-white font-sans antialiased flex flex-col justify-between overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onOpenPricing={handleOpenContact} />

      {/* Main 404 Content Container */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-24 sm:py-32 text-center max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center w-full"
        >
          {/* Big 404 Graphic Number */}
          <h1 className="text-[110px] sm:text-[150px] md:text-[180px] lg:text-[210px] font-extrabold text-[#18181B] tracking-tighter leading-none select-none font-sans">
            404
          </h1>

          {/* Title: Oops! Page not found */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] mt-2 mb-3">
            <span className="text-[#7234F8]">Oops!</span> Page not found
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-[#71717A] max-w-md sm:max-w-lg mx-auto mb-8 font-normal leading-relaxed">
            Don't worry, you can either return to our homepage or use the navigation menu to find what you need.
          </p>

          {/* Return Home Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleReturnHome}
            className="bg-[#7234F8] hover:bg-black text-white px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold tracking-tight shadow-[0_8px_25px_rgba(114,52,248,0.35)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-200 cursor-pointer"
          >
            Return home
          </motion.button>
        </motion.div>
      </main>
    </div>
  )
}
