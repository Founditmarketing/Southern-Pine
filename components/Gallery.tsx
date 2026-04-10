import React from 'react';
import ScrollReveal from './ScrollReveal';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-serif font-bold">Project Gallery</h2>
            <p className="text-gray-400 mt-2 md:mt-0">See what our customers are building.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Item 1: Large Feature - Beaded Ceiling (Pic 2) */}
          <ScrollReveal delay={0.1} className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
            <img
              src="/Beaded Ceiling pic 2.png"
              alt="Southern Pine Beaded Ceiling Detail"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="font-semibold text-amber-500">Beaded Ceiling</p>
              <p className="text-xs text-gray-300">Classic Decorative Finish</p>
            </div>
          </ScrollReveal>

          {/* Item 2: Small Square - V-Groove */}
          <ScrollReveal delay={0.2} className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
            <img
              src="/V Groove pic 2.png"
              alt="Southern Pine V-Groove Detail"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs font-semibold text-amber-500">V-Groove</p>
            </div>
          </ScrollReveal>

          {/* Item 3: Small Square - Flooring */}
          <ScrollReveal delay={0.3} className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
            <img
              src="/Flooring pic.png"
              alt="Southern Pine Flooring Texture"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs font-semibold text-amber-500">Timber Flooring</p>
            </div>
          </ScrollReveal>

          {/* Item 4: Wide Rectangle - Timber Flooring (Pic 2) */}
          <ScrollReveal delay={0.4} className="col-span-2 row-span-1 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
            <img
              src="/Flooring pic 2.png"
              alt="Finished Pine Surface"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="font-semibold text-amber-500">Timber Flooring</p>
              <p className="text-xs text-gray-300">Durable Center-Matched Grade</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Gallery;