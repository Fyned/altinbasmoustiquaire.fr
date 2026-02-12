import { motion } from 'framer-motion'
import { Shield, Award, Ruler, MapPin, Star } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/animations'

const badges = [
  { icon: Shield, text: 'Garantie 2 ans' },
  { icon: Award, text: 'Fabrication Artisanale' },
  { icon: Ruler, text: 'Sur Mesure' },
  { icon: MapPin, text: 'Basé en Isère (38)' },
  { icon: Star, text: '282+ Avis Clients' },
]

export default function TrustBadges() {
  return (
    <section className="py-8 bg-white border-b border-sand/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.text}
              variants={fadeInUp}
              className="flex items-center gap-3 justify-center py-3"
            >
              <badge.icon size={22} className="text-primary-400 flex-shrink-0" />
              <span className="text-sm font-medium text-charcoal whitespace-nowrap">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
