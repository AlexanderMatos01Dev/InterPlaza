'use client'

import { Calendar, Music, Gift, Building, Heart, Film, Dumbbell } from 'lucide-react'
import { motion } from 'framer-motion'
import { hoverScale } from '../animations'

interface Event {
    id: number
    title: string
    image: string
    description: string
    date: string
    icon: React.ElementType
}

const events: Event[] = [
    { id: 1, title: "Gran Inauguración InterPlaza", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Celebra con nosotros la apertura del centro comercial más grande de San Pedro de Macorís.", date: "15 Mar 2025", icon: Building },
    { id: 2, title: "Feria Gastronómica", image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Descubre los sabores de Papa John's, Jade Teriyaki y más en nuestra feria gastronómica.", date: "22 Apr 2025", icon: Gift },
    { id: 3, title: "Inauguración del Cine", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Disfruta del estreno de las últimas películas en nuestro moderno cine.", date: "01 May 2025", icon: Film },
    { id: 4, title: "Concierto de Apertura", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Gran concierto con artistas locales para celebrar la apertura de InterPlaza.", date: "10 Jun 2025", icon: Music },
    { id: 5, title: "Inauguración del Gimnasio", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Conoce nuestras instalaciones de última generación y participa en clases gratuitas.", date: "05 Jul 2025", icon: Dumbbell },
    { id: 6, title: "Día de la Familia en InterPlaza", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Diversión para toda la familia con actividades, juegos y sorpresas para los más pequeños.", date: "15 Aug 2025", icon: Heart },
]

export default function EventsComponent() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 relative">
            <div className="absolute inset-0 bg-[rgba(200,200,210,0.3)] rounded-3xl"></div>
            <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-2 text-center text-[rgb(222,62,86)]">Eventos y Actividades</h2>
                <p className="text-xl text-[rgb(71,79,84)] mb-8 text-center">Descubre lo que está pasando en InterPlaza</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                            {...hoverScale}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(71,79,84,0.8)] to-transparent" />
                                <div className="absolute bottom-4 left-4 flex items-center text-white">
                                    <event.icon className="w-6 h-6 mr-2" />
                                    <h3 className="text-xl font-semibold">{event.title}</h3>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-[rgb(71,79,84)] text-sm mb-2">{event.description}</p>
                                <div className="flex items-center text-[rgb(222,62,86)]">
                                    <Calendar size={16} className="mr-2" />
                                    <span className="text-sm font-medium">{event.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
