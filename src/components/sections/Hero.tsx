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
      {/* 背景图片层 */}
      <div className="absolute inset-0 z-0">
        {/* 🆕 使用 motion.div 包裹 Image 实现缓慢上移的视差呼吸感 */}
        <motion.div
          initial={{ scale: 1.05, y: 0 }}
          animate={{ scale: 1.05, y: '-3%' }}
          transition={{ duration: 8, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/images/bg-home.jpg"
            alt="Lijun Zhang performance background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
        
        {/* 加深遮罩 - 确保文字清晰可见 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-brand-dark/90" />
      </div>

      {/* 内容层 (保留你原有的完美入场动画) */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="heading-xl text-brand-gold mb-4"
        >
          Lijun Zhang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xl md:text-2xl text-brand-gold mb-2 font-serif"
        >
          Guzheng Artist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12"
        >
          Bringing the timeless voice of the Guzheng to audiences across cultures and generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
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

      {/* 滚动指示器 - 优化了缓动曲线，使其更像真实的物理弹跳 */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown size={32} className="text-brand-gold" />
      </motion.div>
    </section>
  )
}

export default Hero