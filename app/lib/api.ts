import { Message, SymptomSearchResult } from './types'
import { API_ENDPOINTS } from './constants'

export async function sendChatMessage(message: string): Promise<Message> {
  const response = await fetch(API_ENDPOINTS.CHATBOT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })

  if (!response.ok) {
    throw new Error('Failed to send message')
  }

  const data = await response.json()
  return {
    id: Date.now().toString(),
    text: data.response,
    isUser: false,
    timestamp: new Date(),
  }
}

export async function searchSymptoms(symptom: string): Promise<SymptomSearchResult> {
  const response = await fetch(API_ENDPOINTS.SYMPTOM_SEARCH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ symptom }),
  })

  if (!response.ok) {
    throw new Error('Failed to search symptoms')
  }

  const data = await response.json()
  return {
    symptom,
    possibleCauses: data.causes || [],
    whenToSeekHelp: data.seekHelp || [],
    disclaimer: data.disclaimer || '',
  }
}