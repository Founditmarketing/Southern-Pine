'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PatternSliderProps {
    image1: string;
    image2: string;
    alt: string;
}

const PatternSlider: React.FC<PatternSliderProps> = ({ image1, image2, alt }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleMouseDown = () => setIsResizing(true);
    const handleMouseUp = () => setIsResizing(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isResizing) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsResizing(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative h-64 w-full overflow-hidden cursor-ew-resize select-none border-b border-gray-100"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
        >
            {/* Background Image (Second Image) */}
            <img
                src={image2}
                alt={`${alt} - View 2`}
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
            />

            {/* Foreground Image (First Image) with clipping */}
            <div
                className="absolute inset-0 h-full w-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <img
                    src={image1}
                    alt={`${alt} - View 1`}
                    className="absolute inset-0 h-full w-full object-cover max-w-none"
                    style={{ width: containerRef.current?.offsetWidth || '100%' }}
                    draggable={false}
                />
            </div>

            {/* Slider Handle/Divider */}
            <div
                className="absolute inset-y-0 z-10 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-colors group-hover:bg-amber-500"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-amber-600 pointer-events-none">
                    <div className="flex space-x-1">
                        <div className="w-0.5 h-3 bg-amber-600 rounded-full"></div>
                        <div className="w-0.5 h-3 bg-amber-600 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-2 left-2 z-20 bg-black/40 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-2 py-0.5 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                Slide to reveal
            </div>
        </div>
    );
};

export default PatternSlider;
