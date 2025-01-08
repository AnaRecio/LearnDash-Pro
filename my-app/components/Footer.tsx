import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#1d7a85] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">LearnDash Pro</h3>
            <p className="text-sm">Master new skills in just 10 minutes a day.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><Link href="/courses" className="hover:text-orange-300">Courses</Link></li>
              <li><Link href="/pricing" className="hover:text-orange-300">Pricing</Link></li>
              <li><Link href="/how-it-works" className="hover:text-orange-300">How It Works</Link></li>
              <li><Link href="/faq" className="hover:text-orange-300">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-orange-300">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <ul className="text-sm">
              <li>Email: info@learndashpro.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Learn St, Education City, 12345</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 LearnDash Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

