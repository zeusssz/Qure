import { useState, useCallback } from 'react'
import { Message } from '../types'
import { sendChatMessage } from '../api'

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: "Hello! How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = useCallback(async (text: string) => {
    try {
      setIsLoading(true)
      const userMessage: Message = {
        id: Date.now().toString(),
        text,
        isUser: true,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, userMessage])
      
      const response = await sendChatMessage(text)
      setMessages(prev => [...prev, response])
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    messages,
    isLoading,
    sendMessage,
  }
}