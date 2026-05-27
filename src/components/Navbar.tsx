import { useState } from 'react'
import type { FC } from 'react'
import { portfolioData } from '../data/portfolioData'

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { label: 'Proyectos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Contacto', href: '#contact' },
  ]

  const initials = portfolioData.personal.initials
  const displayInitials = initials.endsWith('.') ? initials.slice(0, -1) : initials
  const hasDot = initials.endsWith('.')

  return (
    <header className="sticky top-0 z-30">
      <div className="backdrop-blur-sm bg-black/30 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-white font-extrabold text-lg tracking-wide">
              {displayInitials}
              {hasDot && <span className="text-[#9b6bff]">.</span>}
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-200 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/80 text-slate-200 transition-colors hover:border-[#7c3cff] hover:text-white md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-slate-800 bg-black/80 md:hidden">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition-colors hover:bg-slate-900/80 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
