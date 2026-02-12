import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/layout/PageWrapper'
import { products, productComparisonTable } from '../data/products'
import { fadeInUp, staggerContainer } from '../lib/animations'
import LazyImage from '../components/common/LazyImage'
import Badge from '../components/ui/Badge'
import CTABanner from '../components/sections/CTABanner'
import AnimatedSection from '../components/common/AnimatedSection'

export default function ProductsPage() {
  return (
    <PageWrapper seoKey="products">
      {/* Hero Banner */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal section-heading-center">
              Nos Produits
            </h1>
            <p className="mt-6 text-charcoal-light max-w-2xl mx-auto text-lg">
              Découvrez notre gamme complète de moustiquaires plissées sur mesure et rideaux artisanaux.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <Link
                  to={product.path}
                  className="block bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group border border-sand/30"
                >
                  <LazyImage src={product.image} alt={product.name} aspect="16/9" className="rounded-none" />
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="font-heading font-semibold text-2xl text-charcoal">{product.name}</h2>
                      {product.badge && <Badge variant="terracotta">{product.badge}</Badge>}
                    </div>
                    <p className="text-charcoal-light mb-4">{product.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-primary-400 font-medium group-hover:gap-2 transition-all">
                      En savoir plus <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-beige">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl text-charcoal text-center section-heading-center mb-12">
              Comparatif
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-card overflow-hidden">
                <thead>
                  <tr className="bg-primary-400 text-white">
                    {productComparisonTable.headers.map((h, i) => (
                      <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {productComparisonTable.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                      {row.map((cell, j) => (
                        <td key={j} className={`px-4 py-3 text-sm ${j === 0 ? 'font-medium text-charcoal' : 'text-charcoal-light'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner />
    </PageWrapper>
  )
}
