import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/layout/PageWrapper'
import { fadeInUp, staggerContainer } from '../lib/animations'
import PlaceholderImage from '../components/common/PlaceholderImage'
import AnimatedSection from '../components/common/AnimatedSection'
import CTABanner from '../components/sections/CTABanner'

const cities = [
  { name: 'Grenoble', distance: '25 km' },
  { name: 'Lyon', distance: '55 km' },
  { name: 'Vienne', distance: '8 km' },
  { name: 'Bourgoin-Jallieu', distance: '30 km' },
  { name: 'Valence', distance: '75 km' },
  { name: 'Chambéry', distance: '90 km' },
  { name: 'Saint-Étienne', distance: '85 km' },
  { name: 'Annecy', distance: '130 km' },
]

export default function ZonePage() {
  return (
    <PageWrapper seoKey="zone">
      <section className="py-16 md:py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal section-heading-center">
              Zone d'Intervention
            </h1>
            <p className="mt-6 text-charcoal-light text-lg max-w-2xl mx-auto">
              Basés à Pont-Évêque en Isère, nous intervenons dans toute la région Rhône-Alpes et au-delà.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <AnimatedSection>
              <PlaceholderImage aspect="4/3" label="Carte de France — zones d'intervention" className="rounded-2xl shadow-lg" />
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <h2 className="font-heading font-bold text-3xl text-charcoal section-heading mb-8">
                  Nos Villes d'Intervention
                </h2>
              </AnimatedSection>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {cities.map((city) => (
                  <motion.div key={city.name} variants={fadeInUp} className="flex items-center gap-3 bg-cream rounded-lg p-4">
                    <MapPin size={18} className="text-primary-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">{city.name}</p>
                      <p className="text-xs text-charcoal-light">{city.distance} de Pont-Évêque</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <p className="mt-6 text-sm text-charcoal-light">
                Vous êtes situé en dehors de ces zones ? Contactez-nous — nous intervenons dans toute la France sur demande.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageWrapper>
  )
}
