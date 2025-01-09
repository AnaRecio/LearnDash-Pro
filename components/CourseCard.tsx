'use client';


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  id: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, imageUrl, price, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${price}</span>
          <Link 
            href={`/courses/${id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard; 