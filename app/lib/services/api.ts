import { Message, SymptomSearchResult } from '../types'

const API_BASE_URL = '/api'

export async function fetchWithError(url: string, options: RequestInit = {}) {
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }
  return response.json()
}

export async function sendChatMessage(message: string): Promise<Message> {
  return fetchWithError(`${API_BASE_URL}/chatbot`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  })
}

export async function searchSymptoms(symptom: string): Promise<SymptomSearchResult> {
  return fetchWithError(`${API_BASE_URL}/symptom-search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ symptom }),
  })
}