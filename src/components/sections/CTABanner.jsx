import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/animations'
import { COMPANY } from '../../lib/constants'
import { ROUTES } from '../../lib/routes'

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Prêt à Protéger Votre Maison ?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Demandez votre devis gratuit et sans engagement.
            Réponse sous 24h, fabrication sur mesure en Isère.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={ROUTES.devis}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-primary-400 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-button text-base sm:text-lg"
            >
              Demander un Devis Gratuit
            </Link>
            <a
              href={`tel:${COMPANY.phone.devisRaw}`}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center gap-2 text-base sm:text-lg"
            >
              <Phone size={20} />
              {COMPANY.phone.devis}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
