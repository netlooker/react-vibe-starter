import React from "react";
import { Link } from "react-router-dom";
import { Bike, BikeType, bikes } from "../../features/bikes/bikeData";
import { BikeCard } from "../bikes/BikeCard";
import { MapPin, Star, Clock, Shield, Bike as BikeIcon } from "lucide-react";
import { Button } from "../ui/Button";

export const HomePage: React.FC = () => {
  // Get featured bikes (highest rated)
  const featuredBikes = [...bikes]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore the City on Two Wheels
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Rent a bike and discover the freedom of cycling. Choose from our wide
              selection of quality bikes for any adventure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/bikes">
                <Button variant="primary" size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                  Browse Bikes
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-16 bg-white dark:bg-gray-900 clip-path-wave"></div>
      </section>

      {/* Bike Types Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Find Your Perfect Ride
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.values(BikeType).map((type) => (
              <Link
                key={type}
                to={`/bikes?type=${type}`}
                className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BikeIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {type}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Bikes
            </h2>
            <Link
              to="/bikes"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View all bikes
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BikeIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Choose Your Bike
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse our selection of bikes and choose the one that fits your
                needs and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Select Rental Period
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose how long you need the bike for - hourly, daily, or weekly
                options available.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Ride & Explore
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pick up your bike and start your adventure. Return it when your
                rental period is over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "Great experience renting a mountain bike for the weekend. The
                bike was in excellent condition and the staff was very helpful."
              </p>
              <div className="font-medium text-gray-900 dark:text-white">
                Sarah M.
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "The electric bike was perfect for exploring the city. Easy
                booking process and reasonable prices. Will definitely rent
                again!"
              </p>
              <div className="font-medium text-gray-900 dark:text-white">
                Michael T.
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                  <Star className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "Rented bikes for the whole family. The kids bikes were the
                perfect size and everyone had a great time riding along the
                waterfront."
              </p>
              <div className="font-medium text-gray-900 dark:text-white">
                David L.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Riding?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your bike today and experience the joy of cycling through the
            city.
          </p>
          <Link to="/bikes">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50"
            >
              Browse Available Bikes
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};