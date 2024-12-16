import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Qure</h3>
            <p className="text-green-200">Your AI-powered medical assistant for non-medical advice and symptom analysis.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li><Link href="#calendar" className="text-green-200 hover:text-white transition-colors">Medical Calendar</Link></li>
              <li><Link href="#allergy" className="text-green-200 hover:text-white transition-colors">Allergy Tool</Link></li>
              <li><Link href="#chatbot" className="text-green-200 hover:text-white transition-colors">AI ChatBot</Link></li>
              <li><Link href="#symptoms" className="text-green-200 hover:text-white transition-colors">Symptom Search</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-green-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-green-200 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/privacy" className="text-green-200 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-green-200 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-green-200 hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="#" className="text-green-200 hover:text-white transition-colors">Facebook</Link></li>
              <li><Link href="#" className="text-green-200 hover:text-white transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="text-green-200 hover:text-white transition-colors">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 Qure. All rights reserved.</p>
          <p className="text-sm text-green-200 mt-4 md:mt-0">Disclaimer: Qure is not a substitute for professional medical advice, diagnosis, or treatment.</p>
        </div>
      </div>
    </footer>
  )
}
