import { ROUTES } from '../lib/routes'

export const mainNav = [
  { label: 'Accueil', path: ROUTES.home },
  {
    label: 'Nos Produits',
    path: ROUTES.products,
    children: [
      { label: 'Moustiquaire Fenêtre', path: ROUTES.productFenetre, description: 'Protection discrète pour vos fenêtres' },
      { label: 'Moustiquaire Porte-Fenêtre', path: ROUTES.productPorte, description: 'Passage facile au quotidien' },
      { label: 'Moustiquaire Baie Vitrée', path: ROUTES.productBaie, description: 'Notre spécialité — jusqu\'à 6m' },
      { label: 'Rideaux Sur Mesure', path: ROUTES.productRideaux, description: 'S-pile et tül vertical' },
    ]
  },
  { label: 'Nos Réalisations', path: ROUTES.gallery },
  { label: 'À Propos', path: ROUTES.about },
  { label: 'FAQ', path: ROUTES.faq },
  { label: 'Contact', path: ROUTES.contact },
]

export const footerColumns = [
  {
    title: 'Nos Produits',
    links: [
      { label: 'Moustiquaire Fenêtre', path: ROUTES.productFenetre },
      { label: 'Moustiquaire Porte-Fenêtre', path: ROUTES.productPorte },
      { label: 'Moustiquaire Baie Vitrée', path: ROUTES.productBaie },
      { label: 'Rideaux Sur Mesure', path: ROUTES.productRideaux },
    ]
  },
  {
    title: 'Informations',
    links: [
      { label: 'À Propos', path: ROUTES.about },
      { label: 'Nos Réalisations', path: ROUTES.gallery },
      { label: 'FAQ', path: ROUTES.faq },
      { label: 'Zone d\'Intervention', path: ROUTES.zone },
      { label: 'Contact', path: ROUTES.contact },
    ]
  },
]

export const legalLinks = [
  { label: 'Mentions Légales', path: ROUTES.mentionsLegales },
  { label: 'Politique de Confidentialité', path: ROUTES.confidentialite },
  { label: 'Politique de Cookies', path: ROUTES.cookies },
  { label: 'CGV', path: ROUTES.cgv },
]
