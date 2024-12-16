import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(req: Request) {
  const { symptom } = await req.json()

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  const prompt = `You are a helpful medical assistant. A user has reported the following symptom: "${symptom}". Please provide a brief overview of possible causes and when they should consider seeking medical attention. Remember to include a disclaimer that this is not professional medical advice.`

  try {
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    return new Response(JSON.stringify({ result: text }), {
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
