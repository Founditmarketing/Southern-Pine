import React, { useState, useEffect } from 'react';
import { QuoteFormData, PatternType, GradeType, FinishType } from '../types';
import { Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface QuoteFormProps {
  onSqFtChange: (sqFt: number) => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onSqFtChange }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    pattern: PatternType.NICKEL_GAP,
    grade: GradeType.PREMIUM_KNOTTY,
    finish: FinishType.UNFINISHED,
    squareFootage: '',
    hasForklift: false,
    needsLiftGate: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Notify parent of sq ft changes for the cheat sheet highlighter
  useEffect(() => {
    const num = parseInt(formData.squareFootage.replace(/,/g, ''), 10);
    onSqFtChange(isNaN(num) ? 0 : num);
  }, [formData.squareFootage, onSqFtChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        console.log('Form Submitted successfully');
      } else {
        const errorData = await response.json();
        console.error('Submission failed:', errorData);
        alert('Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-amber-700 text-center h-full flex flex-col justify-center items-center">
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-700" />
        </div>
        <h3 className="text-3xl font-serif text-gray-900 mb-4">Request Received.</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you, {formData.name}. Our team is reviewing your project details (Zip: {formData.zipCode}, {formData.squareFootage} sq ft).
          We will call you at {formData.phone} shortly to verify spans and freight access.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-amber-800 font-semibold hover:underline"
        >
          Start Another Quote
        </button>
      </div>
    );
  }

  return (
    <ScrollReveal>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border-t-4 border-amber-800">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">START YOUR ORDER.</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell via shopping cart. We speak with every customer to verify spans, waste factor, and freight access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name / Company Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-1">Project Zip Code <span className="text-gray-400 font-normal">(Required for freight)</span></label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                placeholder="e.g. 37209"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="h-px bg-gray-200 my-6"></div>

          {/* Product Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="pattern" className="block text-sm font-semibold text-gray-700 mb-1">Pattern Interest</label>
                <div className="relative">
                  <select
                    id="pattern"
                    name="pattern"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none appearance-none"
                    value={formData.pattern}
                    onChange={handleChange}
                  >
                    {Object.values(PatternType).map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="grade" className="block text-sm font-semibold text-gray-700 mb-1">Grade Interest</label>
                <div className="relative">
                  <select
                    id="grade"
                    name="grade"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none appearance-none"
                    value={formData.grade}
                    onChange={handleChange}
                  >
                    {Object.values(GradeType).map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="finish" className="block text-sm font-semibold text-gray-700 mb-1">Finish Interest</label>
              <div className="relative">
                <select
                  id="finish"
                  name="finish"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none appearance-none"
                  value={formData.finish}
                  onChange={handleChange}
                >
                  {Object.values(FinishType).map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="squareFootage" className="block text-sm font-semibold text-gray-700 mb-1">Approx. Square Footage Needed</label>
              <input
                type="number"
                id="squareFootage"
                name="squareFootage"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                placeholder="Total Sq Ft (e.g., 1200)"
                value={formData.squareFootage}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="h-px bg-gray-200 my-6"></div>

          {/* Logistics */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Logistics Check</h3>

            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  name="hasForklift"
                  checked={formData.hasForklift}
                  onChange={handleCheckboxChange}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 transition-all checked:border-amber-600 checked:bg-amber-600 hover:border-amber-500"
                />
                <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity peer-checked:opacity-100 text-white w-3.5 h-3.5" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-gray-700 group-hover:text-gray-900">I have a forklift on site / commercial address.</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  name="needsLiftGate"
                  checked={formData.needsLiftGate}
                  onChange={handleCheckboxChange}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 transition-all checked:border-amber-600 checked:bg-amber-600 hover:border-amber-500"
                />
                <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity peer-checked:opacity-100 text-white w-3.5 h-3.5" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-gray-700 group-hover:text-gray-900">I need a lift-gate delivery (Residential).</span>
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white font-bold py-4 px-6 rounded-md hover:bg-gray-800 focus:ring-4 focus:ring-gray-400 transition-all flex items-center justify-center space-x-2 text-lg tracking-wide uppercase disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>Request Quote & Lead Time</span>
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </ScrollReveal>
  );
};

export default QuoteForm;