"use client"

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Clock, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'INICIO', href: '#inicio' },
  { name: 'DIRECTORIO', href: '#directorio' },
  { name: 'EVENTOS', href: '#eventos' },
  { name: 'OFERTAS', href: '#ofertas' },
  { name: 'HORARIOS', href: '#horarios' },
  { name: 'NOSOTROS', href: '#nosotros' },
]

const infoLinks = [
  { name: 'CÓMO LLEGAR?', href: '#como-llegar' },
  { name: 'VISITA VIRTUAL', href: '#visita-virtual' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const infoButtonRef = useRef<HTMLButtonElement>(null)
  const infoDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleHashChange = () => setActiveSection(window.location.hash)
    const handleClickOutside = (event: MouseEvent) => {
      if (infoButtonRef.current && !infoButtonRef.current.contains(event.target as Node) &&
          infoDropdownRef.current && !infoDropdownRef.current.contains(event.target as Node)) {
        setIsInfoOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashChange)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${scrolled ? 'bg-white/90' : 'bg-white/70'} backdrop-blur-sm shadow-lg rounded-full transition-all duration-300`}>
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0">
              <img src="https://i.ibb.co/sC900wQ/img-2024-10-18-18-53-56-removebg-preview.png" alt="InterPlaza Logo" className="h-12 w-auto sm:h-16" />
            </div>
            <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-4 flex-grow">
              {navLinks.map((link) => (
                  <a
                      key={link.name}
                      href={link.href}
                      className={`text-sm xl:text-base px-2 xl:px-3 py-2 rounded-full transition-all duration-300 ${
                          activeSection === link.href
                              ? 'bg-[#DE4057] text-white'
                              : 'text-[#484E51] hover:text-[#DE4057] hover:bg-gray-100/50'
                      }`}
                  >
                    {link.name}
                  </a>
              ))}
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="relative">
                <button
                    ref={infoButtonRef}
                    onClick={() => setIsInfoOpen(!isInfoOpen)}
                    className={`text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full transition-all duration-300 flex items-center ${
                        isInfoOpen ? 'bg-[#DE4057] text-white' : 'bg-[#415159] text-white hover:bg-[#415159]/90'
                    }`}
                >
                  <span className="hidden sm:inline">INFORMACIÓN ÚTIL</span>
                  <span className="sm:hidden">INFORMACIÓN ÚTIL</span>
                  <ChevronDown size={16} className={`ml-1 transform transition-transform ${isInfoOpen ? 'rotate-180' : ''}`} />
                </button>
                {isInfoOpen && (
                    <div
                        ref={infoDropdownRef}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                        style={{
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                    >
                      {infoLinks.map((link) => (
                          <a
                              key={link.name}
                              href={link.href}
                              className="block px-4 py-2 text-sm text-[#484E51] hover:bg-gray-100 hover:text-[#DE4057]"
                          >
                            {link.name}
                          </a>
                      ))}
                    </div>
                )}
              </div>
              <button className="bg-[#DE4057] text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#DE4057]/90 transition-all duration-300 transform hover:scale-105">
                <span className="hidden sm:inline">CONTÁCTANOS</span>
                <span className="sm:hidden">CONTACTO</span>
              </button>
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
            </div>
        )}

        <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#484E51]/90 text-white py-2 px-4 rounded-full text-xs flex items-center space-x-2 transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Clock size={14} />
          <span className="whitespace-nowrap">Lun-Vie: 10am–9pm | Dom/Fer: 11am–8pm</span>
        </div>
      </nav>
  )
}