import type { FC } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: 'beforeChildren',
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Experience: FC = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Experiencia</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">Experiencia profesional</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#9b6bff]" />
        </div>

        <div className="relative ml-4 md:ml-10">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-slate-800" />

          <div className="space-y-8">
            {portfolioData.experiences.map((experience) => (
              <motion.article
                key={experience.id}
                className="relative overflow-hidden rounded-[32px] border border-slate-800/80 bg-slate-900/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/90"
                variants={itemVariants}
              >
                <div className="absolute -left-5 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-[#0f172a] text-white shadow-[0_10px_30px_rgba(0,0,0,0.24)]">
                  <span className="text-xl font-semibold">•</span>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <p className="mt-2 text-sm text-slate-400">{experience.company}</p>
                  </div>
                  <span className="inline-flex rounded-full bg-[#111827] px-4 py-2 text-sm font-medium text-slate-300 ring-1 ring-slate-800/80">
                    {experience.dates}
                  </span>
                </div>
                <p className="mt-6 text-slate-400 leading-7">{experience.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-800/80 bg-slate-950/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
