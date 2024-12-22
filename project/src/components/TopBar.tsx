import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-gray-100 py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-gray-600">World's Largest Medical Equipment Market Place</p>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">My account</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a>
        </div>
      </div>
    </div>
  );
}