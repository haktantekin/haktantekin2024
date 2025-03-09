'use client'

import { useEffect, useState } from 'react'
import { API_URLS } from '@/constants/api'
import { 
  IconMenu2,
  IconX,
} from '@tabler/icons-react'

type NavigationItem = {
  id: string
  label: string
}

export default function Navigation() {
  const [navItems, setNavItems] = useState<NavigationItem[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Sadece istemci tarafında çalıştır
    if (typeof window !== 'undefined') {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URLS.CONTENT)
          const data = await response.json()
          // Domains ve Medium menü öğelerini ekleyelim
          const updatedNavItems = [...data.navigation];
          
          // Deneyimlerim öğesinden sonra Domainlerim öğesini ekle
          const experienceIndex = updatedNavItems.findIndex(item => item.id === 'experience');
          if (experienceIndex !== -1) {
            updatedNavItems.splice(experienceIndex + 1, 0, {
              id: 'domains',
              label: 'Domainlerim'
            });
            
            // Domainlerim öğesinden sonra Medium öğesini ekle
            updatedNavItems.splice(experienceIndex + 2, 0, {
              id: 'medium',
              label: 'Medium'
            });
          }
          
          setNavItems(updatedNavItems)
        } catch (error) {
          console.error('Veri çekilemedi:', error)
        }
      }

      fetchData()
    }
  }, [])

  useEffect(() => {
    // Sadece istemci tarafında çalıştır
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Medium menü öğesine tıklandığında artık sayfadaki Medium bölümüne yönlendir
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-xl font-semibold tracking-tight"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
          >
            <span className="font-black">haktan</span>tekin
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium tracking-wide link-underline py-1"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://haktantekin.com/CV/haktantekinCV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded-md bg-c-dark text-white"
            >
              CV
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t py-4 animate-fade-in shadow-md">
          <div className="container mx-auto px-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm font-medium py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://haktantekin.com/CV/haktantekinCV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-center rounded-md bg-c-dark text-white hover:bg-c-dark/90 transition-colors"
              >
                CV
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 