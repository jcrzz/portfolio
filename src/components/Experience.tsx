import type { FC } from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
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
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experiencia</h2>
          <div className="mt-4 h-1 w-12 bg-[#9b6bff]" />
        </div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-12">
          {portfolioData.experiences.map((experience) => (
            <motion.div key={experience.id} className="relative pl-8 md:pl-12" variants={itemVariants}>
              {/* Timeline Icon */}
              <div className="absolute -left-[20px] top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-[#0f111a]">
                <Briefcase className="h-4 w-4 text-[#9b6bff]" />
              </div>

              {/* Content Card */}
              <article className="rounded-[24px] border border-slate-800/80 bg-[#0a0c12]/80 p-6 md:p-8 shadow-lg transition-all hover:border-slate-700">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                    <p className="text-sm text-slate-400">{experience.company}</p>
                  </div>
                  <span className="inline-flex rounded-full bg-[#9b6bff]/10 px-3 py-1.5 text-xs font-mono font-medium text-[#b388ff] tracking-wide">
                    {experience.dates}
                  </span>
                </div>
                
                <p className="mt-6 text-sm text-slate-400 leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-800/60 px-3 py-1.5 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
