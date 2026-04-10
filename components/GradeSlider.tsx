'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

interface GradeSliderProps {
    images: string[];
    alt: string;
}

const GradeSlider: React.FC<GradeSliderProps> = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isLightboxOpen) return;
            if (e.key === 'ArrowLeft') paginate(-1);
            if (e.key === 'ArrowRight') paginate(1);
            if (e.key === 'Escape') setIsLightboxOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, currentIndex]);

    // Handle body scroll locking
    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isLightboxOpen]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
    };

    return (
        <>
            <div className="relative h-80 rounded-lg overflow-hidden mb-6 shadow-md group">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        onClick={() => setIsLightboxOpen(true)}
                        alt={`${alt} - Image ${currentIndex + 1}`}
                        className="absolute w-full h-full object-cover cursor-zoom-in active:cursor-grabbing"
                    />
                </AnimatePresence>

                {/* Zoom Indicator */}
                <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute top-4 right-4 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                >
                    <Maximize2 size={18} />
                </button>

                {/* Navigation Arrows */}
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    onClick={(e) => {
                        e.stopPropagation();
                        paginate(-1);
                    }}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    onClick={(e) => {
                        e.stopPropagation();
                        paginate(1);
                    }}
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-12"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <button
                            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 lg:p-4 rounded-full backdrop-blur-md transition-all"
                            onClick={(e) => {
                                e.stopPropagation();
                                paginate(-1);
                            }}
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 lg:p-4 rounded-full backdrop-blur-md transition-all"
                            onClick={(e) => {
                                e.stopPropagation();
                                paginate(1);
                            }}
                        >
                            <ChevronRight size={32} />
                        </button>

                        <div className="w-full h-full flex items-center justify-center max-w-7xl mx-auto pointer-events-none">
                            <motion.img
                                key={`lightbox-${currentIndex}`}
                                src={images[currentIndex]}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                alt={`${alt} Full - Image ${currentIndex + 1}`}
                                className="max-w-full max-h-full object-contain shadow-2xl pointer-events-auto"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>

                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 bg-black/20 backdrop-blur-md p-2 rounded-full">
                            {images.map((_, index) => (
                                <button
                                    key={`dot-${index}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default GradeSlider;
