import type { FC } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

type Props = {
  name?: string
  role?: string
  description?: string
}

const Hero: FC<Props> = ({
  name = portfolioData.personal.name,
  role = portfolioData.personal.role,
  description = portfolioData.personal.description,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      className="relative overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          aria-hidden
          className="rounded-full"
          style={{
            width: 800,
            height: 800,
            maxWidth: '80vw',
            maxHeight: '80vw',
            background: 'radial-gradient(closest-side, rgba(124,60,255,0.18), rgba(20,18,28,0.0) 60%)',
            filter: 'blur(140px)',
            transform: 'translateY(-10%)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 md:py-36">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400 mb-4">Hola, soy</p>

        <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-[0_25px_85px_rgba(0,0,0,0.45)]">
          {name}
        </h1>

        <h2 className="mt-4 text-lg md:text-2xl text-slate-300 font-semibold">{role}</h2>

        <p className="mt-6 max-w-3xl text-slate-400 px-4 md:px-0 leading-8">{description}</p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#9b6bff] to-[#7c3cff] px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(124,58,237,0.26)] transition-transform duration-200 hover:-translate-y-1"
          >
            Ver Proyectos
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              →
            </span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-8 py-3 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:border-[#7c3cff] hover:text-white"
          >
            Sobre Mí
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
