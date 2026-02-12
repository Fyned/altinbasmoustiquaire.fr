import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import { fadeInUp, staggerContainer } from '../../lib/animations'

const stats = [
  { target: 30000, suffix: '+', label: 'Abonnés Instagram', format: true },
  { target: 282, suffix: '+', label: 'Avis Clients', format: false },
  { target: 6, suffix: 'm', label: 'Largeur Maximum', format: false },
  { target: 2, suffix: ' ans', label: 'Garantie Incluse', format: false },
]

function StatItem({ target, suffix, label, format, trigger }) {
  const value = useCountUp(target, 2000, trigger)
  const displayValue = format
    ? new Intl.NumberFormat('fr-FR').format(value)
    : value

  return (
    <motion.div variants={fadeInUp} className="text-center">
      <span className="block font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-2">
        {displayValue}{suffix}
      </span>
      <span className="text-sm text-white/80 font-medium">{label}</span>
    </motion.div>
  )
}

export default function StatsCounter() {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-16 md:py-20 gradient-primary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} trigger={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
