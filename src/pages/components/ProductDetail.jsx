import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Eye, Volume2, Sun, Ruler, Shield, Wrench, DoorOpen, RotateCcw,
  Accessibility, Wind, Maximize2, Columns2, Award, Gem, Lock,
  Waves, Palette, Package, Sparkles, Star,
} from 'lucide-react'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../../lib/animations'
import { products } from '../../data/products'
import { ROUTES } from '../../lib/routes'
import LazyImage from '../../components/common/LazyImage'
import Badge from '../../components/ui/Badge'
import AnimatedSection from '../../components/common/AnimatedSection'
import ProcessSteps from '../../components/sections/ProcessSteps'
import CTABanner from '../../components/sections/CTABanner'

const iconMap = {
  Eye, Volume2, Sun, Ruler, Shield, Wrench, DoorOpen, RotateCcw,
  Accessibility, Wind, Maximize2, Columns2, Award, Gem, Lock,
  Waves, Palette, Package, Sparkles, Star,
}

function getIcon(name) {
  return iconMap[name] || Star
}

export default function ProductDetail({ product }) {
  if (!product) return null

  const relatedProducts = products.filter(p => p.id !== product.id && p.id !== 'rideaux').slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <LazyImage src={product.image} alt={product.name} aspect="4/3" className="rounded-2xl shadow-lg" />
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {product.badge && <Badge variant="terracotta" className="mb-4">{product.badge}</Badge>}
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-charcoal section-heading mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-charcoal-light leading-relaxed mb-6">{product.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={ROUTES.devis} className="px-6 py-3 bg-primary-400 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-button text-center">
                  Demander un Devis
                </Link>
                <a href="tel:+33660990370" className="px-6 py-3 border-2 border-primary-400 text-primary-400 font-medium rounded-lg hover:bg-primary-50 transition-colors text-center">
                  06 60 99 03 70
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl text-charcoal text-center section-heading-center mb-12">
              Caractéristiques Techniques
            </h2>
            <div className="bg-cream rounded-2xl overflow-hidden">
              {Object.entries(product.specs).map(([key, value], i) => (
                <div key={key} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-cream' : 'bg-white'}`}>
                  <span className="text-sm font-medium text-charcoal capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-sm text-charcoal-light">{value}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 md:py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl text-charcoal text-center section-heading-center mb-12">
              Les Avantages
            </h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {product.advantages.map((adv) => {
              const Icon = getIcon(adv.icon)
              return (
                <motion.div key={adv.title} variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{adv.title}</h3>
                  <p className="text-sm text-charcoal-light">{adv.text}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <ProcessSteps />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <h2 className="font-heading font-bold text-3xl text-charcoal text-center section-heading-center mb-12">
                Découvrez Aussi
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={rp.path} className="block bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 overflow-hidden border border-sand/30">
                  <LazyImage src={rp.image} alt={rp.name} aspect="16/9" className="rounded-none" />
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">{rp.name}</h3>
                    <p className="text-sm text-charcoal-light">{rp.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
