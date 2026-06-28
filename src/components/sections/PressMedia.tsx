'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ExternalLink } from 'lucide-react'

type PressItem = {
  id: string
  name: string
  logoUrl: string
  screenshotUrl?: string
  videoUrl?: string
  link: string | null
}

const pressData: PressItem[] = [
  {
    id: '1',
    name: 'CCTV',
    logoUrl: '/images/press/cctv-logo.jpg',
    videoUrl: '/videos/cctv-coverage.mp4',
    link: null,
  },
  {
    id: '2',
    name: "PEOPLE'S DAILY",
    logoUrl: '/images/press/people-daily-logo.png',
    screenshotUrl: '/images/press/people-daily-screenshot.png',
    link: 'https://paper.people.com.cn/rmrbhwb/pc/content/202508/21/content_30098228.html',
  },
  {
    id: '3',
    name: 'CGTN',
    logoUrl: '/images/press/cgtn-logo.png',
    screenshotUrl: '/images/press/cgtn-screenshot.png',
    link: 'https://newseu.cgtn.com/news/2025-10-06/Manchester-s-Mid-Autumn-festival-celebrates-China-UK-friendship-1HedEuOxHbi/p.html',
  },
]

// ✅ 优化：保留原始自适应逻辑，增加阴影与背景融合层，消除长方形的突兀感
const AdaptiveLogo = ({ src, alt }: { src: string; alt: string }) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null)

  useEffect(() => {
    const img = new window.Image()
    img.onload = () => setAspectRatio(img.naturalWidth / img.naturalHeight)
    img.src = src
  }, [src])

  if (!aspectRatio) {
    return <div className="w-full max-w-[200px] mx-auto h-12 bg-gray-800/30 rounded animate-pulse" />
  }

  return (
    <div className="relative w-full max-w-[200px] mx-auto group/logo">
      {/* 融合光晕：让长方形边缘自然消融在深色背景中 */}
      <div className="absolute inset-0 bg-brand-gold/5 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
      
      <div className="relative" style={{ aspectRatio }}>
        <Image
          src={src}
          alt={alt}
          fill
          // ✅ 关键：添加 drop-shadow 替代生硬的 box-shadow，完美贴合 Logo 轮廓
          className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover/logo:scale-105"
          sizes="(max-width: 768px) 100vw, 200px"
          priority
        />
      </div>
    </div>
  )
}

const PressMedia = () => {
  const [selectedPress, setSelectedPress] = useState<PressItem | null>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPress(null)
    }
    if (selectedPress) {
      window.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [selectedPress])

  return (
    <>
      <section id="press" className="section-padding bg-gradient-to-b from-brand-dark to-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-brand-gold mb-4">As Seen On</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Featured by leading international media
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pressData.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedPress(item)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                // ✅ 优化：卡片入场使用 spring 弹簧动画，与其他区块协调
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center justify-center p-8 rounded-2xl min-h-[160px] hover:bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors duration-300"
              >
                <AdaptiveLogo src={item.logoUrl} alt={item.name} />

                <p className="text-gray-500/60 text-[10px] mt-6 font-medium tracking-[0.15em] uppercase group-hover:text-brand-gold/80 transition-colors duration-300">
                  {item.name}
                </p>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 w-32 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"
          />
        </div>
      </section>

      {/* ✅ 优化：模态框采用 Flex 三段式布局，彻底解决重叠；移除 y 轴位移消除抖动 */}
      <AnimatePresence>
        {selectedPress && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPress(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 32 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-gray-900/95 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 顶部信息栏 (flex-shrink-0 保证不被挤压) */}
              <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/20 backdrop-blur-sm z-10">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-brand-gold/15 rounded-full border border-brand-gold/20 text-brand-gold text-xs font-medium tracking-wider">
                    {selectedPress.name}
                  </span>
                  {selectedPress.link && (
                    <span className="text-gray-500 text-[10px] hidden sm:inline tracking-wide">
                      Click image to read full article
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedPress(null)}
                  aria-label="Close modal"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50"
                >
                  <X size={16} />
                </button>
              </div>

              {/* 媒体区域 (flex-1 + overflow-y-auto 独立滚动) */}
              <div
                className={`flex-1 overflow-y-auto custom-scrollbar flex items-center justify-center p-6 ${
                  selectedPress.link ? 'cursor-pointer' : ''
                }`}
                onClick={() => selectedPress.link && window.open(selectedPress.link, '_blank')}
              >
                <motion.div
                  whileHover={selectedPress.link ? { scale: 1.015 } : {}}
                  transition={{ duration: 0.4 }}
                  className="relative w-full flex items-center justify-center"
                >
                  {selectedPress.videoUrl ? (
                    <video
                      src={selectedPress.videoUrl}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-auto max-h-[70vh] rounded-lg shadow-2xl bg-black"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : selectedPress.screenshotUrl ? (
                    <Image
                      src={selectedPress.screenshotUrl}
                      alt={`${selectedPress.name} coverage`}
                      width={1200}
                      height={800}
                      className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
                      unoptimized
                    />
                  ) : null}
                </motion.div>
              </div>

              {/* ✅ 底部按钮栏 (flex-shrink-0 固定高度，删除冗余文字) */}
              {selectedPress.link && (
                <div className="flex-shrink-0 px-6 py-4 border-t border-white/5 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={() => window.open(selectedPress.link!, '_blank')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-gold/15 hover:bg-brand-gold/25 rounded-full border border-brand-gold/20 text-brand-gold text-sm font-medium transition-all duration-300 cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    Read full article
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PressMedia
