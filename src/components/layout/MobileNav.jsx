import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Instagram, Facebook } from 'lucide-react'
import { COMPANY } from '../../lib/constants'
import { ROUTES } from '../../lib/routes'
import { mainNav } from '../../data/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

export default function MobileNav({ isOpen, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
          onClick={onClose}
        >
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-sand/30">
              <img
                src="/logo/altinbas-header-logo-siyah.svg"
                alt="Altinbas"
                className="h-8 w-auto"
              />
              <button onClick={onClose} className="p-2 text-charcoal hover:text-primary-400" aria-label="Fermer">
                <X size={24} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="py-4 px-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              {mainNav.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full py-3.5 text-base font-medium text-charcoal"
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          className={cn('transition-transform text-primary-400', expandedItem === item.label && 'rotate-180')}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={onClose}
                                  className="block py-2.5 text-sm text-charcoal-light hover:text-primary-400 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="block py-3.5 text-base font-medium text-charcoal hover:text-primary-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-sand/30">
                <Link
                  to={ROUTES.devis}
                  onClick={onClose}
                  className="block w-full py-3 bg-primary-400 text-white text-center font-medium rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Devis Gratuit
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sand/30 bg-cream">
              <div className="flex items-center justify-center gap-4">
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-primary-400 text-white rounded-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-primary-400 text-white rounded-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
