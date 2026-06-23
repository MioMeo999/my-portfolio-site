'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 120, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // --- Apple / OpenDesign 风格参数 ---
  // 关键：所有值在 scrollProgress=0 时必须为 0/none，实现完全融入
  const bgOpacity = 0.7 * scrollProgress        // 最大 0.7，不过度遮挡
  const blurAmount = 16 * scrollProgress         // 16px 足够，保留背景纹理
  const saturateAmount = 120 + 60 * scrollProgress // 从 120% → 180%
  const borderOpacity = 0.12 * scrollProgress    // 极淡白边，模拟玻璃切面
  // ❌ 完全移除 boxShadow，悬浮感仅靠边框和背景对比实现

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#performances', label: 'Performances' },
    { href: '#videos', label: 'Videos' },
    { href: '#press', label: 'Press' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 transition-all duration-300 ease-out"
        style={{
          // 背景：带微蓝调的深色，比纯黑更像真实玻璃
          backgroundColor: `rgba(18, 18, 22, ${bgOpacity})`,
          
          // 模糊 + 饱和度：Apple 标志性通透感
          backdropFilter: `blur(${blurAmount}px) saturate(${saturateAmount}%)`,
          WebkitBackdropFilter: `blur(${blurAmount}px) saturate(${saturateAmount}%)`,
          
          // 边框：仅在滚动时出现，模拟玻璃边缘高光
          borderBottom: scrollProgress > 0 
            ? `1px solid rgba(255, 255, 255, ${borderOpacity})` 
            : '1px solid transparent',
          
          // ❌ 无 box-shadow！
        }}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#" className="flex flex-col transition-transform duration-300 hover:scale-105">
            <span className="font-serif text-2xl md:text-3xl font-bold text-brand-gold">LZ</span>
            <span className="text-xs md:text-sm text-brand-gold/70">Guzheng Artist</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-200 hover:text-brand-gold transition-colors duration-300 text-sm font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-brand-gold hover:text-brand-gold/80 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
          style={{
            backgroundColor: 'rgba(18, 18, 22, 0.92)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-200 hover:text-brand-gold hover:bg-brand-gold/10 rounded-lg transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Header