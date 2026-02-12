import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { COMPANY } from '../../lib/constants'
import { ROUTES } from '../../lib/routes'

export default function WhatsAppButton() {
  const { pathname } = useLocation()

  if (pathname === ROUTES.devis) return null

  return (
    <motion.a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-whatsapp rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </motion.a>
  )
}
