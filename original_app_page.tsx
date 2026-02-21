'use client';

import React, { useState } from 'react';
import QuoteForm from '@/components/QuoteForm';
import CoverageCheatSheet from '@/components/CoverageCheatSheet';
import Footer from '@/components/Footer';
import CallButton from '@/components/CallButton';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Patterns from '@/components/Patterns';
import Grades from '@/components/Grades';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import { Menu, X } from 'lucide-react';

export default function Home() {
    const [currentSqFt, setCurrentSqFt] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
            {/* Header */}
            <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 transition-all">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#" className="text-2xl font-serif font-bold tracking-tight text-gray-900">
                        Southern Pine Depot
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        <a href="#patterns" className="hover:text-amber-700 transition-colors">Inventory</a>
                        <a href="#grading" className="hover:text-amber-700 transition-colors">Grading</a>
                        <a href="#faq" className="hover:text-amber-700 transition-colors">FAQ</a>
                        <a href="#quote-section" className="text-amber-700 border-b-2 border-amber-700 pb-1">Get a Quote</a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
                        <nav className="flex flex-col p-4 space-y-4 text-center">
                            <a
                                href="#patterns"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-600 font-semibold uppercase tracking-wider hover:text-amber-700 py-2"
                            >
                                Inventory
                            </a>
                            <a
                                href="#grading"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-600 font-semibold uppercase tracking-wider hover:text-amber-700 py-2"
                            >
                                Grading
                            </a>
                            <a
                                href="#faq"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-600 font-semibold uppercase tracking-wider hover:text-amber-700 py-2"
                            >
                                FAQ
                            </a>
                            <a
                                href="#quote-section"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-amber-700 text-white font-bold py-3 rounded uppercase tracking-wider"
                            >
                                Get a Quote
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            <main className="flex-grow">
                <Hero />
                <Process />
                <Patterns />
                <Grades />
                <Gallery />

                {/* FAQ Section */}
                <FAQ />

                {/* Section 7: The Quote Form */}
                <div id="quote-section" className="py-20 bg-gray-100 border-t border-gray-200">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Start Your Order</span>
                            <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Request a Quote</h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                                Ready to get started? Fill out the form below. We'll check our inventory, calculate the most efficient shipping route, and get back to you with a total delivered price.
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                                {/* Column 1: The Form */}
                                <div className="lg:col-span-2">
                                    <QuoteForm onSqFtChange={setCurrentSqFt} />
                                </div>

                                {/* Column 2: Sticky Coverage Cheat Sheet */}
                                <div className="lg:col-span-1 hidden lg:block">
                                    <CoverageCheatSheet currentSqFt={currentSqFt} />
                                </div>

                                {/* Mobile View for Cheat Sheet */}
                                <div className="lg:hidden block">
                                    <CoverageCheatSheet currentSqFt={currentSqFt} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
            <CallButton />
        </div>
    );
}
