import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import UpcomingPerformances from '@/components/sections/UpcomingPerformances'
import PerformanceTimeline from '@/components/sections/ArtisticJourney'
import PerformanceVideos from '@/components/sections/PerformanceVideos'
import PressMedia from '@/components/sections/PressMedia'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <UpcomingPerformances />
      <PerformanceTimeline />
      <PerformanceVideos />
      <PressMedia />
      <Contact />
    </>
  )
}
