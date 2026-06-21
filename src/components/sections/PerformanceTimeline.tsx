'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import type { Performance } from '@/types'

// 演出数据按日期倒序排列（最新在前）
const performanceData: Performance[] = [
  {
    id: '1',
    date: '2026-03-15',
    venue: '约克 · York',
    event: '"骏马迎春 约启新程" 2026约克·中国迎春晚会',
    description: 'Chinese Consul General Tang Rui attended the 2026 York Chinese New Year Gala, which brought together over 600 attendees including the former Lord Mayor of York and the Vice-Chancellor of the University of York, celebrating Chinese culture and the 10th anniversary of the Nanjing-York sister city relationship.',
    category: 'uk-venues',
    images: ['/images/timeline/york-spring-gala-2026.jpg'],
    link: 'https://mp.weixin.qq.com/s/3LNQJyK7oWLUuMboLG5xbw',
  },
  {
    id: '2',
    date: '2026-03-11',
    venue: 'Esther Simpson, LG.08, Leeds University Business School',
    event: 'LUBS Global Impact Day 2026 – Opening Performance',
    description: 'A high-energy cultural performance featuring Guzheng and Indian dance, opening the first-ever LUBS Global Impact Day. The event brought together students, MBEs, alumni, and innovators for a day dedicated to expanding perspectives and professional profiles, with the performance setting an energetic and celebratory tone for the day\'s activities.',
    category: 'uk-venues',
    images: ['/images/timeline/lubs-global-impact-day-2026.jpeg'],
    link: 'https://students.business.leeds.ac.uk/student-community/gid26/',
  },
  {
    id: '3',
    date: '2026-02-16',
    venue: 'Beeston Village Community Centre, Leeds',
    event: 'Lychee Red Year of the Horse Celebration',
    description: 'A warm and vibrant Lunar New Year celebration for the Year of the Horse, hosted by the Lychee Red Chinese Seniors Project with support from the Business Confucius Institute. The event brought together older Chinese residents, their families, and supporters for a day of dumpling making, calligraphy, singing, dancing, and lantern crafting, celebrating heritage, community, and intergenerational connection.',
    category: 'uk-venues',
    images: ['/images/timeline/lychee-red-horse-2026.jpg'],
    link: 'https://southleedslife.com/lychee-red-welcome-the-year-of-the-horse/',
  },
  {
    id: '4',
    date: '2026-02-14',
    venue: 'Merrion Centre, Leeds',
    event: 'Leeds\' Biggest Chinese New Year Celebration 2026',
    description: 'Leeds\' largest Chinese New Year celebration, held across two consecutive weekends in February 2026 at the Merrion Centre. The event drew thousands of visitors and featured a rich programme including guzheng performances, lion dance, traditional Chinese and folk dances, calligraphy workshops, lantern decorating, and a Hanfu & Qipao fashion showcase. Supported by the Business Confucius Institute and attended by the Deputy Lord Mayor of Leeds.',
    category: 'uk-venues',
    images: ['/images/timeline/leeds-chinese-new-year-2026.jpg'],
    link: 'https://confucius.leeds.ac.uk/news/leeds-biggest-chinese-new-year-celebration-once-again-a-big-success/',
  },
  {
    id: '5',
    date: '2026-02-01',
    venue: 'Merchant Taylor\'s Hall, York',
    event: 'York Resident Festival - Chinese New Year Concert',
    description: 'A Chinese New Year concert presented by the East Asian Ensemble as part of the York Resident Festival, opening the Year of the Horse celebrations in York. The programme featured "Market", "Jasmine Flower", "By the Water", "Yao & Yi Nationality Dance", "Ambush on All Sides", "Horse Racing", and "Spring Festival Overture", performed on Guzheng, Pipa, Erhu, Dizi, Violin, and Piano. Supported by the China National Tourist Office (London) and OUYI Media.',
    category: 'uk-venues',
    images: ['/images/timeline/york-resident-festival-2026.jpg'],
    link: 'https://mp.weixin.qq.com/s/3aS-baCHQU16xxy5WQtPKw',
  },
  {
    id: '6',
    date: '2026-01-19',
    venue: 'Leeds, UK',
    event: 'Chinese Classical Music & Dance Workshops for the Local Community',
    description: 'A four-week Chinese classical music and dance workshop series for elderly community members, launched by the Business Confucius Institute in partnership with Dr Xunnan Li and the charity Health for All (Leeds) as part of the Lychee Red Chinese Seniors Project. The workshops attracted around 120 participants from the local Chinese and overseas Chinese communities, featuring guzheng and classical dance sessions with explanation, demonstration, and interactive participation.',
    category: 'uk-venues',
    images: ['/images/timeline/bci-community-workshops-2026.jpg'],
    link: 'https://confucius.leeds.ac.uk/news/bci-supports-classical-music-and-dance-workshops-for-the-local-community/',
  },
  {
    id: '7',
    date: '2025-11-13',
    venue: 'Room 6, LUU Level 2, Leeds University Union',
    event: 'World Unite Acoustic Session',
    description: 'A captivating evening of music as WU Fest Acoustic Sessions presents a unique celebration of traditional Chinese folk music, reimagined through a contemporary lens. Featuring the timeless beauty of three iconic Chinese instruments — the Guzheng, Pipa, and Dizi — each with its own rich cultural heritage and distinctive sound. Accompanied by the Piano, creating a harmonious fusion of East and West.',
    category: 'uk-venues',
    images: ['/images/timeline/world-unite-acoustic-2025.jpg'],
    link: 'https://engage.luu.org.uk/events/HBF6W/world-unite-acoustic-session',
  },
  {
    id: '8',
    date: '2025-09-24',
    venue: 'Pyramid Canteen, Leeds University Union (LUU)',
    event: 'Wu Fest Teaser: GuZheng Performance',
    description: 'A mesmerising Guzheng performance as part of Welcome Week and a teaser for the upcoming Wu Fest in November. Showcasing the delicate and expressive melodies of Chinese music, performed by Lijun Zhang (Mio) — the perfect way to connect, unwind, and enjoy something uniquely beautiful.',
    category: 'uk-venues',
    images: ['/images/timeline/wu-fest-teaser-2025.jpg'],
    link: 'https://engage.luu.org.uk/events/HPHYT/wu-fest-teaser-guzheng-performance',
  },
  {
    id: '9',
    date: '2025-07-06',
    venue: 'Anglers Club, Leeds',
    event: 'LCCS Summer Fair',
    description: 'A beautiful guzheng performance that opened the Leeds Chinese Community School (LCCS) Summer Fair, setting the tone for an afternoon filled with music, dance, and cultural celebration. The event featured traditional Chinese instruments, fusion performances, Hanfu experience, and brought together families and community members from across Leeds.',
    category: 'uk-venues',
    images: ['/images/timeline/lccs-summer-fair-2025.jpg'],
    link: 'https://confucius.leeds.ac.uk/news/lccs-summer-fair-brings-culture-community-and-celebration-to-leeds/',
  },
  {
    id: '10',
    date: '2025-06-13',
    venue: 'University of Leeds',
    event: 'HEAR CHINA – The Sounds of the Yangtze and Yellow Rivers',
    description: 'A captivating public lecture and live performance exploring the deep connections between China\'s geography and its diverse musical traditions. Lijun Zhang performed multiple pieces including "Horse Race", "Yi Ethnic Dance", "Liuyang River", "Jasmine Flower", and "Colourful Clouds Chasing the Moon" alongside musicians from Durham, Manchester, York, and Leeds.',
    category: 'uk-venues',
    images: ['/images/timeline/hear-china-yangtze-yellow-2025.jpg'],
    link: 'https://confucius.leeds.ac.uk/news/hear-china-the-sounds-of-the-yangtze-and-yellow-rivers/',
  },
  {
    id: '11',
    date: '2025-03-11',
    venue: 'Common Ground, Leeds University Union (LUU)',
    event: 'WU Fest Acoustic Session',
    description: 'A special edition of the WU Fest Acoustic Sessions featuring the enchanting melodies of the guzheng, seamlessly blending with the smooth, expressive tones of a jazz trio — a unique fusion of tradition and contemporary sound as part of LUU\'s Spring World Unite Festival.',
    category: 'uk-venues',
    images: ['/images/timeline/wu-fest-acoustic-2025.jpg'],
    link: 'https://engage.luu.org.uk/events/H3738/wu-fest-acoustic-session',
  },
  {
    id: '12',
    date: '2025-01-29',
    venue: 'Leeds University Business School',
    event: 'Year of the Snake Celebration',
    description: 'A stunning Guzheng performance featuring "Spring Festival Suite", "Blooming Flowers and the Full Moon", and a soulful rendition of "Auld Lang Syne" at Leeds University\'s Chinese New Year event hosted by the Business Confucius Institute.',
    category: 'uk-venues',
    images: ['/images/timeline/leeds-business-chinese-new-year-2024.jpg'],
    link: 'https://confucius.leeds.ac.uk/news/leeds-university-celebrates-the-year-of-the-snake-in-style/',
  },
  {
    id: '13',
    date: '2025-01-29',
    venue: 'Harrogate Grammar School',
    event: 'Chinese New Year Workshop & Performance',
    description: 'A captivating Guzheng workshop and performance for 300 Year 7 students as part of Harrogate Grammar School\'s Chinese New Year festivities, featuring traditional Chinese pieces alongside Western tunes, inspiring young learners to explore Mandarin and Chinese culture.',
    category: 'schools',
    images: ['/images/timeline/harrogate-grammar-school-2025.jpg'],
    link: 'https://confucius.leeds.ac.uk/news/chinese-new-year-festivities-light-up-harrogate-grammar-school/',
  },
  {
    id: '14',
    date: '2024-07-06',
    venue: 'Temple Newsam, Leeds',
    event: 'Lihua Education Chinese School Award Ceremony',
    description: 'A Chinese instrumental ensemble performance at the annual award ceremony of Lihua Education Chinese School in Leeds, celebrating students\' achievements with music, dance, and cultural performances.',
    category: 'uk-venues',
    images: ['/images/timeline/lihua-school-awards-2024.jpg'],
    link: 'https://www.oushinet.com/static/content/qj/qjnews/2024-07-12/1261358645863555807.html',
  },
  {
    id: '15',
    date: '2024-06-09',
    venue: 'Salford Quays, Manchester',
    event: 'Manchester Dragon Boat Festival',
    description: 'A solo guzheng performance as part of the UK Chinese Dragon Boat Festival celebration, featuring Chinese instrumental ensemble, dance, choral songs, and live painting.',
    category: 'uk-venues',
    images: ['/images/timeline/manchester-dragon-boat-2024.jpg'],
    link: 'https://confucius.leeds.ac.uk/news/local-chinese-school-perform-at-manchester-dragon-boat-festival-celebrations/',
  },
  {
    id: '16',
    date: '2024-02-08',
    venue: 'Business Confucius Institute, University of Leeds',
    event: '龙年春节庆祝 · Lunar New Year Gala',
    description: 'An intercultural celebration to welcome the Year of the Dragon, featuring a mesmerizing Guzheng performance that captivated the audience.',
    category: 'uk-venues',
    images: ['/images/timeline/dragon-new-year-2024-leeds.jpg'],
    link: 'https://confucius.leeds.ac.uk/news/an-intercultural-celebration-to-welcome-the-year-of-the-dragon/',
  },
]

// 智能自适应图片组件 - 根据比例动态调整
const AdaptiveImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imageStyle, setImageStyle] = useState<{
    aspectClass: string
    objectClass: string
  }>({
    aspectClass: 'aspect-[4/3]',
    objectClass: 'object-cover',
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const img = new window.Image()
    img.onload = () => {
      const ratio = img.naturalWidth / img.naturalHeight

      // 智能判断图片比例
      if (ratio > 1.6) {
        // 超宽屏/横向 (16:9 或更宽)
        setImageStyle({
          aspectClass: 'aspect-[16/9]',
          objectClass: 'object-cover',
        })
      } else if (ratio > 1.2) {
        // 标准横向 (4:3)
        setImageStyle({
          aspectClass: 'aspect-[4/3]',
          objectClass: 'object-cover',
        })
      } else if (ratio > 0.85) {
        // 接近方形 (1:1)
        setImageStyle({
          aspectClass: 'aspect-[1/1]',
          objectClass: 'object-cover',
        })
      } else if (ratio > 0.6) {
        // 竖向 (3:4)
        setImageStyle({
          aspectClass: 'aspect-[3/4]',
          objectClass: 'object-contain',
        })
      } else {
        // 超竖向 (9:16 或更窄)
        setImageStyle({
          aspectClass: 'aspect-[9/16]',
          objectClass: 'object-contain',
        })
      }
      setIsLoading(false)
    }
    img.onerror = () => {
      setIsLoading(false)
    }
    img.src = src
  }, [src])

  return (
    <div className={`relative w-full ${imageStyle.aspectClass} rounded-lg overflow-hidden bg-gray-800/50`}>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin" />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={imageStyle.objectClass}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 45vw"
          unoptimized={src.endsWith('.gif')}
        />
      )}
    </div>
  )
}

const PerformanceTimeline = () => {
  const [filter, setFilter] = useState<string>('all')
  const [showAll, setShowAll] = useState<boolean>(false)

  const filtered = filter === 'all'
    ? performanceData
    : performanceData.filter((p) => p.category === filter)

  const displayData = showAll ? filtered : filtered.slice(0, 5)

  const categories = [
    { value: 'all', label: 'All Performances' },
    { value: 'uk-venues', label: 'UK Venues' },
    { value: 'schools', label: 'Schools' },
    { value: 'charity', label: 'Charity' },
  ]

  const handleFilterChange = (value: string) => {
    setFilter(value)
    setShowAll(false)
  }

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
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of recent performances across UK venues, educational institutions, and charity events.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleFilterChange(cat.value)}
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
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-brand-gold/40 via-brand-gold/60 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {displayData.map((performance, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={performance.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.4) }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* 卡片 - 左右分栏布局 */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch ${
                    isEven ? '' : 'md:grid-flow-col-dense'
                  }`}>
                    
                    {/* 图片区域 */}
                    <div className={`${isEven ? 'md:col-start-1' : 'md:col-start-2'} order-1 ${
                      isEven ? 'md:order-1' : 'md:order-2'
                    }`}>
                      {performance.images.length > 0 && performance.link && (
                        <a
                          href={performance.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block transition-transform duration-300 hover:scale-[1.01]"
                        >
                          <AdaptiveImage
                            src={performance.images[0]}
                            alt={performance.event}
                          />
                        </a>
                      )}
                      {performance.images.length > 0 && !performance.link && (
                        <AdaptiveImage
                          src={performance.images[0]}
                          alt={performance.event}
                        />
                      )}
                    </div>

                    {/* 文字区域 */}
                    <div className={`flex flex-col justify-center ${
                      isEven ? 'md:col-start-2' : 'md:col-start-1'
                    } order-2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="space-y-3">
                        <p className="text-brand-gold text-sm font-medium tracking-wide">
                          {new Date(performance.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        <h3 className="text-xl md:text-2xl font-serif text-white leading-tight">
                          {performance.event}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">
                          {performance.venue}
                        </p>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-4">
                          {performance.description}
                        </p>
                        {performance.link && (
                          <a
                            href={performance.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-brand-gold hover:text-brand-gold/80 font-medium text-sm transition-colors duration-200 group mt-2"
                          >
                            Read full article
                            <ExternalLink size={16} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 时间轴圆点 */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                    <div className="w-5 h-5 bg-brand-gold rounded-full border-4 border-brand-dark shadow-lg shadow-brand-gold/30"></div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Load More / Show Less 按钮 */}
          {filtered.length > 5 && (
            <div className="flex justify-center mt-16">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-medium"
              >
                {showAll ? (
                  <>
                    <ChevronUp size={18} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={18} />
                    Load More ({filtered.length - 5} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PerformanceTimeline