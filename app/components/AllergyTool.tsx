'use client'

import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

export default function AllergyTool() {
  const [allergies, setAllergies] = useState<{[key: string]: boolean}>({
    Penicillin: false,
    Aspirin: false,
    Ibuprofen: false,
    'Sulfa drugs': false,
  })

  const [result, setResult] = useState<string | null>(null)

  const handleCheck = (drug: string) => {
    setAllergies(prev => ({ ...prev, [drug]: !prev[drug] }))
  }

  const checkAllergies = () => {
    const allergyList = Object.entries(allergies)
      .filter(([_, isAllergic]) => isAllergic)
      .map(([drug]) => drug)

    if (allergyList.length === 0) {
      setResult("You haven't selected any allergies. Always consult with a healthcare professional for accurate allergy information.")
    } else {
      setResult(`You've indicated allergies to: ${allergyList.join(', ')}. Please consult with a healthcare professional for proper management and alternatives.`)
    }
  }

  return (
    <div 
      id="allergy" 
      className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 relative overflow-hidden hover-lift"
    >
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
            {Object.keys(allergies).map((drug, index) => (
              <div key={drug} className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Checkbox
                  id={drug}
                  checked={allergies[drug]}
                  onCheckedChange={() => handleCheck(drug)}
                />
                <label htmlFor={drug} className="text-gray-700">{drug}</label>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={checkAllergies} className="mt-6 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300">
          Check Allergies
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-red-100 rounded-lg text-red-800">
            {result}
          </div>
        )}
      </div>
    </div>
  )
}
