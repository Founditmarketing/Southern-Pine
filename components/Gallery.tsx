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
          {/* Item 1: Large Feature - Room with Beams */}
          <ScrollReveal delay={0.1} className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
            <img
              src="/pinegallery4.png"
              alt="Custom Southern Pine Project"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="font-semibold text-amber-500">Custom Installation</p>
              <p className="text-xs text-gray-300">Premium Grade</p>
            </div>
          </ScrollReveal>

          {/* Item 2: Small Square - Wood Ceiling */}
          <ScrollReveal delay={0.2} className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
            <img
              src="/pinegallery2.png"
              alt="Southern Pine Detail"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </ScrollReveal>

          {/* Item 3: Small Square - Dark Wall */}
          <ScrollReveal delay={0.3} className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
            <img
              src="/pinegallery3.png"
              alt="Southern Pine Texture"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </ScrollReveal>

          {/* Item 4: Wide Rectangle - White Ceiling */}
          <ScrollReveal delay={0.4} className="col-span-2 row-span-1 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
            <img
              src="/pinegallery.png"
              alt="Finished Pine Surface"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="font-semibold text-amber-500">Elegant Finish</p>
              <p className="text-xs text-gray-300">Clear Grade</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Gallery;