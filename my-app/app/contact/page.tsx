'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<{ sender: 'user' | 'bot'; message: string }[]>([])
  const [userInput, setUserInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to server)
    console.log('Form submitted')
  }

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInput.trim()) {
      setChatMessages([...chatMessages, { sender: 'user', message: userInput }])
      // Simulate bot response (replace with actual chatbot logic)
      setTimeout(() => {
        setChatMessages(prev => [...prev, { sender: 'bot', message: "Thank you for your message. Our team will get back to you soon." }])
      }, 1000)
      setUserInput('')
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <Input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <Textarea id="message" required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>

      <div className="fixed bottom-4 right-4">
        <Button onClick={() => setChatbotOpen(!chatbotOpen)}>
          {chatbotOpen ? 'Close Chat' : 'Open Chat'}
        </Button>
      </div>

      {chatbotOpen && (
        <div className="fixed bottom-16 right-4 w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col">
          <div className="p-4 bg-teal-600 text-white font-semibold rounded-t-lg">
            Chat with us
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-teal-100' : 'bg-gray-200'}`}>
                  {msg.message}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="p-4 border-t">
            <div className="flex">
              <Input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow mr-2"
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

