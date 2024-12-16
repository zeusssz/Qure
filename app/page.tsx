import Header from './components/Header'
import { Stethoscope, Pill, Heartbeat } from './components/MedicalIcons'
import MedicalCalendar from './components/MedicalCalendar'
import AllergyTool from './components/AllergyTool'
import AIChatBot from './components/AIChatBot'
import SymptomSearch from './components/SymptomSearch'
import { SquigglyLines } from './components/SquigglyLines'


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden relative">
      <Header />
      <SquigglyLines />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 text-transparent bg-clip-text animate-slow-pulse">
              Welcome to Qure
            </h1>
            <p className="text-center text-2xl text-gray-600 mb-16 animate-slide-up">
              Your AI-powered medical assistant for non-medical advice and symptom analysis
            </p>
            
            <div className="flex justify-between items-center">
              <Stethoscope />
              <Pill />
              <Heartbeat />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Explore Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <MedicalCalendar />
            <AllergyTool />
            <AIChatBot />
            <SymptomSearch />
          </div>
        </section>

        {/* About Us Section */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-700">About Us</h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-600">
              At Qure, we're passionate about empowering individuals to take control of their health. Founded by a team of healthcare professionals and tech innovators, we recognized the need for accessible, user-friendly tools that bridge the gap between medical knowledge and everyday health management. Our mission is to provide you with intelligent, AI-driven solutions that offer personalized insights and support for your well-being journey.
            </p>
            <p className="text-lg text-gray-600 text-right">
              We understand that navigating health information can be overwhelming. That's why we've developed Qure as your trusted companion, offering non-medical advice, symptom analysis, and health tracking tools. Our team is committed to continuous improvement, regularly updating our AI models with the latest medical research to ensure you receive the most accurate and helpful information. With Qure, you're not just managing your health; you're partnering with a dedicated ally in your pursuit of a healthier, more informed life.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
