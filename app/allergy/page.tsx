import Header from '../components/Header'
import AllergyTool from '../components/AllergyTool'

export default function AllergyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-green-700">Allergy Tool</h1>
        <AllergyTool />
      </main>
    </div>
  )
}

