import React, { useState } from 'react';
import { Menu, X, User, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-green-600 text-white p-2 rounded-lg mr-3">
                <MapPin size={24} />
              </div>
              <span className="text-2xl font-bold text-green-600">YesGoBus</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Bus Tickets</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Train Tickets</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">My Bookings</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Help</a>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors">
              <User size={18} className="mr-1" />
              Sign In
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Bus Tickets</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Train Tickets</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">My Bookings</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Help</a>
              <div className="border-t pt-2">
                <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Sign In</button>
                <button className="block w-full text-left px-3 py-2 bg-green-600 text-white rounded-lg mx-3 mt-2 hover:bg-green-700 transition-colors">Register</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;