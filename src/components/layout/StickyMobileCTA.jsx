import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, MessageCircle, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY } from '../../lib/constants'
import { ROUTES } from '../../lib/routes'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (pathname === ROUTES.devis) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <div className="grid grid-cols-3 bg-white border-t border-sand/50 shadow-xl">
            <a
              href={`tel:${COMPANY.phone.devisRaw}`}
              className="flex flex-col items-center justify-center py-3 gap-1 text-charcoal hover:text-primary-400 transition-colors"
            >
              <Phone size={20} />
              <span className="text-xs font-medium">Appeler</span>
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center py-3 gap-1 text-white bg-whatsapp"
            >
              <MessageCircle size={20} />
              <span className="text-xs font-medium">WhatsApp</span>
            </a>
            <Link
              to={ROUTES.devis}
              className="flex flex-col items-center justify-center py-3 gap-1 text-white bg-primary-400"
            >
              <FileText size={20} />
              <span className="text-xs font-medium">Devis</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
