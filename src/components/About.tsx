import type { FC } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const About: FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mb-12 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Sobre mí</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">{portfolioData.about.title}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#9b6bff] md:mx-0" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="max-w-2xl text-slate-300 leading-8">
              {portfolioData.about.bio}
            </p>

            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:border-[#7c3cff] hover:text-white"
            >
              Conoce mis herramientas
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#9b6bff]">
                →
              </span>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.about.tools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-[28px] border border-slate-800/90 bg-slate-950/80 p-5 text-center shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/90"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-xl font-semibold text-slate-100 ring-1 ring-slate-800/90">
                  {tool.icon}
                </div>
                <p className="text-sm font-semibold text-slate-100">{tool.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
