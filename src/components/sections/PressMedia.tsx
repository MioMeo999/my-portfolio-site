'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Press } from '@/types'

const pressData: Press[] = [
  {
    id: '1',
    publication: 'CCTV News Network',
    headline: 'Cultural Bridge: Lijun Zhang and the Art of Guzheng in Modern Britain',
    excerpt: 'A feature highlighting Lijun\'s role as a UK-China cultural ambassador and her contributions to promoting traditional Chinese music in the UK.',
    date: '2024-06-10',
    externalUrl: '#',
    isFeatured: true,
    fullText: 'Full article about the cultural exchange and impact of Guzheng music in the UK.',
  },
  {
    id: '2',
    publication: 'People\'s Daily',
    headline: 'Leeds PhD Candidate Brings Guzheng to British Audiences',
    excerpt: 'An in-depth profile of Lijun\'s academic journey and her parallel career as a professional performer.',
    date: '2024-05-22',
    externalUrl: '#',
    isFeatured: false,
  },
  {
    id: '3',
    publication: 'CGTN',
    headline: 'The Voice of Guzheng: An Interview with Lijun Zhang',
    excerpt: 'A candid conversation about the role of traditional music in fostering cultural understanding between East and West.',
    date: '2024-04-18',
    externalUrl: '#',
    isFeatured: false,
  },
  {
    id: '4',
    publication: 'Manchester Arts Review',
    headline: 'Performance Review: A Night of Classical Guzheng at the Chinatown Festival',
    excerpt: 'A glowing review of Lijun\'s performance at the Manchester Chinatown Festival, praising her technical mastery and emotional depth.',
    date: '2024-06-20',
    externalUrl: '#',
    isFeatured: false,
  },
  {
    id: '5',
    publication: 'Leeds University News',
    headline: 'PhD Researcher Recognized as Cultural Ambassador',
    excerpt: 'Recognition of Lijun\'s achievements in balancing rigorous academic research with her professional performance career.',
    date: '2024-03-15',
    externalUrl: '#',
    isFeatured: false,
  },
  {
    id: '6',
    publication: 'UK-China Today',
    headline: 'Building Bridges Through Music: The Guzheng Initiative',
    excerpt: 'Exploring how traditional Chinese instruments are becoming key tools for cultural diplomacy in the modern world.',
    date: '2024-02-08',
    externalUrl: '#',
    isFeatured: false,
  },
]

const PressMedia = () => {
  const featured = pressData.filter(p => p.isFeatured)
  const regular = pressData.filter(p => !p.isFeatured)

  return (
    <section id="press" className="section-padding bg-brand-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-brand-gold mb-6">Press & Media</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Featured articles, interviews, and media coverage from international publications.</p>
        </motion.div>

        {/* Featured Article */}
        {featured.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-brand-gold/10 to-brand-red/10 border border-brand-gold/30 rounded-lg p-8 md:p-12 hover:border-brand-gold/60 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start justify-between gap-4 mb-4">
                <p className="text-brand-gold font-serif text-sm font-bold uppercase tracking-wide">Featured</p>
                <ExternalLink size={20} className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="heading-md text-white mb-4">{featured[0].headline}</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">{featured[0].excerpt}</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="text-brand-gold text-sm font-medium mb-4 sm:mb-0">
                  {featured[0].publication} • {new Date(featured[0].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <a
                  href={featured[0].externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors duration-300 font-medium"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Press Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 border border-brand-gold/20 rounded-lg p-6 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <p className="text-brand-gold text-xs font-bold uppercase tracking-wide flex-1">
                  {article.publication}
                </p>
                <ExternalLink size={16} className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
              </div>
              <h3 className="heading-md text-white mb-3 group-hover:text-brand-gold transition-colors duration-300 line-clamp-3">
                {article.headline}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
              <p className="text-gray-500 text-xs">
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PressMedia