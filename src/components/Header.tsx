'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/80 backdrop-blur-md border-b border-brand-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#" className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold text-brand-gold">LZ</span>
            <span className="text-xs md:text-sm text-brand-gold/70">Guzheng Artist</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-brand-gold transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-brand-gold"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/10"
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
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Header
