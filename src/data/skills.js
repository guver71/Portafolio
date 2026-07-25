import {
  FaJava,
  FaLaravel,
  FaPhp,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa"
import {
  SiSpringboot,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiFastapi,
  SiYolo,
} from "react-icons/si"

export const skills = [
  {
    category: "Backend",
    items: [
      { name: "Java", icon: FaJava, color: "#F89820" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
    ],
  },
]
