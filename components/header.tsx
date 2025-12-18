"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container } from './container'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'About Us', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'Community', href: '#' },
  { label: 'Support', href: '#' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="w-full shadow bg-white sticky top-0 z-50">
      <Container className="flex items-center justify-between py-4">
      
        {/* Logo */}
        <div>
          <Image 
            src="/rabalogo.png" 
            alt="Raba Logo" 
            width={120} 
            height={40} 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-16 text-gray-700 font-bold">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="hover:text-[#EC5C28] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button className="hidden md:block px-5 py-2 bg-[#EC5C28] text-white rounded-full hover:bg-[#d94f1f] transition-colors duration-200">
          Join Raba
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-[#EC5C28] transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={28} /> : <Image src="/menu-right.svg" alt="Menu" width={28} height={28} />}
        </button>
      </Container>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Container className="py-4 border-t border-gray-100">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-gray-700 font-bold py-2 hover:text-[#EC5C28] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="mt-2 w-full px-5 py-3 bg-[#EC5C28] text-white rounded-full font-semibold hover:bg-[#d94f1f] transition-colors duration-200">
              Join Raba
            </button>
          </nav>
        </Container>
      </div>
    </header>
  )
}

export default Header
