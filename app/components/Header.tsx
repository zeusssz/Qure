'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-green-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
          >
            Qure
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Calendar', 'Allergy Tool', 'AI ChatBot', 'Symptom Search'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-green-600 transition-colors relative group py-2"
                  >
                    {item}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-green-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 animate-fade-in">
            <ul className="space-y-4">
              {['Calendar', 'Allergy Tool', 'AI ChatBot', 'Symptom Search'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block text-gray-600 hover:text-green-600 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

