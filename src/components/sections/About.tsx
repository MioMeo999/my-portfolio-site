'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-brand-dark to-black">
      <div className="container-custom">
        {/* 主标题 - 居中，更大气 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="heading-lg text-center mb-16 text-brand-gold text-3xl md:text-4xl font-serif"
        >
          About Lijun
        </motion.h2>

        {/* 图文并置布局 */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 🎯 肖像图片 - 左侧，保持聚光灯效果 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.01,
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

          {/* 文字内容 - 右侧，与图片顶部对齐，限制宽度提升可读性 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-prose"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Lijun Zhang is a musician and cultural connector based in the United Kingdom. Through the Guzheng, he creates opportunities for people from different cultural backgrounds to meet, learn, and connect through shared musical experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              His work spans live performance, education, community engagement, and artistic collaboration. Whether performing at festivals, leading workshops in schools, or participating in intercultural events, he uses music as a platform for dialogue, curiosity, and cultural exchange.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Alongside his artistic practice, Lijun is currently pursuing a PhD at the University of Leeds. His performances and cultural activities have been featured by CCTV, People's Daily, and CGTN, and he regularly collaborates with schools, community organisations, and cultural institutions across the United Kingdom.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About