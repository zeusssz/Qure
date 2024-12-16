import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(req: Request) {
  const { message } = await req.json()

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  const prompt = `You are a helpful AI assistant for a medical advice platform. Respond to the following user message: "${message}". Provide helpful information, but remember to include a disclaimer that you cannot provide professional medical advice and recommend consulting a healthcare professional for specific medical concerns.`

  try {
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    return new Response(JSON.stringify({ response: text }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'An error occurred while processing your request.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
