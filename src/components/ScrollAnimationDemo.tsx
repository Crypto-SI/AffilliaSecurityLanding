/**
 * @fileoverview Scroll animation demo component
 * @description Demo component showcasing scroll-triggered animations
 */

'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';
import { fadeInUp, scaleUp, staggerContainer, useScrollAnimation, useStaggeredScrollAnimation } from '../lib/animations';

/**
 * ScrollAnimationDemo component props
 */
interface ScrollAnimationDemoProps {
  className?: string;
}

/**
 * ScrollAnimationDemo component
 * Showcases various scroll-triggered animations using the animation utilities
 */
const ScrollAnimationDemo: FC<ScrollAnimationDemoProps> = ({ className = '' }) => {
  // Single element scroll animation
  const [headingRef, headingInView] = useScrollAnimation({ amount: 0.3 });
  
  // Container with staggered children
  const [cardsRef, cardsInView] = useStaggeredScrollAnimation(3, { amount: 0.2 });
  
  // Feature blocks
  const [featuresRef, featuresInView] = useStaggeredScrollAnimation(2, { amount: 0.1 });
  
  return (
    <div className={`scroll-animation-demo ${className} space-y-32 py-8`}>
      {/* Section 1: Heading with scroll trigger */}
      <section className="min-h-[40vh] flex items-center justify-center">
        <motion.h2 
          ref={headingRef}
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Scroll Down to Reveal More Content
        </motion.h2>
      </section>
      
      {/* Section 2: Cards with staggered animation */}
      <section className="min-h-[60vh] flex items-center">
        <motion.div
          ref={cardsRef}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
          variants={staggerContainer}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="bg-white shadow-md rounded-lg p-6"
              variants={fadeInUp}
            >
              <h3 className="font-bold mb-3">Feature {item}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Section 3: Feature blocks */}
      <section className="min-h-[70vh] flex items-center">
        <motion.div
          ref={featuresRef}
          className="w-full space-y-16"
          variants={staggerContainer}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
        >
          <motion.div variants={scaleUp} className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Security Features</h2>
            <p>
              We provide comprehensive security solutions with cutting-edge technology
              to ensure your business stays protected from digital threats.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-3">Advanced Encryption</h3>
              <p>
                Our platform uses state-of-the-art encryption algorithms to protect
                your sensitive data both at rest and in transit.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ScrollAnimationDemo; 