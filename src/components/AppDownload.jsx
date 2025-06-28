import React from 'react';
import { Smartphone, Download, Star } from 'lucide-react';

const AppDownload = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Download YesGoBus App
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Book bus tickets on the go with our mobile app. Get exclusive deals and instant booking confirmation.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-green-500 p-2 rounded-full mr-4">
                  <Download size={20} />
                </div>
                <span className="text-lg">Easy & Quick Booking</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 p-2 rounded-full mr-4">
                  <Star size={20} />
                </div>
                <span className="text-lg">Exclusive App-only Offers</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 p-2 rounded-full mr-4">
                  <Smartphone size={20} />
                </div>
                <span className="text-lg">Offline Ticket Access</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="bg-black rounded-lg p-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-800 transition-colors">
                <div className="text-white">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </div>
              <div className="bg-black rounded-lg p-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-800 transition-colors">
                <div className="text-white">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-4 shadow-2xl mx-auto max-w-sm">
              <div className="bg-gray-100 rounded-2xl p-4 h-96">
                <div className="bg-green-600 text-white p-4 rounded-xl mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">YesGoBus</span>
                    <Smartphone size={20} />
                  </div>
                  <div className="text-sm opacity-90">Your travel companion</div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-sm font-medium text-gray-800">Delhi → Mumbai</div>
                    <div className="text-xs text-gray-600">Today, 25 buses available</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-sm font-medium text-gray-800">Bangalore → Chennai</div>
                    <div className="text-xs text-gray-600">Tomorrow, 18 buses available</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-sm font-medium text-gray-800">Pune → Goa</div>
                    <div className="text-xs text-gray-600">Weekend, 12 buses available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;