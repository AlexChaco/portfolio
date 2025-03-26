"use client"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Globe,
  Layers,
  Server,
  Figma,
  Github,
  Cpu,
  FileCode,
  Braces,
  Palette,
  Boxes,
  Terminal,
  DockIcon as Docker,
} from "lucide-react"

// Datos de tecnologías separados para fácil modificación
const technologiesData = {
  frontend: [
    { name: "HTML5 / CSS3", icon: <FileCode className="h-5 w-5 text-accent" /> },
    { name: "JavaScript / TypeScript", icon: <Braces className="h-5 w-5 text-accent" /> },
    { name: "React / Next.js", icon: <Code className="h-5 w-5 text-accent" /> },
    { name: "Tailwind CSS", icon: <Palette className="h-5 w-5 text-accent" /> },
    // { name: "Vue.js / Angular", icon: <LayoutGrid className="h-5 w-5 text-accent" /> },
  ],
  backend: [
    // { name: "Node.js / Express", icon: <Server className="h-5 w-5 text-accent" /> },
    { name: "Python / Django", icon: <Cpu className="h-5 w-5 text-accent" /> },
    { name: "SQL", icon: <Database className="h-5 w-5 text-accent" /> },
    { name: "Java", icon: <Boxes className="h-5 w-5 text-accent" /> },
    // { name: "GraphQL / REST", icon: <Boxes className="h-5 w-5 text-accent" /> },
    // { name: "Firebase / Supabase", icon: <Cloud className="h-5 w-5 text-accent" /> },
  ],
  tools: [
    { name: "Git / GitHub", icon: <Github className="h-5 w-5 text-accent" /> },
    { name: "Docker / Kubernetes", icon: <Docker className="h-5 w-5 text-accent" /> },
    // { name: "CI/CD (GitHub Actions)", icon: <Workflow className="h-5 w-5 text-accent" /> },
    { name: "Figma / Adobe XD", icon: <Figma className="h-5 w-5 text-accent" /> },
    { name: "VS Code / Postman", icon: <Terminal className="h-5 w-5 text-accent" /> },
  ],
}

const TechnologiesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }
  return (
    <section className="full-screen pt-20">
      <motion.div
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Herramientas y tecnologías que domino para crear soluciones digitales eficientes y escalables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Technologies */}
          <motion.div className="bg-card rounded-lg shadow-sm p-6 border" variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">Tecnologías de interfaz de usuario</p>
            <ul className="space-y-3">
              {technologiesData.frontend.map((tech, index) => (
                <li
                  key={`frontend-${index}`}
                  className="flex items-center gap-3 p-2 rounded-md transition-colors duration-200 hover:bg-muted cursor-pointer"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Technologies */}
          <motion.div className="bg-card rounded-lg shadow-sm p-6 border" variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <Server className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">Tecnologías de servidor y APIs</p>
            <ul className="space-y-3">
              {technologiesData.backend.map((tech, index) => (
                <li
                  key={`backend-${index}`}
                  className="flex items-center gap-3 p-2 rounded-md transition-colors duration-200 hover:bg-muted cursor-pointer"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div className="bg-card rounded-lg shadow-sm p-6 border" variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <Layers className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Herramientas</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">Herramientas de desarrollo y colaboración</p>
            <ul className="space-y-3">
              {technologiesData.tools.map((tech, index) => (
                <li
                  key={`tools-${index}`}
                  className="flex items-center gap-3 p-2 rounded-md transition-colors duration-200 hover:bg-muted cursor-pointer"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default TechnologiesSection

