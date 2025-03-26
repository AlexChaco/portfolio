"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  asunto: z.string().min(5, {
    message: "El asunto debe tener al menos 5 caracteres.",
  }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
  telefono: z.string().optional(),
})

const Contact= () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
      telefono: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log(values)
      
      setFormStatus('success')
      form.reset()
    } catch (error) {
      console.log(error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset form status when form changes
  useEffect(() => {
    if (formStatus !== 'idle' && form.formState.isDirty) {
      setFormStatus('idle')
    }
  }, [form.formState.isDirty, formStatus])

  // Reset success/error message after 5 seconds
  useEffect(() => {
    if (formStatus !== 'idle') {
      const timer = setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [formStatus])

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.5)" },
    blur: { scale: 1, boxShadow: "none" }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        duration: 0.5 
      } 
    }
  }

  const statusVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: { 
      opacity: 1, 
      height: "auto", 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 200,
        damping: 20
      } 
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3 
      } 
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence>
            {formStatus === 'success' && (
              <motion.div 
                className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 flex items-center gap-2"
                variants={statusVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <p>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</p>
              </motion.div>
            )}

            {formStatus === 'error' && (
              <motion.div 
                className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 flex items-center gap-2"
                variants={statusVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <AlertCircle className="h-5 w-5 text-red-500" />
                <p>No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'nombre' ? 'focus' : 'blur'}
                    >
                      <Input 
                        placeholder="Tu nombre" 
                        {...field} 
                        onFocus={() => setFocusedField('nombre')}
                        onBlur={() => setFocusedField(null)}
                        className="border-2 focus:border-primary transition-all duration-300 text-black"
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'email' ? 'focus' : 'blur'}
                    >
                      <Input 
                        placeholder="tu.correo@ejemplo.com" 
                        type="email"
                        {...field} 
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="border-2 focus:border-primary transition-all duration-300 text-black" 
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono <span className="text-sm text-muted-foreground">(Opcional)</span></FormLabel>
                <FormControl>
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'telefono' ? 'focus' : 'blur'}
                  >
                    <Input 
                      placeholder="Tu número de teléfono" 
                      {...field} 
                      onFocus={() => setFocusedField('telefono')}
                      onBlur={() => setFocusedField(null)}
                      className="border-2 focus:border-primary transition-all duration-300 text-black"
                    />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="asunto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asunto</FormLabel>
                <FormControl>
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'asunto' ? 'focus' : 'blur'}
                  >
                    <Input 
                      placeholder="¿De qué se trata tu mensaje?" 
                      {...field} 
                      onFocus={() => setFocusedField('asunto')}
                      onBlur={() => setFocusedField(null)}
                      className="border-2 focus:border-primary transition-all duration-300 text-black"
                    />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'mensaje' ? 'focus' : 'blur'}
                  >
                    <Textarea 
                      placeholder="Escribe tu mensaje aquí..." 
                      className="min-h-[150px] border-2 focus:border-primary transition-all duration-300 text-black" 
                      {...field} 
                      onFocus={() => setFocusedField('mensaje')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full md:w-auto relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
              <motion.span 
                className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  )
}

 export default Contact