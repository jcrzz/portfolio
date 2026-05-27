import type { FC } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Projects: FC = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Proyectos</p>
        <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-white">Proyectos destacados</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">Trabajos recientes donde apliqué diseño, animaciones y arquitectura frontend sólida.</p>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolioData.projects.map((p) => (
          <motion.article
            key={p.id}
            className="group relative overflow-hidden rounded-[32px] border border-slate-800/80 bg-slate-950/80 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/90"
            variants={item}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9b6bff] via-[#8b5cf6] to-[#7c3cff] opacity-70" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold text-white">{p.title}</h4>
                <p className="mt-3 text-slate-400 text-sm leading-7">{p.description}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:border-[#7c3cff] hover:text-white"
                  aria-label="Github repo"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.7.115 2.5.338 1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.18.59.69.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:border-[#7c3cff] hover:text-white"
                  aria-label="Live demo"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-800/80 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
