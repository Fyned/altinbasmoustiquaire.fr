import PageWrapper from '../components/layout/PageWrapper'
import { COMPANY } from '../lib/constants'

export default function ConfidentialitePage() {
  return (
    <PageWrapper seoKey="confidentialite">
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <p className="text-sm text-charcoal-light mb-8">Dernière mise à jour : Février 2026</p>
          <h1 className="font-heading font-bold text-3xl text-charcoal mb-8">Politique de Confidentialité</h1>

          <div className="space-y-8 text-charcoal-light leading-relaxed">
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">1. Responsable du Traitement</h2>
              <p>{COMPANY.legalName}, {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}. Email : {COMPANY.email}</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">2. Données Collectées</h2>
              <p>Via nos formulaires : nom, email, téléphone, ville, code postal, type de projet, dimensions, couleur, étage, commentaires. Données de navigation : adresse IP, type de navigateur, pages consultées.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">3. Finalités du Traitement</h2>
              <p>Répondre à vos demandes de devis et de contact, établir des devis personnalisés, améliorer nos services, respecter nos obligations légales.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">4. Durée de Conservation</h2>
              <p>Données de devis et contact : 3 ans. Données de navigation : 13 mois maximum.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">5. Vos Droits</h2>
              <p>Conformément au RGPD, vous disposez des droits d'accès, rectification, effacement, limitation, portabilité et opposition. Exercez vos droits par email à {COMPANY.email}. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
