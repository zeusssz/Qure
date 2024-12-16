import { Message } from '@/app/lib/types'

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div 
      className={`p-3 rounded-lg ${
        message.isUser 
          ? 'bg-green-100 text-green-800 ml-auto' 
          : 'bg-gray-100 text-gray-800'
      } max-w-[80%] animate-fade-in`}
    >
      {message.text}
    </div>
  )
}