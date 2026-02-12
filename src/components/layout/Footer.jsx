import { Link } from 'react-router-dom'
import { Phone, Truck, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { COMPANY } from '../../lib/constants'
import { footerColumns, legalLinks } from '../../data/navigation'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <img
              src="/logo/altinbas-logo-beyaz.svg"
              alt="Altinbas Moustiquaire"
              className="h-14 md:h-16 w-auto max-w-[200px] md:max-w-[240px] mb-5"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Fabricant artisanal de moustiquaires plissées sur mesure en Isère.
              Qualité, précision et service depuis notre atelier de Pont-Évêque.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 & 3: Navigation */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-base mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${COMPANY.phone.devisRaw}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-primary-400 transition-colors">
                  <Phone size={16} className="flex-shrink-0 text-primary-400" />
                  <div>
                    <span className="block">{COMPANY.phone.devis}</span>
                    <span className="text-xs text-white/50">Devis & RDV</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone.livraisonRaw}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-primary-400 transition-colors">
                  <Truck size={16} className="flex-shrink-0 text-primary-400" />
                  <div>
                    <span className="block">{COMPANY.phone.livraison}</span>
                    <span className="text-xs text-white/50">Livraison & Pose</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-primary-400 transition-colors">
                  <Mail size={16} className="flex-shrink-0 text-primary-400" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={16} className="flex-shrink-0 text-primary-400 mt-0.5" />
                <span>{COMPANY.address}<br />{COMPANY.postalCode} {COMPANY.city}</span>
              </li>
            </ul>
            <div className="mt-4 text-xs text-white/50">
              <p>Lundi — Vendredi : 8h00 — 18h00</p>
              <p>Samedi : Sur rendez-vous</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} ALTINBAS — Fabrication artisanale en Isère (38)
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-white/50 hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
