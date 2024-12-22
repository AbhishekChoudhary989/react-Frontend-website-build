
import { Globe2 } from 'lucide-react';
import midpage from './midpage';
export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl text-gray-600 mb-4">Sell on 1mdm.com</h2>
            <h1 className="text-5xl font-bold mb-8">
              Reach millions of B2B buyers globally
            </h1>
            <div className="space-x-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700">
                Start selling
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full hover:bg-red-50">
                Chat with consultant
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-transparent rounded-full transform -rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Globe2 className="w-48 h-48 text-red-600 opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="h-full flex flex-col justify-center space-y-12 pr-12">
          <div>
            <h3 className="text-5xl font-bold mb-2">26,000,000</h3>
            <p className="text-gray-600">active buyers globally</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold mb-2">400,000</h3>
            <p className="text-gray-600">product inquiries daily</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold mb-2">200</h3>
            <p className="text-gray-600">countries and regions represented</p>
          </div>
        </div>
      </div>

<div>

</div>
    </div>

   
  );
}