import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '../ui'
import { Input } from '../ui'

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading: boolean
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      onSend(input)
      setInput('')
    }
  }

  return (
    <div className="mt-6 flex items-center">
      <Input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..." 
        className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <Button 
        onClick={handleSend} 
        disabled={isLoading}
        className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition-colors duration-300"
      >
        {isLoading ? 'Sending...' : <Send className="w-5 h-5" />}
      </Button>
    </div>
  )
}