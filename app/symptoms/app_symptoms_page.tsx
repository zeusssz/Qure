import Header from '../components/Header'
import SymptomSearch from '../components/SymptomSearch'

export default function SymptomsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-green-700">Symptom Search</h1>
        <SymptomSearch />
      </main>
    </div>
  )
}

