import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { galleryItems } from '../../data/gallery'
import { ROUTES } from '../../lib/routes'
import LazyImage from '../common/LazyImage'

export default function GalleryPreview() {
  const previewItems = galleryItems.slice(0, 6)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal section-heading-center">
            Nos Réalisations
          </h2>
          <p className="mt-6 text-charcoal-light max-w-2xl mx-auto">
            Découvrez quelques-unes de nos installations chez nos clients en Isère et Rhône-Alpes.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {previewItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
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
        </motion.div>

        <div className="text-center mt-10">
          <Link
            to={ROUTES.gallery}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-400 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-button"
          >
            Voir toutes nos réalisations <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
