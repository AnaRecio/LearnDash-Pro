import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import FeatureCard from './components/FeatureCard'
import TestimonialCard from './components/TestimonialCard'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1d7a85] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn Smarter, Not Longer – Master New Skills in Just 10 Minutes a Day</h1>
          <p className="text-xl mb-8">Personalized microlearning for busy professionals</p>
          <Button asChild size="lg">
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Bite-sized Lessons"
              description="Concise, focused content designed for efficient learning"
              icon="📚"
            />
            <FeatureCard
              title="Personalized Paths"
              description="Tailored learning experiences based on your goals and progress"
              icon="🎯"
            />
            <FeatureCard
              title="Mobile-friendly"
              description="Learn anytime, anywhere on your favorite devices"
              icon="📱"
            />
            <FeatureCard
              title="Certificates"
              description="Earn certificates to showcase your new skills"
              icon="🏆"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Learners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Marketing Manager"
              content="LearnDash Pro has revolutionized my learning experience. I can now fit skill development into my busy schedule!"
            />
            <TestimonialCard
              name="Michael Chen"
              role="Software Developer"
              content="The bite-sized lessons are perfect for keeping my coding skills up-to-date without overwhelming me."
            />
            <TestimonialCard
              name="Emily Rodriguez"
              role="Entrepreneur"
              content="Thanks to LearnDash Pro, I've been able to expand my business knowledge and apply it immediately to my startup."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1d7a85] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl mb-8">Join thousands of learners mastering new skills in just minutes a day.</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/register">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

