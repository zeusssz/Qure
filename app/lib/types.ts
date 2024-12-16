export interface Appointment {
  id: string
  date: Date
  title: string
  description?: string
}

export interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export interface Allergy {
  name: string
  severity: 'mild' | 'moderate' | 'severe'
  notes?: string
}

export interface SymptomSearchResult {
  symptom: string
  possibleCauses: string[]
  whenToSeekHelp: string[]
  disclaimer: string
}