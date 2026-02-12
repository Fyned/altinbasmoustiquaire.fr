import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Shield, Award, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/routes'

const heroSlides = [
  {
    src: '/images/hero/hero-slide-1.jpg',
    alt: 'Moustiquaire plissée sur mesure pour grande baie vitrée — cadre aluminium anthracite, terrasse bois, lumière dorée',
  },
  {
    src: '/images/hero/hero-slide-2.jpg',
    alt: 'Détail moustiquaire plissée — plis accordéon fins, cadre aluminium blanc, mur en pierre naturelle',
  },
  {
    src: '/images/hero/hero-slide-3.jpg',
    alt: 'Moustiquaire plissée pour porte-fenêtre — système plissé ouvert, lumière naturelle, jardin méditerranéen',
  },
]

const SLIDE_DURATION = 6000
const FADE_DURATION = 1.5 // seconds — smooth crossfade

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  // Auto-advance with cleanup
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setInterval(nextSlide, SLIDE_DURATION)
    return () => clearInterval(timerRef.current)
  }, [isPaused, nextSlide])

  // Preload all images on mount
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new window.Image()
      img.src = slide.src
    })
  }, [])

  return (
    <section
      className="relative h-[calc(100vh-72px)] lg:h-[calc(100vh-100px)] min-h-[550px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background — ALL images always in DOM, only opacity changes (GPU-accelerated, zero jank) */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transition: `opacity ${FADE_DURATION}s ease-in-out`,
              filter: 'contrast(1.04) saturate(1.1)',
              willChange: 'opacity',
            }}
            fetchPriority={index === 0 ? 'high' : 'low'}
            loading={index === 0 ? 'eager' : 'lazy'}
            draggable={false}
          />
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/10 via-transparent to-transparent z-[1]" />
      </div>

      {/* Content — fixed, never animates with slides */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-sm font-medium tracking-wide border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary-300 animate-pulse" />
            Fabricant Artisanal en Isère (38)
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mt-8 mb-6"
        >
          Moustiquaire Plissée
          <br />
          <span className="text-primary-200">Sur Mesure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light"
        >
          Fabrication artisanale pour fenêtres, portes-fenêtres
          et baies vitrées jusqu'à 6 mètres de largeur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to={ROUTES.devis}
            className="px-8 sm:px-10 py-4 sm:py-4.5 bg-primary-400 text-white font-bold rounded-xl hover:bg-primary-600 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] text-base sm:text-lg tracking-wide uppercase"
          >
            Devis Gratuit
          </Link>
          <Link
            to={ROUTES.products}
            className="px-8 sm:px-10 py-4 sm:py-4.5 bg-white/10 text-white font-semibold rounded-xl backdrop-blur-md border border-white/25 hover:bg-white/20 transition-all text-base sm:text-lg"
          >
            Nos Produits
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-14 flex items-center justify-center gap-8 md:gap-12"
        >
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Shield size={18} className="text-primary-300" />
            <span>Fabrication française</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-white/80">
            <Award size={18} className="text-primary-300" />
            <span>Garantie 2 ans</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <FileText size={18} className="text-primary-300" />
            <span>Devis gratuit</span>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators (dots) */}
      {heroSlides.length > 1 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Diapositive ${index + 1}`}
              className="relative flex items-center justify-center w-11 h-11"
            >
              <span className={`block transition-all duration-500 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-2.5 bg-white'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
              }`} />
            </button>
          ))}
        </div>
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-10"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
