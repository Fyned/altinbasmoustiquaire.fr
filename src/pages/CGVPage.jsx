import PageWrapper from '../components/layout/PageWrapper'
import { COMPANY } from '../lib/constants'

export default function CGVPage() {
  return (
    <PageWrapper seoKey="cgv">
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <p className="text-sm text-charcoal-light mb-8">Dernière mise à jour : Février 2026</p>
          <h1 className="font-heading font-bold text-3xl text-charcoal mb-8">Conditions Générales de Vente</h1>

          <div className="space-y-8 text-charcoal-light leading-relaxed">
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">Article 1 — Objet</h2>
              <p>Les présentes CGV régissent les ventes de moustiquaires plissées sur mesure et rideaux réalisées par {COMPANY.legalName}.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">Article 2 — Devis et Commande</h2>
              <p>Tout devis est gratuit et valable 30 jours. La commande est confirmée par la signature du devis et le versement de l'acompte.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">Article 3 — Garantie</h2>
              <p>Nos produits bénéficient d'une garantie de 2 ans couvrant les défauts de fabrication et dysfonctionnements du mécanisme dans des conditions normales d'utilisation.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">Article 4 — Droit de Rétractation</h2>
              <p>Conformément au Code de la consommation, les produits fabriqués sur mesure sont exclus du droit de rétractation (article L.221-28, 3°).</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">Article 5 — Droit Applicable</h2>
              <p>Les présentes CGV sont soumises au droit français. Tout litige sera soumis aux tribunaux compétents du ressort de Vienne (38).</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
