import React from 'react';
import { ArrowRight, Clock, IndianRupee } from 'lucide-react';

const PopularRoutes = () => {
  const routes = [
    {
      from: 'Delhi',
      to: 'Mumbai',
      duration: '16h 30m',
      price: 1200,
      buses: 25,
      image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      from: 'Bangalore',
      to: 'Chennai',
      duration: '6h 45m',
      price: 800,
      buses: 18,
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      from: 'Pune',
      to: 'Goa',
      duration: '8h 15m',
      price: 900,
      buses: 12,
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      from: 'Hyderabad',
      to: 'Visakhapatnam',
      duration: '12h 20m',
      price: 1100,
      buses: 15,
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      from: 'Kolkata',
      to: 'Bhubaneswar',
      duration: '7h 30m',
      price: 750,
      buses: 20,
      image: 'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      from: 'Jaipur',
      to: 'Udaipur',
      duration: '6h 45m',
      price: 650,
      buses: 14,
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular Routes
          </h2>
          <p className="text-xl text-gray-600">
            Discover the most traveled bus routes across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative">
                <img 
                  src={route.image} 
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-green-600">
                  {route.buses} buses
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-xl font-bold text-gray-800">
                    <span>{route.from}</span>
                    <ArrowRight className="mx-2 text-green-600" size={20} />
                    <span>{route.to}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{route.duration}</span>
                  </div>
                  <div className="flex items-center text-green-600 font-bold">
                    <IndianRupee size={16} />
                    <span>{route.price}</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  View Buses
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg">
            View All Routes
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;