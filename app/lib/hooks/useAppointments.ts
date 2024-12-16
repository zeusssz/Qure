import { useState, useCallback } from 'react'
import { Appointment } from '../types'

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  const addAppointment = useCallback((appointment: Omit<Appointment, 'id'>) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: Date.now().toString(),
    }
    setAppointments(prev => [...prev, newAppointment])
  }, [])

  const removeAppointment = useCallback((id: string) => {
    setAppointments(prev => prev.filter(app => app.id !== id))
  }, [])

  return {
    appointments,
    addAppointment,
    removeAppointment,
  }
}