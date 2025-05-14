'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/src/lib/utils';
import { buttonVariants } from '@/src/components/ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/src/components/ui/menubar';
import { motion } from 'framer-motion';
import { navLinkUnderline } from '@/src/lib/animations';
import { handleSmoothScroll } from '@/src/lib/utils/smoothScroll';

export function MainNavbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('home');
  
  // Navbar scroll offset - how much space to leave above the section when scrolling
  const NAVBAR_SCROLL_OFFSET = 100;
  
  // Force the activeSection to 'home' when the component first mounts
  useEffect(() => {
    if (pathname === '/') {
      setActiveSection('home');
    }
  }, [pathname]);
  
  // Custom link component with Framer Motion animation
  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
    // Extract ID from href for active state checking
    const id = href.includes('#') ? href.split('#')[1] : '';
    const isActive = 
      (pathname === '/' && id === activeSection) || 
      (pathname === '/' && href === '/#home' && activeSection === '') || 
      pathname === href;
    
    // Determine if we're on a page other than the homepage
    const isNotHomePage = pathname !== '/';
    
    return (
      <a 
        href={href} 
        className={cn(
          "font-medium text-shadow-sm hover:text-accent-gold transition-colors relative",
          isActive && 'text-accent-gold',
          className
        )}
        onClick={(e) => {
          e.preventDefault();
          if (href.includes('#')) {
            if (isNotHomePage) {
              // If on another page, redirect to homepage first, then scroll to section
              window.location.href = '/';
              // After the redirect, we need to scroll to the section
              setTimeout(() => {
                window.location.hash = href.split('#')[1];
              }, 100);
            } else {
              // On homepage, just smooth scroll
              handleSmoothScroll(e, href.split('#')[1], NAVBAR_SCROLL_OFFSET);
              // Update active section when link is clicked
              setActiveSection(href.split('#')[1]);
            }
          } else {
            // For non-hash links, use regular navigation
            window.location.href = href;
          }
        }}
      >
        {children}
        <motion.div
          className="absolute block w-full h-[2px] bottom-[-4px] left-0 bg-[#B08D57]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </a>
    );
  };
  
  // Scrolls to top of page 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
  };
  
  return (
    <motion.header 
      className="fixed top-0 z-50 w-full bg-primary-dark/75 backdrop-blur-md" 
      id="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-6xl flex justify-between items-center p-3 md:px-6">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={scrollToTop}
          style={{ cursor: 'pointer' }}
        >
          <Image 
            src="/affseclogodarktrans.png" 
            alt="Affillia Security Logo" 
            width={120} 
            height={30} 
            className="mr-2"
          />
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/#home">Home</NavLink>
          <NavLink href="/#about-us">About Us</NavLink>
          <NavLink href="/#services">Services</NavLink>
          <NavLink href="/#why-choose-us">Why Choose Us</NavLink>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <a 
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "bg-accent-gold hover:bg-white text-primary-dark hover:text-blue-900 font-bold border-2 border-accent-gold"
              )}
            >
              Contact
            </a>
          </motion.div>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Menubar className="border-none bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="bg-transparent text-white text-shadow-sm hover:bg-primary-dark/50 data-[state=open]:bg-primary-dark/50 px-3">
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              </MenubarTrigger>
              <MenubarContent className="bg-primary-dark/90 backdrop-blur-md border-accent-gold/30 text-white mr-2 min-w-[200px]">
                <MenubarItem className="hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold cursor-pointer group">
                  <a 
                    href="#" 
                    className="flex w-full text-shadow-sm relative"
                    onClick={(e) => {
                      e.preventDefault();
                      if (pathname !== '/') {
                        // If not on homepage, redirect to homepage first with proper URL format
                        window.location.href = '/';
                        // After the redirect, we need to scroll to the section
                        setTimeout(() => {
                          window.location.hash = 'home';
                        }, 100);
                      } else {
                        handleSmoothScroll(e, 'home', NAVBAR_SCROLL_OFFSET);
                        setActiveSection('home');
                      }
                    }}
                  >
                    Home
                    <motion.div 
                      className="absolute block h-[2px] bottom-[-2px] left-0 bg-[#B08D57]" 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeSection === 'home' ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </a>
                </MenubarItem>
                <MenubarItem className="hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold cursor-pointer group">
                  <a 
                    href="#" 
                    className="flex w-full text-shadow-sm relative"
                    onClick={(e) => {
                      e.preventDefault();
                      if (pathname !== '/') {
                        // If not on homepage, redirect to homepage first with proper URL format
                        window.location.href = '/';
                        // After the redirect, we need to scroll to the section
                        setTimeout(() => {
                          window.location.hash = 'about-us';
                        }, 100);
                      } else {
                        handleSmoothScroll(e, 'about-us', NAVBAR_SCROLL_OFFSET);
                        setActiveSection('about-us');
                      }
                    }}
                  >
                    About Us
                    <motion.div 
                      className="absolute block h-[2px] bottom-[-2px] left-0 bg-[#B08D57]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeSection === 'about-us' ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </a>
                </MenubarItem>
                <MenubarItem className="hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold cursor-pointer group">
                  <a 
                    href="#" 
                    className="flex w-full text-shadow-sm relative"
                    onClick={(e) => {
                      e.preventDefault();
                      if (pathname !== '/') {
                        // If not on homepage, redirect to homepage first with proper URL format
                        window.location.href = '/';
                        // After the redirect, we need to scroll to the section
                        setTimeout(() => {
                          window.location.hash = 'services';
                        }, 100);
                      } else {
                        handleSmoothScroll(e, 'services', NAVBAR_SCROLL_OFFSET);
                        setActiveSection('services');
                      }
                    }}
                  >
                    Services
                    <motion.div 
                      className="absolute block h-[2px] bottom-[-2px] left-0 bg-[#B08D57]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeSection === 'services' ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </a>
                </MenubarItem>
                <MenubarItem className="hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold cursor-pointer group">
                  <a 
                    href="#" 
                    className="flex w-full text-shadow-sm relative"
                    onClick={(e) => {
                      e.preventDefault();
                      if (pathname !== '/') {
                        // If not on homepage, redirect to homepage first with proper URL format
                        window.location.href = '/';
                        // After the redirect, we need to scroll to the section
                        setTimeout(() => {
                          window.location.hash = 'why-choose-us';
                        }, 100);
                      } else {
                        handleSmoothScroll(e, 'why-choose-us', NAVBAR_SCROLL_OFFSET);
                        setActiveSection('why-choose-us');
                      }
                    }}
                  >
                    Why Choose Us
                    <motion.div 
                      className="absolute block h-[2px] bottom-[-2px] left-0 bg-[#B08D57]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeSection === 'why-choose-us' ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </a>
                </MenubarItem>
                <MenubarItem className="hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold cursor-pointer group">
                  <a href="/contact" className="flex w-full text-shadow-sm relative">
                    Contact
                    <motion.div 
                      className="absolute block h-[2px] bottom-[-2px] left-0 bg-[#B08D57]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </motion.header>
  );
} 