'use client'

import Link from 'next/link'
import { Heart, Instagram, Youtube, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', title: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube', title: 'YouTube' },
    { icon: Mail, href: 'mailto:zhanglijun109@gmail.com', label: 'Email', title: 'Email' },
  ]

  return (
    <footer className="bg-black/50 border-t border-brand-gold/10 mt-24">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>&copy; {year} Lijun Zhang.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={14} className="text-brand-red" />
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.title}
                  className="btn-icon text-gray-400"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-brand-gold transition-colors duration-300 text-sm"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer