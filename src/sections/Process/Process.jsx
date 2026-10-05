import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket } from 'lucide-react'

// Animated Rocket with Moving Speed Lines
function RocketSpeedVisual() {
  const streaks = [
    { id: 1, x: '12%', y: '22%', length: 70, delay: 0, duration: 1.4 },
    { id: 2, x: '35%', y: '12%', length: 90, delay: 0.3, duration: 1.6 },
    { id: 3, x: '72%', y: '16%', length: 75, delay: 0.7, duration: 1.3 },
    { id: 4, x: '86%', y: '32%', length: 95, delay: 0.1, duration: 1.7 },
    { id: 5, x: '18%', y: '58%', length: 80, delay: 0.5, duration: 1.5 },
    { id: 6, x: '52%', y: '78%', length: 85, delay: 0.9, duration: 1.4 },
    { id: 7, x: '78%', y: '68%', length: 90, delay: 0.2, duration: 1.6 },
    { id: 8, x: '10%', y: '78%', length: 65, delay: 0.8, duration: 1.3 },
    { id: 9, x: '58%', y: '32%', length: 75, delay: 0.4, duration: 1.5 },
    { id: 10, x: '38%', y: '85%', length: 80, delay: 0.6, duration: 1.4 },
  ]

  return (
    <div 
      style={{
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '25px',
        boxShadow: '0 4px 20px rgba(114, 52, 248, 0.04)',
      }}
      className="relative w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial from-[#FAF7FF] via-white to-white pointer-events-none" />

      {/* Animated Moving Streaks Layer */}
      <div className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_92%)] pointer-events-none">
        {streaks.map((s) => (
          <motion.div
            key={s.id}
            style={{
              top: s.y,
              left: s.x,
              width: `${s.length}px`,
              height: '3.5px',
            }}
            className="absolute -rotate-45 rounded-full pointer-events-none overflow-hidden"
            initial={{ opacity: 0, x: -60, y: 60 }}
            animate={{
              opacity: [0, 0.85, 1, 0.4, 0],
              x: [-60, 60],
              y: [60, -60],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: 'linear',
            }}
          >
            <div 
              className="w-full h-full rounded-full shadow-[0_0_12px_rgba(114,52,248,0.5)]"
              style={{
                background: 'linear-gradient(90deg, rgba(114,52,248,0) 0%, rgba(147,51,234,0.45) 45%, #7234F8 100%)'
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 rounded-[25px] pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.9)]" />

      {/* Center Floating Rocket */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          x: [-2, 3, -2],
          rotate: [-1, 2, -1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 flex items-center justify-center"
      >
        <div className="absolute w-28 h-28 rounded-full bg-[#EDE6FF] blur-xl opacity-70 animate-pulse pointer-events-none" />
        <div className="relative p-6 rounded-3xl">
          <Rocket 
            className="w-16 h-16 sm:w-20 sm:h-20 text-[#7234F8] stroke-[2.4] drop-shadow-[0_4px_16px_rgba(114,52,248,0.3)]" 
          />
        </div>
      </motion.div>
    </div>
  )
}

// Prominent vector Location Pin SVG from user's asset
function LocationPinSVG({ className = "w-11 h-14 sm:w-13 sm:h-16" }) {
  return (
    <svg
      viewBox="-36 -40 72 94"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="pinGradient" x1="0" y1="-38" x2="0" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7E65FF" />
          <stop offset="100%" stopColor="#623EF4" />
        </linearGradient>
        <filter id="pinShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#3F20A8" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#pinShadow)">
        <path
          fill="url(#pinGradient)"
          stroke="#4F2DE9"
          strokeWidth="1.2"
          strokeLinejoin="round"
          d="M-31.67,6.47 C-32.75,3.13 -33.38,-0.41 -33.38,-4.11 C-33.38,-23.27 -17.23,-38.66 2.21,-37.40 C18.70,-36.34 32.10,-23.04 33.28,-6.57 C33.60,-2.27 33.05,1.87 31.90,5.72 C26.54,23.71 0,50.20 0,50.20 C0,50.20 -24.98,27.17 -31.67,6.47z M15.70,-4.10 C15.70,-12.78 8.67,-19.81 0,-19.81 C-8.67,-19.81 -15.70,-12.78 -15.70,-4.10 C-15.70,4.57 -8.67,11.60 0,11.60 C8.67,11.60 15.70,4.57 15.70,-4.10z"
        />
      </g>
    </svg>
  )
}

// 5 Sequential Waypoints (4 Corners then Center)
const WAYPOINTS = [
  { id: 'top-left', top: '23%', left: '22%' },
  { id: 'top-right', top: '24%', left: '76%' },
  { id: 'bottom-right', top: '70%', left: '80%' },
  { id: 'bottom-left', top: '64%', left: '20%' },
  { id: 'center', top: '48%', left: '46%' },
]

// Continuous Revolving & 4-Corner-to-Center Scanning Target Reticle SVG Animation
function RevolvingTargetReticle() {
  return (
    <motion.div
      animate={{
        top: ['23%', '24%', '70%', '64%', '48%', '23%'],
        left: ['22%', '76%', '80%', '20%', '46%', '22%'],
      }}
      transition={{
        duration: 6.0,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[145px] sm:h-[145px] pointer-events-none z-20"
    >
      {/* 360° Continuous Revolving Spin */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 430 430"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform="translate(215, 215)">
            {/* Outer Dark Reticle Ring with 4 Inward Ticks */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              stroke="rgb(18,19,48)"
              strokeWidth="11"
              d="M0,-165 C91.1,-165 165,-91.1 165,0 C165,91.1 91.1,165 0,165 C-91.1,165 -165,91.1 -165,0 C-165,-91.1 -91.1,-165 0,-165z M0,-134 L0,-162 M-134,0 L-162,0 M0,134 L0,162 M134,0 L162,0"
            />
            {/* Inner Purple Crosshair Plus */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              stroke="#7234F8"
              strokeWidth="13"
              d="M0,-30 L0,30 M-30,0 L30,0"
            />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  )
}

// Framer Motion Animation Variants for 3D Tilt and 4 Corner Badges (Fast & Snappy Tilt)
const tiltedImageVariants = {
  initial: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    boxShadow: '0 4px 20px rgba(114, 52, 248, 0.04)',
    transition: { type: 'spring', stiffness: 400, damping: 26, mass: 0.6 },
  },
  hover: {
    scale: 0.65,
    rotateX: 20,
    rotateY: -22,
    rotateZ: -12,
    boxShadow: '0 25px 60px rgba(114, 52, 248, 0.28), 0 15px 35px rgba(0, 0, 0, 0.22)',
    transition: { type: 'spring', stiffness: 400, damping: 26, mass: 0.6 },
  },
}

const topLeftBadgeVariants = {
  initial: { opacity: 0, scale: 0.3, x: 25, y: 25, transition: { duration: 0.18 } },
  hover: { opacity: 1, scale: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 440, damping: 22 } },
}

const topRightBadgeVariants = {
  initial: { opacity: 0, scale: 0.3, x: -25, y: 25, transition: { duration: 0.18 } },
  hover: { opacity: 1, scale: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 440, damping: 22, delay: 0.03 } },
}

const bottomLeftBadgeVariants = {
  initial: { opacity: 0, scale: 0.3, x: 25, y: -25, transition: { duration: 0.18 } },
  hover: { opacity: 1, scale: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 440, damping: 22, delay: 0.05 } },
}

const bottomRightBadgeVariants = {
  initial: { opacity: 0, scale: 0.3, x: -25, y: -25, transition: { duration: 0.18 } },
  hover: { opacity: 1, scale: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 440, damping: 22, delay: 0.08 } },
}

// 3D Diagonal Tilted Image with 4 Corner Floating Icon Badges & Auto-Revolving Target Reticle
function DiscoverDefineVisual({ isParentHovered }) {
  const [isSelfHovered, setIsSelfHovered] = useState(false)
  const [activeWaypoint, setActiveWaypoint] = useState(0)
  const isHovered = isParentHovered || isSelfHovered
  const animateState = isHovered ? "hover" : "initial"

  // Turn-by-turn active waypoint cycling (1.2s per point = 6.0s total cycle)
  useEffect(() => {
    const stepDuration = 1200
    const interval = setInterval(() => {
      setActiveWaypoint((prev) => (prev + 1) % WAYPOINTS.length)
    }, stepDuration)
    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      onMouseEnter={() => setIsSelfHovered(true)}
      onMouseLeave={() => setIsSelfHovered(false)}
      style={{
        perspective: '1200px',
        borderRadius: '28px',
      }}
      className="relative w-full aspect-[4/3] min-h-[320px] sm:min-h-[380px] flex items-center justify-center overflow-hidden select-none cursor-pointer"
    >
      {/* ========================================================================= */}
      {/* 4 FLOATING CORNER BADGES (White cards with user's exact SVGs)             */}
      {/* ========================================================================= */}

      {/* Top-Left: Bar Chart Badge (SVG 2) */}
      <motion.div
        animate={animateState}
        variants={topLeftBadgeVariants}
        className="absolute top-3 left-3 sm:top-5 sm:left-5 z-30 w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 bg-white rounded-[20px] sm:rounded-[26px] shadow-[0_12px_28px_rgba(114,52,248,0.08),0_2px_8px_rgba(0,0,0,0.03)] border border-white flex items-center justify-center pointer-events-none"
      >
        <svg
          viewBox="0 0 256 256"
          className="w-8 h-8 sm:w-11 sm:h-11 fill-[#6D7AFF]"
          style={{ userSelect: 'none', display: 'inline-block', flexShrink: 0 }}
        >
          <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z" />
        </svg>
      </motion.div>

      {/* Top-Right: Document / Notes Badge (SVG 1) */}
      <motion.div
        animate={animateState}
        variants={topRightBadgeVariants}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30 w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 bg-white rounded-[20px] sm:rounded-[26px] shadow-[0_12px_28px_rgba(114,52,248,0.08),0_2px_8px_rgba(0,0,0,0.03)] border border-white flex items-center justify-center pointer-events-none"
      >
        <svg
          viewBox="0 0 256 256"
          className="w-8 h-8 sm:w-11 sm:h-11 fill-[#6D7AFF]"
          style={{ userSelect: 'none', display: 'inline-block', flexShrink: 0 }}
        >
          <path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" />
        </svg>
      </motion.div>

      {/* Bottom-Left: Trend Line Graph Badge (SVG 3) */}
      <motion.div
        animate={animateState}
        variants={bottomLeftBadgeVariants}
        className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-30 w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 bg-white rounded-[20px] sm:rounded-[26px] shadow-[0_12px_28px_rgba(114,52,248,0.08),0_2px_8px_rgba(0,0,0,0.03)] border border-white flex items-center justify-center pointer-events-none"
      >
        <svg
          viewBox="0 0 256 256"
          className="w-8 h-8 sm:w-11 sm:h-11 fill-[#6D7AFF]"
          style={{ userSelect: 'none', display: 'inline-block', flexShrink: 0 }}
        >
          <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z" />
        </svg>
      </motion.div>

      {/* Bottom-Right: Pie Chart Badge (SVG 4) */}
      <motion.div
        animate={animateState}
        variants={bottomRightBadgeVariants}
        className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-30 w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 bg-white rounded-[20px] sm:rounded-[26px] shadow-[0_12px_28px_rgba(114,52,248,0.08),0_2px_8px_rgba(0,0,0,0.03)] border border-white flex items-center justify-center pointer-events-none"
      >
        <svg
          viewBox="0 0 256 256"
          className="w-8 h-8 sm:w-11 sm:h-11 fill-[#6D7AFF]"
          style={{ userSelect: 'none', display: 'inline-block', flexShrink: 0 }}
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm71.87,53.27L136,114.14V40.37A88,88,0,0,1,199.87,77.27ZM120,40.37v83l-71.89,41.5A88,88,0,0,1,120,40.37ZM128,216a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z" />
        </svg>
      </motion.div>

      {/* ========================================================================= */}
      {/* 3D DIAGONAL TILTED CENTER IMAGE CONTAINER                                 */}
      {/* ========================================================================= */}
      <motion.div
        animate={animateState}
        variants={tiltedImageVariants}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-white p-1.5 border border-white/80 transition-all duration-300"
      >
        <div className="relative w-full h-full rounded-[20px] sm:rounded-[24px] overflow-hidden bg-zinc-900">
          {/* Original Framer Image (step1.png) */}
          <img
            src="/assets/process/step1.png"
            alt="Discover & Define"
            className="w-full h-full object-cover pointer-events-none"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

          {/* Turn-by-Turn Oscillating Location Pin (Previous pin removed on each step) */}
          <AnimatePresence mode="wait">
            {WAYPOINTS.map((wp, index) => {
              if (index !== activeWaypoint) return null

              return (
                <motion.div
                  key={wp.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    scale: { type: 'spring', stiffness: 380, damping: 22 },
                    opacity: { duration: 0.18 },
                  }}
                  style={{
                    top: wp.top,
                    left: wp.left,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-15 select-none"
                >
                  {/* Distinct To-and-Fro Oscillating Container */}
                  <motion.div
                    animate={{
                      x: [-6, 6, -6],
                      y: [-5, 3, -5],
                      rotate: [-8, 8, -8],
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="flex items-center justify-center"
                  >
                    <LocationPinSVG className="w-10 h-13 sm:w-13 sm:h-16" />
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Continuous Revolving and Scanning Target Reticle */}
          <RevolvingTargetReticle />
        </div>
      </motion.div>
    </div>
  )
}

export default function Process() {
  const [isCard1Hovered, setIsCard1Hovered] = useState(false)

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden font-sans">
      {/* Centered Section Header matching Framer Design */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        {/* Top Process Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center mb-5"
        >
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#EDE6FF] text-[#7234F8] text-[13px] font-medium tracking-normal border border-[#D8C7FF]/60 shadow-[0_2px_12px_rgba(114,52,248,0.12)]">
            Process
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
          A Clear Path From Idea to Impact
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#52525B] text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal"
        >
          A disciplined delivery model for reliable technology outcomes
        </motion.p>
      </div>

      {/* Process List Container (3 Stacked Cards) */}
      <div className="flex flex-col gap-10 sm:gap-14">
        
        {/* ========================================================================= */}
        {/* CARD 01: Discover & Define (Image Left with 3D Tilt on Hover)             */}
        {/* ========================================================================= */}
        <motion.div
          onMouseEnter={() => setIsCard1Hovered(true)}
          onMouseLeave={() => setIsCard1Hovered(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ backgroundColor: '#F2EDFC' }}
          className="relative border border-[#E2D9F8] rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 overflow-hidden cursor-pointer"
        >
          {/* Ambient blur */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Visual: Discover & Define Interactive 3D Visual */}
            <div className="lg:col-span-6 w-full">
              <DiscoverDefineVisual isParentHovered={isCard1Hovered} />
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#7234F8] tracking-tighter leading-none block">
                01
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#09090B] tracking-tight">
                Discover & Define
              </h3>
              <p className="text-[#52525B] text-base sm:text-lg leading-relaxed font-normal max-w-lg">
                We align on your objectives, users, technical landscape, and priorities—so the right solution takes shape from day one.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 02: Design & Engineer                                               */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ backgroundColor: '#FFFFFF' }}
          className="relative border border-[#E5E7EB] rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 overflow-hidden"
        >
          {/* Ambient blur */}
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4 order-2 lg:order-1">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#7234F8] tracking-tighter leading-none block">
                02
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#09090B] tracking-tight">
                Design & Engineer
              </h3>
              <p className="text-[#52525B] text-base sm:text-lg leading-relaxed font-normal max-w-lg">
                Our cross-functional team designs intuitive experiences and engineers dependable web, mobile, cloud, and software products.
              </p>
            </div>

            {/* Right Visual: Gears Illustration Frame */}
            <div className="lg:col-span-6 w-full order-1 lg:order-2">
              <div 
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '25px',
                  boxShadow: '0 4px 20px rgba(114, 52, 248, 0.04)',
                }}
                className="p-6 sm:p-8 relative overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[360px]"
              >
                <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-[#7234F8]" />
                <img
                  src="/assets/process/step2_gears.png"
                  alt="Research, Plan, Design, Develop Gears"
                  className="w-full max-h-[320px] object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 03: Launch & Evolve                                                 */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ backgroundColor: '#EBE6FC' }}
          className="relative border border-[#DDD3F8] rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 overflow-hidden cursor-pointer"
        >
          {/* Ambient blur */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Visual: Rocket with animated speed lines */}
            <div className="lg:col-span-6 w-full">
              <RocketSpeedVisual />
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#7234F8] tracking-tighter leading-none block">
                03
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#09090B] tracking-tight">
                Launch & Evolve
              </h3>
              <p className="text-[#52525B] text-base sm:text-lg leading-relaxed font-normal max-w-lg">
                We launch with confidence, support adoption, and continuously improve performance, security, and scale as your business evolves.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
