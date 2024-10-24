import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'

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
        <footer className="relative bg-gray-200 text-gray-700">
            {/* Imagen centrada con opacidad */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="relative max-w-7xl mx-auto h-full">
                    <img
                        src="https://i.ibb.co/st8wYLD/Inter-Plaza-Icono.png"
                        alt="InterPlaza Logo"
                        className="absolute top-[20%] left-[10%] sm:left-[15%] md:top-[25%] md:left-[20%] lg:top-1/2 lg:left-0 transform -translate-y-1/2 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-[35%] opacity-10 object-contain transition-all duration-300"
                    />
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-12 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Información de contacto */}
                    <div className="flex flex-col md:col-span-2 lg:col-span-1">
                        <div className="h-24 mb-6 relative flex justify-start">
                            <img
                                src="https://i.ibb.co/sC900wQ/img-2024-10-18-18-53-56-removebg-preview.png"
                                alt="InterPlaza Logo"
                                className="h-full w-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center">
                                <Phone size={18} className="mr-3 text-red-600" />
                                <p>809.234.5678</p>
                            </div>
                            <div className="flex items-center">
                                <Mail size={18} className="mr-3 text-red-600" />
                                <p>info@interplaza.com.do</p>
                            </div>
                            <div className="flex items-start">
                                <Clock size={18} className="mr-3 text-red-600 mt-1" />
                                <div>
                                    <p>Lunes a Viernes: 10:00am – 9:00pm</p>
                                    <p>Domingos y Feriados: 11:00am – 8:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enlaces */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">ENLACES</h3>
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="hover:text-red-600 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Ubicación */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">UBICACIÓN</h3>
                        <div className="bg-white rounded-lg overflow-hidden mb-4 h-[200px] relative">
                            <div className="w-full h-full flex items-center justify-center border border-gray-300">
                                <MapPin size={48} className="text-gray-700" />
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin size={18} className="mr-3 text-gray-700 mt-1 flex-shrink-0" />
                            <p>Frente a  lore impsun impsun lore<br />A menos de 5 minutos caminando desde impsum lore lore impsum.</p>
                        </div>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">SÍGUENOS</h3>
                        <div className="flex flex-wrap gap-4">
                            {socialIcons.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="bg-gray-700 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                                >
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold mb-2">SUSCRÍBETE A NUESTRO NEWSLETTER</h4>
                            <form className="flex" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="flex-grow px-4 py-2 rounded-l-md text-gray-700 border border-gray-300"
                                />
                                <button
                                    type="submit"
                                    className="bg-gray-700 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Derechos reservados */}
            <div className="border-t border-gray-300 mt-8 pt-8 pb-4">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm relative z-10">
                    <p>Todos los derechos reservados © 2024 InterPlaza | Alexander Matos</p>
                </div>
            </div>
        </footer>
    )
}