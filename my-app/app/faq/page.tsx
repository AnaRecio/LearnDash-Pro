import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long are the lessons?",
    answer: "Our lessons are designed to be completed in about 10 minutes, making it easy to fit learning into your busy schedule.",
  },
  {
    question: "How is the content quality ensured?",
    answer: "Our content is created and curated by industry experts and undergoes rigorous quality checks before being published on the platform.",
  },
  {
    question: "Can I switch between different courses?",
    answer: "Yes, you can switch between courses at any time. Our platform is designed to be flexible and accommodate your learning preferences.",
  },
  {
    question: "How does the pricing work?",
    answer: "We offer two pricing options: individual course bundles for $19.99 each, or a monthly subscription for $14.99 that gives you access to all courses.",
  },
  {
    question: "Are the certificates recognized by employers?",
    answer: "While our certificates demonstrate your commitment to learning and skill development, recognition may vary by employer. Many of our learners have reported positive feedback from their employers.",
  },
  {
    question: "Can I access the content offline?",
    answer: "Currently, our platform requires an internet connection to access the lessons. However, we're working on an offline mode for future updates.",
  },
]

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

