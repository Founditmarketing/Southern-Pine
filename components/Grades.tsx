import React from 'react';
import ScrollReveal from './ScrollReveal';

const Grades: React.FC = () => {
  return (
    <section id="grading" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Choose Your Grade</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We separate our lumber into two distinct aesthetic grades. Structural integrity is identical; the difference is purely visual.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Premium Knotty */}
          <ScrollReveal delay={0.2} variant="slide-right">
            <div className="flex flex-col">
              <div className="relative h-80 rounded-lg overflow-hidden mb-6 shadow-md">
                <img
                  src="/newpremiumknotty.png"
                  alt="Premium Knotty Grade"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-900/90 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Best Seller
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Premium Knotty</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our most popular option. Characterized by sound, tight knots and beautiful grain patterns. This grade captures the authentic, rustic warmth of Southern Yellow Pine. Perfect for farmhouses, cabins, and textured accent walls.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Contains sound knots</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Rich grain variation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Traditional aesthetic</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Clear Grade */}
          <ScrollReveal delay={0.4} variant="slide-left">
            <div className="flex flex-col">
              <div className="relative h-80 rounded-lg overflow-hidden mb-6 shadow-md">
                <img
                  src="/newcleargrade.png"
                  alt="Clear Grade"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gray-900/90 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Modern Choice
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Clear Grade (C & Better)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Virtually knot-free. This grade offers a sleek, contemporary look with long, clean grain lines. While small pin knots may occasionally appear, the overall appearance is smooth and uniform. Ideal for modern interiors and painted finishes.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>99% Knot Free</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>Best for Staining, Whitewashing, or Pickling</li>

              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Grades;