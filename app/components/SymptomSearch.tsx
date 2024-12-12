'use client'

import { Search, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function SymptomSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])

  const handleSearch = () => {
    // Simulate search results
    const simulatedResults = ['Headache', 'Fever', 'Cough', 'Fatigue'].filter(
      symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(simulatedResults)
  }

  return (
    <div 
      id="symptoms" 
      className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 relative overflow-hidden hover-lift"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <Search className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">Symptom Search Tool</h2>
        </div>
        
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          Search for symptoms and get information about possible conditions.
        </p>
        
        <div className="bg-white rounded-xl p-6 shadow-inner group-hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter your symptoms..." 
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button 
              onClick={handleSearch}
              className="px-4 py-2 bg-purple-500 text-white rounded-r-lg hover:bg-purple-600 transition-colors duration-300"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-2">
            {searchResults.map((symptom, index) => (
              <div 
                key={symptom} 
                className="p-2 bg-purple-100 rounded-lg text-purple-800 animate-fade-in cursor-pointer hover:bg-purple-200 transition-colors duration-300" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {symptom}
              </div>
            ))}
          </div>
        </div>

        <button className="mt-6 px-6 py-2 text-purple-600 hover:text-white hover:bg-purple-500 rounded-lg transition-all duration-300 inline-flex items-center gap-2 group">
          View All Symptoms
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  )
}

