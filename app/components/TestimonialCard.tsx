import React from 'react'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string;
  text: string;
  role?: string;
  avatar?: string;
}

export default function TestimonialCard({ name, text, role, avatar }: TestimonialCardProps) {
  return (
    <div className="p-6 border rounded-lg">
      <p className="text-gray-600 mb-4">"{text}"</p>
      <div className="flex items-center">
        {avatar && (
          <div className="relative w-10 h-10 mr-3">
            <Image
              src={avatar}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold">{name}</h4>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </div>
  )
} 