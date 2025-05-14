/**
 * @fileoverview Animation demo component
 * @description Demo component showcasing animations created with Framer Motion
 */

'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';
import { fadeIn, fadeInUp, floatAndRotate } from '../lib/animations';

/**
 * AnimationDemo component props
 */
interface AnimationDemoProps {
  className?: string;
}

/**
 * AnimationDemo component
 * Showcases various animations using the animation utilities
 */
const AnimationDemo: FC<AnimationDemoProps> = ({ className = '' }) => {
  return (
    <div className={`animation-demo ${className}`}>
      <h2 className="text-2xl font-bold mb-4">Animation Demo</h2>
      
      {/* Container with staggered children */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {/* Logo/Icon with float and rotate animation */}
        <div className="flex justify-center">
          <motion.div
            className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center"
            initial="initial"
            animate="animate"
            variants={floatAndRotate}
          >
            <span className="text-white text-3xl font-bold">AS</span>
          </motion.div>
        </div>
        
        {/* Headline with fade in up animation */}
        <motion.h3
          className="text-xl font-semibold text-center"
          variants={fadeInUp}
        >
          Secure Your Digital Assets
        </motion.h3>
        
        {/* Description with fade in animation */}
        <motion.p
          className="text-center max-w-md mx-auto"
          variants={fadeIn}
        >
          Our security solutions provide comprehensive protection for your valuable digital assets. 
          Trust us to safeguard what matters most to your business.
        </motion.p>
        
        {/* Button with hover animation */}
        <div className="flex justify-center">
          <motion.button
            className="px-6 py-2 bg-blue-600 text-white rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimationDemo; 