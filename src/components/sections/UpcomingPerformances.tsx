'use client'

import { motion } from 'framer-motion'

const UpcomingPerformances = () => {
  return (
    <section id="upcoming" className="section-padding bg-brand-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-brand-gold mb-6">Upcoming Performances</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Content coming soon — stay tuned for upcoming concert dates and events.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default UpcomingPerformances