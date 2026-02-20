import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do I have to live in Nashville to order?",
      answer: "No! While our distribution hub is in Nashville, TN, we ship nationwide. We have competitive freight rates to the entire Southeast and Midwest. If you are local, you are welcome to pick up your order."
    },
    {
      question: "How does 'Same Day Delivery' work?",
      answer: "For orders within a 100-mile radius of Nashville, we can often arrange hot-shot delivery for in-stock items on the same day if ordered before 10 AM. For LTL freight further out, typical transit times are 2-4 days."
    },
    {
      question: "Why is your price so much lower than box stores?",
      answer: "We are mill-direct. Traditional lumber goes from Mill -> Broker -> Wholesaler -> Retailer -> You. We cut out the middle three steps. You pay for the wood, not the markups. ($0.79/LF vs $1.08/LF)"
    },
    {
      question: "Do I need a forklift to unload?",
      answer: "For large orders (2+ bundles), a forklift is highly recommended. However, for residential deliveries, we can arrange a 'Lift Gate' service where the truck driver lowers the pallet to the ground for you."
    },
    {
      question: "What is the difference between Premium Knotty and Clear?",
      answer: "Structural integrity is identical. 'Premium Knotty' has sound, tight knots for a rustic farmhouse look. 'Clear Grade' is 99% knot-free for a modern, sleek appearance or if you plan to paint the material."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-10 h-10 text-amber-600" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Common questions about shipping, grading, and our process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50"
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;