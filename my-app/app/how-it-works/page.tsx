import Image from 'next/image'

const steps = [
  {
    title: "Create your profile",
    description: "Sign up and tell us about your learning goals and preferences.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Choose your learning path",
    description: "Browse our courses and select the skills you want to master.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Start microlearning",
    description: "Engage with bite-sized lessons for just 10 minutes a day.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">How LearnDash Pro Works</h1>
      <div className="space-y-16">
        {steps.map((step, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
            <div className="w-full md:w-1/2">
              <Image src={step.image} alt={step.title} width={300} height={200} className="w-full rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">{index + 1}. {step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

