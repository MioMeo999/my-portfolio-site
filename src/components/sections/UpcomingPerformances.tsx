'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, MapPin } from 'lucide-react'

const EVENT_INFO = {
  title: 'Summer Celebration Special',
  subtitle: 'A Fusion of Chinese Melody & Indian Dance',
  date: 'Saturday, 12 July 2026',
  time: '4:30 – 5:30pm',
  location: 'Wellbeing Hub, University of Leeds',
  posterSrc: '/images/events/summer-celebration-2026.png',
  supporter: 'Supported by the Healthy Buildings Network at the University of Leeds',
}

// 🎯 提取通用动画变体，确保与全站其他图片/卡片保持一致
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } // 使用自定义贝塞尔曲线，动效更丝滑
  }
}

const UpcomingPerformances = () => {
  return (
    <section id="upcoming" className="section-padding bg-brand-dark">
      <div className="container-custom">
        {/* 板块标题 */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-brand-gold mb-4">Upcoming Performances</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Join us for live cross-cultural experiences — no booking needed, just drop in and enjoy.
          </p>
        </motion.div>

        {/* 🎨 核心：竖版海报展示区 */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-3xl mx-auto"
        >
          {/* ✨ 海报容器：保留自适应无黑边结构 + 新增统一悬停特效 */}
          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="w-full max-w-md mx-auto mb-10 overflow-hidden rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 cursor-pointer"
          >
            <Image
              src={EVENT_INFO.posterSrc}
              alt={`${EVENT_INFO.title} - ${EVENT_INFO.subtitle}`}
              width={1200}
              height={1800}
              className="w-full h-auto block transition-transform duration-500 ease-out hover:scale-[1.02]"
              priority
            />
          </motion.div>

          {/* 📝 信息区 - 增加交错延迟，形成视觉引导流 */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.2 }} // 稍晚于海报出现
            className="space-y-5 text-center"
          >
            <h3 className="heading-md text-gray-100">{EVENT_INFO.title}</h3>
            <p className="text-brand-gold font-serif text-lg italic tracking-wide">
              {EVENT_INFO.subtitle}
            </p>

            {/* 元数据标签 */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {[
                { icon: Calendar, label: EVENT_INFO.date },
                { icon: Clock, label: EVENT_INFO.time },
                { icon: MapPin, label: EVENT_INFO.location },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-gold/20 bg-gray-900/50 text-gray-300 text-xs font-medium transition-colors hover:border-brand-gold/50 hover:text-white"
                >
                  <item.icon size={12} className="text-brand-gold" />
                  {item.label}
                </span>
              ))}
            </div>

            {/* 支持方 */}
            <p className="text-gray-500 text-xs pt-3">
              {EVENT_INFO.supporter}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default UpcomingPerformances