import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">One Medical Devices<br />Market Place</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Sell on 1MDM</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Brands</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Press Room</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Images & B-roll</a></li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Delivery Information</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Reach Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Corporate Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
          <p className="text-gray-400">© 2024 1MDM</p>
          <div className="flex items-center space-x-2 text-gray-400">
            <span>by</span>
            <span>SuperLabs</span>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4 space-y-2">
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 w-full">
          Start Selling
        </button>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 w-full">
          Customer Service
        </button>
      </div>
    </footer>
  );
}