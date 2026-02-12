import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Phone, ChevronDown } from 'lucide-react'
import { COMPANY } from '../../lib/constants'
import { ROUTES } from '../../lib/routes'
import { mainNav } from '../../data/navigation'
import { cn } from '../../lib/utils'
import MobileNav from './MobileNav'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          'bg-white shadow-xl'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className={cn(
            'flex items-center justify-between transition-all duration-500',
            scrolled ? 'h-[72px] lg:h-[80px]' : 'h-[72px] lg:h-[100px]'
          )}>
            {/* ── Logo ── */}
            <Link to={ROUTES.home} className="flex-shrink-0 relative z-10">
              <img
                src="/logo/altinbas-header-logo-siyah.svg"
                alt="Altinbas Moustiquaire — Fabricant artisanal en Isère"
                className={cn(
                  'w-auto transition-all duration-500',
                  scrolled ? 'h-10 lg:h-12' : 'h-10 lg:h-[56px]'
                )}
              />
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center">
              {mainNav.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setDropdownOpen(true)}
                  onMouseLeave={() => item.children && setDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      'px-3 py-2.5 text-[13px] font-bold tracking-wide uppercase rounded-lg transition-all duration-300 inline-flex items-center gap-1 whitespace-nowrap',
                      pathname === item.path || (item.children && pathname.startsWith(item.path))
                        ? 'text-primary-400'
                        : 'text-charcoal hover:text-primary-400 hover:bg-primary-50/50'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={cn('transition-transform duration-300', dropdownOpen && 'rotate-180')}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                      <div className="bg-white rounded-2xl shadow-2xl border border-sand/20 p-3 min-w-[320px] animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="grid gap-0.5">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={cn(
                                'flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group',
                                pathname === child.path
                                  ? 'bg-primary-50'
                                  : 'hover:bg-beige/60'
                              )}
                            >
                              <div className="flex-1">
                                <span className={cn(
                                  'block text-sm font-semibold transition-colors',
                                  pathname === child.path ? 'text-primary-400' : 'text-charcoal group-hover:text-primary-400'
                                )}>
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="block text-xs text-charcoal-light mt-0.5 leading-relaxed">
                                    {child.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Desktop Right: Phone + CTA ── */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY.phone.devisRaw}`}
                className="flex items-center gap-2.5 whitespace-nowrap text-[14px] font-semibold text-charcoal hover:text-primary-400 transition-colors"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-primary-50 text-primary-400 flex-shrink-0">
                  <Phone size={16} />
                </div>
                <span className="hidden xl:inline">{COMPANY.phone.devis}</span>
              </a>

              <Link
                to={ROUTES.devis}
                className="px-6 py-3 text-[14px] font-bold uppercase tracking-wider rounded-xl bg-primary-400 text-white hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                Devis Gratuit
              </Link>
            </div>

            {/* ── Mobile Actions ── */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${COMPANY.phone.devisRaw}`}
                className="p-3 rounded-lg text-primary-400"
                aria-label="Appeler"
              >
                <Phone size={24} />
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2.5 rounded-lg text-charcoal"
                aria-label="Ouvrir le menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
