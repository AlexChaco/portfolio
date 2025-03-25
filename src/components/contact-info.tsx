"use client"

import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const infoItems = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Ubicación",
      content: "Calle Principal 123, Ciudad, País",
      link: "https://maps.google.com/?q=Calle+Principal+123",
      linkText: "Ver en mapa",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Correo Electrónico",
      content: "contacto@ejemplo.com",
      link: "mailto:contacto@ejemplo.com",
      linkText: null,
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Teléfono",
      content: "+34 123 456 789",
      link: "tel:+34123456789",
      linkText: null,
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Horario de Atención",
      content: "Lunes a Viernes: 9:00 - 18:00",
      secondaryContent: "Sábados: 10:00 - 14:00",
      link: null,
      linkText: null,
    },
  ]

  return (
    <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 className="text-2xl font-semibold mb-6" variants={itemVariants}>
        Información de Contacto
      </motion.h2>

      <motion.div className="space-y-6" variants={containerVariants}>
        {infoItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--muted), 0.2)" }}
          >
            <div className="mr-4 p-3 rounded-full bg-primary/10">{item.icon}</div>
            <div>
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="text-muted-foreground mt-1">{item.content}</p>
              {item.secondaryContent && <p className="text-muted-foreground">{item.secondaryContent}</p>}
              {item.link && (
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-primary hover:underline mt-1 inline-block"
                >
                  {item.linkText || item.link}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 p-6 bg-muted rounded-lg border border-border"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="font-medium mb-3 text-lg">¿Necesitas ayuda urgente?</h3>
        <p className="text-muted-foreground mb-4">
          Estamos disponibles para asistencia prioritaria durante horario laboral.
        </p>
        <motion.a
          href="tel:+34900123456"
          className="inline-flex items-center gap-2 text-primary font-medium"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Phone className="h-4 w-4" />
          +34 900 123 456 (Línea prioritaria)
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

