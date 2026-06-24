import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import UpcomingPerformances from '@/components/sections/UpcomingPerformances'
import PerformanceTimeline from '@/components/sections/CulturalEngagements'
import PerformanceVideos from '@/components/sections/PerformanceVideos'
import PressMedia from '@/components/sections/PressMedia'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      {/* 首屏：包含两个 CTA 按钮，分别跳转到 #performances 和 #contact */}
      <Hero />

      {/* 关于我 */}
      <About />

      {/* 近期演出预告 */}
      <UpcomingPerformances />

      {/* ⚠️ 关键：此组件内部 <section> 的 id 必须与 Hero 中 scrollToSection 的参数一致
          若 Hero 中使用 scrollToSection('performances')，则此组件内应为 id="performances"
          若 Hero 中使用 scrollToSection('highlights')，则此组件内应为 id="highlights" */}
      <PerformanceTimeline />

      {/* 演出视频集锦 */}
      <PerformanceVideos />

      {/* 媒体报道 */}
      <PressMedia />

      {/* 联系与合作：id="contact" */}
      <Contact />
    </>
  )
}