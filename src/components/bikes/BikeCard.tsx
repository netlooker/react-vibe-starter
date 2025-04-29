import React from "react";
import { Bike } from "../../features/bikes/bikeData";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface BikeCardProps {
  bike: Bike;
}

export const BikeCard: React.FC<BikeCardProps> = ({ bike }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={bike.imageUrl}
          alt={bike.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-medium">
          {bike.type}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {bike.name}
          </h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">
              {bike.rating}
            </span>
          </div>
        </div>
        
        <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-1" />
          {bike.location}
        </div>
        
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {bike.description}
        </p>
        
        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
              ${bike.hourlyRate}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400"> /hour</span>
          </div>
          
          <Link
            to={`/bikes/${bike.id}`}
            className="px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};