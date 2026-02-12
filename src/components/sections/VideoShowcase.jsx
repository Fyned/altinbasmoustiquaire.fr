import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/animations'

const videos = [
  {
    src: '/images/videos/installation-demo-1.mp4',
    title: 'Installation complète',
    subtitle: 'Pose sur baie vitrée',
  },
  {
    src: '/images/videos/installation-demo-2.mp4',
    title: 'Démonstration système',
    subtitle: 'Mécanisme plissé en action',
  },
  {
    src: '/images/videos/installation-demo-3.mp4',
    title: 'Pose sur fenêtre',
    subtitle: 'Cadre aluminium sur mesure',
  },
  {
    src: '/images/videos/installation-demo-4.mp4',
    title: 'Finitions & réglages',
    subtitle: 'Précision artisanale',
  },
  {
    src: '/images/videos/installation-demo-5.mp4',
    title: 'Pose porte-fenêtre',
    subtitle: 'Rail au sol ultra-plat',
  },
  {
    src: '/images/videos/installation-demo-6.mp4',
    title: 'Résultat final',
    subtitle: 'Rendu élégant et discret',
  },
]

function VideoCard({ video, index, onOpenFullscreen }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = (e) => {
    e.stopPropagation()
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setPlaying(!playing)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative rounded-2xl overflow-hidden bg-charcoal cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-300"
      onClick={() => onOpenFullscreen(index)}
    >
      {/* Video */}
      <div className="relative aspect-[9/16]">
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover"
          playsInline
          muted={muted}
          loop
          preload="metadata"
          onEnded={() => setPlaying(false)}
        />

        {/* Hover overlay with gradient */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
        </div>

        {/* Play button center */}
        {!playing && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-primary-400/80 group-hover:border-primary-300 group-hover:scale-110 transition-all duration-300 shadow-2xl">
              <Play size={24} className="text-white ml-1" fill="white" />
            </div>
          </button>
        )}

        {/* Controls (visible on hover when playing) */}
        {playing && (
          <div className="absolute bottom-16 left-0 right-0 px-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Pause size={16} className="text-white" />
              </button>
              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {muted ? <VolumeX size={16} className="text-white" /> : <Volume2 size={16} className="text-white" />}
              </button>
            </div>
          </div>
        )}

        {/* Title bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <p className="text-white font-semibold text-sm leading-tight">{video.title}</p>
          <p className="text-white/60 text-xs mt-0.5">{video.subtitle}</p>
        </div>

        {/* Index badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold border border-white/20">
            {index + 1}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function FullscreenModal({ videos, currentIndex, onClose, onNext, onPrev }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }
  }, [currentIndex])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrev])

  const video = videos[currentIndex]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full max-w-sm sm:max-w-lg mx-auto px-4" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
        >
          <X size={20} />
        </button>

        {/* Video */}
        <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={video.src}
            className="w-full aspect-[9/16] object-cover"
            playsInline
            autoPlay
            muted={muted}
            loop
          />

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-white font-bold text-lg">{video.title}</p>
            <p className="text-white/60 text-sm mt-1">{video.subtitle}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-white/40 text-xs">{currentIndex + 1} / {videos.length}</span>
              <button
                onClick={() => setMuted(!muted)}
                className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
              >
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Nav arrows */}
        <button
          onClick={onPrev}
          className="absolute top-1/2 -left-1 sm:-left-2 md:-left-14 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={onNext}
          className="absolute top-1/2 -right-1 sm:-right-2 md:-right-14 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  )
}

export default function VideoShowcase() {
  const [fullscreenIndex, setFullscreenIndex] = useState(null)

  const openFullscreen = (index) => setFullscreenIndex(index)
  const closeFullscreen = () => setFullscreenIndex(null)
  const nextVideo = () => setFullscreenIndex((prev) => (prev + 1) % videos.length)
  const prevVideo = () => setFullscreenIndex((prev) => (prev - 1 + videos.length) % videos.length)

  return (
    <>
      <section className="py-16 md:py-24 bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-400/10 text-primary-300 text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              Vidéos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white"
            >
              Nos Installations
              <span className="text-primary-300"> en Action</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-white/50 max-w-xl mx-auto text-lg"
            >
              Découvrez notre savoir-faire artisanal — de la prise de mesures à la pose finale.
            </motion.p>
          </div>

          {/* Video grid — 3 columns on mobile, 6 on desktop (story-style) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
          >
            {videos.map((video, i) => (
              <VideoCard key={i} video={video} index={i} onOpenFullscreen={openFullscreen} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fullscreen modal */}
      {fullscreenIndex !== null && (
        <FullscreenModal
          videos={videos}
          currentIndex={fullscreenIndex}
          onClose={closeFullscreen}
          onNext={nextVideo}
          onPrev={prevVideo}
        />
      )}
    </>
  )
}
