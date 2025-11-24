"use client";
import { motion } from "framer-motion";
import { Building, CheckCircle } from "lucide-react";

const experienceData = [
  {
    company: "Sineryx - Kibalion Enterprise",
    position: "Desarrollador Mobile (React Native)",
    period: "Octubre 2025 - Presente",
    description:
      "Diseño, desarrollo y despliegue de soluciones digitales para  mobile, asegurando escalabilidad, mantenibilidad y experiencia de usuario consistente.",
    achievements: [
      "Desarrollo de aplicaciones móviles en React Native con integración con APIs ",
      "Uso de Redux para la gestión de estado global y patrones de arquitectura escalables",
      "Colaboración directa con backend y diseño para garantizar modentidad y escalabilidad",
    ],
  },
  {
    company: "IUVADE SRL",
    position: "Desarrollador Frontend & Mobile (React / React Native)",
    period: "Febrero 2024 - Ocutbre 2025",
    description:
      "Diseño, desarrollo y despliegue de soluciones digitales para web y mobile, asegurando escalabilidad, mantenibilidad y experiencia de usuario consistente.",
    achievements: [
      "Desarrollo de aplicaciones móviles en React Native con integración de SDKs externos (Bluetooth/Beacons)",
      "Implementación de interfaces modernas y responsivas en React + Next.js con TailwindCSS",
      "Uso de Redux para la gestión de estado global y patrones de arquitectura escalables",
      "Despliegue del frontend en servidores y publicación de aplicaciones móviles en Google Play Store y Apple App Store",
      "Colaboración directa con backend y diseño para garantizar coherencia entre web y mobile",
    ],
  },
  {
    company: "Beryllium Development Company",
    position: "Desarrollador Backend (Python / Django)",
    period: "Enero 2024 - Abril 2024",
    description:
      "Desarrollo de APIs y servicios backend para proyectos empresariales, integrados con aplicaciones frontend y mobile.",
    achievements: [
      "Participación en más de 3 proyectos con Django, integrando lógica de negocio y autenticación",
      "Creación de filtros personalizados y generación de reportes en PDF/Excel",
      "Automatización de tareas programadas con Cron y crontab",
      "Construcción y despliegue de entornos en servidores utilizando Docker",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

const ExperienceItem = ({ exp }: { exp: (typeof experienceData)[0] }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.02 }}
    className="relative flex flex-col gap-4 
               bg-[#22222a] border border-accent/20 
               p-6 rounded-xl shadow-md transition-all hover:shadow-accent/30"
  >
    {/* Encabezado */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
        <Building className="w-5 h-5 text-accent" /> {exp.company}
      </h3>
      <p className="text-gray-400 text-xs mt-0.5">{exp.period}</p>
    </div>

    {/* Cargo */}
    <p className="text-accent font-medium">{exp.position}</p>

    {/* Descripción corta */}
    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>

    {/* Logros */}
    <ul className="mt-2 space-y-2">
      {exp.achievements.map((a, i) => (
        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
          {a}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section className="relative py-20 bg-primary">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 md:px-8 lg:px-16"
      >
        {/* Título */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mi trayectoria desarrollando soluciones digitales y tecnológicas en
            distintos entornos.
          </p>
        </motion.div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {experienceData.map((exp, i) => (
            <ExperienceItem key={i} exp={exp} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
