import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './lib/routes'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import WhatsAppButton from './components/common/WhatsAppButton'
import StickyMobileCTA from './components/layout/StickyMobileCTA'
import ConsentBanner from './components/common/ConsentBanner'

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ProductFenetrePage = lazy(() => import('./pages/ProductFenetrePage'))
const ProductPortePage = lazy(() => import('./pages/ProductPortePage'))
const ProductBaieVitreePage = lazy(() => import('./pages/ProductBaieVitreePage'))
const ProductRideauxPage = lazy(() => import('./pages/ProductRideauxPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const DevisPage = lazy(() => import('./pages/DevisPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ZonePage = lazy(() => import('./pages/ZonePage'))
const MentionsLegalesPage = lazy(() => import('./pages/MentionsLegalesPage'))
const ConfidentialitePage = lazy(() => import('./pages/ConfidentialitePage'))
const CookiesPage = lazy(() => import('./pages/CookiesPage'))
const CGVPage = lazy(() => import('./pages/CGVPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-primary-200 border-t-primary-400 rounded-full animate-spin" />
        <p className="text-sm text-charcoal-light">Chargement...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 pt-[72px] lg:pt-[100px]">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path={ROUTES.home} element={<HomePage />} />
              <Route path={ROUTES.products} element={<ProductsPage />} />
              <Route path={ROUTES.productFenetre} element={<ProductFenetrePage />} />
              <Route path={ROUTES.productPorte} element={<ProductPortePage />} />
              <Route path={ROUTES.productBaie} element={<ProductBaieVitreePage />} />
              <Route path={ROUTES.productRideaux} element={<ProductRideauxPage />} />
              <Route path={ROUTES.gallery} element={<GalleryPage />} />
              <Route path={ROUTES.devis} element={<DevisPage />} />
              <Route path={ROUTES.about} element={<AboutPage />} />
              <Route path={ROUTES.faq} element={<FAQPage />} />
              <Route path={ROUTES.contact} element={<ContactPage />} />
              <Route path={ROUTES.zone} element={<ZonePage />} />
              <Route path={ROUTES.mentionsLegales} element={<MentionsLegalesPage />} />
              <Route path={ROUTES.confidentialite} element={<ConfidentialitePage />} />
              <Route path={ROUTES.cookies} element={<CookiesPage />} />
              <Route path={ROUTES.cgv} element={<CGVPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
      <WhatsAppButton />
      <StickyMobileCTA />
      <ConsentBanner />
    </BrowserRouter>
  )
}
