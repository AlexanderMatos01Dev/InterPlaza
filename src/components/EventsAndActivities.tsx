'use client'

import React from 'react'
import { Calendar, Music, Briefcase, Gift, Building, Heart } from 'lucide-react'

interface Event {
    id: number
    title: string
    image: string
    description: string
    date: string
    icon: React.ElementType
}

const events: Event[] = [
    { id: 1, title: "Ponemos a Brillar la Patria", image: "/placeholder.svg?height=200&width=300", description: "Celebramos nuestra patria con un evento lleno de color y alegría.", date: "15 Aug 2024", icon: Gift },
    { id: 2, title: "Feria Emprendedores 2018", image: "/placeholder.svg?height=200&width=300", description: "Descubre las innovaciones de nuestros emprendedores locales.", date: "22 Sep 2024", icon: Briefcase },
    { id: 3, title: "Apertura Navidad DTC 2018", image: "/placeholder.svg?height=200&width=300", description: "Inicia la temporada navideña con nuestro espectacular evento de apertura.", date: "01 Dec 2024", icon: Gift },
    { id: 4, title: "Mark B DownTown Center", image: "/placeholder.svg?height=200&width=300", description: "Disfruta de un concierto exclusivo en el corazón de la ciudad.", date: "10 Oct 2024", icon: Music },
    { id: 5, title: "RUEDA PRENSA BUSINESS TOWER", image: "/placeholder.svg?height=200&width=300", description: "Conoce los detalles de nuestro nuevo proyecto empresarial.", date: "05 Nov 2024", icon: Building },
    { id: 6, title: "SOY MAMÁ DOWNTOWN", image: "/placeholder.svg?height=200&width=300", description: "Un evento especial para celebrar a todas las madres de nuestra comunidad.", date: "12 May 2024", icon: Heart },
]

export default function Component() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 relative">
            <div className="absolute inset-0 bg-[rgba(200,200,210,0.3)] rounded-3xl"></div>
            <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-2 text-center text-[rgb(222,62,86)]">Eventos y Actividades</h2>
                <p className="text-xl text-[rgb(71,79,84)] mb-8 text-center">Descubre lo que está pasando en InterPlaza</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
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
                            <div className="p-4 bg-[rgb(71,79,84)] bg-opacity-10">
                                <button
                                    className="w-full px-4 py-2 bg-[rgb(222,62,86)] text-white rounded-full text-sm font-semibold transition-colors duration-300 hover:bg-[rgba(222,62,86,0.8)] active:scale-95"
                                >
                                    Ver Detalles
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button
                        className="px-8 py-4 bg-[rgb(222,62,86)] text-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[rgba(222,62,86,0.8)] hover:scale-105 active:scale-95"
                    >
                        VER MAS EVENTOS
                    </button>
                </div>
            </div>
        </div>
    )
}