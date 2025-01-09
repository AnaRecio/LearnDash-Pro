import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            LearnDash Pro
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/courses" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link href="/login">
              <Button variant="outline" className="mr-2">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary hover:bg-primary-dark">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 