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
          {/* 图片 - 使用 object-cover 完整显示，固定 3:4 比例 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-lg shadow-2xl overflow-hidden bg-gray-900/50 aspect-[3/4] max-h-[600px]"
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

            {/* 标签 - 三列等宽卡片 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-gray-900/50 border border-brand-gold/20 rounded-lg px-4 py-4 text-center hover:border-brand-gold/50 transition-colors duration-300">
                <p className="text-brand-gold font-serif text-lg font-semibold">PhD Candidate</p>
                <p className="text-gray-400 text-xs mt-0.5">University of Leeds</p>
              </div>
              <div className="bg-gray-900/50 border border-brand-gold/20 rounded-lg px-4 py-4 text-center hover:border-brand-gold/50 transition-colors duration-300">
                <p className="text-brand-gold font-serif text-lg font-semibold">Ambassador</p>
                <p className="text-gray-400 text-xs mt-0.5">UK-China Cultural Bridge</p>
              </div>
              <div className="bg-gray-900/50 border border-brand-gold/20 rounded-lg px-4 py-4 text-center hover:border-brand-gold/50 transition-colors duration-300">
                <p className="text-brand-gold font-serif text-lg font-semibold">Performer</p>
                <p className="text-gray-400 text-xs mt-0.5">International Venues</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About