'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-home.jpg"
          alt="Lijun Zhang performance background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* 加深遮罩 - 确保文字清晰可见 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-brand-dark/90" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-xl text-brand-gold mb-4"
        >
          Lijun Zhang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-brand-gold mb-2 font-serif"
        >
          Guzheng Artist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12"
        >
          Bringing the timeless voice of the Guzheng to audiences across cultures and generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button onClick={() => scrollToSection('videos')} className="btn-primary">
            Watch My Performance
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn-secondary">
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* 滚动指示器 */}
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