import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa"
import { profile } from "../data/profile"

const codeLines = [
  "const developer = {",
  '  name: "Ccori Ccoarite",',
  '  role: "Full Stack Developer",',
  "  skills: [",
  '    "Java", "Laravel", "Spring Boot",',
  '    "React", "Python", "Docker"',
  "  ],",
  "  passion: \"Building scalable systems\"",
  "};",
]

function CodeAnimation() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hidden lg:block absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 w-[380px]">
      <div className="bg-dark-card border border-dark-border rounded-xl p-5 font-mono text-xs leading-relaxed shadow-2xl">
        <div className="flex gap-1.5 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={i < visibleLines ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="text-gray-500"
          >
            <span className="text-gray-600 mr-3 select-none">{i + 1}</span>
            {line.includes('"') ? (
              <>
                <span className="text-purple-400">
                  {line.split('"')[0]}
                </span>
                <span className="text-gold">{`"${line.split('"')[1]}"`}</span>
                <span className="text-purple-400">
                  {line.split('"')[2] || ""}
                </span>
              </>
            ) : (
              <span className="text-blue-400">{line}</span>
            )}
          </motion.div>
        ))}
        {visibleLines >= codeLines.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-gold ml-9"
          />
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % profile.roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-electric/5 rounded-full blur-3xl" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold/10 font-mono text-sm select-none"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: typeof window !== "undefined" ? window.innerHeight + 50 : 900,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          >
            {["{", "}", "=>", "/>", "<", ">", "&&", "||", "()", "[]", ";", "==="][
              Math.floor(Math.random() * 12)
            ]}
          </motion.div>
        ))}
      </div>

      <CodeAnimation />

      <div className="section-container relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold font-mono text-sm md:text-base mb-4 tracking-widest uppercase"
          >
            Hola, soy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          >
            {profile.shortName}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="h-12 md:h-14 flex items-center mb-6"
          >
            <span className="text-xl md:text-2xl lg:text-3xl text-gray-400 mr-2">
              Yo soy
            </span>
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient-gold"
            >
              {profile.roles[currentRole]}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactarme
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-5"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold transition-colors duration-300 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold transition-colors duration-300 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-gray-500 hover:text-gold transition-colors duration-300 text-xl"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown className="text-gold/40 text-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
