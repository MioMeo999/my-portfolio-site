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
      {/* ✅ 背景图片层 - 保留原有可工作的结构 */}
      <div className="absolute inset-0 z-0">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-brand-dark/90" />
      </div>

      {/* 内容层 */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center justify-center min-h-screen px-6">
        
        {/* 1. 主标题 - Playfair Display Bold */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="heading-xl text-brand-gold mb-4"
        >
          Lijun Zhang
        </motion.h1>

        {/* 2. 身份标签 - ✅ 字体优化：Inter + 大写宽字距 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-sm md:text-base text-brand-gold/90 mb-6 font-sans font-medium tracking-[0.2em] uppercase"
        >
          Musician · Researcher · Cultural Connector
        </motion.p>

        {/* 3. 核心标语 - ✅ 字体优化：Playfair Display Italic */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-serif italic leading-relaxed"
        >
          Using the Guzheng to create meaningful connections across cultures, communities, and generations.
        </motion.p>

        {/* 4. CTA 按钮组 - ✅ 锚点已修复 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button onClick={() => scrollToSection('performances')} className="btn-primary">
            Experience My Work
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn-secondary">
            Connect & Collaborate
          </button>
        </motion.div>
      </div>

      {/* 滚动指示器 - 保留原有 lucide 图标 */}
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