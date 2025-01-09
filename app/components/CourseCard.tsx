'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CourseCardProps {
  id: string
  title: string
  description: string
  imageUrl: string
  price: number
}

export default function CourseCard({ id, title, description, imageUrl, price }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-[#1d7a85]">${price}</span>
          <Button asChild>
            <Link href={`/courses/${id}`}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 