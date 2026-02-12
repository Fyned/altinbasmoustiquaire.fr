import { useState, useRef, useEffect } from 'react'
import PlaceholderImage from './PlaceholderImage'
import { cn } from '../../lib/utils'

export default function LazyImage({ src, alt, aspect, className, priority = false, ...props }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef(null)
  const [inView, setInView] = useState(priority)

  useEffect(() => {
    if (priority) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [priority])

  if (error || !src || src.includes('placeholder')) {
    return <PlaceholderImage aspect={aspect} label={alt} className={className} />
  }

  return (
    <div ref={imgRef} className={cn('relative overflow-hidden bg-primary-50/30', className)} style={aspect ? { aspectRatio: aspect } : undefined}>
      {inView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading={priority ? 'eager' : 'lazy'}
          {...(priority && { fetchPriority: 'high' })}
          {...props}
        />
      )}
      {!loaded && inView && (
        <div className="absolute inset-0 bg-primary-50 animate-pulse" />
      )}
    </div>
  )
}
