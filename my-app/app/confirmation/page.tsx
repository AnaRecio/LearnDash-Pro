import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">Payment Successful!</h1>
      <p className="text-xl mb-8">Thank you for your purchase. Your account has been activated.</p>
      <p className="mb-8">Transaction ID: #12345678</p>
      <Button asChild>
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  )
}

