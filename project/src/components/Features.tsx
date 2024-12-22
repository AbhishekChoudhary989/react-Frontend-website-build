import React from 'react';
import { Globe, Users, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access customers from over 190 countries worldwide"
  },
  {
    icon: Users,
    title: "Millions of Buyers",
    description: "Connect with verified buyers actively looking for products"
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Expand your business with our powerful selling tools"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Trade with confidence on our secure platform"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Sell on 1MDM?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}