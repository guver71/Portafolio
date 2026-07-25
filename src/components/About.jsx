import { motion } from "framer-motion"
import { useInView } from "./useInView"
import { FaCode, FaServer, FaLightbulb, FaRocket } from "react-icons/fa"

const highlights = [
  {
    icon: FaCode,
    title: "Código Limpio",
    description: "Prácticas de desarrollo modernas y código mantenible.",
  },
  {
    icon: FaServer,
    title: "Arquitectura Backend",
    description: "Microservicios, APIs REST y sistemas escalables.",
  },
  {
    icon: FaLightbulb,
    title: "Soluciones IA",
    description: "Integración de inteligencia artificial en sistemas reales.",
  },
  {
    icon: FaRocket,
    title: "Rendimiento",
    description: "Optimización y buenas prácticas de infraestructura.",
  },
]

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-mono text-sm tracking-widest uppercase mb-3">
            Conóceme
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Sobre <span className="text-gradient-gold">Mí</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                Soy un{" "}
                <span className="text-gold font-semibold">
                  Software Developer
                </span>{" "}
                especializado en la construcción de{" "}
                <span className="text-white">
                  sistemas web empresariales
                </span>
                , APIs REST, microservicios y soluciones escalables.
              </p>
              <p>
                Mi enfoque está en crear tecnologías que resuelvan problemas
                reales. Desde sistemas de reconocimiento facial con IA hasta
                plataformas empresariales robustas, busco siempre la excelencia
                técnica y la innovación.
              </p>
              <p>
                Cada proyecto es una oportunidad para aprender, crecer y
                construir algo que haga una diferencia. Mi pasión es transformar
                ideas en{" "}
                <span className="text-gold font-semibold">
                  soluciones tecnológicas
                </span>{" "}
                que impacten.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="card-glow rounded-xl p-5 group"
              >
                <item.icon className="text-gold text-2xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-semibold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
