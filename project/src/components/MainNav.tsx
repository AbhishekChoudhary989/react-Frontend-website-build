import React from 'react';
import Logo from './Logo';

export default function MainNav() {
  return (
    <nav className="py-4 bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <div className="space-x-8">
          <a href="#" className="text-gray-600 hover:text-red-600">About Us</a>
          <a href="#" className="text-gray-600 hover:text-red-600">Our Story</a>
          <a href="#" className="text-gray-600 hover:text-red-600">Sell on 1MDM</a>
          <a href="#" className="text-gray-600 hover:text-red-600">Pricing</a>
        </div>
      </div>
    </nav>
  );
}