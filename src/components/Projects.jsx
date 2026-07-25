import { motion } from "framer-motion"
import { useInView } from "./useInView"
import { projects } from "../data/projects"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function ProjectCard({ project, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="card-glow rounded-2xl overflow-hidden group"
    >
      <div className="relative h-48 bg-gradient-to-br from-dark-surface to-dark-card overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl font-mono text-gold/20 mb-2 font-bold">
              {project.title
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 4)}
            </div>
            <div className="text-xs text-gray-600 font-mono">
              {project.subtitle}
            </div>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-mono bg-gold/20 text-gold rounded-full border border-gold/30">
              Destacado
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-gold transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono text-blue-light bg-blue-electric/10 rounded-md border border-blue-electric/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 border border-dark-border rounded-lg hover:border-gold/30 hover:text-gold hover:bg-gold/5 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> GitHub
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gold bg-gold/10 border border-gold/20 rounded-lg hover:bg-gold/20 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt /> Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-mono text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Proyectos <span className="text-gradient-gold">Destacados</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
