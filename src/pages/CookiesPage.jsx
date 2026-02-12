import PageWrapper from '../components/layout/PageWrapper'

export default function CookiesPage() {
  return (
    <PageWrapper seoKey="cookies">
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <p className="text-sm text-charcoal-light mb-8">Dernière mise à jour : Février 2026</p>
          <h1 className="font-heading font-bold text-3xl text-charcoal mb-8">Politique de Cookies</h1>

          <div className="space-y-8 text-charcoal-light leading-relaxed">
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">1. Qu'est-ce qu'un Cookie ?</h2>
              <p>Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite sur notre site. Il permet de mémoriser vos préférences et d'améliorer votre expérience de navigation.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">2. Cookies Utilisés</h2>
              <p><strong>Nécessaires :</strong> cookie_consent (durée : 6 mois) — Enregistre votre choix de consentement. Toujours actif.</p>
              <p className="mt-2"><strong>Analytiques :</strong> Google Analytics (_ga, _gid, _gat) — Mesure d'audience anonymisée. Nécessite votre consentement.</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-charcoal mb-3">3. Gestion de vos Préférences</h2>
              <p>Vous pouvez modifier vos préférences à tout moment via le bandeau de cookies ou les paramètres de votre navigateur. La durée de validité du consentement est de 6 mois (conformité CNIL).</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
