import { useState, useEffect } from 'react'
import { Menu, X, Clock } from 'lucide-react'

const navLinks = [
  { name: 'NOVEDADES', href: '#novedades' },
  { name: 'DIRECTORIO', href: '#directorio' },
  { name: 'EVENTOS', href: '#eventos' },
  { name: 'OFERTAS', href: '#ofertas' },
  { name: 'HORARIOS', href: '#horarios' },
  { name: 'RESPONSABILIDAD', href: '#responsabilidad' },
  { name: 'SERVICIOS', href: '#servicios' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    const handleHashChange = () => {
      setActiveSection(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${scrolled ? 'bg-white/90' : 'bg-white/70'} backdrop-blur-sm shadow-lg rounded-full transition-all duration-300`}>
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <img src="https://i.ibb.co/sC900wQ/img-2024-10-18-18-53-56-removebg-preview.png" alt="InterPlaza Logo" className="h-12 w-auto sm:h-16" />
          </div>
          <div className="hidden lg:block flex-grow">
            <div className="ml-10 flex items-baseline justify-center space-x-2 xl:space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm px-2 xl:px-3 py-2 rounded-full transition-all duration-300 ${
                    activeSection === link.href
                      ? 'bg-[#DE4057] text-white'
                      : 'text-[#484E51] hover:text-[#DE4057] hover:bg-gray-100/50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <button className="bg-[#DE4057] text-white px-4 xl:px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#484E51] transition-all duration-300 transform hover:scale-105">
              CONTÁCTANOS
            </button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#484E51] hover:text-[#DE4057] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#DE4057]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  activeSection === link.href
                    ? 'bg-[#DE4057] text-white'
                    : 'text-[#484E51] hover:text-[#DE4057] hover:bg-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button className="w-full bg-[#DE4057] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#484E51] transition-all duration-300">
                CONTÁCTANOS
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#484E51]/90 text-white py-2 px-4 rounded-full text-xs flex items-center space-x-2 transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Clock size={14} />
        <span>Lun-Vie: 10am–9pm | Dom/Fer: 11am–8pm</span>
      </div>
    </nav>
  )
}