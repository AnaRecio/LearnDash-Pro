import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">LearnDash Pro</h3>
            <p className="text-gray-600">Empowering education through technology</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-600 hover:text-gray-900">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Add more footer sections as needed */}
        </div>
      </div>
    </footer>
  )
} 