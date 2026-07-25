import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "./useInView"
import { profile } from "../data/profile"
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa"

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const subject = encodeURIComponent(`Contacto desde Portafolio - ${name}`)
    const body = encodeURIComponent(
      `Hola, soy ${name}.\n\n${message}\n\nMi email: ${email}`
    )
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-mono text-sm tracking-widest uppercase mb-3">
            Hablemos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-gradient-gold">Contacto</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-4">
                Trabajemos juntos
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Estoy disponible para proyectos, oportunidades laborales o
                simplemente para charlar sobre tecnología. No dudes en
                contactarme.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 card-glow rounded-xl group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <FaEnvelope className="text-gold text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-white text-sm font-medium">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card-glow rounded-xl group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <FaGithub className="text-gold text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">GitHub</p>
                  <p className="text-white text-sm font-medium">
                    @ccoriccoarite
                  </p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card-glow rounded-xl group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <FaLinkedin className="text-gold text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">LinkedIn</p>
                  <p className="text-white text-sm font-medium">
                    Ccori Ccoarite
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 card-glow rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-gold text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Ubicación</p>
                  <p className="text-white text-sm font-medium">Perú</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-400 text-sm mb-2 font-medium"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-sm mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-400 text-sm mb-2 font-medium"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  "¡Mensaje enviado!"
                ) : (
                  <>
                    <FaPaperPlane /> Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
