import Header from '../components/Header'
import AIChatBot from '../components/AIChatBot'

export default function ChatbotPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-green-700">AI ChatBot</h1>
        <AIChatBot />
      </main>
    </div>
  )
}

