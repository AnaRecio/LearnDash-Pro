'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Redirect to plan selection page
    window.location.href = '/select-plan'
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="agreeTerms"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onCheckedChange={(checked) => setFormData(prevState => ({ ...prevState, agreeTerms: checked as boolean }))}
        />
        <Label htmlFor="agreeTerms">I agree to the terms and conditions</Label>
      </div>
      <Button type="submit" className="w-full">Register</Button>
      <div className="text-center">
        <p>Or sign up with:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Button variant="outline">Google</Button>
          <Button variant="outline">Facebook</Button>
        </div>
      </div>
    </form>
  )
}

