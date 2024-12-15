import Header from '../components/Header'
import MedicalCalendar from '../components/MedicalCalendar'

export default function CalendarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-green-700">Medical Calendar</h1>
        <MedicalCalendar />
      </main>
    </div>
  )
}

