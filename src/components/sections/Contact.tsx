'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, Instagram, MessageCircle, QrCode, X } from 'lucide-react'
import Image from 'next/image'

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const [selectedSocial, setSelectedSocial] = useState<typeof socialLinks[0] | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    setTimeout(() => {
      setFormStatus('success')
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setHoveredSocial(id)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredSocial(null)
    }, 600)
  }

  const handleIconClick = (social: typeof socialLinks[0]) => {
    setSelectedSocial(social)
  }

  const socialLinks = [
    {
      id: 'wechat',
      name: 'WeChat',
      icon: <MessageCircle size={22} />,
      url: 'https://weixin.qq.com/',
      qrCode: '/images/social/wechat-qr.jpg',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram size={22} />,
      url: 'https://www.instagram.com/',
      qrCode: '/images/social/instagram-qr.jpg',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: <MessageCircle size={22} />,
      url: 'https://wa.me/',
      qrCode: '/images/social/whatsapp-qr.jpg',
    },
  ]

  return (
    <>
      <section id="contact" className="section-padding bg-gradient-to-b from-black to-brand-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-brand-gold mb-4">Get in Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interested in performances, collaborations, or educational opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 左侧 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-white">Contact Information</h3>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail size={18} className="text-brand-gold" />
                  <a href="mailto:zhanglijun109@gmail.com" className="hover:text-brand-gold transition-colors">
                    zhanglijun109@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin size={18} className="text-brand-gold" />
                  <span>Leeds, United Kingdom</span>
                </div>
              </div>

              {/* 社交媒体 */}
              <div>
                <h3 className="text-xl font-serif text-white mb-4">Follow & Connect</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <div
                      key={social.id}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(social.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => handleIconClick(social)}
                        className="w-12 h-12 rounded-full bg-gray-800/50 border border-brand-gold/20 flex items-center justify-center text-gray-300 hover:text-brand-gold hover:border-brand-gold/60 transition-all duration-300 hover:scale-110 cursor-pointer"
                      >
                        {social.icon}
                      </button>

                      {/* 悬停预览浮窗 */}
                      <AnimatePresence>
                        {hoveredSocial === social.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 10 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-40 pointer-events-none"
                          >
                            <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl p-3 border border-brand-gold/30 shadow-2xl text-center">
                              <div className="w-20 h-20 mx-auto bg-white rounded-lg overflow-hidden">
                                <Image
                                  src={social.qrCode}
                                  alt={`${social.name} QR Code`}
                                  width={80}
                                  height={80}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <p className="text-[10px] text-gray-400 mt-1.5">
                                Click to enlarge
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-4 tracking-wider flex items-center gap-2">
                  <QrCode size={14} className="text-brand-gold/60" />
                  Hover to preview · Click to enlarge
                </p>
              </div>
            </motion.div>

            {/* 右侧：表单 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900/30 border border-brand-gold/10 rounded-2xl p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-brand-gold focus:outline-none transition-colors text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-brand-gold focus:outline-none transition-colors text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Performance inquiry"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-brand-gold focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your inquiry..."
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-brand-gold focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full py-3 bg-brand-gold text-brand-dark font-medium rounded-lg hover:bg-brand-gold/80 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {formStatus === 'loading' ? (
                    <span className="inline-block w-5 h-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                  ) : formStatus === 'success' ? (
                    '✓ Message Sent!'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <p className="text-green-400 text-sm text-center">Thank you! I'll get back to you soon.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 大图模态框 - 极简无边框版 */}
      <AnimatePresence>
        {selectedSocial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedSocial(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 - 简洁白点 */}
              <button
                onClick={() => setSelectedSocial(null)}
                className="absolute -top-12 right-0 z-10 text-white/60 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1.5"
              >
                <X size={18} />
                <span className="text-xs">Close</span>
              </button>

              {/* 纯二维码 - 无边框，无装饰 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedSocial.qrCode}
                  alt={`${selectedSocial.name} QR Code`}
                  width={400}
                  height={400}
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain p-4"
                  priority
                />
              </div>

              {/* 底部小提示 */}
              <p className="text-center text-gray-500 text-xs mt-4 tracking-wider">
                Scan with your phone camera
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Contact