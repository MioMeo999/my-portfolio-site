'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, ExternalLink, MapPin } from 'lucide-react'

type UpcomingPerformance = {
  id: string
  sortDate: string
  title: string
  subtitle: string
  date: string
  time: string
  location: string
  posterSrc: string
  supporter?: string
  link?: string
}

const upcomingPerformances: UpcomingPerformance[] = []

const sortedUpcomingPerformances = [...upcomingPerformances].sort(
  (a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()
)

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
  if (sortedUpcomingPerformances.length === 0) {
    return null
  }

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

        <div className="space-y-16">
          {sortedUpcomingPerformances.map((event, index) => (
            <motion.div
              key={event.id}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="w-full max-w-md mx-auto mb-10 overflow-hidden rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
              >
                {event.link ? (
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Image
                      src={event.posterSrc}
                      alt={`${event.title} - ${event.subtitle}`}
                      width={1200}
                      height={1800}
                      className="w-full h-auto block transition-transform duration-500 ease-out hover:scale-[1.02]"
                      priority={index === 0}
                    />
                  </a>
                ) : (
                  <Image
                    src={event.posterSrc}
                    alt={`${event.title} - ${event.subtitle}`}
                    width={1200}
                    height={1800}
                    className="w-full h-auto block transition-transform duration-500 ease-out"
                    priority={index === 0}
                  />
                )}
              </motion.div>

              <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.2 }}
                className="space-y-5 text-center"
              >
                <h3 className="heading-md text-gray-100">{event.title}</h3>
                <p className="text-brand-gold font-serif text-lg italic tracking-wide">
                  {event.subtitle}
                </p>

                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {[
                    { icon: Calendar, label: event.date },
                    { icon: Clock, label: event.time },
                    { icon: MapPin, label: event.location },
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

                {event.supporter && (
                  <p className="text-gray-500 text-xs pt-3">
                    {event.supporter}
                  </p>
                )}

                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold/80 font-medium text-sm transition-colors duration-200"
                  >
                    Event details
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingPerformances
