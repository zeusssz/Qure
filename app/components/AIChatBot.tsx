import { useState } from 'react'
import { MessageCircle, Send } from 'lucide-react'
import { Button } from '../../app/components/ui/button'
import { Input } from '../../app/components/ui/input'

type Message = {
  text: string
  isUser: boolean
}

export default function AIChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", isUser: false }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, isUser: true }])
      setInput('')
      setIsLoading(true)

      try {
        const response = await fetch('/api/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        })
        const data = await response.json()
        setMessages(prev => [...prev, { text: data.response, isUser: false }])
      } catch (error) {
        console.error('Error:', error)
        setMessages(prev => [...prev, { text: "I'm sorry, I encountered an error. Please try again later.", isUser: false }])
      }

      setIsLoading(false)
    }
  }

  return (
    <div 
      id="chatbot" 
      className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 relative overflow-hidden hover-lift"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">AI ChatBot</h2>
        </div>
        
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          Get personalized (non-medical) information based on your queries with our AI-powered chatbot.
        </p>
        
        <div className="bg-white rounded-xl p-6 shadow-inner group-hover:shadow-md transition-shadow duration-300 h-80 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg ${message.isUser ? 'bg-green-100 text-green-800 ml-auto' : 'bg-gray-100 text-gray-800'} max-w-[80%] animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>

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
      </div>
    </div>
  )
}