'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Instagram, MessageCircle, QrCode, X } from 'lucide-react'
import Image from 'next/image'

const socialLinks = [
  {
    id: 'wechat',
    name: 'WeChat',
    icon: <MessageCircle size={22} />,
    qrCode: '/images/social/wechat-qr.jpg',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <Instagram size={22} />,
    qrCode: '/images/social/instagram-qr.jpg',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: <MessageCircle size={22} />,
    qrCode: '/images/social/whatsapp-qr.jpg',
  },
]

// 统一的弹跳缓动曲线
const springTransition = { type: 'spring', stiffness: 100, damping: 20 }

const Contact = () => {
  // 新增状态：用于跟踪当前被选中放大的社交平台
  const [selectedSocial, setSelectedSocial] = useState<typeof socialLinks[0] | null>(null)

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-black to-brand-dark overflow-hidden">
      <div className="container-custom max-w-5xl mx-auto">
        
        {/* 标题区 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-brand-gold mb-5">Get in Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            Interested in performances, collaborations, or educational opportunities?
          </p>
        </motion.div>

        {/* 核心联系信息（居中） */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ...springTransition, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5 mb-20"
        >
          <a
            href="mailto:zhanglijun109@gmail.com"
            className="group relative flex items-center gap-4 text-2xl md:text-3xl text-white hover:text-brand-gold transition-colors duration-500 px-6 py-3 rounded-full hover:bg-white/[0.03]"
          >
            <Mail size={28} className="text-brand-gold group-hover:scale-110 group-hover:rotate-[-10deg] transition-all duration-500" />
            <span className="font-serif tracking-wide">zhanglijun109@gmail.com</span>
          </a>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-gray-400 text-sm tracking-[0.2em] uppercase"
          >
            <MapPin size={16} className="text-brand-gold/70" />
            <span>Leeds, United Kingdom</span>
          </motion.div>
        </motion.div>

        {/* 动态分隔线 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent mx-auto mb-20"
        />

        {/* 二维码展示区 - 可点击 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.6 + index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              // 👇 关键：将卡片变为可点击，并设置选中的状态
              onClick={() => setSelectedSocial(social)}
              className="group relative flex flex-col items-center p-8 rounded-3xl bg-gray-800/20 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-brand-gold/[0.08] to-transparent pointer-events-none" />

              <div className="relative w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-500">
                {social.icon}
              </div>

              <div className="relative w-40 h-40 bg-white rounded-xl overflow-hidden shadow-lg group-hover:shadow-brand-gold/20 group-hover:shadow-2xl transition-all duration-500 mb-6">
                <Image
                  src={social.qrCode}
                  alt={`${social.name} QR Code`}
                  width={160}
                  height={160}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>

              <span className="relative text-white text-base font-medium tracking-widest uppercase group-hover:text-brand-gold transition-colors duration-300">
                {social.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 底部提示 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500/60 text-xs mt-16 tracking-[0.3em] uppercase flex items-center justify-center gap-3"
        >
          <QrCode size={14} className="animate-pulse" />
          Click any QR code to enlarge
        </motion.p>
      </div>

      {/* 放大模态框 (Modal) */}
      <AnimatePresence>
        {selectedSocial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            // 覆盖全屏，置于顶层
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/85 backdrop-blur-md"
            // 点击背景关闭
            onClick={() => setSelectedSocial(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              // 阻止点击事件冒泡到背景
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-md w-full"
            >
              {/* 关闭按钮 */}
              <button
                onClick={() => setSelectedSocial(null)}
                className="absolute -top-10 right-0 z-10 text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* 放大的二维码 */}
              <div className="p-6">
                <div className="w-full aspect-square bg-white rounded-xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={selectedSocial.qrCode}
                    alt={`Enlarged ${selectedSocial.name} QR Code`}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-center text-gray-800 font-medium mt-4">
                  {selectedSocial.name}
                </p>
                <p className="text-center text-gray-500 text-sm mt-1">
                  Scan with your phone camera
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact