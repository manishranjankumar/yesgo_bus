import React from 'react';
import { Shield, Clock, CreditCard, Headphones, MapPin, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your safety is our priority with verified operators and secure payment gateway'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round the clock customer support for all your travel needs'
    },
    {
      icon: CreditCard,
      title: 'Easy Payment',
      description: 'Multiple payment options with instant booking confirmation'
    },
    {
      icon: Headphones,
      title: 'Customer Care',
      description: 'Dedicated customer care team to assist you throughout your journey'
    },
    {
      icon: MapPin,
      title: 'Wide Network',
      description: 'Extensive bus network covering 2000+ destinations across India'
    },
    {
      icon: Star,
      title: 'Best Price',
      description: 'Guaranteed best prices with exclusive offers and discounts'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose YesGoBus?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the best in class bus booking service with unmatched convenience and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-600 transition-colors">
                  <feature.icon className="text-green-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;