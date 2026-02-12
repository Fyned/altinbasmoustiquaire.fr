import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '../../lib/utils'

const variants = {
  primary: 'bg-primary-400 text-white hover:bg-primary-600 shadow-button hover:shadow-lg',
  secondary: 'bg-white text-primary-400 border-2 border-primary-400 hover:bg-primary-50',
  ghost: 'text-primary-400 hover:bg-primary-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ variant = 'primary', size = 'md', href, to, onClick, children, icon: Icon, showArrow, className, ...props }) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {Icon && <Icon size={size === 'sm' ? 16 : 20} />}
      {children}
      {showArrow && <ChevronRight size={size === 'sm' ? 14 : 18} />}
    </>
  )

  if (to) {
    return <Link to={to} className={classes} {...props}>{content}</Link>
  }

  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{content}</a>
  }

  return <button onClick={onClick} className={classes} {...props}>{content}</button>
}
