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
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px]"
          >
            <Image
              src="/images/portrait.jpg"
              alt="Lijun Zhang - Guzheng Artist"
              fill
              className="object-cover rounded-lg shadow-2xl"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDA..."
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Lijun Zhang is an accomplished Guzheng performer and PhD candidate at the University of Leeds. His performances have graced venues such as the Merrison Centre, Manchester Chinatown Festival, and the Confucius Institute, and his work has been featured on CCTV, People's Daily, and CGTN, establishing him as a leading voice in UK-China exchange. Beyond the stage, he is deeply committed to music education, regularly conducting workshops and masterclasses in schools across the region. Through his performances and educational outreach, he bridges classical Chinese traditions with contemporary audiences, fostering cross-cultural understanding and championing the role of cultural ambassadors in building global connections.
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <div className="flex-1 min-w-max">
                <p className="text-brand-gold font-serif text-xl">PhD Candidate</p>
                <p className="text-gray-400 text-sm">University of Leeds</p>
              </div>
              <div className="flex-1 min-w-max">
                <p className="text-brand-gold font-serif text-xl">Performer</p>
                <p className="text-gray-400 text-sm">International Venues</p>
              </div>
              <div className="flex-1 min-w-max">
                <p className="text-brand-gold font-serif text-xl">Ambassador</p>
                <p className="text-gray-400 text-sm">UK-China Cultural Bridge</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About