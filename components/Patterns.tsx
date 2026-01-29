import React from 'react';
import { PatternType } from '../types';
import ScrollReveal from './ScrollReveal';

const Patterns: React.FC = () => {
  const patterns = [
    {
      type: PatternType.NICKEL_GAP,
      image: "/newnickelgap.png",
      desc: "A modern classic. Features a clean 1/8\" gap between boards for sharp, consistent shadow lines. Perfect for walls and ceilings."
    },
    {
      type: PatternType.V_GROOVE,
      image: "/newvgroove.png",
      desc: "Traditional tongue and groove with chamfered edges that form a 'V' shape when joined. Offers a timeless, rustic charm."
    },
    {
      type: PatternType.FLOORING,
      image: "/newflooring.png",
      desc: "Durable, center-matched tongue and groove flooring. Creates a smooth, seamless surface ready for sanding and finishing."
    },
    {
      type: PatternType.BEADED,
      image: "/newbeaded.png",
      desc: "Classic Southern beadboard. Features a decorative bead down the center and edge. Ideal for porch ceilings and wainscoting."
    }
  ];

  return (
    <section id="patterns" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Stock Patterns</h2>
              <p className="text-gray-600 text-lg">
                Precision milled to a 5 1/8" face width. All patterns are tongue & groove for easy blind-nail installation.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} variant="fade-in">
            <a href="#quote-section" className="text-amber-700 font-bold hover:text-amber-900 mt-4 md:mt-0 flex items-center">
              Check Availability &rarr;
            </a>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {patterns.map((p, index) => (
            <ScrollReveal key={p.type} delay={index * 0.1} variant="fade-up">
              <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patterns;