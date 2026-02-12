import { ImageIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

export default function PlaceholderImage({ aspect = '16/9', label, icon: Icon = ImageIcon, className }) {
  return (
    <div
      className={cn('placeholder-image rounded-lg overflow-hidden', className)}
      style={{ aspectRatio: aspect }}
    >
      <Icon size={32} strokeWidth={1.5} />
      {label && <span className="text-sm font-medium">{label}</span>}
      <span className="text-xs opacity-60">Image à venir</span>
    </div>
  )
}
