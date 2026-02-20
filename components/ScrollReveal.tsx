import React from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    variant?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
    delay?: number;
    duration?: number;
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    variant = 'fade-up',
    delay = 0,
    duration = 0.5,
    className = '',
}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const variants = {
        'fade-up': {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        },
        'fade-in': {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        'slide-left': {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        },
        'slide-right': {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants[variant]}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
