import React from 'react';
import { ArrowDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-stack.jpg" 
          alt="Factory Direct Southern Yellow Pine" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        {/* Made In America Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-900/80 backdrop-blur border border-amber-500/30 rounded-full px-5 py-2 text-amber-100 font-bold uppercase tracking-wider text-sm md:text-base mb-6 animate-fade-in-up">
          <span>Made In America</span>
          <span className="text-xl">🇺🇸</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          The Standard for <br/>
          <span className="text-amber-500">Southern Yellow Pine.</span>
        </h1>
        
        {/* Key Terms & Value Prop */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-md">
          Mill direct <span className="font-semibold text-white">Shiplap, V-Groove, Flooring, and Tongue & Groove</span>. 
          <br className="hidden md:block" />
          Milled in Mississippi, stocked in Nashville. <span className="text-amber-400 font-medium">Same day delivery available.</span>
        </p>
        
        {/* Price Comparison Callout */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 md:p-6 rounded-xl shadow-2xl border border-amber-400/50 inline-block mb-10 transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <div className="text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl uppercase tracking-wide flex items-center justify-center md:justify-start gap-2">
                <Star className="w-6 h-6 fill-current text-yellow-300" />
                30% Below Box Store Prices
              </p>
            </div>
            <div className="h-px w-full md:w-px md:h-12 bg-amber-400/50"></div>
            <div className="text-center md:text-left">
              <p className="text-amber-100 text-sm uppercase tracking-wider font-semibold">Price Per Linear Foot</p>
              <div className="flex items-baseline gap-3 justify-center md:justify-start">
                <span className="text-3xl font-bold text-white">$0.79</span>
                <span className="text-sm text-amber-200 line-through decoration-amber-400/70 decoration-2">Box Store: $1.08</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#quote-section" 
            className="bg-white text-gray-900 px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Order
          </a>
          <a 
            href="#patterns" 
            className="bg-gray-800/50 backdrop-blur-md text-white border border-gray-600 px-8 py-4 rounded font-semibold text-lg hover:bg-gray-800/80 transition-colors"
          >
            View Inventory
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <ArrowDown className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;