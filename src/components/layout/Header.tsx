import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bike, Menu, X, ShoppingCart } from "lucide-react";
import { ThemeToggle } from "../../features/theme";
import { useRental } from "../../features/rental/RentalContext";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { rentalItems } = useRental();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Bike size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              BikeRental
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium ${
                isActive("/")
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              Home
            </Link>
            <Link
              to="/bikes"
              className={`text-sm font-medium ${
                isActive("/bikes")
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              Bikes
            </Link>
            <Link
              to="/how-it-works"
              className={`text-sm font-medium ${
                isActive("/how-it-works")
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              How It Works
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium ${
                isActive("/contact")
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/checkout"
              className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <ShoppingCart className="w-5 h-5" />
              {rentalItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {rentalItems.length}
                </span>
              )}
            </Link>
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 py-4 border-t border-gray-200 dark:border-gray-700 md:hidden">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className={`block text-sm font-medium ${
                    isActive("/")
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/bikes"
                  className={`block text-sm font-medium ${
                    isActive("/bikes")
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bikes
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className={`block text-sm font-medium ${
                    isActive("/how-it-works")
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block text-sm font-medium ${
                    isActive("/contact")
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};