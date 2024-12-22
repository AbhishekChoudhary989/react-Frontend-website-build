import React from 'react';
import { Store, BarChart2, MessageCircle, Megaphone } from 'lucide-react';

const tools = [
  {
    icon: Store,
    title: 'Custom storefront',
    description: 'Create your branded store with our easy-to-use tools'
  },
  {
    icon: Megaphone,
    title: 'Advertising tools',
    description: 'Reach more customers with targeted advertising'
  },
  {
    icon: BarChart2,
    title: 'Data and analytics',
    description: 'Make informed decisions with detailed insights'
  },
  {
    icon: MessageCircle,
    title: 'Customers support',
    description: '24/7 support to help you grow your business'
  }
];

export default function BusinessTools() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-16">
          Grow your business with a suite of tools built for you
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="p-6 rounded-lg hover:shadow-lg transition-shadow">
              <tool.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}