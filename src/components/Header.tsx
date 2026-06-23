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
      // 使用更平滑的缓动，避免滚动时参数跳变
      const raw = Math.min(window.scrollY / 100, 1)
      setScrollProgress(raw * raw * (3 - 2 * raw)) // Smoothstep 插值
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // --- 🆕 智能混合玻璃参数 (Smart Hybrid Glass) ---
  // 微模糊：2px → 6px，保留背景轮廓与色彩
  const blurAmount = 2 + 4 * scrollProgress
  // 饱和度：120% → 150%，增强通透感但不刺眼
  const saturateAmount = 120 + 30 * scrollProgress
  // 背景透明度：0 → 0.65，比原来的0.7更透气
  const bgOpacity = 0.65 * scrollProgress
  // 🆕 自适应安全衬底：当背景复杂时自动加深，保障文字对比度
  const safetyOverlay = 0.15 * scrollProgress
  // 🆕 玻璃边缘高光：模拟切面反光
  const borderOpacity = 0.08 + 0.1 * scrollProgress

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
        className="fixed top-0 w-full z-50 transition-all duration-300 ease-out will-change-[backdrop-filter]"
        style={{
          // 🆕 双层背景：底层品牌色 + 上层安全衬底
          backgroundColor: `rgba(18, 18, 22, ${bgOpacity})`,
          
          // 🆕 微模糊 + 适度饱和 = 真实玻璃感
          backdropFilter: `blur(${blurAmount}px) saturate(${saturateAmount}%)`,
          WebkitBackdropFilter: `blur(${blurAmount}px) saturate(${saturateAmount}%)`,
          
          // 🆕 光学边框：顶部高光 + 底部暗边，模拟玻璃厚度
          borderTop: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
          borderBottom: scrollProgress > 0 
            ? `1px solid rgba(255, 255, 255, ${borderOpacity * 0.6})` 
            : '1px solid transparent',
          
          // 🆕 内阴影：增强材质立体感
          boxShadow: scrollProgress > 0 
            ? `inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.1)` 
            : 'none',
        }}
      >
        {/* 🆕 自适应安全衬底层：独立于 backdrop-filter，确保 WCAG AA 对比度 */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{ 
            backgroundColor: `rgba(0, 0, 0, ${safetyOverlay})`,
            opacity: scrollProgress > 0.1 ? 1 : 0 
          }}
        />

        <div className="container-custom relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#" className="flex flex-col transition-transform duration-300 hover:scale-105 relative z-10">
            <span className="font-serif text-2xl md:text-3xl font-bold text-brand-gold drop-shadow-sm">LZ</span>
            <span className="text-xs md:text-sm text-brand-gold/80 drop-shadow-sm">Guzheng Artist</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-100 hover:text-brand-gold transition-colors duration-300 text-sm font-medium group drop-shadow-sm"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-brand-gold hover:text-brand-gold/80 transition-colors relative z-10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden relative z-10"
          style={{
            backgroundColor: 'rgba(18, 18, 22, 0.92)',
            backdropFilter: 'blur(12px) saturate(150%)',
            WebkitBackdropFilter: 'blur(12px) saturate(150%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-100 hover:text-brand-gold hover:bg-brand-gold/10 rounded-lg transition-all duration-300"
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
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Header