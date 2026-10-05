import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Send } from 'lucide-react'

const avatars = [
  '/assets/testimonials/founder.png',
  '/assets/testimonials/tech_executive.png',
  '/assets/testimonials/operations_director.png',
  '/assets/testimonials/product_leader.jpg'
]

// =========================================================================
// Integration Logos & Interactive Custom Software Visual with Enlarging Icons
// =========================================================================

function OpenAILogo({ className = "w-6 h-6 sm:w-7 sm:h-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

function ZapierLogo({ className = "w-6 h-6 sm:w-7 sm:h-7" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="16" fill="#FF4F00" />
      <rect x="18.5" y="8" width="3" height="24" rx="1.5" fill="white" />
      <rect x="8" y="18.5" width="24" height="3" rx="1.5" fill="white" />
      <rect x="18.5" y="8" width="3" height="24" rx="1.5" transform="rotate(45 20 20)" fill="white" />
      <rect x="18.5" y="8" width="3" height="24" rx="1.5" transform="rotate(-45 20 20)" fill="white" />
      <circle cx="20" cy="20" r="2.5" fill="#FF4F00" />
    </svg>
  )
}

function MicrosoftLogo({ className = "w-5 h-5 sm:w-6 sm:h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="1" y="1" width="10" height="10" fill="#F25022" rx="1" />
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00" rx="1" />
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF" rx="1" />
      <rect x="13" y="13" width="10" height="10" fill="#FFB900" rx="1" />
    </svg>
  )
}

function AirtableLogo({ className = "w-6 h-6 sm:w-7 sm:h-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M11.36 1.48a1.27 1.27 0 0 1 1.28 0l8.76 4.96a.64.64 0 0 1 0 1.11L12.64 12.5a1.27 1.27 0 0 1-1.28 0L2.6 7.55a.64.64 0 0 1 0-1.11z" fill="#FCB400" />
      <path d="M11.4 13.56v8.6a.64.64 0 0 1-.95.56l-8.1-4.63a.64.64 0 0 1-.32-.56V8.9a.32.32 0 0 1 .48-.28l8.57 4.88a.64.64 0 0 1 .32.06z" fill="#E93544" />
      <path d="M12.6 13.56l8.57-4.94a.32.32 0 0 1 .48.28v8.63a.64.64 0 0 1-.32.56l-8.1 4.63a.64.64 0 0 1-.95-.56v-8.6a.64.64 0 0 1 .32 0z" fill="#18BFFF" />
    </svg>
  )
}

function SlackLogo({ className = "w-6 h-6 sm:w-7 sm:h-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M5.04 14.28a2.52 2.52 0 1 1-2.52-2.52h2.52v2.52zm1.26 0a2.52 2.52 0 0 1 5.04 0v6.3a2.52 2.52 0 1 1-5.04 0v-6.3z" fill="#E01E5A" />
      <path d="M9.72 5.04a2.52 2.52 0 1 1-2.52-2.52v2.52h2.52zm0 1.26a2.52 2.52 0 0 1 0 5.04H3.42a2.52 2.52 0 1 1 0-5.04h6.3z" fill="#36C5F0" />
      <path d="M18.96 9.72a2.52 2.52 0 1 1 2.52 2.52h-2.52V9.72zm-1.26 0a2.52 2.52 0 0 1-5.04 0V3.42a2.52 2.52 0 1 1 5.04 0v6.3z" fill="#2EB67D" />
      <path d="M14.28 18.96a2.52 2.52 0 1 1 2.52 2.52v-2.52h-2.52zm0-1.26a2.52 2.52 0 0 1 0-5.04h6.3a2.52 2.52 0 1 1 0 5.04h-6.3z" fill="#ECB22E" />
    </svg>
  )
}

function GmailLogo({ className = "w-6 h-6 sm:w-7 sm:h-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M2.5 19.5h3.5v-8.5l-3.5-2.6z" fill="#4285F4" />
      <path d="M18 19.5h3.5v-11.1l-3.5 2.6z" fill="#34A853" />
      <path d="M18 8.4l-6 4.5-6-4.5V4.5l6 4.5 6-4.5z" fill="#EA4335" />
      <path d="M2.5 8.4V6c0-1.4 1.1-2.5 2.5-2.5h1l6 4.5 6-4.5h1c1.4 0 2.5 1.1 2.5 2.5v2.4l-9.5 7.1z" fill="#FBBC05" />
      <path d="M18 8.4l3.5-2.6c-.4-.5-1.1-.8-1.8-.8H18z" fill="#C5221F" />
      <path d="M2.5 5.8l3.5 2.6V5h-1.7c-.7 0-1.4.3-1.8.8z" fill="#C5221F" />
      <path d="M6 11v8.5h12V11l-6 4.5z" fill="#EA4335" />
    </svg>
  )
}

function NotionLogo({ className = "w-6 h-6 sm:w-7 sm:h-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.758-.84c1.12-.093 1.307.373 1.12 1.213l-1.96 12.316c-.187.933-.653 1.306-1.586 1.4l-11.945.746c-.933.093-1.306-.28-1.12-1.213l2.053-12.875c.187-.933.467-1.4 1.252-1.213zm3.733 3.64l-1.027 6.44c-.093.56.094.84.56.746.467-.093 1.587-.187 2.147-.28l.84-5.32 3.64 5.32 2.613-.187.933-5.88c.093-.56-.093-.84-.56-.746-.466.093-1.586.187-2.146.28l-.747 4.76-3.453-5.04z" />
    </svg>
  )
}

const integrationNodes = [
  { id: 'zapier', name: 'Zapier', x: '29%', y: '26%', component: ZapierLogo },
  { id: 'microsoft', name: 'Microsoft', x: '17%', y: '52%', component: MicrosoftLogo },
  { id: 'airtable', name: 'Airtable', x: '29%', y: '78%', component: AirtableLogo },
  { id: 'slack', name: 'Slack', x: '71%', y: '26%', component: SlackLogo },
  { id: 'gmail', name: 'Gmail', x: '83%', y: '52%', component: GmailLogo },
  { id: 'notion', name: 'Notion', x: '71%', y: '78%', component: NotionLogo },
]

// Dual parallel line geometries (viewBox: 0 0 1000 625)
const dualLinePairs = [
  {
    id: 'zapier',
    line1: { x1: 502, y1: 309, x2: 292, y2: 159 },
    line2: { x1: 498, y1: 316, x2: 288, y2: 166 },
  },
  {
    id: 'microsoft',
    line1: { x1: 500, y1: 309, x2: 170, y2: 321.5 },
    line2: { x1: 500, y1: 316, x2: 170, y2: 328.5 },
  },
  {
    id: 'airtable',
    line1: { x1: 498, y1: 310, x2: 288, y2: 485 },
    line2: { x1: 502, y1: 315, x2: 292, y2: 490 },
  },
  {
    id: 'slack',
    line1: { x1: 498, y1: 309, x2: 708, y2: 159 },
    line2: { x1: 502, y1: 316, x2: 712, y2: 166 },
  },
  {
    id: 'gmail',
    line1: { x1: 500, y1: 309, x2: 830, y2: 321.5 },
    line2: { x1: 500, y1: 316, x2: 830, y2: 328.5 },
  },
  {
    id: 'notion',
    line1: { x1: 502, y1: 310, x2: 712, y2: 485 },
    line2: { x1: 498, y1: 315, x2: 708, y2: 490 },
  },
]

function CustomSoftwareVisual() {
  const [hoveredNode, setHoveredNode] = useState(null)
  const [isCenterHovered, setIsCenterHovered] = useState(false)

  return (
    <div className="w-full rounded-[20px] sm:rounded-[26px] overflow-hidden aspect-[16/10] bg-zinc-950 relative shadow-sm select-none">
      {/* Background Hand-to-Robot Touching Image */}
      <img 
        src="/assets/services/service1_clean.png" 
        alt="Custom Software Development" 
        className="w-full h-full object-cover pointer-events-none"
      />

      {/* Ambient lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* SVG Dual Parallel Purple Motion Lines */}
      <svg 
        viewBox="0 0 1000 625" 
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      >
        <defs>
          <linearGradient id="purpleLaserTrack" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#C084FC" stopOpacity="1" />
            <stop offset="100%" stopColor="#7234F8" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="baseFadedTrack" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#7234F8" stopOpacity="0.35" />
          </linearGradient>

          <marker 
            id="purpleArrow" 
            viewBox="0 0 10 10" 
            refX="6" 
            refY="5" 
            markerWidth="5" 
            markerHeight="5" 
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#C084FC" />
          </marker>

          <filter id="neonPurpleGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dualLinePairs.map((pair) => {
          const isNodeActive = hoveredNode === pair.id

          return (
            <g key={`dual-group-${pair.id}`}>
              <line 
                x1={pair.line1.x1} y1={pair.line1.y1} 
                x2={pair.line1.x2} y2={pair.line1.y2} 
                stroke="url(#baseFadedTrack)" 
                strokeWidth={isNodeActive ? "2.2" : "1.6"} 
                markerEnd="url(#purpleArrow)"
                className="transition-all duration-300"
                style={{ opacity: isNodeActive ? 0.95 : 0.6 }}
              />
              <motion.line 
                x1={pair.line1.x1} y1={pair.line1.y1} 
                x2={pair.line1.x2} y2={pair.line1.y2} 
                stroke="url(#purpleLaserTrack)" 
                strokeWidth={isNodeActive ? "3" : "2.2"} 
                strokeDasharray="36 48"
                filter="url(#neonPurpleGlow)"
                animate={{ strokeDashoffset: [84, 0] }}
                transition={{
                  duration: 0.42,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ opacity: isNodeActive ? 1 : 0.9 }}
              />

              <line 
                x1={pair.line2.x1} y1={pair.line2.y1} 
                x2={pair.line2.x2} y2={pair.line2.y2} 
                stroke="url(#baseFadedTrack)" 
                strokeWidth={isNodeActive ? "2.2" : "1.6"} 
                markerEnd="url(#purpleArrow)"
                className="transition-all duration-300"
                style={{ opacity: isNodeActive ? 0.95 : 0.6 }}
              />
              <motion.line 
                x1={pair.line2.x1} y1={pair.line2.y1} 
                x2={pair.line2.x2} y2={pair.line2.y2} 
                stroke="url(#purpleLaserTrack)" 
                strokeWidth={isNodeActive ? "3" : "2.2"} 
                strokeDasharray="36 48"
                filter="url(#neonPurpleGlow)"
                animate={{ strokeDashoffset: [84, 0] }}
                transition={{
                  duration: 0.42,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.05,
                }}
                style={{ opacity: isNodeActive ? 1 : 0.9 }}
              />
            </g>
          )
        })}
      </svg>

      {/* 7 INTEGRATION ICONS */}
      <motion.div
        onMouseEnter={() => setIsCenterHovered(true)}
        onMouseLeave={() => setIsCenterHovered(false)}
        whileHover={{
          scale: 1.25,
          zIndex: 35,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        style={{ left: '50%', top: '50%' }}
        className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white via-white/95 to-white/90 rounded-2xl sm:rounded-[18px] flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/60 ring-1 ring-white/40 ${
          isCenterHovered 
            ? 'shadow-[0_0_36px_rgba(255,255,255,0.95),0_0_22px_rgba(168,85,247,0.85),0_12px_28px_rgba(0,0,0,0.45)]' 
            : 'shadow-[0_0_24px_rgba(255,255,255,0.75),0_8px_24px_rgba(0,0,0,0.35)]'
        }`}
      >
        <OpenAILogo className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
      </motion.div>

      {integrationNodes.map((node) => {
        const IconComponent = node.component
        const isHovered = hoveredNode === node.id

        return (
          <motion.div
            key={node.id}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            whileHover={{
              scale: 1.26,
              zIndex: 35,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            style={{ left: node.x, top: node.y }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 bg-gradient-to-br from-white via-white/95 to-white/90 rounded-2xl sm:rounded-[16px] flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/60 ring-1 ring-white/40 ${
              isHovered 
                ? 'shadow-[0_0_36px_rgba(255,255,255,0.95),0_0_22px_rgba(168,85,247,0.85),0_12px_28px_rgba(0,0,0,0.45)]' 
                : 'shadow-[0_0_24px_rgba(255,255,255,0.75),0_8px_24px_rgba(0,0,0,0.35)]'
            }`}
          >
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.div>
        )
      })}
    </div>
  )
}

const chatInquiries = [
  "Hi, can you tell me about your digital marketing services?",
  "Can you build a high-performance web & mobile app for us?",
  "How fast can we launch a custom digital product with Flera?",
  "Can you help us design and scale our SaaS platform?",
]

function WebMobileVisual() {
  const [inquiryIndex, setInquiryIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout
    const currentTarget = chatInquiries[inquiryIndex]

    if (isTyping) {
      if (displayedText.length < currentTarget.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length + 1))
        }, 45)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2200)
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -2))
        }, 25)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true)
          setInquiryIndex((prev) => (prev + 1) % chatInquiries.length)
        }, 50)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isTyping, inquiryIndex])

  return (
    <div className="w-full rounded-[20px] sm:rounded-[26px] overflow-hidden aspect-[16/10] bg-white relative p-4 sm:p-5 flex flex-col justify-between shadow-sm select-none">
      <img 
        src="/assets/services/service2.png" 
        alt="Web & Mobile Development" 
        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
      />

      <motion.div 
        animate={{ y: [0, -3.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 self-start"
      >
        <span className="inline-block bg-[#7234F8] text-white text-xs font-semibold px-4 py-2 rounded-2xl rounded-bl-xs shadow-[0_4px_14px_rgba(114,52,248,0.35)]">
          Hi! How can I help you?
        </span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 3.5, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="relative z-10 self-end max-w-[280px] bg-white/95 backdrop-blur-md border border-black/5 p-3 sm:p-3.5 rounded-2xl rounded-br-xs shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
      >
        <p className="text-[11px] sm:text-xs text-zinc-800 font-medium leading-snug min-h-[32px] flex items-center">
          <span>{displayedText}</span>
          <motion.span 
            animate={{ opacity: [1, 0, 1] }} 
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-[2px] h-3.5 bg-[#7234F8] ml-0.5 align-middle"
          />
        </p>
      </motion.div>

      <div className="relative z-10 w-full bg-[#FAF9F5]/95 backdrop-blur-md rounded-full px-4 py-2 border border-black/5 flex items-center justify-between shadow-xs">
        <span className="text-[11px] text-zinc-400 font-normal truncate pr-2">
          {isTyping ? "Replying in real-time..." : "Type your message..."}
        </span>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-6 h-6 rounded-full bg-[#7234F8] flex items-center justify-center text-white shadow-xs shrink-0 cursor-pointer"
        >
          <Send className="w-3 h-3 translate-x-0.5" />
        </motion.div>
      </div>
    </div>
  )
}

// =========================================================================
// Futuristic Glowing AI Circuit Banner Visual for Extended Card
// =========================================================================

function AICircuitBannerVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#060814] via-[#0A0E2A] to-[#060814] select-none">
      {/* Background ambient radial glow */}
      <div className="absolute w-72 h-72 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-purple-600/25 blur-2xl pointer-events-none" />

      {/* SVG Circuit Lines */}
      <svg
        viewBox="0 0 1000 380"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.3" />
          </linearGradient>
          <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left Circuit Traces */}
        <path
          d="M 100 100 L 250 100 L 320 150 L 420 150 M 80 190 L 300 190 L 360 190 L 420 190 M 120 280 L 260 280 L 330 230 L 420 230 M 160 60 L 280 60 L 360 120 L 420 120 M 140 320 L 290 320 L 370 260 L 420 260"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2"
          opacity="0.6"
        />
        {/* Right Circuit Traces */}
        <path
          d="M 900 100 L 750 100 L 680 150 L 580 150 M 920 190 L 700 190 L 640 190 L 580 190 M 880 280 L 740 280 L 670 230 L 580 230 M 840 60 L 720 60 L 640 120 L 580 120 M 860 320 L 710 320 L 630 260 L 580 260"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Animated Glowing Pulses on Circuits */}
        <motion.path
          d="M 100 100 L 250 100 L 320 150 L 420 150 M 120 280 L 260 280 L 330 230 L 420 230"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2.5"
          strokeDasharray="40 120"
          filter="url(#circuitGlow)"
          animate={{ strokeDashoffset: [160, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M 900 100 L 750 100 L 680 150 L 580 150 M 880 280 L 740 280 L 670 230 L 580 230"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2.5"
          strokeDasharray="40 120"
          filter="url(#circuitGlow)"
          animate={{ strokeDashoffset: [0, 160] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Circuit Terminal Dots */}
        {[
          [100, 100], [80, 190], [120, 280], [160, 60], [140, 320],
          [900, 100], [920, 190], [880, 280], [840, 60], [860, 320],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#3B82F6" className="animate-pulse" />
        ))}
      </svg>

      {/* Central Glowing AI Processor Chip */}
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl sm:rounded-[24px] bg-gradient-to-b from-[#0F1738] to-[#070A1E] border-2 border-blue-500/60 shadow-[0_0_40px_rgba(59,130,246,0.55),inset_0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center"
      >
        <div className="absolute inset-1.5 sm:inset-2 rounded-xl sm:rounded-[18px] border border-blue-400/40 pointer-events-none" />
        <span className="text-3xl sm:text-5xl font-black text-white tracking-wider drop-shadow-[0_0_16px_rgba(255,255,255,0.85)]">
          AI
        </span>
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
        </div>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}

export default function Services() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative font-sans">
      {/* Top Services Pill Badge */}
      <div className="flex justify-center mb-5">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-1 rounded-full bg-[#EDE6FF] text-[#7234F8] text-[13px] font-medium tracking-normal border border-[#D8C7FF]/60 shadow-[0_2px_12px_rgba(114,52,248,0.12)]"
        >
          Services
        </motion.span>
      </div>

      {/* Main Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#09090B] tracking-tight mb-4 max-w-3xl mx-auto leading-[1.15]"
        >
          Technology Solutions Built for Growth
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#52525B] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
        >
          From product strategy to secure cloud delivery, Flera Chilliz brings critical digital capabilities together.
        </motion.p>
      </div>

      {/* 2x2 Initial Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        
        {/* ========================================================================= */}
        {/* CARD 1: Custom Software Development                                      */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.025, y: -4 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ backgroundColor: '#F3ECFF' }}
          className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 shadow-[0_10px_35px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
        >
          <CustomSoftwareVisual />
          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight mb-2">
              Custom Software Development
            </h3>
            <p className="text-[#52525B] text-sm sm:text-[15px] leading-relaxed font-normal">
              Purpose-built software that streamlines operations, connects systems, and gives your business a durable edge.
            </p>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 2: Web & Mobile Development                                         */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.025, y: -4 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ backgroundColor: '#F3ECFF' }}
          className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 shadow-[0_10px_35px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
        >
          <WebMobileVisual />
          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight mb-2">
              Web & Mobile Development
            </h3>
            <p className="text-[#52525B] text-sm sm:text-[15px] leading-relaxed font-normal">
              Responsive web apps, mobile products, and client portals engineered for speed, conversion, and reliability.
            </p>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 3: AI, Automation & APIs                                             */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.025, y: -4 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ backgroundColor: '#F3ECFF' }}
          className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 shadow-[0_10px_35px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
        >
          <div className="w-full rounded-[20px] sm:rounded-[26px] overflow-hidden aspect-[16/10] bg-[#E3D6FB]/70 border border-white/50 relative p-3.5 sm:p-4 flex items-center justify-start shadow-xs">
            <div className="w-full sm:max-w-[85%] bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-4.5 flex flex-col justify-between h-full shadow-[0_10px_35px_rgba(114,52,248,0.1),0_4px_12px_rgba(0,0,0,0.03)] border border-white/90">
              <div className="flex items-center -space-x-2">
                {avatars.map((av, idx) => (
                  <img
                    key={idx}
                    src={av}
                    alt={`User ${idx + 1}`}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                ))}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#7234F8] text-white text-[9px] sm:text-[10px] font-bold border-2 border-white flex items-center justify-center shadow-xs z-10">
                  4k+
                </div>
              </div>

              <div className="space-y-1.5 my-auto">
                <div>
                  <span className="text-[10px] font-medium text-zinc-700 block">
                    Subject
                  </span>
                  <span className="text-[9.5px] sm:text-[10.5px] text-zinc-500 font-normal block mt-0.5 leading-tight">
                    Seamless API & System Integration
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-medium text-zinc-700 block mb-0.5">
                    Message
                  </span>
                  <div className="bg-[#BFA0F7]/40 text-[#18181B] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[9px] sm:text-[9.5px] font-normal leading-snug inline-block max-w-full">
                    Connect your APIs and systems to process thousands of customer interactions automatically 24/7.
                  </div>
                </div>
              </div>

              <div className="self-start">
                <div className="w-11 h-6 sm:w-12 sm:h-7 rounded-xl bg-[#7234F8] hover:bg-[#6025EA] text-white flex items-center justify-center shadow-sm hover:scale-105 transition-all cursor-pointer">
                  <svg className="w-3 h-3 fill-white text-white translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight mb-2">
              AI, Automation & APIs
            </h3>
            <p className="text-[#52525B] text-sm sm:text-[15px] leading-relaxed font-normal">
              Intelligent workflows, integrations, and APIs that reduce manual work and create more connected customer experiences.
            </p>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 4: Cloud, DevOps & Security                                          */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.025, y: -4 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ backgroundColor: '#F3ECFF' }}
          className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 shadow-[0_10px_35px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
        >
          <div className="w-full rounded-[20px] sm:rounded-[26px] overflow-hidden aspect-[16/10] bg-[#E5D7FA]/65 border border-white/50 relative p-3.5 sm:p-4 flex items-center justify-center shadow-xs">
            <div className="w-full h-full rounded-[16px] sm:rounded-[18px] overflow-hidden shadow-xs relative border border-white/60">
              <img 
                src="/assets/services/service4_new.png" 
                alt="Cloud, DevOps & Security" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight mb-2">
              Cloud, DevOps & Security
            </h3>
            <p className="text-[#52525B] text-sm sm:text-[15px] leading-relaxed font-normal">
              Resilient cloud environments, efficient delivery pipelines, and practical cyber security for modern teams.
            </p>
          </div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* EXTENDED SERVICES SECTION (Revealed on 'Load More' Click - Match Screenshot 2 & 3) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="space-y-6 sm:space-y-8 mt-6 sm:mt-8 overflow-hidden"
          >
            {/* ROW 1: 2 Large Cards (Web Development & Custom Software) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Web Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
                style={{ backgroundColor: '#F3ECFF' }}
                className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 shadow-[0_10px_35px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="w-full rounded-[20px] sm:rounded-[26px] overflow-hidden aspect-[16/10] bg-zinc-900 shadow-xs relative">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                    alt="Web Development"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight mb-2">
                    Web Development
                  </h3>
                  <p className="text-[#52525B] text-sm sm:text-[15px] leading-relaxed font-normal">
                    Fast, scalable web platforms engineered around your customers and business goals.
                  </p>
                </div>
              </motion.div>

              {/* Custom Software */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                style={{ backgroundColor: '#F3ECFF' }}
                className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 shadow-[0_10px_35px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="w-full rounded-[20px] sm:rounded-[26px] overflow-hidden aspect-[16/10] bg-zinc-900 shadow-xs relative">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                    alt="Custom Software"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight mb-2">
                    Custom Software
                  </h3>
                  <p className="text-[#52525B] text-sm sm:text-[15px] leading-relaxed font-normal">
                    Tailored software systems that streamline operations and support long-term growth.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ROW 2: 3 Medium Cards (Mobile Apps, Cyber Security, Cloud Solutions) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Mobile Apps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                whileHover={{ scale: 1.02, y: -4 }}
                style={{ backgroundColor: '#F3ECFF' }}
                className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-6 shadow-[0_10px_35px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="w-full rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-[4/3] bg-zinc-900 shadow-xs relative">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
                    alt="Mobile Apps"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#09090B] tracking-tight mb-1.5">
                    Mobile Apps
                  </h3>
                  <p className="text-[#52525B] text-xs sm:text-sm leading-relaxed font-normal">
                    Reliable iOS and Android experiences designed for performance, usability, and scale.
                  </p>
                </div>
              </motion.div>

              {/* Cyber Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -4 }}
                style={{ backgroundColor: '#F3ECFF' }}
                className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-6 shadow-[0_10px_35px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="w-full rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-[4/3] bg-zinc-900 shadow-xs relative">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                    alt="Cyber Security"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#09090B] tracking-tight mb-1.5">
                    Cyber Security
                  </h3>
                  <p className="text-[#52525B] text-xs sm:text-sm leading-relaxed font-normal">
                    Practical security controls that protect critical data, systems, and customer trust.
                  </p>
                </div>
              </motion.div>

              {/* Cloud Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                whileHover={{ scale: 1.02, y: -4 }}
                style={{ backgroundColor: '#F3ECFF' }}
                className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-6 shadow-[0_10px_35px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="w-full rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-[4/3] bg-zinc-900 shadow-xs relative">
                  <img
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
                    alt="Cloud Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#09090B] tracking-tight mb-1.5">
                    Cloud Solutions
                  </h3>
                  <p className="text-[#52525B] text-xs sm:text-sm leading-relaxed font-normal">
                    Secure cloud architectures, migration, and optimization for resilient digital operations.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ROW 3: 1 Full Width Card (AI & Automation) */}
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.015, y: -3 }}
                style={{ backgroundColor: '#F3ECFF' }}
                className="border border-[#E2D9F8] rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 shadow-[0_10px_35px_rgba(114,52,248,0.03)] hover:shadow-2xl hover:border-[#D8C7FF] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="w-full rounded-[20px] sm:rounded-[26px] overflow-hidden aspect-[21/9] sm:aspect-[24/9] bg-[#0A0D1F] border border-blue-900/40 relative flex items-center justify-center shadow-lg">
                  <AICircuitBannerVisual />
                </div>

                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight mb-2">
                    AI & Automation
                  </h3>
                  <p className="text-[#52525B] text-sm sm:text-[15px] leading-relaxed font-normal">
                    AI and automation solutions that reduce manual work and unlock better decisions.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Load More Button */}
      <div className="mt-12 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMore(!showMore)}
          className="bg-[#7234F8] hover:bg-[#6025E6] text-white px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(114,52,248,0.35)] flex items-center gap-2 cursor-pointer transition-all"
        >
          <span>{showMore ? 'Show Less' : 'Load more services'}</span>
          <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${showMore ? '-rotate-90' : 'rotate-90'}`} />
        </motion.button>
      </div>
    </section>
  )
}
