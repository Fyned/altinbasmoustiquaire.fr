import PageWrapper from '../components/layout/PageWrapper'
import { COMPANY } from '../lib/constants'

export default function MentionsLegalesPage() {
  return (
    <PageWrapper seoKey="mentionsLegales">
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <p className="text-sm text-charcoal-light mb-8">Dernière mise à jour : Février 2026</p>
          <h1 className="font-heading font-bold text-3xl text-charcoal mb-8">Mentions Légales</h1>

          <div className="prose prose-charcoal max-w-none space-y-8 text-charcoal-light leading-relaxed">
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">1. Éditeur du Site</h2>
              <p>{COMPANY.legalName}<br />SIREN : {COMPANY.siren}<br />Gérant : {COMPANY.legal}<br />Adresse : {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}<br />Téléphone : {COMPANY.phone.devis}<br />Email : {COMPANY.email}</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">2. Hébergement</h2>
              <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Site : vercel.com.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">3. Propriété Intellectuelle</h2>
              <p>L'ensemble des éléments constituant le site altinbasmoustiquaire.fr (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive d'{COMPANY.legalName}, sauf mentions contraires. Toute reproduction, représentation, modification ou exploitation non autorisée est interdite.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">4. Médiation</h2>
              <p>Conformément à l'article L.612-1 du Code de la consommation, le consommateur peut recourir gratuitement au service de médiation MEDICYS, 73 Boulevard de Clichy, 75009 Paris — www.medicys.fr. Le consommateur peut également utiliser la plateforme de règlement en ligne des litiges accessible à l'adresse : https://ec.europa.eu/consumers/odr.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">5. Crédits</h2>
              <p>Conception et développement : Fyned (fyned.com)</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
