'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SymptomSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/symptom-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptom: searchTerm }),
      })
      const data = await response.json()
      setSearchResults(data.result)
    } catch (error) {
      console.error('Error:', error)
      setSearchResults('An error occurred while searching for symptoms.')
    }
    setIsLoading(false)
  }

  return (
    <div 
      id="symptoms" 
      className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 relative overflow-hidden hover-lift"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <Search className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">Symptom Search Tool</h2>
        </div>
        
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          Search for symptoms and get information about possible conditions.
        </p>
        
        <div className="bg-white rounded-xl p-6 shadow-inner group-hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <Input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter your symptoms..." 
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button 
              onClick={handleSearch}
              disabled={isLoading}
              className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition-colors duration-300"
            >
              {isLoading ? 'Searching...' : <Search className="w-5 h-5" />}
            </Button>
          </div>
          {searchResults && (
            <div className="mt-4 p-4 bg-green-100 rounded-lg text-green-800">
              {searchResults}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
