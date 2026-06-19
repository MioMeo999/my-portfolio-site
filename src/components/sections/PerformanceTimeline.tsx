'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import type { Performance } from '@/types'

const performanceData: Performance[] = [
  {
    id: '1',
    date: '2024-06-15',
    venue: 'Manchester Chinatown Festival',
    event: 'Summer Performance Series',
    description: 'Live performance for over 500 attendees celebrating Chinese culture in the heart of Manchester.',
    category: 'uk-venues',
    images: ['/images/performance-1.jpg', '/images/performance-1-2.jpg'],
  },
  {
    id: '2',
    date: '2024-05-20',
    venue: 'Confucius Institute, Leeds',
    event: 'Spring Concert Series',
    description: 'Intimate concert featuring traditional Guzheng pieces and contemporary arrangements.',
    category: 'uk-venues',
    images: ['/images/performance-2.jpg'],
  },
  {
    id: '3',
    date: '2024-04-10',
    venue: 'Leeds Primary School',
    event: 'Music Education Workshop',
    description: 'Educational masterclass introducing young students to the Guzheng and traditional Chinese music.',
    category: 'schools',
    images: ['/images/performance-3.jpg', '/images/performance-3-2.jpg'],
  },
  {
    id: '4',
    date: '2024-03-05',
    venue: 'Leeds Charity Gala',
    event: 'Charity Benefit Concert',
    description: 'Fundraising performance supporting UK-China educational initiatives.',
    category: 'charity',
    images: ['/images/performance-4.jpg'],
  },
]

const PerformanceTimeline = () => {
  const [filter, setFilter] = useState<string>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = filter === 'all'
    ? performanceData
    : performanceData.filter(p => p.category === filter)

  const categories = [
    { value: 'all', label: 'All Performances' },
    { value: 'uk-venues', label: 'UK Venues' },
    { value: 'schools', label: 'Schools' },
    { value: 'charity', label: 'Charity' },
  ]

  return (
    <section id="performances" className="section-padding bg-brand-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-brand-gold mb-6">Performance Timeline</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A selection of recent performances across UK venues, educational institutions, and charity events.</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.value
                  ? 'bg-brand-gold text-brand-dark'
                  : 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-gold via-brand-gold to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {filtered.map((performance, index) => (
              <motion.div
                key={performance.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                {/* Card */}
                <div
                  className={`relative ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                  }`}
                >
                  <div className="bg-gray-900/50 border border-brand-gold/20 rounded-lg p-6 hover:border-brand-gold/50 transition-all duration-300 cursor-pointer"
                    onClick={() => setExpandedId(expandedId === performance.id ? null : performance.id)}
                  >
                    <p className="text-brand-gold text-sm font-medium mb-2">
                      {new Date(performance.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h3 className="heading-md text-white mb-2">{performance.event}</h3>
                    <p className="text-gray-400 mb-3">{performance.venue}</p>
                    <p className="text-gray-300 leading-relaxed mb-4">{performance.description}</p>

                    {performance.images.length > 0 && (
                      <div className="flex items-center text-brand-gold text-sm font-medium">
                        View images <ChevronRight size={16} className="ml-1" />
                      </div>
                    )}

                    {/* Expanded Images */}
                    {expandedId === performance.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 grid grid-cols-2 gap-3"
                      >
                        {performance.images.map((img, idx) => (
                          <div key={idx} className="rounded-lg overflow-hidden h-32 bg-gray-800">
                            {/* Image placeholder - replace with actual Image component in production */}
                            <div className="w-full h-full bg-gradient-to-br from-brand-gold/20 to-brand-red/20 flex items-center justify-center">
                              <span className="text-gray-400 text-xs">Image {idx + 1}</span>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-6 h-6 bg-brand-gold rounded-full border-4 border-brand-dark shadow-lg shadow-brand-gold/50"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformanceTimeline