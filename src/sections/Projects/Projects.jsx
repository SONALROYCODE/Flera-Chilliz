import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const projectsData = [
  {
    id: 'project-1',
    title: 'Business Website',
    description: "A responsive, high-performance website designed to strengthen the brand's online presence and improve customer engagement.",
    image: '/assets/projects/project1.png',
  },
  {
    id: 'project-2',
    title: 'E-Commerce Platform',
    description: 'A scalable online shopping platform designed to deliver a smooth customer experience and simplify business operations.',
    image: '/assets/projects/project2.png',
  },
  {
    id: 'project-3',
    title: 'Cloud Infrastructure',
    description: 'A secure and scalable cloud infrastructure designed for reliable performance, deployment, and business growth.',
    image: '/assets/projects/project3.png',
  },
]

const cardScaleConfigs = [
  { input: [0.15, 0.38, 0.55, 0.78], output: [1, 0.94, 0.94, 0.88] },
  { input: [0.55, 0.78], output: [1, 0.94] },
  { input: [0, 1], output: [1, 1] },
]

const cardYConfigs = [
  { input: [0.15, 0.38, 0.55, 0.78], output: [0, -16, -16, -32] },
  { input: [0.55, 0.78], output: [0, -16] },
  { input: [0, 1], output: [0, 0] },
]

const cardBrightnessConfigs = [
  { input: [0.15, 0.38, 0.55, 0.78], output: [1, 0.8, 0.8, 0.65] },
  { input: [0.55, 0.78], output: [1, 0.8] },
  { input: [0, 1], output: [1, 1] },
]

function ProjectCard({ project, index, onOpenPricing, progress }) {
  const scaleConfig = cardScaleConfigs[index] || cardScaleConfigs[2]
  const yConfig = cardYConfigs[index] || cardYConfigs[2]
  const brightnessConfig = cardBrightnessConfigs[index] || cardBrightnessConfigs[2]

  const scale = useTransform(progress, scaleConfig.input, scaleConfig.output)
  const y = useTransform(progress, yConfig.input, yConfig.output)
  const brightness = useTransform(progress, brightnessConfig.input, brightnessConfig.output)
  const filter = useTransform(brightness, (b) => `brightness(${b})`)

  const zIndex = 10 + index * 10

  return (
    <div
      style={{
        top: '88px',
        zIndex: zIndex,
      }}
      className="sticky w-full flex justify-center mb-[45vh] sm:mb-[55vh]"
    >
      <motion.div
        style={{
          scale,
          y,
          filter,
        }}
        className="w-full max-w-5xl h-[420px] sm:h-[460px] lg:h-[500px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 bg-[#0B0B0E] relative flex flex-col justify-between p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.95)] origin-top cursor-pointer group select-none"
        onClick={onOpenPricing}
      >
        {/* Background Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
        />

        {/* Solid Dark Gradient Overlays for Zero Text Bleed */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/95 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* Top Left Project Title */}
        <div className="relative z-10">
          <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Bottom Row: Description & View Action Button */}
        <div className="relative z-10 mt-auto pt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <p className="text-zinc-200 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal max-w-lg">
            {project.description}
          </p>

          <div className="self-start sm:self-end shrink-0">
            <button
              type="button"
              className="bg-white hover:bg-zinc-100 text-black font-semibold text-sm sm:text-base px-6 py-2.5 rounded-full flex items-center gap-1.5 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>View</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects({ onOpenPricing }) {
  const containerRef = useRef(null)

  // Overall scroll progress of the Projects section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section 
      id="projects" 
      ref={containerRef}
      style={{
        backgroundColor: '#000000',
      }}
      className="w-full text-white pt-[80px] pb-[60vh] px-4 sm:px-6 lg:px-8 relative font-sans overflow-visible flex flex-col items-center gap-10"
    >
      {/* Background ambient lighting glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#7D33FF]/15 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-8 relative z-10 flex flex-col items-center gap-4">
        {/* Top 'Our Projects' Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center"
        >
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#18181B] text-[#C4B5FD] text-[13px] font-medium tracking-normal border border-[#27272A] shadow-[0_2px_12px_rgba(125,51,255,0.15)]">
            Our Projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-[#FAFAFA] tracking-tight leading-[1.12]"
        >
          Turning Ideas Into Digital Solutions
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Explore some of the digital products and technology solutions we've designed and developed for businesses, startups, and organizations.
        </motion.p>
      </div>

      {/* Sticky Stacking Cards List */}
      <div className="max-w-5xl w-full mx-auto relative flex flex-col">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenPricing={onOpenPricing}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
