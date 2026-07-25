import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa"
import { profile } from "../data/profile"
import { navLinks } from "../data/navigation"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-border bg-dark-card/50">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a
              href="#hero"
              className="text-2xl font-bold text-gradient-gold font-mono tracking-wider"
            >
              &lt;CC /&gt;
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Construyendo el futuro, una línea de código a la vez.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 text-sm hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/30 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/30 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/30 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-border text-center">
          <p className="text-gray-600 text-xs flex items-center justify-center gap-1">
            &copy; {currentYear} {profile.name}. Hecho con{" "}
            <FaHeart className="text-gold text-xs" /> y mucho código.
          </p>
        </div>
      </div>
    </footer>
  )
}
