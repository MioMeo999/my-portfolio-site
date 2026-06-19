'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import type { Video } from '@/types'

const videoData: Video[] = [
  {
    id: '1',
    title: 'Live at Manchester Chinatown Festival 2024',
    date: '2024-06-15',
    description: 'A captivating performance of traditional Guzheng pieces at the Manchester Chinatown Festival.',
    posterUrl: '/images/video-1-poster.jpg',
    videoUrl: '/videos/performance-1.mp4',
    type: 'self-hosted',
    duration: '8:45',
  },
  {
    id: '2',
    title: 'Guzheng Masterclass - Leeds Confucius Institute',
    date: '2024-05-20',
    description: 'Educational masterclass on traditional Guzheng techniques and contemporary arrangements.',
    posterUrl: '/images/video-2-poster.jpg',
    embedId: 'dQw4w9WgXcQ',
    type: 'youtube',
    duration: '12:30',
  },
  {
    id: '3',
    title: 'Cultural Ambassador Interview - CGTN',
    date: '2024-04-10',
    description: 'Interview discussing UK-China cultural exchange and the role of traditional music in modern society.',
    posterUrl: '/images/video-3-poster.jpg',
    embedId: 'dQw4w9WgXcQ',
    type: 'youtube',
    duration: '15:20',
  },
  {
    id: '4',
    title: 'Spring Concert Highlights',
    date: '2024-03-15',
    description: 'Highlights from the spring concert series featuring both classical and contemporary pieces.',
    posterUrl: '/images/video-4-poster.jpg',
    videoUrl: '/videos/spring-concert.mp4',
    type: 'self-hosted',
    duration: '10:15',
  },
  {
    id: '5',
    title: 'Traditional Guzheng Techniques - Tutorial',
    date: '2024-02-28',
    description: 'A comprehensive guide to essential Guzheng playing techniques for beginners and intermediate players.',
    posterUrl: '/images/video-5-poster.jpg',
    embedId: 'dQw4w9WgXcQ',
    type: 'youtube',
    duration: '22:45',
  },
  {
    id: '6',
    title: 'Fusion Performance - East Meets West',
    date: '2024-01-20',
    description: 'An experimental fusion of traditional Guzheng with contemporary Western instruments.',
    posterUrl: '/images/video-6-poster.jpg',
    videoUrl: '/videos/fusion-performance.mp4',
    type: 'self-hosted',
    duration: '9:30',
  },
]

const PerformanceVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const openVideo = (video: Video, index: number) => {
    setSelectedVideo(video)
    setCurrentIndex(index)
  }

  const nextVideo = () => {
    const nextIdx = (currentIndex + 1) % videoData.length
    setSelectedVideo(videoData[nextIdx])
    setCurrentIndex(nextIdx)
  }

  const prevVideo = () => {
    const prevIdx = (currentIndex - 1 + videoData.length) % videoData.length
    setSelectedVideo(videoData[prevIdx])
    setCurrentIndex(prevIdx)
  }

  return (
    <section id="videos" className="section-padding bg-gradient-to-b from-brand-dark to-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-brand-gold mb-6">Performance Videos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Watch selected performances, masterclasses, and cultural features showcasing the art of Guzheng.</p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {videoData.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openVideo(video, index)}
              className="relative group cursor-pointer h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Poster/Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-red/20 flex items-center justify-center">
                <span className="text-gray-400">Video Thumbnail</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

              {/* Play Button */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <Play size={32} className="text-brand-dark fill-brand-dark ml-1" />
                </div>
              </motion.div>

              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-xs font-medium text-brand-gold z-10">
                {video.duration}
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs text-brand-gold mb-1">
                  {new Date(video.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <h3 className="text-sm font-semibold text-white line-clamp-2">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-brand-dark/80 hover:bg-brand-dark rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* Video Player */}
            <div className="aspect-video bg-black flex items-center justify-center relative">
              {selectedVideo.type === 'self-hosted' ? (
                <video
                  autoPlay
                  controls
                  className="w-full h-full"
                  src={selectedVideo.videoUrl}
                />
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1&rel=0&enablejsapi=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Modal Content */}
            <div className="bg-brand-dark/80 backdrop-blur-sm p-6 md:p-8">
              <p className="text-brand-gold text-sm font-medium mb-2">
                {new Date(selectedVideo.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h2 className="heading-md text-white mb-3">{selectedVideo.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{selectedVideo.description}</p>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  {currentIndex + 1} / {videoData.length}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={prevVideo}
                    className="px-6 py-2 bg-brand-gold/20 hover:bg-brand-gold/40 text-brand-gold rounded-lg transition-colors duration-300"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={nextVideo}
                    className="px-6 py-2 bg-brand-gold/20 hover:bg-brand-gold/40 text-brand-gold rounded-lg transition-colors duration-300"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default PerformanceVideos