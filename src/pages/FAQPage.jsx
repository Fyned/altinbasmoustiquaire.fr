import PageWrapper from '../components/layout/PageWrapper'
import { faqCategories } from '../data/faq'
import Accordion from '../components/ui/Accordion'
import AnimatedSection from '../components/common/AnimatedSection'
import JsonLd from '../components/common/JsonLd'
import CTABanner from '../components/sections/CTABanner'

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap(cat =>
      cat.questions.map(q => ({
        '@type': 'Question',
        name: q.q,
        acceptedAnswer: { '@type': 'Answer', text: q.a },
      }))
    ),
  }

  return (
    <PageWrapper seoKey="faq">
      <JsonLd data={faqSchema} />

      <section className="py-16 md:py-20 bg-beige">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal section-heading-center">
              Questions Fréquentes
            </h1>
            <p className="mt-6 text-charcoal-light text-lg">
              Trouvez les réponses à vos questions sur nos moustiquaires plissées.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 space-y-12">
          {faqCategories.map((cat) => (
            <AnimatedSection key={cat.id}>
              <h2 className="font-heading font-semibold text-2xl text-charcoal mb-6">{cat.title}</h2>
              <div className="bg-cream rounded-2xl p-6 md:p-8">
                {cat.questions.map((q, i) => (
                  <Accordion key={i} title={q.q}>{q.a}</Accordion>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTABanner />
    </PageWrapper>
  )
}
