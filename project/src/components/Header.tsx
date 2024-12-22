import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">1MDM</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600">Home</a>
              <a href="#" className="text-gray-600">Products</a>
              <a href="#" className="text-gray-600">About Us</a>
              <a href="#" className="text-gray-600">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}