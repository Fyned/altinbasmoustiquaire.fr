import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/layout/PageWrapper'
import { galleryItems, galleryFilters } from '../data/gallery'
import LazyImage from '../components/common/LazyImage'
import Modal from '../components/ui/Modal'
import AnimatedSection from '../components/common/AnimatedSection'
import CTABanner from '../components/sections/CTABanner'
import { cn } from '../lib/utils'

export default function GalleryPage() {
  const [filter, setFilter] = useState('tout')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'tout' ? galleryItems : galleryItems.filter(i => i.type === filter)

  return (
    <PageWrapper seoKey="gallery">
      <section className="py-16 md:py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal section-heading-center">
              Nos Réalisations
            </h1>
            <p className="mt-6 text-charcoal-light max-w-2xl mx-auto text-lg">
              Découvrez nos installations de moustiquaires plissées chez nos clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {galleryFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  'px-5 py-2 text-sm font-medium rounded-full transition-all',
                  filter === f.id
                    ? 'bg-primary-400 text-white shadow-button'
                    : 'bg-beige text-charcoal hover:bg-primary-50'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setLightbox(item)}
                >
                  <LazyImage src={item.image} alt={item.title} aspect="4/3" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-white/70">{item.city}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Modal isOpen={!!lightbox} onClose={() => setLightbox(null)}>
        {lightbox && (
          <div className="bg-white rounded-2xl overflow-hidden">
            <img src={lightbox.image} alt={lightbox.title} className="w-full object-cover" style={{ aspectRatio: '16/9' }} />
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl text-charcoal">{lightbox.title}</h3>
              <p className="text-charcoal-light">{lightbox.city}</p>
            </div>
          </div>
        )}
      </Modal>

      <CTABanner />
    </PageWrapper>
  )
}
