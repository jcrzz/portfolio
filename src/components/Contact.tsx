import type { FC } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const Contact: FC = () => {
  return (
    <section id="contact" className="bg-[#04050b]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <div className="flex flex-col items-center text-center gap-6 rounded-[40px] border border-slate-800/80 bg-slate-950/80 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#8b5cf6]/15 to-[#7c3cff]/10 text-[#a78bfa] shadow-lg shadow-[#7c3cff]/10">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
              <path d="m22 6-10 7L2 6" />
            </svg>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">¿Tenés un proyecto en mente?</h2>
            <p className="mt-4 text-slate-400 leading-8">Estoy disponible para proyectos freelance, colaboraciones y oportunidades de tiempo completo. Si tenés alguna idea, contamela y construyamos algo juntos.</p>
          </div>

          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#9b6bff] to-[#7c3cff] px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(124,58,237,0.3)] transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </span>
            Escribir un correo
          </a>
        </div>

        <footer className="mt-16 border-t border-slate-800/80 pt-8 text-sm text-slate-400">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-white font-semibold">{portfolioData.personal.initials}</p>
              <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {portfolioData.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80 text-slate-300 transition-colors duration-200 hover:border-[#7c3cff] hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </section>
  )
}

export default Contact
