export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatPhoneFR(phone) {
  return phone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
}

export function formatNumberFR(num) {
  return new Intl.NumberFormat('fr-FR').format(num)
}

export function scrollToElement(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
