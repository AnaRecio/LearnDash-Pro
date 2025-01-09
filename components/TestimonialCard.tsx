'use client';
import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center">
        <div className="relative h-12 w-12 mr-4">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 