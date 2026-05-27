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
        <p className="text-sm md:text-base font-mono text-[#b388ff] mb-4 tracking-wider">Hola, soy</p>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight">
          {name}
        </h1>

        <h2 className="mt-4 text-xl md:text-3xl text-slate-400 font-semibold">{role}</h2>

        <p className="mt-6 max-w-2xl text-slate-400 px-4 md:px-0 leading-relaxed">{description}</p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-[#9b6bff] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(155,107,255,0.4)] transition-transform duration-300 hover:scale-105"
          >
            Ver Proyectos
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-800/80 px-8 py-3.5 text-sm font-semibold text-slate-200 transition-colors duration-300 hover:bg-slate-700/90 hover:text-white"
          >
            Sobre Mí
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
