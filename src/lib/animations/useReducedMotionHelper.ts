/**
 * @fileoverview Provides a hook for detecting and respecting user's motion preferences
 * @description This hook wraps Framer Motion's useReducedMotion hook to provide
 * a standardized way to handle reduced motion preferences across the application
 */

import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

/**
 * Custom hook that detects if the user has enabled reduced motion preference.
 * Used to respect user's preference for reduced or no animations.
 * 
 * @returns {boolean} shouldReduceMotion - Whether animations should be reduced or disabled
 * 
 * @example
 * const shouldReduceMotion = useReducedMotionHelper();
 * 
 * // Use in component
 * const animationSettings = shouldReduceMotion 
 *   ? { duration: 0 } // No animation
 *   : { duration: 0.5, ease: "easeOut" }; // Normal animation
 */
export function useReducedMotionHelper(): boolean {
  // Use Framer Motion's hook
  const prefersReducedMotion = useFramerReducedMotion();
  
  // Return false if null (meaning no preference), otherwise return the preference
  return prefersReducedMotion ?? false;
}

/**
 * Returns animation settings based on reduced motion preference.
 * Provides a convenient way to handle transitions conditionally.
 * 
 * @param {Object} fullMotionSettings - Animation settings to use when full motion is enabled
 * @param {Object} reducedMotionSettings - Animation settings to use when reduced motion is preferred
 * @returns {Object} The appropriate animation settings based on user preference
 * 
 * @example
 * const animationConfig = getReducedMotionConfig(
 *   { duration: 0.6, ease: "easeOut" }, // Full motion
 *   { duration: 0 } // Reduced motion
 * );
 */
export function getReducedMotionConfig(
  fullMotionSettings: object, 
  reducedMotionSettings: object = { duration: 0 }
): object {
  const prefersReducedMotion = useFramerReducedMotion();
  
  return prefersReducedMotion ? reducedMotionSettings : fullMotionSettings;
} 