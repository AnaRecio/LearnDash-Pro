import React from 'react'
import Link from 'next/link'
import { Button } from '../../components/ui/button'

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          LearnDash Pro
        </Link>
        <div className="space-x-4">
          <Link href="/courses" className="hover:text-gray-600">
            Courses
          </Link>
          <Link href="/pricing" className="hover:text-gray-600">
            Pricing
          </Link>
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
} 