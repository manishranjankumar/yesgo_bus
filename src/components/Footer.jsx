import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white p-2 rounded-lg mr-3">
                <MapPin size={24} />
              </div>
              <span className="text-2xl font-bold">YesGoBus</span>
            </div>
            <p className="text-gray-400 mb-4">
              India's leading online bus booking platform providing safe, affordable, and convenient travel solutions across the country.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors" size={20} />
              <Twitter className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors" size={20} />
              <Instagram className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors" size={20} />
              <Linkedin className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Bus Tickets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Train Tickets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-green-400 mr-3 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Customer Care</p>
                  <p className="text-white font-medium">1800-123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-green-400 mr-3 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Email Support</p>
                  <p className="text-white font-medium">support@yesgobus.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-green-400 mr-3 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Head Office</p>
                  <p className="text-white font-medium">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 YesGoBus. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;