import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#1d7a85] text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">LearnDash Pro</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/courses" className="hover:text-accent-foreground">Courses</Link>
          <Link href="/pricing" className="hover:text-accent-foreground">Pricing</Link>
          <Link href="/how-it-works" className="hover:text-accent-foreground">How It Works</Link>
          <Link href="/faq" className="hover:text-accent-foreground">FAQ</Link>
          <Link href="/contact" className="hover:text-accent-foreground">Contact Us</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-[#1d7a85] text-white px-4 py-2">
          <Link href="/courses" className="block py-2 hover:text-accent-foreground">Courses</Link>
          <Link href="/pricing" className="block py-2 hover:text-accent-foreground">Pricing</Link>
          <Link href="/how-it-works" className="block py-2 hover:text-accent-foreground">How It Works</Link>
          <Link href="/faq" className="block py-2 hover:text-accent-foreground">FAQ</Link>
          <Link href="/contact" className="block py-2 hover:text-accent-foreground">Contact Us</Link>
        </nav>
      )}
    </header>
  )
}

export default Header

