import Link from 'next/link'
import { Button } from '@/components/ui/button'

const pricingPlans = [
  {
    title: "Individual Course Bundle",
    price: "$19.99",
    description: "Perfect for focused learning on specific topics",
    features: [
      "Full access to one course bundle",
      "Lifetime access to purchased content",
      "Practice exercises and assignments",
      "Course completion certificate",
      "24/7 email support",
      "30-day money-back guarantee"
    ],
    ctaText: "Purchase Bundle",
    popular: false
  },
  {
    title: "Monthly Subscription",
    price: "$14.99/month",
    description: "Best value for continuous learning",
    features: [
      "Unlimited access to all courses",
      "New courses added monthly",
      "Interactive learning paths",
      "All certificates included",
      "Priority support",
      "Cancel anytime"
    ],
    ctaText: "Start Monthly Plan",
    popular: true
  }
]

export default function PricingPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${
                plan.popular ? 'border-2 border-[#1d7a85]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#1d7a85] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-[#1d7a85] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                asChild 
                className={`w-full ${plan.popular ? 'bg-[#1d7a85] hover:bg-[#166571]' : ''}`}
              >
                <Link href={`/register?plan=${encodeURIComponent(plan.title)}`}>
                  {plan.ctaText}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 