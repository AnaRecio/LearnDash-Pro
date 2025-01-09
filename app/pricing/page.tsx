"use client"

import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: "Individual Course Bundle",
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
    name: "Monthly Subscription",
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
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-dark' : ''}`}
              >
                <Link href="/register">{plan.ctaText}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 