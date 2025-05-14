/**
 * @fileoverview Collection of reusable animation variants for Framer Motion
 * @description This file contains predefined animation variants that can be used 
 * across the application for consistent animations. Import these variants and use
 * them with Framer Motion's `variants` prop.
 */

import { Variants } from 'framer-motion';
import { getReducedMotionConfig } from './useReducedMotionHelper';

/**
 * Fade in animation variant
 * @type {Variants}
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/**
 * Fade in animation variant with a slight upward movement
 * @type {Variants}
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/**
 * Fade in animation variant with a slight downward movement
 * @type {Variants}
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/**
 * Staggered container variant for child elements
 * @type {Variants}
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

/**
 * Scale up animation variant
 * @type {Variants}
 */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

/**
 * Hover animation variant for buttons and interactive elements
 * @type {Variants}
 */
export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.98 }
};

/**
 * Animated underline for navigation links
 * @type {Variants}
 */
export const navLinkUnderline: Variants = {
  initial: { scaleX: 0 },
  hover: { 
    scaleX: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

/**
 * Breathing/pulsing animation for elements that need attention
 * @type {Variants}
 */
export const breathe: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

/**
 * Subtle floating animation 
 * @type {Variants}
 */
export const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

/**
 * Subtle rotation animation
 * @type {Variants}
 */
export const rotate: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

/**
 * Combined float and rotate animation
 * @type {Variants}
 */
export const floatAndRotate: Variants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -10, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  }
}; 