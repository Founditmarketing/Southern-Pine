import React from 'react';
import { PatternType } from '../types';
import ScrollReveal from './ScrollReveal';
import PatternSlider from './PatternSlider';

const Patterns: React.FC = () => {
  const patterns = [
    {
      type: PatternType.NICKEL_GAP,
      image: "/Nickel Gap Shiplap pic 2.png",
      image2: "/Nickel Gap Shiplap pic.png",
      desc: "A modern classic. Features a clean 1/8\" gap between boards for sharp, consistent shadow lines. Perfect for walls and ceilings.",
      stackedLayout: true,
    },
    {
      type: PatternType.V_GROOVE,
      image: "/V Groove pic 2.png",
      image2: "/V Groove pic.png",
      desc: "Our classic tongue and groove pattern. Called 116/122 in the lumber industry, our pattern is reversible. Center V on one side and V Groove on the other side.",
      stackedLayout: true,
    },
    {
      type: PatternType.FLOORING,
      image: "/Flooring pic 2.png",
      image2: "/Flooring pic.png",
      desc: "Durable, center-matched tongue and groove flooring. Creates a smooth, seamless surface ready for sanding and finishing.",
      stackedLayout: true,
    },
    {
      type: PatternType.BEADED,
      image: "/Beaded Ceiling pic 2.png",
      image2: "/Beaded Ceiling pic.png",
      desc: "Classic Southern beadboard. Features a decorative bead down the center and edge. Ideal for porch ceilings and wainscoting.",
      stackedLayout: true,
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
              {p.stackedLayout ? (
                /* Nickel Gap Shiplap: photo above, description, photo below */
                <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  {/* Top photo */}
                  <div className="h-64 w-full overflow-hidden border-b border-gray-100">
                    <img
                      src={p.image}
                      alt={`${p.type} - installed`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Description */}
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{p.type}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  {/* Bottom photo */}
                  <div className="h-64 w-full overflow-hidden border-t border-gray-100">
                    <img
                      src={p.image2}
                      alt={`${p.type} - profile`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                /* All other patterns: slider on top, description below */
                <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  <PatternSlider
                    image1={p.image}
                    image2={p.image2}
                    alt={p.type}
                  />
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{p.type}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patterns;
