'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SubscribeSection() {
    const [containerHeight, setContainerHeight] = useState('auto')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)
    const isInView = useInView(containerRef, { once: false, amount: 0.3 })
    const controls = useAnimation()

    useEffect(() => {
        const updateContainerHeight = () => {
            if (containerRef.current && imageRef.current) {
                const viewportWidth = window.innerWidth
                const imageHeight = imageRef.current.offsetHeight
                let newHeight = '50vh'

                if (viewportWidth < 640) {
                    newHeight = '50vh'
                } else if (viewportWidth < 768) {
                    newHeight = '40vh'
                } else if (viewportWidth < 1024) {
                    newHeight = '30vh'
                } else {
                    newHeight = '25vh'
                }

                const minHeight = `${imageHeight * 0.8}px`
                setContainerHeight(`max(${newHeight}, ${minHeight})`)
            }
        }

        updateContainerHeight()
        window.addEventListener('resize', updateContainerHeight)
        return () => window.removeEventListener('resize', updateContainerHeight)
    }, [])

    useEffect(() => {
        if (isInView) {
            controls.start({ scale: 1.05, transition: { duration: 0.5 } })
        }
    }, [isInView, controls])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted')
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full bg-[rgb(222,62,86)] overflow-hidden flex items-center justify-center"
            style={{ height: containerHeight }}
        >
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 1 }}
                animate={controls}
            >
                <div className="relative w-full h-full">
                    <img
                        ref={imageRef}
                        src="https://i.ibb.co/q067yQJ/Persona-Senalando.png"
                        alt=""
                        className="absolute bottom-0 right-0 w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 h-auto object-contain object-bottom -mb-20"
                    />
                    <div className="absolute inset-0 bg-[rgb(222,62,86)] bg-opacity-70"></div>
                </div>
            </motion.div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    className="w-full text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 sm:mb-3">
                        ENTÉRATE DE LO QUE SUCEDE EN <br />
                        <span className="text-white">Inter Plaza</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                        Diviértete cada día con todas nuestras marcas, promociones y eventos.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <input
                            type="email"
                            placeholder="Escribe aquí tu email"
                            className="w-full sm:w-auto px-3 py-2 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Email para suscripción"
                        />
                        <Button type="submit" className="w-full sm:w-auto px-4 py-2 bg-white text-[rgb(222,62,86)] text-sm sm:text-base font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-200 border border-[rgb(222,62,86)]">
                            Suscríbete
                        </Button>
                    </form>
                    <div className="mt-2 sm:mt-3 flex items-center justify-center text-xs sm:text-sm text-white">
                        <Checkbox id="terms" checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked as boolean)} className="mr-2 border-white" />
                        <Label htmlFor="terms" className="text-white">
                            Aceptas nuestros{' '}
                            <Button variant="link" className="underline hover:text-opacity-80 p-0 text-white" onClick={() => setIsModalOpen(true)}>
                                términos y condiciones
                            </Button>
                        </Label>
                    </div>
                </motion.div>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="bg-white text-[rgb(71,79,84)]">
                    <DialogHeader>
                        <DialogTitle className="text-[rgb(222,62,86)]">Términos y Condiciones</DialogTitle>
                        <DialogDescription>
                            <p className="mb-4">
                                Inter Plaza tiene el derecho de utilizar la información proporcionada para mejorar la experiencia del usuario y ofrecer promociones personalizadas.
                            </p>
                            <p className="mb-4">
                                Con esta información, Inter Plaza podrá enviar notificaciones sobre eventos, ofertas especiales y novedades de las marcas presentes en el centro comercial.
                            </p>
                            <p className="mb-4">
                                Usted, como usuario, se beneficiará de recibir información actualizada, descuentos exclusivos y la oportunidad de participar en eventos especiales.
                            </p>
                            <p>
                                Al aceptar estos términos, usted da permiso a Inter Plaza para procesar su información personal de acuerdo con nuestra política de privacidad y las leyes de protección de datos aplicables.
                            </p>
                        </DialogDescription>
                    </DialogHeader>
                    <Button onClick={() => setIsModalOpen(false)} className="bg-[rgb(222,62,86)] text-white hover:bg-[rgb(222,62,86)]/90 rounded-full">
                        Cerrar
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}