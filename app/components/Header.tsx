'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/50 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="rounded-full bg-green-600 p-2">
            <div className="h-6 w-6 rounded-full bg-white" />
          </div>
          <span className="text-2xl font-bold text-green-800">Qure</span>
        </Link>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Input 
              type="search" 
              placeholder="Search your symptoms" 
              className="w-full pl-4 pr-12 h-11 bg-green-100/50 border-green-200 focus:border-green-300 focus:ring-green-300"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-700 transition-colors">
              <Mic className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav className="flex items-center space-x-4">
          <Link href="/calendar" className={`text-gray-700 hover:text-green-600 transition-colors ${pathname === '/calendar' ? 'font-bold' : ''}`}>
            Calendar
          </Link>
          <Link href="/allergy" className={`text-gray-700 hover:text-green-600 transition-colors ${pathname === '/allergy' ? 'font-bold' : ''}`}>
            Allergy
          </Link>
          <Link href="/chatbot" className={`text-gray-700 hover:text-green-600 transition-colors ${pathname === '/chatbot' ? 'font-bold' : ''}`}>
            ChatBot
          </Link>
          <Link href="/symptoms" className={`text-gray-700 hover:text-green-600 transition-colors ${pathname === '/symptoms' ? 'font-bold' : ''}`}>
            Symptoms
          </Link>
        </nav>
      </div>
    </header>
  )
}
