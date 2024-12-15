'use client'

import { useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

export default function MedicalCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [appointments, setAppointments] = useState<{[key: string]: string[]}>({})

  const addAppointment = () => {
    const dateString = date?.toDateString() || ''
    const newAppointment = prompt('Enter appointment details:')
    if (newAppointment) {
      setAppointments(prev => ({
        ...prev,
        [dateString]: [...(prev[dateString] || []), newAppointment]
      }))
    }
  }

  return (
    <div 
      id="calendar" 
      className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <CalendarIcon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">Medical Calendar</h2>
        </div>
        
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          Keep track of your medical appointments and medication schedules with our intelligent calendar system.
        </p>
        
        <div className="bg-white rounded-xl p-6 shadow-inner group-hover:shadow-md transition-shadow duration-300">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          {date && (
            <div className="mt-4">
              <h3 className="font-semibold">Appointments for {date.toDateString()}:</h3>
              <ul className="list-disc list-inside mt-2">
                {appointments[date.toDateString()]?.map((appointment, index) => (
                  <li key={index} className="text-gray-700">{appointment}</li>
                ))}
              </ul>
              <Button onClick={addAppointment} className="mt-4 bg-green-500 hover:bg-green-600 text-white">
                Add Appointment
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

