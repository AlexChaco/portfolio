"use client"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

const Contact = () => {
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
    <section className="full-screen pt-24">
      <motion.div
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <ContactInfo />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

