'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ExternalLink } from 'lucide-react'

const pressData = [
  {
    id: '1',
    name: 'CCTV',
    logoUrl: '/images/press/cctv-logo.jpg',
    screenshotUrl: '/images/press/cctv-screenshot.png',
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

const AdaptiveLogo = ({ src, alt }: { src: string; alt: string }) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null)

  useEffect(() => {
    const img = new window.Image()
    img.onload = () => {
      setAspectRatio(img.naturalWidth / img.naturalHeight)
    }
    img.src = src
  }, [src])

  if (!aspectRatio) {
    return <div className="w-full max-w-[200px] mx-auto h-12 bg-gray-800/30 rounded animate-pulse" />
  }

  return (
    <div className="relative w-full max-w-[200px] mx-auto" style={{ aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 200px"
        priority
      />
    </div>
  )
}

const PressMedia = () => {
  const [selectedPress, setSelectedPress] = useState<typeof pressData[0] | null>(null)

  const handleCardClick = (item: typeof pressData[0]) => {
    setSelectedPress(item)
  }

  const handleModalClick = () => {
    if (selectedPress?.link) {
      window.open(selectedPress.link, '_blank')
    }
  }

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {pressData.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleCardClick(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-300 cursor-pointer min-h-[160px] hover:bg-white/5"
              >
                {/* 悬浮光晕 */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-gold/8 to-transparent" />
                
                {/* Logo */}
                <AdaptiveLogo src={item.logoUrl} alt={item.name} />

                {/* 品牌名称 */}
                <p className="text-gray-500/60 text-[10px] mt-4 font-medium tracking-[0.15em] uppercase">
                  {item.name}
                </p>

                {/* 底部提示 - 更淡更精致 */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] text-gray-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wider">
                    Click to view →
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* 底部装饰线 - 替代边框，增加精致感 */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '120px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"
          />
        </div>
      </section>

      {/* 模态框 - 保持不变 */}
      <AnimatePresence>
        {selectedPress && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPress(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={() => setSelectedPress(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors duration-200 border border-white/10 backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              {/* 顶部信息栏 */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-brand-gold/20 backdrop-blur-sm rounded-full border border-brand-gold/30">
                    <span className="text-brand-gold text-xs font-medium tracking-wider">
                      {selectedPress.name}
                    </span>
                  </div>
                  {selectedPress.link && (
                    <span className="text-gray-400 text-[10px] hidden sm:inline">
                      Click image to read full article
                    </span>
                  )}
                </div>
              </div>

              {/* 截图 */}
              <div 
                className={`relative w-full h-auto min-h-[300px] max-h-[85vh] flex items-center justify-center p-6 pt-16 ${
                  selectedPress.link ? 'cursor-pointer' : ''
                }`}
                onClick={handleModalClick}
              >
                <Image
                  src={selectedPress.screenshotUrl}
                  alt={`${selectedPress.name} coverage`}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-lg"
                  unoptimized
                />
                
                {selectedPress.link && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 backdrop-blur-sm rounded-full border border-brand-gold/30 text-brand-gold text-xs font-medium transition-all duration-300 hover:bg-brand-gold/30">
                      <ExternalLink size={14} />
                      Read full article
                    </span>
                  </div>
                )}
              </div>

              {selectedPress.link && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-center text-gray-400 text-xs">
                    Click on the image or button to read the full article
                  </p>
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