/**
 * @fileoverview Custom hook for scroll-triggered animations
 * @description Provides a wrapper around Framer Motion's useInView hook with 
 * common configuration options for scroll-triggered animations
 */

import { useInView } from 'framer-motion';
import { MutableRefObject, RefObject, useRef } from 'react';
import { useReducedMotionHelper } from './useReducedMotionHelper';

/**
 * Options for configuring the scroll animation behavior
 */
interface UseScrollAnimationOptions {
  /**
   * The amount of element that must be visible before triggering (0-1 or 'some'/'all')
   */
  amount?: number | 'some' | 'all';
  
  /**
   * Whether to trigger the animation only once
   */
  once?: boolean;
  
  /**
   * Margin around the root similar to CSS margin syntax
   */
  margin?: string;
  
  /**
   * Element used as viewport for checking visibility
   */
  root?: RefObject<Element | null>;
  
  /**
   * Initial value before measurement
   */
  initial?: boolean;
}

/**
 * Default options for scroll animations
 */
const defaultOptions: UseScrollAnimationOptions = {
  amount: 0.2,
  once: true,
  margin: '0px',
  initial: false
};

/**
 * Custom hook for creating scroll-triggered animations
 * Wraps Framer Motion's useInView hook with accessibility considerations
 * 
 * @param {UseScrollAnimationOptions} [options] - Configuration options
 * @returns {[MutableRefObject<HTMLElement | null>, boolean]} A tuple containing the ref to attach to the element and whether the element is in view
 * 
 * @example
 * const [ref, isInView] = useScrollAnimation({ amount: 0.5 });
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     initial={{ opacity: 0, y: 50 }}
 *     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
 *   >
 *     Content that animates on scroll
 *   </motion.div>
 * );
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}): [MutableRefObject<HTMLElement | null>, boolean] {
  const shouldReduceMotion = useReducedMotionHelper();
  const ref = useRef<HTMLElement | null>(null);
  
  // Merge default options with provided options
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    // If user prefers reduced motion, always use once: true
    once: shouldReduceMotion ? true : (options.once ?? defaultOptions.once)
  };
  
  // Use Framer Motion's useInView hook with the ref
  const isInView = useInView(ref, {
    amount: mergedOptions.amount,
    once: mergedOptions.once,
    margin: mergedOptions.margin,
    root: mergedOptions.root,
    initial: mergedOptions.initial
  });
  
  // If reduced motion is preferred, always consider elements as "in view"
  return [ref, shouldReduceMotion ? true : isInView];
}

/**
 * Hook to create staggered animations for a group of elements on scroll
 * 
 * @param {number} [count=1] - Number of elements to be staggered
 * @param {UseScrollAnimationOptions} [options] - Configuration options
 * @returns {[MutableRefObject<HTMLElement | null>, boolean]} A tuple containing the ref to attach to the container and whether it's in view
 * 
 * @example
 * const items = [1, 2, 3];
 * const [containerRef, isInView] = useStaggeredScrollAnimation(items.length);
 * 
 * return (
 *   <motion.div
 *     ref={containerRef}
 *     variants={staggerContainer}
 *     initial="hidden"
 *     animate={isInView ? "visible" : "hidden"}
 *   >
 *     {items.map(item => (
 *       <motion.div key={item} variants={fadeInUp}>
 *         {item}
 *       </motion.div>
 *     ))}
 *   </motion.div>
 * );
 */
export function useStaggeredScrollAnimation(
  count: number = 1, 
  options: UseScrollAnimationOptions = {}
): [MutableRefObject<HTMLElement | null>, boolean] {
  return useScrollAnimation(options);
} 