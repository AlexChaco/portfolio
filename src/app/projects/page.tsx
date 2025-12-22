"use client"
import { motion, Variant, Variants } from "framer-motion"
import { Code, Github, Lock, Unlock, Eye } from "lucide-react"
import Image from "next/image"

// Datos de proyectos separados para fácil modificación
const projectsData = [
  {
    title: "Portfolio Personal",
    description:
      "Sitio web personal desarrollado con Next.js y Tailwind CSS. Incluye secciones de experiencia, proyectos y tecnologías.",
    image: "/assets/portafolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubUrl: null,
    liveUrl: "www.axcoder.dev",
    isPrivate: true,
  },
  {
    title: "App de Sigge Facturacion",
    description:
      "Aplicación mobile para facturación de servicios de la empresa. Permite realizar compras  en tiempo real. Esta Proyecto fue desarrollado con React Native para la empresa IUVADE SRL",
    image: "/assets/sigge.webp",
    technologies: ["React Native", "Redux", "React Native Paper", "Material UI"],
    githubUrl: null,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.siggefact&hl=es_419',
    isPrivate: true,
  },
  {
    title: "App Sigeduca",
    description:
      "Aplicación para gestionar el proceso de enseñanza de la escuela. Permite gestionar los materiales, asignar alumnos y gestionar las clases. Esta Proyecto fue desarrollado con React Native para la empresa IUVADE SRL",
    image: "/assets/sigeduca.webp",
    technologies: ["React Native", "Redux", "Material UI"],
    githubUrl: null,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.sigeduca&hl=es_PE',
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

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <section className="full-screen pt-24">
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
                  {
                  project.githubUrl&&
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-accent transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    {project.isPrivate ? "Privado" : "Ver código"}
                  </a>}

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

