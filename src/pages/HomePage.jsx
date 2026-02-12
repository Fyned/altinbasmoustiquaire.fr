import PageWrapper from '../components/layout/PageWrapper'
import Hero from '../components/sections/Hero'
import TrustBadges from '../components/sections/TrustBadges'
import ProductCards from '../components/sections/ProductCards'
import BeforeAfter from '../components/sections/BeforeAfter'
import ProcessSteps from '../components/sections/ProcessSteps'
import StatsCounter from '../components/sections/StatsCounter'
import GalleryPreview from '../components/sections/GalleryPreview'
import VideoShowcase from '../components/sections/VideoShowcase'
import Testimonials from '../components/sections/Testimonials'
import AboutPreview from '../components/sections/AboutPreview'
import FAQPreview from '../components/sections/FAQPreview'
import CTABanner from '../components/sections/CTABanner'

export default function HomePage() {
  return (
    <PageWrapper seoKey="home">
      <Hero />
      <TrustBadges />
      <ProductCards />
      <BeforeAfter />
      <ProcessSteps />
      <StatsCounter />
      <GalleryPreview />
      <VideoShowcase />
      <Testimonials />
      <AboutPreview />
      <FAQPreview />
      <CTABanner />
    </PageWrapper>
  )
}
