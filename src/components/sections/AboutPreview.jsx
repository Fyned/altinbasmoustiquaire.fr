import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, CheckCircle } from 'lucide-react'
import { fadeInUp, slideInLeft, slideInRight } from '../../lib/animations'
import { ROUTES } from '../../lib/routes'
import LazyImage from '../common/LazyImage'
import Badge from '../ui/Badge'

const features = [
  'Fabrication 100% artisanale en Isère',
  'Matériaux premium sélectionnés',
  'Pose professionnelle garantie',
]

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <LazyImage src="/images/about/equipe-thumbs-up.jpg" alt="Équipe ALTINBAS — fabricant artisanal de moustiquaires plissées" aspect="4/3" className="rounded-2xl shadow-lg" />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <Badge className="mb-4">Notre Histoire</Badge>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal section-heading mb-6">
              L'Art de la Moustiquaire Plissée
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-6">
              Depuis notre atelier de Pont-Évêque en Isère, nous fabriquons des moustiquaires
              plissées sur mesure alliant savoir-faire artisanal et matériaux de qualité.
              Chaque produit est unique, conçu et réalisé pour s'adapter parfaitement à votre habitat.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary-400 flex-shrink-0" />
                  <span className="text-charcoal font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to={ROUTES.about}
              className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-600 transition-colors"
            >
              Découvrir notre histoire <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
