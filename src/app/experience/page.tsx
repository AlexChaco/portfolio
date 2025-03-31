"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building, ExternalLink } from "lucide-react";

// Datos de experiencia laboral separados para fácil modificación
const experienceData = [
  {
    company: "IUVADE SRL",
    position: "Desarrollador Mobile Junior",
    period: "Febrero 2024 - Presente",
    description:
      "Desarrollo de aplicaciones mobiles utilizando React-Native, Implementación de codigo escalables y optimización de rendimiento. ",
    achievements: [
      "Implementacio completa de los aplicativos principales.",
      "Conexion con Beacon mediante SDK exteriores",
      "Uso de Redux para el control de cada aplicativo",
    ],
  },
  {
    company: "Beryllium Developement Company",
    position: "Desarrollador Backend",
    period: "Enero 2024 - Abril 2024",
    description:
      "Desarrollo de APIS de diversos proyectos para posteriormente son usando pro el frontend.",
    achievements: [
      "Paticipacion en +3 proyectos realizados en PYTHON/DJANGO",
      "Creación de filtros, reportes(pdf, excel)",
      "Utilizacion de Cron y crontab",
    ],
  },
];

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

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
            Mi trayectoria profesional en el desarrollo de soluciones digitales
            y tecnológicas.
          </p>
        </motion.div>

        <div className="relative mx-4 md:mx-auto md:max-w-3xl">
          {/* Línea vertical de la timeline - ahora más visible */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-accent/20 -ml-0.5"></div>

          {/* Experiencias */}
          {experienceData.map((experience, index) => (
            <motion.div
              key={`experience-${index}`}
              className="relative mb-8 pl-16 md:pl-0 md:mb-8"
              variants={itemVariants}
            >
              {/* Punto en la timeline - simplificado */}
              <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-accent border-2 border-background -ml-2"></div>

              {/* Tarjeta de experiencia */}
              <div
                className={`bg-card rounded-lg shadow-sm p-6 border hover:shadow-md transition-shadow duration-300 
                md:w-[calc(50%-20px)] 
                ${index % 2 === 0 ? "md:mr-auto md:pr-1" : "md:ml-auto md:pl-8"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-5 w-5 text-primary flex-shrink-0" />
                  <h3 className="text-xl font-semibold">
                    {experience.company}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-2 text-primary-foreground">
                  <Briefcase className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium">{experience.position}</span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  <span>{experience.period}</span>
                </div>

                <p className="mb-4">{experience.description}</p>

                <div className="space-y-2">
                  <h4 className="font-medium">Logros destacados:</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ExternalLink className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
