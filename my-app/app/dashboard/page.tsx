import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-blue-600 hover:underline">Introduction to Python</Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">Digital Marketing Basics</Link>
            </li>
          </ul>
          <Button asChild className="mt-4">
            <Link href="/courses">Browse More Courses</Link>
          </Button>
        </div>
        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
          <p>You've completed 2 out of 5 lessons this week.</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '40%'}}></div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
        <p><strong>Email:</strong> user@example.com</p>
        <p><strong>Subscription Plan:</strong> Monthly</p>
        <p><strong>Next Billing Date:</strong> June 1, 2023</p>
        <Button asChild className="mt-4">
          <Link href="/account-settings">Manage Account</Link>
        </Button>
      </div>
    </div>
  )
}

