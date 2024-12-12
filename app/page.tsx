import Header from './components/Header'
import Footer from './components/Footer'
import MedicalCalendar from './components/MedicalCalendar'
import AllergyTool from './components/AllergyTool'
import AIChatBot from './components/AIChatBot'
import SymptomSearch from './components/SymptomSearch'
import { Squiggle, Circle, Wave } from './components/Decorative'
import { SquigglyLines } from './components/SquigglyLines'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-green-50 overflow-hidden relative">
      <Header />
      <SquigglyLines />
      <main className="flex-grow container mx-auto px-8 py-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-40">
          <Squiggle />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-30">
          <Circle />
        </div>
        <div className="absolute bottom-0 left-0 right-0 -z-10">
          <Wave />
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 relative">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-400 to-green-600 text-transparent bg-clip-text animate-fade-in">
            Welcome to Qure
          </h1>
          <p className="text-2xl text-gray-600 mb-8 animate-slide-up">
            Your AI-powered medical assistant for non-medical advice and symptom analysis
          </p>
          <p className="text-lg text-gray-700 mb-12 animate-fade-in">
            Qure combines cutting-edge AI technology with comprehensive medical databases to provide you with personalized health insights and guidance.
          </p>
          <div className="flex justify-center gap-6 animate-fade-in">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full hover:from-green-500 hover:to-green-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white text-green-600 rounded-full hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-green-200 transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>

        {/* App Information Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-8 text-green-700">Why Choose Qure?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-50">
              <h3 className="text-xl font-semibold mb-4 text-green-600">AI-Powered Insights</h3>
              <p className="text-gray-600">Our advanced AI algorithms analyze your symptoms and medical history to provide personalized health insights.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-50">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Comprehensive Database</h3>
              <p className="text-gray-600">Access a vast database of medical information, updated regularly with the latest research and findings.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-50">
              <h3 className="text-xl font-semibold mb-4 text-green-600">User-Friendly Interface</h3>
              <p className="text-gray-600">Navigate your health journey with ease using our intuitive and accessible app design.</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <MedicalCalendar />
          <AllergyTool />
          <AIChatBot />
          <SymptomSearch />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gradient-to-r from-green-500 to-green-600 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Take Control of Your Health?</h2>
          <p className="text-xl text-green-100 mb-8">Join thousands of users who trust Qure for their health management needs.</p>
          <button className="px-10 py-4 bg-white text-green-600 text-lg font-semibold rounded-full hover:bg-green-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse">
            Sign Up Now
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

