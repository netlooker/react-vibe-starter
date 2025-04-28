import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 dark:ring-gray-800/50">
      {icon && (
        <div className="mb-4">
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            {icon}
          </span>
        </div>
      )}
      <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
        {description}
      </p>
    </div>
  );
};
