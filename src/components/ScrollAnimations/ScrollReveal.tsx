'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

// Variants for different animation types
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Reusable Scroll Reveal Wrapper
export const ScrollReveal = ({ 
  children, 
  variant = 'fadeIn',
  className = '',
  triggerOnce = true 
}: {
  children: React.ReactNode,
  variant?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleUp',
  className?: string,
  triggerOnce?: boolean
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: triggerOnce });

  const getVariants = () => {
    switch(variant) {
      case 'slideInLeft': return slideInLeftVariants;
      case 'slideInRight': return slideInRightVariants;
      case 'scaleUp': return scaleUpVariants;
      default: return fadeInVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger Children Animation Wrapper
export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerChildren = 0.2 
}: {
  children: React.ReactNode,
  className?: string,
  staggerChildren?: number
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerChildren
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Export variants for use in other components if needed
export { 
  fadeInVariants, 
  slideInLeftVariants, 
  slideInRightVariants, 
  scaleUpVariants 
};