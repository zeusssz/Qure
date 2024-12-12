'use client'

import { AlertCircle, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function AllergyTool() {
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([])

  const toggleAllergy = (allergy: string) => {
    setSelectedAllergies(prev => 
      prev.includes(allergy) 
        ? prev.filter(a => a !== allergy)
        : [...prev, allergy]
    )
  }

  return (
    <div 
      id="allergy" 
      className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 relative overflow-hidden hover-lift"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-red-400 to-red-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">Allergy Tool</h2>
        </div>
        
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          Gauge which medicines you might be allergic to with our advanced allergy assessment tool.
        </p>
        
        <div className="bg-white rounded-xl p-6 shadow-inner group-hover:shadow-md transition-shadow duration-300">
          <div className="space-y-2">
            {['Penicillin', 'Aspirin', 'Ibuprofen', 'Sulfa drugs'].map((drug, index) => (
              <div 
                key={drug} 
                className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedAllergies.includes(drug) ? 'bg-red-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => toggleAllergy(drug)}
              >
                <input 
                  type="checkbox" 
                  checked={selectedAllergies.includes(drug)}
                  onChange={() => {}}
                  className="form-checkbox h-5 w-5 text-red-600 transition duration-150 ease-in-out" 
                />
                <label className={`${selectedAllergies.includes(drug) ? 'text-red-700' : 'text-gray-700'}`}>
                  {drug}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-6 px-6 py-2 text-red-600 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-300 inline-flex items-center gap-2 group">
          Check Allergies
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  )
}

