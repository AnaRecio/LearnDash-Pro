'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically process the payment
    console.log('Payment submitted:', paymentData)
    // Redirect to confirmation page
    window.location.href = '/confirmation'
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Complete Your Payment</h1>
      <div className="max-w-md mx-auto">
        <p className="mb-6 text-center">You are purchasing: <strong>{plan}</strong></p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="cardName">Name on Card</Label>
            <Input
              type="text"
              id="cardName"
              name="cardName"
              value={paymentData.cardName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expirationDate">Expiration Date</Label>
              <Input
                type="text"
                id="expirationDate"
                name="expirationDate"
                placeholder="MM/YY"
                value={paymentData.expirationDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full">Complete Payment</Button>
        </form>
      </div>
    </div>
  Here's the continuation of the text stream from the cut-off point:

full">Complete Payment</Button>
        </form>
      </div>
    </div>
  )
}

