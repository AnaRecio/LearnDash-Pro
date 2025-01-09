import React from 'react'

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="p-6 border rounded-lg">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
} 