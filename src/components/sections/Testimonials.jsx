import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import AnimatedSection from '../common/AnimatedSection'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  const t = testimonials[current]

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal section-heading-center">
              Ce Que Disent Nos Clients
            </h2>
          </div>
        </AnimatedSection>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-card text-center"
            >
              <Quote size={32} className="text-primary-200 mx-auto mb-4" />

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-charcoal leading-relaxed text-lg mb-6 italic">
                "{t.text}"
              </p>

              <div>
                <p className="font-heading font-semibold text-charcoal">{t.name}</p>
                <p className="text-sm text-charcoal-light">{t.city} — {t.source}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-4 lg:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-card flex items-center justify-center hover:bg-primary-50 transition-colors"
            aria-label="Avis précédent"
          >
            <ChevronLeft size={20} className="text-primary-400" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-4 lg:translate-x-12 w-10 h-10 bg-white rounded-full shadow-card flex items-center justify-center hover:bg-primary-50 transition-colors"
            aria-label="Avis suivant"
          >
            <ChevronRight size={20} className="text-primary-400" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-8 h-8 flex items-center justify-center"
                aria-label={`Avis ${i + 1}`}
              >
                <span className={`block rounded-full transition-all ${
                  i === current ? 'bg-primary-400 w-6 h-2.5' : 'bg-sand hover:bg-primary-200 w-2.5 h-2.5'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
