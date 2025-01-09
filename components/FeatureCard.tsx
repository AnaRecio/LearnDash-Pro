interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

import React from 'react';
import { FC, ReactNode } from 'react';

const FeatureCard: FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard; 