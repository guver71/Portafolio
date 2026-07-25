import { motion } from "framer-motion"
import { useInView } from "./useInView"
import { experience } from "../data/experience"

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-mono text-sm tracking-widest uppercase mb-3">
            Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Experiencia <span className="text-gradient-gold">Profesional</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:-translate-x-px" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-dark -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10 shadow-lg shadow-gold/30`}
              />

              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <div className="card-glow rounded-2xl p-6 group">
                  <span className="text-gold font-mono text-xs tracking-wider">
                    {exp.period}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1 group-hover:text-gold transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{exp.company}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-gold bg-gold/10 rounded-md border border-gold/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
