"use client"
import { motion } from "framer-motion"
import { Code, Github, Lock, Unlock, Eye } from "lucide-react"
import Image from "next/image"

// Datos de proyectos separados para fácil modificación
const projectsData = [
  {
    title: "Portfolio Personal",
    description:
      "Sitio web personal desarrollado con Next.js y Tailwind CSS. Incluye secciones de experiencia, proyectos y tecnologías.",
    image: "/assets/github.jpg?height=400&width=600",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.example.com",
    isPrivate: false,
  },
  {
    title: "App de Gestión de Tareas",
    description:
      "Aplicación web para gestionar tareas y proyectos personales. Incluye funcionalidades de arrastrar y soltar, etiquetas y filtros.",
    image: "/assets/github.jpg?height=400&width=600",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://tasks.example.com",
    isPrivate: true,
  },
  {
    title: "E-commerce de Productos Artesanales",
    description:
      "Tienda online para venta de productos artesanales con carrito de compras, pasarela de pagos y panel de administración.",
    image: "/assets/github.jpg?height=400&width=600",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/username/artisan-shop",
    liveUrl: "https://artisan.example.com",
    isPrivate: false,
  },
  {
    title: "API de Gestión de Contenidos",
    description:
      "API RESTful para gestión de contenidos digitales con autenticación, roles y permisos. Documentación con Swagger.",
    image: "/assets/github.jpg?height=400&width=600",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/username/cms-api",
    liveUrl: null,
    isPrivate: true,
  },
]

const ProjectsSection = () => {
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
            Proyectos que he desarrollado para mejorar mis habilidades y explorar nuevas tecnologías.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-3 right-3 z-10">
                  {project.isPrivate ? (
                    <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full" title="Repositorio Privado">
                      <Lock className="h-8 w-10 text-accent" />
                    </div>
                  ) : (
                    <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full" title="Repositorio Público">
                      <Unlock className="h-8 w-8 text-accent" />
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <Code className="h-4 w-4" />
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-accent transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    {project.isPrivate ? "Privado" : "Ver código"}
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-accent transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                      Ver demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectsSection

