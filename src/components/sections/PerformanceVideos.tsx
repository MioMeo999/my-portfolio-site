'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const allVideos = [
  // ✅ 精选视频（默认显示4个）
  {
    id: '1',
    title: 'Guzheng | Dance of Yi People',
    youtubeId: 'y6bHlgyxbIA',
    category: 'Solo',
    featured: true,
  },
  {
    id: '2',
    title: 'Guzheng & Indian Dance Improvisation at LUBS Summer Celebration',
    youtubeId: '1du3kbAu-MU',
    category: 'Cross-Cultural',
    featured: true,
  },
  {
    id: '3',
    title: 'Guzheng | Bai Suzhen at the Foot of Mount Qingcheng',
    youtubeId: 'RfXDqO6S0Lo',
    category: 'Solo',
    featured: true,
  },
  {
    id: '4',
    title: 'Ensemble of Folk Chinese Instruments',
    youtubeId: 'r_z4RZtPSLE',
    category: 'Ensemble',
    featured: true,
  },
  // 📦 收起视频
  {
    id: '5',
    title: 'Guzheng + Piano | Liuyang River',
    youtubeId: 'FyOBZPbyq5s',
    category: 'Solo',
    featured: false,
  },
  {
    id: '6',
    title: 'Guzheng by Candlelight in a Leeds Church',
    youtubeId: '4UZzD0JfEwE',
    category: 'Solo',
    featured: false,
  },
  {
    id: '7',
    title: '古筝和乐队《月亮代表我的心》',
    youtubeId: 'L9H6VtqMlek',
    category: 'Shorts',
    featured: false,
  },
  {
    id: '8',
    title: '二胡·古筝《赛马》',
    youtubeId: 'qnjTbQZmFGM',
    category: 'Shorts',
    featured: false,
  },
]

const PerformanceVideos = () => {
  const [showAll, setShowAll] = useState(false)

  const featuredVideos = allVideos.filter((v) => v.featured)
  const moreVideos = allVideos.filter((v) => !v.featured)
  const displayVideos = showAll ? allVideos : featuredVideos
  const isFeaturedView = !showAll

  return (
    <section
      id="videos"
      className="section-padding bg-gradient-to-b from-brand-dark to-black"
    >
      <div className="container-custom">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-brand-gold mb-4">
            Selected Performances
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A curated collection of performances, collaborations,
            and cultural engagements across the United Kingdom and beyond.
          </p>
        </motion.div>

        {/* 视频网格 - 精选视图2列，全部视图3列 */}
        <div
          className={`grid gap-6 max-w-5xl mx-auto ${
            isFeaturedView
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {displayVideos.map((video, index) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
              // 🎯 升级：弹簧物理上浮 + 动态阴影
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="card-spotlight group relative overflow-hidden rounded-xl border border-brand-gold/10 hover:border-brand-gold/50 bg-gray-900/50"
            >
              {/* 封面图 */}
              <div className="aspect-video overflow-hidden bg-gray-800">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* 底部信息 */}
              <div className="p-4">
                <h3 className="text-sm md:text-base font-serif text-white leading-tight line-clamp-2 group-hover:text-brand-gold transition-colors duration-300">
                  {video.title}
                </h3>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">
                    {video.category}
                  </span>
                  <span className="text-brand-gold text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Watch on YouTube
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Featured 角标 */}
              {video.featured && (
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-brand-gold/90 backdrop-blur-sm rounded-full z-20">
                  <span className="text-brand-dark text-[9px] font-bold uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Load More / Show Less 按钮 */}
        {moreVideos.length > 0 && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-medium text-sm"
            >
              {showAll ? (
                <>
                  <ChevronUp size={18} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={18} />
                  Load More ({moreVideos.length} more videos)
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}

export default PerformanceVideos