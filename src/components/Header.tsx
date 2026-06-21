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
      // 滚动进度：0 → 1（滚动 120px 达到最大值）
      const progress = Math.min(window.scrollY / 120, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 根据滚动进度计算样式值（连续渐变）
  const bgOpacity = 0.85 * scrollProgress
  const blurAmount = 16 * scrollProgress
  const borderOpacity = 0.15 * scrollProgress
  const shadowOpacity = 0.3 * scrollProgress

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
        className="fixed top-0 w-full z-50 transition-all duration-150 ease-out border-b"
        style={{
          backgroundColor: `rgba(26, 26, 26, ${bgOpacity})`,
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          borderColor: `rgba(201, 169, 110, ${borderOpacity})`,
          boxShadow: `0 4px 30px rgba(0, 0, 0, ${shadowOpacity})`,
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
            backgroundColor: 'rgba(26, 26, 26, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
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