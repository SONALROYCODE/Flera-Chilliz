import React from 'react'
import Navbar from '../sections/Navbar/Navbar'
import Hero from '../sections/Hero/Hero'
import Process from '../sections/Process/Process'
import Services from '../sections/Services/Services'
import Toolkit from '../sections/Toolkit/Toolkit'
import Projects from '../sections/Projects/Projects'
import About from '../sections/About/About'
import Testimonials from '../sections/Testimonials/Testimonials'
import Contact from '../sections/Contact/Contact'
import FAQ from '../sections/FAQ/FAQ'
import Footer from '../sections/Footer/Footer'

export default function Home() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 88;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full text-[#09090B] bg-[#FAFAFA] relative selection:bg-[#7234F8] selection:text-white font-sans antialiased overflow-x-clip">
      {/* Top Floating Pill Navbar */}
      <Navbar onOpenPricing={scrollToContact} />

      {/* Main Content Sections — In exact order of full-page reference screenshot */}
      <main className="w-full flex flex-col items-center">
        {/* 1. Hero */}
        <Hero onOpenPricing={scrollToContact} />

        {/* 2. Process: A Clear Path from Idea to Impact */}
        <Process />

        {/* 3. Services: Technology Solutions Built for Growth */}
        <Services />

        {/* 4. Why Us / Toolkit: Technology That Moves Your Business Forward */}
        <Toolkit onOpenPricing={scrollToContact} />

        {/* 5. About: Your Technology Partner for What's Next */}
        <About onOpenPricing={scrollToContact} />

        {/* 6. Projects: Turning Ideas Into Digital Solutions (Scroll Sticky Deck) */}
        <Projects onOpenPricing={scrollToContact} />

        {/* 7. Contact Us: Please contact for any types of services */}
        <Contact />

        {/* 8. Testimonials: Built for Ambitious Teams */}
        <Testimonials />

        {/* 9. FAQ: Questions, Answered & CTA Banner */}
        <FAQ onOpenPricing={scrollToContact} />
      </main>

      {/* 9. Footer */}
      <Footer onOpenPricing={scrollToContact} />
    </div>
  )
}
