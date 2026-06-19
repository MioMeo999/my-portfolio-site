'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-brand-dark"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center justify-center min-h-screen">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-xl text-white mb-4"
        >
          Lijun Zhang
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-brand-gold mb-2 font-serif"
        >
          Guzheng Artist
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12"
        >
          PhD Candidate, University of Leeds | UK-China Cultural Ambassador
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button
            onClick={() => scrollToSection('videos')}
            className="btn-primary"
          >
            Watch My Performance
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown size={32} className="text-brand-gold" />
      </motion.div>
    </section>
  )
}

export default Hero