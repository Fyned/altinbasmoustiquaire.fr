import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { homeFaqQuestions } from '../../data/faq'
import { ROUTES } from '../../lib/routes'
import Accordion from '../ui/Accordion'
import AnimatedSection from '../common/AnimatedSection'

export default function FAQPreview() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal section-heading-center">
              Questions Fréquentes
            </h2>
            <p className="mt-6 text-charcoal-light">
              Les réponses aux questions les plus posées par nos clients.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-card">
            {homeFaqQuestions.map((faq, i) => (
              <Accordion key={i} title={faq.q} defaultOpen={i === 0}>
                {faq.a}
              </Accordion>
            ))}
          </div>
        </AnimatedSection>

        <div className="text-center mt-8">
          <Link
            to={ROUTES.faq}
            className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-600 transition-colors"
          >
            Voir toutes les questions <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
