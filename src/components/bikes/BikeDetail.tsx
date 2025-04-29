import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Bike, getBikeById, BikeSize } from "../../features/bikes/bikeData";
import { Star, MapPin, Calendar, Clock, ArrowLeft, Check } from "lucide-react";
import { Button } from "../ui/Button";
import { useRental, RentalPeriod } from "../../features/rental/RentalContext";

export const BikeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const bike = getBikeById(id || "");
  const { addRentalItem } = useRental();
  
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>("hourly");
  const [startDate, setStartDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [quantity, setQuantity] = useState(1);

  if (!bike) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Bike Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The bike you're looking for doesn't exist or has been removed.
          </p>
          <Button variant="primary" onClick={() => navigate("/bikes")}>
            Back to Bikes
          </Button>
        </div>
      </div>
    );
  }

  const handleRent = () => {
    // Calculate end date based on rental period
    const start = new Date(startDate);
    const end = new Date(start);
    
    switch (rentalPeriod) {
      case "hourly":
        end.setHours(start.getHours() + 1);
        break;
      case "daily":
        end.setDate(start.getDate() + 1);
        break;
      case "weekly":
        end.setDate(start.getDate() + 7);
        break;
    }

    addRentalItem({
      bike,
      startDate: start,
      endDate: end,
      period: rentalPeriod,
      quantity,
    });

    navigate("/checkout");
  };

  const getRateByPeriod = () => {
    switch (rentalPeriod) {
      case "hourly":
        return bike.hourlyRate;
      case "daily":
        return bike.dailyRate;
      case "weekly":
        return bike.weeklyRate;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-indigo-600 dark:text-indigo-400 mb-6 hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to bikes
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={bike.imageUrl}
              alt={bike.name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          <div className="p-6 md:w-1/2">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full mb-2">
                  {bike.type}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {bike.name}
                </h1>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="ml-1 text-gray-700 dark:text-gray-300">
                  {bike.rating}
                </span>
              </div>
            </div>

            <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400">
              <MapPin className="w-4 h-4 mr-1" />
              {bike.location}
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {bike.description}
            </p>

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                Features
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {bike.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                  >
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Size:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">
                    {bike.size}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                Rent this bike
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Rental Period
                  </label>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setRentalPeriod("hourly")}
                      className={`px-3 py-1 rounded-md text-sm ${
                        rentalPeriod === "hourly"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      Hourly (${bike.hourlyRate})
                    </button>
                    <button
                      onClick={() => setRentalPeriod("daily")}
                      className={`px-3 py-1 rounded-md text-sm ${
                        rentalPeriod === "daily"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      Daily (${bike.dailyRate})
                    </button>
                    <button
                      onClick={() => setRentalPeriod("weekly")}
                      className={`px-3 py-1 rounded-md text-sm ${
                        rentalPeriod === "weekly"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      Weekly (${bike.weeklyRate})
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Quantity
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="px-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      ${getRateByPeriod() * quantity}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {" "}
                      / {rentalPeriod}
                    </span>
                  </div>
                  <Button variant="primary" onClick={handleRent}>
                    Rent Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};