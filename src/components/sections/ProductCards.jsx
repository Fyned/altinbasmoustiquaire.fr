import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { products } from '../../data/products'
import { ROUTES } from '../../lib/routes'
import LazyImage from '../common/LazyImage'
import Badge from '../ui/Badge'

export default function ProductCards() {
  const mainProducts = products.filter(p => p.id !== 'rideaux')

  return (
    <section className="py-16 md:py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal section-heading-center">
            Nos Moustiquaires Plissées
          </h2>
          <p className="mt-6 text-charcoal-light max-w-2xl mx-auto">
            Découvrez notre gamme de moustiquaires plissées sur mesure,
            fabriquées artisanalement dans notre atelier en Isère.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {mainProducts.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <Link
                to={product.path}
                className="block bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                <div className="relative">
                  <LazyImage src={product.image} alt={product.name} aspect="4/3" className="rounded-none" />
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="terracotta">{product.badge}</Badge>
                    </div>
                  )}
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-charcoal-light mb-4 line-clamp-2">
                    {product.tagline}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary-400 bg-primary-50 px-3 py-1 rounded-full">
                      {product.keySpec}
                    </span>
                    <span className="flex items-center text-sm font-medium text-primary-400 group-hover:gap-2 transition-all">
                      En savoir plus <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link
            to={ROUTES.products}
            className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-600 transition-colors"
          >
            Voir tous nos produits <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
