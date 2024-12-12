'use client'

import { Calendar, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function MedicalCalendar() {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null)

  return (
    <div 
      id="calendar" 
      className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">Medical Calendar</h2>
        </div>
        
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          Keep track of your medical appointments and medication schedules with our intelligent calendar system.
        </p>
        
        <div className="bg-white rounded-xl p-6 shadow-inner group-hover:shadow-md transition-shadow duration-300">
          <div className="grid grid-cols-7 gap-2">
            {[...Array(31)].map((_, i) => (
              <div 
                key={i} 
                className={`aspect-square rounded-lg flex items-center justify-center text-lg font-semibold transition-all duration-300 cursor-pointer ${
                  hoveredDay === i + 1 ? 'bg-green-500 text-white scale-110' : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
                onMouseEnter={() => setHoveredDay(i + 1)}
                onMouseLeave={() => setHoveredDay(null)}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <button className="mt-6 px-6 py-2 text-green-600 hover:text-white hover:bg-green-500 rounded-lg transition-all duration-300 inline-flex items-center gap-2 group">
          Open Calendar
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  )
}

