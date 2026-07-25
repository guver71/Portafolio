import { motion } from "framer-motion"
import { useInView } from "./useInView"
import { skills } from "../data/skills"

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-mono text-sm tracking-widest uppercase mb-3">
            Tecnologías
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Stack <span className="text-gradient-gold">Tecnológico</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="card-glow rounded-2xl p-6"
            >
              <h3 className="text-gold font-semibold text-lg mb-5 font-mono">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + i * 0.05,
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all duration-300 group cursor-default"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${skill.color}15`,
                      }}
                    >
                      <skill.icon
                        style={{ color: skill.color }}
                        className="text-lg"
                      />
                    </div>
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
