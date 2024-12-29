'use client'

import React from 'react';

interface IntegrationCardProps {
  title: string;
  description: string;
  onClick: () => void;
  Icon: React.ElementType;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  title,
  description,
  onClick,
  Icon,
}) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Icon */}
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16">
        <Icon className="object-cover w-8 h-8 sm:w-12 sm:h-12" />
      </div>

      {/* Content (Title and Description) */}
      <div className="flex flex-col sm:ml-4 sm:flex-1">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Connect Button */}
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-4 sm:mt-0 sm:ml-4 sm:w-auto w-full"
      >
        Connect
      </button>
    </div>
  );
};

export default IntegrationCard;
