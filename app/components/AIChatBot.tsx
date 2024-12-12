'use client'

import { MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

export default function AIChatBot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isBot: true },
    { text: "I've been having a headache for the past two days.", isBot: false },
    { text: "I'm sorry to hear that. Can you tell me more about your symptoms?", isBot: true },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }])
      setInput('')
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I understand. Could you please provide more details about the intensity and location of your headache?", isBot: true }])
      }, 1000)
    }
  }

  return (
    <div 
      id="chatbot" 
      className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 relative overflow-hidden hover-lift"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">AI ChatBot</h2>
        </div>
        
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          Get personalized (non-medical) diagnoses based on your symptoms with our AI-powered chatbot.
        </p>
        
        <div className="bg-white rounded-xl p-6 shadow-inner group-hover:shadow-md transition-shadow duration-300 h-64 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`${message.isBot ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'} p-3 rounded-lg mb-2 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..." 
            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-300"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

