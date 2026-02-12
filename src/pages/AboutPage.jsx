import { motion } from 'framer-motion'
import { CheckCircle, Heart, Gem, Users } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../lib/animations'
import LazyImage from '../components/common/LazyImage'
import AnimatedSection from '../components/common/AnimatedSection'
import StatsCounter from '../components/sections/StatsCounter'
import CTABanner from '../components/sections/CTABanner'

const values = [
  { icon: Gem, title: 'Qualité Artisanale', text: 'Chaque moustiquaire est fabriquée à la main avec des matériaux premium sélectionnés pour leur durabilité.' },
  { icon: Heart, title: 'Passion du Métier', text: 'Notre savoir-faire artisanal se transmet dans chaque détail, chaque finition, chaque installation.' },
  { icon: Users, title: 'Service Client', text: 'Un interlocuteur unique du devis à la pose. Nous vous accompagnons à chaque étape de votre projet.' },
]

export default function AboutPage() {
  return (
    <PageWrapper seoKey="about">
      <section className="py-16 md:py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal section-heading-center">
              À Propos d'ALTINBAS
            </h1>
            <p className="mt-6 text-charcoal-light max-w-2xl mx-auto text-lg">
              Fabricant artisanal de moustiquaires plissées sur mesure depuis notre atelier de Pont-Évêque, en Isère.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <LazyImage src="/images/about/equipe-thumbs-up.jpg" alt="Équipe ALTINBAS — fabricant artisanal de moustiquaires plissées en Isère" aspect="4/3" className="rounded-2xl shadow-lg" />
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-heading font-bold text-3xl text-charcoal section-heading mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  ALTINBAS est né de la passion pour l'artisanat et la volonté de proposer des solutions de protection
                  anti-insectes à la fois efficaces et esthétiques. Basé à Pont-Évêque, au cœur de l'Isère, notre atelier
                  est le lieu où chaque moustiquaire prend vie.
                </p>
                <p>
                  Notre spécialité ? Les moustiquaires plissées sur mesure, capables de s'adapter à toutes les configurations :
                  fenêtres, portes-fenêtres et baies vitrées allant jusqu'à 6 mètres de largeur — une capacité rare
                  sur le marché artisanal français.
                </p>
                <p>
                  Avec plus de 30 000 abonnés sur Instagram et plus de 280 avis clients positifs, ALTINBAS
                  s'impose comme une référence en matière de moustiquaires plissées sur mesure dans la région Rhône-Alpes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
              <h2 className="font-heading font-bold text-3xl text-charcoal section-heading mb-6">Notre Savoir-Faire</h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Chaque moustiquaire ALTINBAS est le fruit d'un travail minutieux. De la prise de mesure
                  à l'installation finale, nous maîtrisons l'ensemble du processus pour garantir un résultat
                  parfait, adapté à votre habitat.
                </p>
                <p>
                  Notre expertise nous permet de réaliser des installations sur mesure pour toutes
                  les configurations, y compris les grandes baies vitrées allant jusqu'à 6 mètres
                  de largeur — notre spécialité.
                </p>
              </div>
            </motion.div>
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2">
              <LazyImage src="/images/about/fondateur-baie-vitree.jpg" alt="Fondateur ALTINBAS devant une baie vitrée équipée de moustiquaire plissée" aspect="4/3" className="rounded-2xl shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl text-charcoal text-center section-heading-center mb-12">
              Nos Valeurs
            </h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
                  <v.icon size={28} className="text-primary-400" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">{v.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <StatsCounter />
      <CTABanner />
    </PageWrapper>
  )
}
