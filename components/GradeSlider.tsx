'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GradeSliderProps {
    images: string[];
    alt: string;
}

const GradeSlider: React.FC<GradeSliderProps> = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

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
                    alt={`${alt} - Image ${currentIndex + 1}`}
                    className="absolute w-full h-full object-cover cursor-grab active:cursor-grabbing"
                />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                onClick={() => paginate(-1)}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                onClick={() => paginate(1)}
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default GradeSlider;
