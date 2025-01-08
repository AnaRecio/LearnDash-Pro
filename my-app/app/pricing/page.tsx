import { Button } from '@/components/ui/button'
import Link from 'next/link'

const pricingOptions = [
  {
    title: "Individual Course Bundle",
    price: "$9.99",
    description: "Access to a single course bundle",
    features: [
      "Full course content",
      "Quizzes and assessments",
      "Certificate of completion",
      "Lifetime access to the bundle",
      "30-day money-back guarantee",
    ],
  },
  {
    title: "Monthly Subscription",
    price: "$29.99/month",
    description: "Unlimited access to all courses",
    features: [
      "Access to all course bundles",
      "New courses added regularly",
      "Personalized learning paths",
      "Progress tracking across all courses",
      "Priority support",
      "Cancel anytime",
    ],
  },
]

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Choose Your Learning Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {pricingOptions.map((option, index) => (
          <div key={index} className="bg-card text-card-foreground rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>
            <p className="text-3xl font-bold mb-4">{option.price}</p>
            <p className="text-muted-foreground mb-6">{option.description}</p>
            <ul className="mb-6 space-y-2">
              {option.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

