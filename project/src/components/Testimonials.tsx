import React from 'react';

const testimonials = [
  {
    quote: "1MDM has transformed our business. We've seen a 300% increase in international sales since joining.",
    author: "John Smith",
    company: "Tech Solutions Inc."
  },
  {
    quote: "The platform is incredibly user-friendly and the support team is always there when we need them.",
    author: "Sarah Johnson",
    company: "Global Traders Ltd."
  },
  {
    quote: "We've connected with serious buyers from markets we never thought we could reach. Highly recommended!",
    author: "Michael Chen",
    company: "Innovation Exports"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Sellers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}