import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const steps = [
  {
    title: "Create your profile",
    description: "Sign up and tell us about your learning goals and preferences. We'll use this information to personalize your learning experience and recommend the most relevant courses for you.",
    image: "/images/create-profile.jpg",
    features: [
      "Personalized learning dashboard",
      "Custom goal setting",
      "Progress tracking",
    ]
  },
  {
    title: "Choose your learning path",
    description: "Browse our extensive library of courses and select the skills you want to master. Our AI-powered system will create a customized learning path based on your goals and current skill level.",
    image: "/images/learning-path.jpg",
    features: [
      "Curated course recommendations",
      "Flexible learning paths",
      "Skill assessments",
    ]
  },
  {
    title: "Start microlearning",
    description: "Engage with bite-sized lessons designed for maximum retention. Each lesson takes just 10 minutes, making it easy to learn consistently, even with a busy schedule.",
    image: "/images/microlearning.jpg",
    features: [
      "10-minute focused lessons",
      "Interactive exercises",
      "Real-world projects",
    ]
  },
]

export default function HowItWorks() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">How LearnDash Pro Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master new skills in just 10 minutes a day with our proven three-step learning method
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12 relative`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    width={600} 
                    height={400} 
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <span className="text-primary font-semibold text-lg">Step {index + 1}</span>
                  <h2 className="text-2xl font-bold mb-4 mt-2">{step.title}</h2>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full">
                  <svg className="w-8 h-16 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 5l-8 8 1.4 1.4L12 7.8l6.6 6.6L20 13l-8-8z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-6">Ready to Start Your Learning Journey?</h3>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
            <Link href="/register">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 