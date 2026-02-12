import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(config = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: config.start ?? 'top 85%',
        end: config.end ?? 'bottom 15%',
        toggleActions: config.toggleActions ?? 'play none none none',
        once: config.once !== false,
      }
    })

    tl.fromTo(element,
      { opacity: 0, y: config.y ?? 30 },
      { opacity: 1, y: 0, duration: config.duration ?? 0.6, ease: 'power2.out' }
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === element) st.kill()
      })
    }
  }, [config.start, config.end, config.toggleActions, config.once, config.y, config.duration])

  return ref
}
