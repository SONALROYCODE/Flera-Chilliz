import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Lightbulb,
  Heart,
  Trophy,
  ShieldCheck,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../sections/Navbar/Navbar'
import Footer from '../sections/Footer/Footer'

export default function AboutPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleOpenContact = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('contact')
      if (element) {
        const headerOffset = 88
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 100)
  }

  // Core Values Data
  const coreValues = [
    {
      id: 'innovation',
      title: 'Innovation',
      description:
        'We constantly seek new ways to leverage AI technology to solve business challenges.',
      icon: <Lightbulb className="w-6 h-6 text-[#7234F8]" strokeWidth={2} />,
    },
    {
      id: 'customer',
      title: 'Customer Focus',
      description: 'Our clients are at the heart of everything we do.',
      icon: <Heart className="w-6 h-6 text-[#7234F8]" strokeWidth={2} />,
    },
    {
      id: 'excellence',
      title: 'Excellence',
      description:
        'We are committed to delivering the highest quality solutions and services.',
      icon: <Trophy className="w-6 h-6 text-[#7234F8]" strokeWidth={2} />,
    },
    {
      id: 'integrity',
      title: 'Integrity',
      description:
        'We believe in transparency and honesty in all our dealings.',
      icon: <ShieldCheck className="w-6 h-6 text-[#7234F8]" strokeWidth={2} />,
    },
  ]

  // Team Members Data
  const teamMembers = [
    {
      id: 'arjun',
      name: 'Arjun Mehta',
      role: 'Chief Executive Officer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 'michael',
      name: 'Michael Brown',
      role: 'Lead Data Scientist',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 'rohan',
      name: 'Rohan Kapoor',
      role: 'Chief Technology Officer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 'david',
      name: 'David Lee',
      role: 'Customer Success Manager',
      image:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 'priya',
      name: 'Priya Nair',
      role: 'Head of Product',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 'sarah',
      name: 'Sarah Williams',
      role: 'Marketing Director',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    },
  ]

  // Client Logos for Logoipsum Section
  const clientLogos = [
    {
      name: 'Logoipsum 1',
      svg: (
        <div className="flex items-center gap-2 font-bold text-gray-400 text-sm sm:text-base tracking-wider uppercase">
          <span className="w-3 h-3 rounded-full border-2 border-gray-400" />
          <span>LOGOIPSUM</span>
        </div>
      ),
    },
    {
      name: 'Logoipsum 2',
      svg: (
        <div className="flex items-center gap-2 font-black text-gray-500 text-base sm:text-lg tracking-tight">
          <span className="p-1 border-2 border-gray-500 rounded-sm">L</span>
          <span>LOGO</span>
        </div>
      ),
    },
    {
      name: 'Logoipsum 3',
      svg: (
        <div className="flex items-center gap-2 font-bold text-gray-400 text-sm sm:text-base">
          <div className="flex gap-0.5">
            <div className="w-2 h-2 bg-gray-400 rounded-xs" />
            <div className="w-2 h-2 bg-gray-400 rounded-xs" />
            <div className="w-2 h-2 bg-gray-400 rounded-xs" />
          </div>
          <span>logoipsum*</span>
        </div>
      ),
    },
    {
      name: 'Logoipsum 4',
      svg: (
        <div className="flex items-center gap-2 font-semibold text-gray-400 text-xs sm:text-sm tracking-widest uppercase">
          <span className="text-lg leading-none">|||</span>
          <span>LOGOIPSUM</span>
        </div>
      ),
    },
    {
      name: 'Logoipsum 5',
      svg: (
        <div className="flex items-center gap-1.5 font-bold text-gray-500 text-sm sm:text-base lowercase">
          <span className="w-3 h-3 bg-gray-400 rounded-full" />
          <span>logoipsum</span>
        </div>
      ),
    },
    {
      name: 'Logoipsum 6',
      svg: (
        <div className="flex items-center gap-2 font-extrabold text-gray-400 text-lg sm:text-xl">
          <span className="tracking-tighter">∞</span>
          <span className="text-xs uppercase tracking-widest font-normal">
            CORP
          </span>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen w-full text-[#09090B] bg-[#FAFAFA] relative selection:bg-[#7234F8] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Top Floating Pill Navbar */}
      <Navbar onOpenPricing={handleOpenContact} />

      {/* Main Content */}
      <main className="w-full pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* -----------------------------------------------------------
            PART 1: HERO & MAIN TEAM PHOTO (SCREENSHOT 1 MATCH)
        ----------------------------------------------------------- */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-[#EDE6FF] text-[#7234F8] border border-[#7234F8]/20 shadow-xs">
              About us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#09090B] tracking-tight leading-[1.12] mb-6 max-w-3xl mx-auto"
          >
            Building technology partnerships that move business forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#52525B] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Flera Chilliz LLC brings together software, cloud, automation, and
            product expertise to help ambitious teams turn complex ideas into
            durable digital products.
          </motion.p>

          {/* Main Team Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-5xl mx-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"
              alt="Flera Chilliz Team"
              className="w-full h-auto object-cover max-h-[560px] transform hover:scale-[1.01] transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* -----------------------------------------------------------
            PART 2: TRUSTED BY & OUR MISSION (SCREENSHOT 2 MATCH)
        ----------------------------------------------------------- */}
        <div className="space-y-20">
          {/* Trusted by 4000+ businesses */}
          <div className="text-center">
            <p className="text-base sm:text-lg font-medium text-[#09090B] mb-8">
              Trusted by{' '}
              <span className="text-[#7234F8] font-bold">
                4000+ businesses
              </span>{' '}
              worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
              {clientLogos.map((logo, idx) => (
                <div key={idx} className="h-8 flex items-center justify-center">
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>

          {/* Our Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
            {/* Left Side: Hands Stacked Image Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] overflow-hidden shadow-xl border border-gray-100 bg-[#F4F2FA]"
            >
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80"
                alt="Our Mission - Team Hands Together"
                className="w-full h-[320px] sm:h-[380px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Right Side: Our Mission Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
                Our <span className="text-[#7234F8]">Mission</span>
              </h2>
              <p className="text-[#52525B] text-base sm:text-lg leading-relaxed font-normal">
                Flera Chilliz LLC helps organizations use technology with more
                clarity and confidence. We combine tailored engineering,
                intelligent automation, and practical guidance to make
                meaningful progress possible.
              </p>
            </motion.div>
          </div>
        </div>

        {/* -----------------------------------------------------------
            PART 3: OUR STORY (SCREENSHOT 3 MATCH)
        ----------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
          {/* Left Side: Our Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-4 order-2 md:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
              Our <span className="text-[#7234F8]">Story</span>
            </h2>
            <p className="text-[#52525B] text-base sm:text-lg leading-relaxed font-normal">
              Flera Chilliz LLC was founded to make modern technology feel more
              accessible, capable, and accountable. Today, we partner with teams
              across industries to design, launch, and continuously improve the
              digital systems that matter most.
            </p>
          </motion.div>

          {/* Right Side: Team High-Five Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] overflow-hidden shadow-xl border border-gray-100 bg-[#F4F2FA] order-1 md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
              alt="Our Story - Team Collaboration"
              className="w-full h-[320px] sm:h-[380px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* -----------------------------------------------------------
            PART 4: OUR CORE VALUES (SCREENSHOT 4 MATCH)
        ----------------------------------------------------------- */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09090B] tracking-tight">
              Our <span className="text-[#7234F8]">Core Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {coreValues.map((val) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#F2EDFC] border border-[#E2D9F8] rounded-[28px] p-8 sm:p-10 flex flex-col items-center text-center shadow-xs hover:shadow-xl transition-all duration-300 group"
              >
                {/* Circular Icon Container */}
                <div className="w-16 h-16 rounded-full bg-white shadow-xs border border-[#ECE5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-[#09090B] mb-3">
                  {val.title}
                </h3>
                <p className="text-[#52525B] text-sm sm:text-base leading-relaxed max-w-sm">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* -----------------------------------------------------------
            PART 5: OUR EXTRAORDINARY TEAM (SCREENSHOT 5 MATCH)
        ----------------------------------------------------------- */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09090B] tracking-tight">
              Our <span className="text-[#7234F8]">Extraordinary Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#F2EDFC] border border-[#E2D9F8] rounded-[28px] p-7 sm:p-8 flex flex-col items-center text-center shadow-xs hover:shadow-xl transition-all duration-300 group"
              >
                {/* Circular Avatar */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-[#09090B] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#71717A] text-xs sm:text-sm font-medium mb-6">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center text-gray-500 hover:text-[#7234F8] hover:border-[#7234F8] transition-colors shadow-2xs"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center text-gray-500 hover:text-[#7234F8] hover:border-[#7234F8] transition-colors shadow-2xs"
                    aria-label={`${member.name} Twitter`}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center text-gray-500 hover:text-[#7234F8] hover:border-[#7234F8] transition-colors shadow-2xs"
                    aria-label={`${member.name} Instagram`}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* -----------------------------------------------------------
            PART 6: READY TO BUILD WHAT'S NEXT? (CTA BANNER)
        ----------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F2EDFC] border border-[#E2D9F8] rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 text-center max-w-5xl mx-auto shadow-xs relative overflow-hidden"
        >
          {/* Ambient soft glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#09090B] tracking-tight leading-[1.2] mb-4">
              Ready to Build What’s Next?
            </h2>

            <p className="text-[#52525B] text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-xl">
              Tell us what you’re planning. We’ll help you define the right path forward.
            </p>

            <button
              onClick={handleOpenContact}
              className="bg-[#7234F8] hover:bg-[#6228E0] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_8px_24px_rgba(114,52,248,0.35)] hover:shadow-[0_12px_32px_rgba(114,52,248,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer mb-5"
            >
              Start a conversation
            </button>

            <p className="text-[#71717A] text-xs sm:text-sm leading-relaxed max-w-xs text-center font-normal">
              No pressure—just a focused conversation with our technology team.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer onOpenPricing={handleOpenContact} />
    </div>
  )
}
