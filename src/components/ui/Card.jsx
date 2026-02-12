import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

export default function Card({ children, className, to, href, onClick }) {
  const classes = cn('card-base p-6', className)

  if (to) {
    return <Link to={to} className={cn(classes, 'block')}>{children}</Link>
  }

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cn(classes, 'block')}>{children}</a>
  }

  if (onClick) {
    return <div onClick={onClick} className={cn(classes, 'cursor-pointer')} role="button" tabIndex={0}>{children}</div>
  }

  return <div className={classes}>{children}</div>
}
