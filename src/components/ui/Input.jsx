import { cn } from '../../lib/utils'

export default function Input({ label, name, type = 'text', error, placeholder, register, options, textarea, className }) {
  const baseClasses = 'w-full px-4 py-3 border border-sand rounded-lg bg-white font-body text-charcoal placeholder:text-charcoal-light/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400'
  const errorClasses = error ? 'border-error focus:ring-error/20 focus:border-error' : ''

  return (
    <div className={cn('space-y-1.5', className)}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-charcoal">
          {label}
        </label>
      )}

      {options ? (
        <select
          id={name}
          className={cn(baseClasses, errorClasses)}
          {...(register && register(name))}
        >
          <option value="">{placeholder || 'Sélectionnez...'}</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : textarea ? (
        <textarea
          id={name}
          rows={4}
          placeholder={placeholder}
          className={cn(baseClasses, errorClasses, 'resize-none')}
          {...(register && register(name))}
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className={cn(baseClasses, errorClasses)}
          {...(register && register(name))}
        />
      )}

      {error && (
        <p className="text-sm text-error">{error}</p>
      )}
    </div>
  )
}
