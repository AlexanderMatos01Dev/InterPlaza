import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const socialIcons = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Youtube, href: '#', label: 'Youtube' },
    { Icon: Linkedin, href: '#', label: 'Linkedin' },
]

const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Ofertas', href: '#' },
    { name: 'Eventos', href: '#' },
    { name: 'Nosotros', href: '#' },
    { name: 'Directorio', href: '#' },
    { name: 'Información De Contacto', href: '#' },
]

export default function Footer() {
    return (
        <footer className="bg-[rgb(71,80,85)] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <div className="h-16 mb-6 relative">
                            <Image
                                src="/placeholder.svg"
                                alt="InterPlaza Logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center">
                                <Phone size={18} className="mr-3 text-[rgb(222,64,87)]" />
                                <p>809.234.5678</p>
                            </div>
                            <div className="flex items-center">
                                <Mail size={18} className="mr-3 text-[rgb(222,64,87)]" />
                                <p>info@interplaza.com.do</p>
                            </div>
                            <div className="flex items-start">
                                <Clock size={18} className="mr-3 text-[rgb(222,64,87)] mt-1" />
                                <div>
                                    <p>Lunes a Viernes: 10:00am – 9:00pm</p>
                                    <p>Domingos y Feriados: 11:00am – 8:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-[rgb(222,64,87)]">ENLACES</h3>
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="hover:text-[rgb(222,64,87)] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-[rgb(222,64,87)]">UBICACIÓN</h3>
                        <div className="bg-white rounded-lg overflow-hidden mb-4 h-[200px] relative">
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                <MapPin size={48} className="text-[rgb(71,80,85)]" />
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin size={18} className="mr-3 text-[rgb(222,64,87)] mt-1 flex-shrink-0" />
                            <p>Frente a la Av. Kennedy<br />A menos de 5 minutos caminando desde la estación Juan Pablo Duarte.</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-[rgb(222,64,87)]">SÍGUENOS</h3>
                        <div className="flex flex-wrap gap-4">
                            {socialIcons.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="bg-white text-[rgb(71,80,85)] p-3 rounded-full hover:bg-[rgb(222,64,87)] hover:text-white transition-colors"
                                >
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold mb-2">SUSCRÍBETE A NUESTRO NEWSLETTER</h4>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="flex-grow px-4 py-2 rounded-l-md text-[rgb(71,80,85)]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[rgb(222,64,87)] px-4 py-2 rounded-r-md hover:bg-[rgb(222,64,87)]/90 transition-colors"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 pb-4">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm">
                    <p>Todos los derechos reservados © 2013 - 2024 InterPlaza | Powered by SmartIT</p>
                </div>
            </div>
        </footer>
    )
}