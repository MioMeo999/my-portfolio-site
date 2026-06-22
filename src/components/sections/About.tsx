'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-brand-dark to-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-center mb-16 text-brand-gold">About Lijun</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 🆕 肖像图片 - 聚光灯 + 克制缩放（无上浮） */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: { type: 'tween', ease: 'easeOut', duration: 0.4 },
            }}
            className="card-spotlight relative rounded-lg shadow-2xl overflow-hidden bg-gray-900/50 aspect-[3/4] max-h-[600px] border border-white/5"
          >
            <Image
              src="/images/about-portrait.jpg"
              alt="Lijun Zhang - Guzheng Artist"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>

          {/* 文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Lijun Zhang is an accomplished Guzheng performer and PhD candidate at the University of Leeds. His performances have graced venues such as the Merrion Centre, Manchester Chinatown Festival, and the Confucius Institute, and his work has been featured on CCTV, People's Daily, and CGTN, establishing him as a leading voice in UK-China exchange. Beyond the stage, he is deeply committed to music education, regularly conducting workshops and masterclasses in schools across the region. Through his performances and educational outreach, he bridges classical Chinese traditions with contemporary audiences, fostering cross-cultural understanding and championing the role of cultural ambassadors in building global connections.
            </p>

            {/* 🆕 标签卡片 - 统一聚光灯 + 轻量弹簧上浮 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { title: 'PhD Candidate', subtitle: 'University of Leeds' },
                { title: 'Ambassador', subtitle: 'UK-China Cultural Bridge' },
                { title: 'Performer', subtitle: 'International Venues' },
              ].map((tag) => (
                <motion.div
                  key={tag.title}
                  whileHover={{
                    y: -3,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                    transition: { type: 'spring', stiffness: 400, damping: 25 },
                  }}
                  className="card-spotlight bg-gray-900/50 border border-brand-gold/20 rounded-lg px-4 py-4 text-center hover:border-brand-gold/50 cursor-default"
                >
                  <p className="text-brand-gold font-serif text-lg font-semibold">{tag.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{tag.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About