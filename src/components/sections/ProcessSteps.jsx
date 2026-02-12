import { motion } from 'framer-motion'
import { Ruler, Factory, Wrench } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/animations'

const steps = [
  {
    num: '01',
    icon: Ruler,
    title: 'Prise de Mesures',
    description: 'Notre technicien se déplace chez vous pour prendre les mesures exactes de vos ouvertures et vous conseiller sur la meilleure solution.',
  },
  {
    num: '02',
    icon: Factory,
    title: 'Fabrication Sur Mesure',
    description: 'Chaque moustiquaire est fabriquée à la main dans notre atelier en Isère, avec des matériaux de qualité premium et un soin artisanal.',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Installation Professionnelle',
    description: 'Nos techniciens qualifiés installent votre moustiquaire avec précision et propreté. Résultat garanti, finitions impeccables.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal section-heading-center">
            Comment Ça Marche
          </h2>
          <p className="mt-6 text-charcoal-light max-w-2xl mx-auto">
            Un processus simple en 3 étapes pour équiper votre maison de moustiquaires sur mesure.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 relative"
        >
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-primary-200" />

          {steps.map((step) => (
            <motion.div key={step.num} variants={fadeInUp} className="text-center relative">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-400 text-white mb-6 shadow-button">
                <step.icon size={28} />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-charcoal text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-charcoal-light leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
