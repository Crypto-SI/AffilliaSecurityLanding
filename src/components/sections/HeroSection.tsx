import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useReducedMotionHelper } from '@/lib/animations';

const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotionHelper();
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for interactive animation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate normalized mouse position (0 to 1)
    const normalizedX = clientX / innerWidth;
    const normalizedY = clientY / innerHeight;
    
    setMousePosition({ x: normalizedX, y: normalizedY });
  };

  // Start the animation on component mount
  useEffect(() => {
    controls.start('animate');
  }, [controls]);
  
  // Logo shield animation variants with advanced keyframes
  const logoShieldVariants: Variants = {
    initial: { 
      y: 0, 
      rotate: 0,
      filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2))'
    },
    animate: { 
      y: shouldReduceMotion ? 0 : [0, -10, -5, -15, -10, 0],
      rotate: shouldReduceMotion ? 0 : [0, 1, 0.5, -0.5, -1, 0],
      filter: [
        'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2))',
        'drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.3))',
        'drop-shadow(0px 12px 17px rgba(0, 0, 0, 0.25))',
        'drop-shadow(0px 18px 25px rgba(0, 0, 0, 0.35))',
        'drop-shadow(0px 14px 20px rgba(0, 0, 0, 0.28))',
        'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2))'
      ],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1] // Timing points for keyframes
      }
    }
  };

  // Hero text animation variants
  const heroTextVariants: Variants = {
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

  // Container variants for staggered animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Calculate additional rotation based on mouse position
  const additionalRotateX = mousePosition.y * 5 - 2.5; // -2.5 to 2.5 degrees
  const additionalRotateY = mousePosition.x * 5 - 2.5; // -2.5 to 2.5 degrees

  return (
    <section 
      className="relative w-full min-h-[90vh] flex items-center justify-center py-16 px-4"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Hero Text Content */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={heroTextVariants}
          >
            Expert Security for <span className="text-primary">Every Threat</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-muted-foreground"
            variants={heroTextVariants}
          >
            Comprehensive security solutions tailored to your needs. We protect what matters most with cutting-edge technology and expert personnel.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={heroTextVariants}
          >
            <motion.button
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="bg-transparent border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Logo Shield Animation */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            initial="initial"
            animate={controls}
            variants={logoShieldVariants}
            style={{
              rotateX: additionalRotateX,
              rotateY: additionalRotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            className="relative"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <Image
              src="/affseclogodarktrans.png"
              alt="Affiliasecurity Logo Shield"
              width={400}
              height={400}
              className="drop-shadow-2xl"
              priority
            />

            {/* Subtle glow effect that follows the animation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/10 blur-2xl -z-10"
              animate={{
                opacity: [0.5, 0.7, 0.5],
                scale: [0.8, 0.85, 0.8],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 