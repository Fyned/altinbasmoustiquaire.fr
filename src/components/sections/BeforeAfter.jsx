import { useState, useRef, useCallback } from 'react'
import { GripVertical } from 'lucide-react'
import AnimatedSection from '../common/AnimatedSection'

export default function BeforeAfter() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e) => { if (isDragging.current) handleMove(e.clientX) }
  const handleTouchMove = (e) => { handleMove(e.touches[0].clientX) }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal section-heading-center">
              Avant / Après
            </h2>
            <p className="mt-6 text-charcoal-light max-w-2xl mx-auto">
              Découvrez la différence — nos moustiquaires plissées se fondent parfaitement dans votre intérieur.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-lg"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* After (full width behind) — with mosquito screen installed */}
            <div className="absolute inset-0">
              <img
                src="/images/before-after/after.jpg"
                alt="Après — Baie vitrée avec moustiquaire plissée ALTINBAS installée, protection élégante"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Before (clipped) — without mosquito screen */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <img
                src="/images/before-after/before.jpg"
                alt="Avant — Baie vitrée sans protection moustiquaire"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
              Avant
            </span>
            <span className="absolute top-4 right-4 bg-primary-400/90 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
              Après
            </span>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 w-8 -ml-4 flex justify-center cursor-col-resize z-10"
              style={{ left: `${position}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="w-0.5 h-full bg-white shadow-lg" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize">
                <GripVertical size={18} className="text-primary-400" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
