import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { ROUTES } from '../lib/routes'
import PageWrapper from '../components/layout/PageWrapper'

export default function NotFoundPage() {
  return (
    <PageWrapper seoKey="notFound">
      <div className="py-24 md:py-32 text-center">
        <div className="max-w-md mx-auto px-4">
          <Compass size={64} className="text-primary-400 mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl text-charcoal mb-4">Page Introuvable</h1>
          <p className="text-charcoal-light mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={ROUTES.home} className="px-6 py-3 bg-primary-400 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-button">
              Retour à l'accueil
            </Link>
            <Link to={ROUTES.contact} className="px-6 py-3 border-2 border-primary-400 text-primary-400 font-medium rounded-lg hover:bg-primary-50 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
