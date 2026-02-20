import React from 'react';
import { Factory, Truck, Warehouse, DollarSign } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Factory className="w-10 h-10 text-amber-600" />,
      title: "Milled in Mississippi",
      desc: "Our timber is sourced and milled in the heart of pine country. Kiln-dried to perfection for stability."
    },
    {
      icon: <Warehouse className="w-10 h-10 text-amber-600" />,
      title: "Stocked in Nashville",
      desc: "We truck finished bundles directly to our Nashville distribution hub, bypassing traditional retail markups."
    },
    {
      icon: <Truck className="w-10 h-10 text-amber-600" />,
      title: "Same Day Delivery",
      desc: "We coordinate freight directly to your jobsite or residential driveway. Local same-day delivery options available."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-amber-600" />,
      title: "30% Below Box Stores",
      desc: "We represent a massive value. Our price is typically $0.79/LF compared to $1.08/LF at big box retailers."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">The Direct Advantage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Most lumber travels through three hands before it reaches you. We streamlined the supply chain to bring premium Southern Yellow Pine directly to your project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} variant="fade-up">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-200">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;