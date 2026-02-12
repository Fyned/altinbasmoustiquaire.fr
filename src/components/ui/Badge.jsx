import { cn } from '../../lib/utils'

export default function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-primary-50 text-primary-600',
    terracotta: 'bg-terracotta/10 text-terracotta',
    success: 'bg-success/10 text-success',
  }

  return (
    <span className={cn('inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider', variants[variant], className)}>
      {children}
    </span>
  )
}
