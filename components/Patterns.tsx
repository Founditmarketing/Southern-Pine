import React from 'react';
import { PatternType } from '../types';

const Patterns: React.FC = () => {
  const patterns = [
    {
      type: PatternType.NICKEL_GAP,
      image: "/images/dark-wall.jpg",
      desc: "A modern classic. Features a clean 1/8\" gap between boards for sharp, consistent shadow lines. Perfect for walls and ceilings."
    },
    {
      type: PatternType.V_GROOVE,
      image: "/images/wood-ceiling.jpg",
      desc: "Traditional tongue and groove with chamfered edges that form a 'V' shape when joined. Offers a timeless, rustic charm."
    },
    {
      type: PatternType.FLOORING,
      image: "/images/room-beams.jpg",
      desc: "Durable, center-matched tongue and groove flooring. Creates a smooth, seamless surface ready for sanding and finishing."
    },
    {
      type: PatternType.BEADED,
      image: "/images/white-ceiling.jpg",
      desc: "Classic Southern beadboard. Features a decorative bead down the center and edge. Ideal for porch ceilings and wainscoting."
    }
  ];

  return (
    <section id="patterns" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Stock Patterns</h2>
            <p className="text-gray-600 text-lg">
              Precision milled to a 5 1/8" face width. All patterns are tongue & groove for easy blind-nail installation.
            </p>
          </div>
          <a href="#quote-section" className="text-amber-700 font-bold hover:text-amber-900 mt-4 md:mt-0 flex items-center">
            Check Availability &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {patterns.map((p) => (
            <div key={p.type} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.type} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.type}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patterns;