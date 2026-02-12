import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'

export default function AnimatedSection({ children, className, stagger = false, delay = 0 }) {
  const variants = stagger ? staggerContainer : fadeInUp

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      className={className}
      {...(delay > 0 && {
        variants: {
          ...variants,
          visible: {
            ...variants.visible,
            transition: { ...variants.visible?.transition, delay }
          }
        }
      })}
    >
      {children}
    </motion.div>
  )
}
