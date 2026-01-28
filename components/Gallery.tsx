import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
           <h2 className="text-4xl font-serif font-bold">Project Gallery</h2>
           <p className="text-gray-400 mt-2 md:mt-0">See what our customers are building.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Item 1: Large Feature - Room with Beams */}
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
            <img 
              src="/images/room-beams.jpg" 
              alt="Great Room with Exposed Beams" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="font-semibold text-amber-500">Exposed Truss Great Room</p>
              <p className="text-xs text-gray-300">Clear Grade - Custom Stain</p>
            </div>
          </div>
          
          {/* Item 2: Small Square - Wood Ceiling */}
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
             <img 
              src="/images/wood-ceiling.jpg" 
              alt="Natural Wood Ceiling" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Item 3: Small Square - Dark Wall */}
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
             <img 
              src="/images/dark-wall.jpg" 
              alt="Dark Stained Wall" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Item 4: Wide Rectangle - White Ceiling */}
          <div className="col-span-2 row-span-1 rounded-xl overflow-hidden relative group bg-gray-800 border border-gray-700">
             <img 
              src="/images/white-ceiling.jpg" 
              alt="Painted Ceiling Detail" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="font-semibold text-amber-500">Modern Painted Finish</p>
              <p className="text-xs text-gray-300">Nickel Gap - Painted White</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;