import React from 'react';

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up and complete your seller profile with company details"
  },
  {
    number: "02",
    title: "List Your Products",
    description: "Upload your product catalog with detailed specifications"
  },
  {
    number: "03",
    title: "Receive Orders",
    description: "Get notified instantly when buyers place orders"
  },
  {
    number: "04",
    title: "Start Selling",
    description: "Process orders and grow your business globally"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-block bg-blue-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}