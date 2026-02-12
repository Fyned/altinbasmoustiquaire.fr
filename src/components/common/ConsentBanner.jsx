import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cookie, X } from 'lucide-react'
import { ROUTES } from '../../lib/routes'

const COOKIE_KEY = 'altinbas_cookie_consent'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics: true, marketing: true, date: new Date().toISOString() }))
    setVisible(false)
  }

  function handleReject() {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics: false, marketing: false, date: new Date().toISOString() }))
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-sand/50 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Cookie size={24} className="text-primary-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  Nous respectons votre vie privée
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser le trafic de notre site.
                  Vous pouvez choisir d'accepter ou de refuser ces cookies.{' '}
                  <Link to={ROUTES.cookies} className="text-primary-400 underline hover:text-primary-600">
                    En savoir plus
                  </Link>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 px-6 py-2.5 bg-primary-400 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors text-sm"
                  >
                    Tout Accepter
                  </button>
                  <button
                    onClick={handleReject}
                    className="flex-1 px-6 py-2.5 bg-primary-400 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors text-sm"
                  >
                    Tout Refuser
                  </button>
                  <Link
                    to={ROUTES.cookies}
                    className="flex-1 px-6 py-2.5 border-2 border-sand text-charcoal font-medium rounded-lg hover:bg-beige transition-colors text-sm text-center"
                  >
                    Personnaliser
                  </Link>
                </div>
              </div>
              <button onClick={handleReject} className="text-charcoal-light hover:text-charcoal p-1" aria-label="Fermer">
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
