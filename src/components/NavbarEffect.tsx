'use client';

import { useEffect } from 'react';

export default function NavbarEffect() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
      // Set initial state
      if (window.scrollY > 0) {
        navbar.classList.add('bg-primary-dark', 'shadow-lg', 'text-text-light');
      } else {
        navbar.classList.add('bg-primary-dark/80', 'backdrop-blur-sm', 'text-text-light');
      }
      
      // Add scroll event listener
      const handleScroll = () => {
        if (window.scrollY > 50) {
          navbar.classList.remove('bg-primary-dark/80', 'backdrop-blur-sm');
          navbar.classList.add('bg-primary-dark', 'shadow-lg');
          navbar.classList.add('py-2');
        } else {
          navbar.classList.remove('bg-primary-dark', 'shadow-lg', 'py-2');
          navbar.classList.add('bg-primary-dark/80', 'backdrop-blur-sm');
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  return null;
} 