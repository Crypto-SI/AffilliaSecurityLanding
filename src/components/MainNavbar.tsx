'use client';

import Image from 'next/image';
import Link from 'next/link';
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

export function MainNavbar() {
  const pathname = usePathname();
  
  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 ease-in-out bg-primary-dark/75 backdrop-blur-md" id="navbar">
      <div className="mx-auto w-full max-w-6xl flex justify-between items-center p-3 md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/affseclogodarktrans.png" 
              alt="Affillia Security Logo" 
              width={120} 
              height={30} 
              className="mr-2"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/#home" 
            className={cn(
              "font-medium text-shadow-sm hover:text-accent-gold transition-colors relative",
              pathname === '/' && 'text-accent-gold',
              "after:absolute after:block after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-[#B08D57] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-1200"
            )}
          >
            Home
          </Link>
          <Link 
            href="/#about-us" 
            className="font-medium text-shadow-sm hover:text-accent-gold transition-colors relative after:absolute after:block after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-[#B08D57] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-1200"
          >
            About Us
          </Link>
          <Link 
            href="/#services" 
            className="font-medium text-shadow-sm hover:text-accent-gold transition-colors relative after:absolute after:block after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-[#B08D57] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-1200"
          >
            Services
          </Link>
          <Link 
            href="/#why-choose-us" 
            className="font-medium text-shadow-sm hover:text-accent-gold transition-colors relative after:absolute after:block after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-[#B08D57] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-1200"
          >
            Why Choose Us
          </Link>
          <Link 
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "bg-accent-gold hover:bg-white text-primary-dark hover:text-blue-900 font-bold border-2 border-accent-gold"
            )}
          >
            Contact
          </Link>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Menubar className="border-none bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="bg-transparent text-white text-shadow-sm hover:bg-primary-dark/50 data-[state=open]:bg-primary-dark/50 px-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </MenubarTrigger>
              <MenubarContent className="bg-primary-dark/90 backdrop-blur-md border-accent-gold/30 text-white mr-2 min-w-[200px]">
                <MenubarItem className="hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold cursor-pointer group">
                  <Link href="/#home" className="flex w-full text-shadow-sm relative after:absolute after:block after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-[#B08D57] group-hover:after:w-full after:transition-all after:duration-1200">Home</Link>
                </MenubarItem>
                <MenubarItem className="hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold cursor-pointer group">
                  <Link href="/#about-us" className="flex w-full text-shadow-sm relative after:absolute after:block after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-[#B08D57] group-hover:after:w-full after:transition-all after:duration-1200">About Us</Link>
                </MenubarItem>
                <MenubarItem className="hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold cursor-pointer group">
                  <Link href="/#services" className="flex w-full text-shadow-sm relative after:absolute after:block after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-[#B08D57] group-hover:after:w-full after:transition-all after:duration-1200">Services</Link>
                </MenubarItem>
                <MenubarItem className="hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold cursor-pointer group">
                  <Link href="/#why-choose-us" className="flex w-full text-shadow-sm relative after:absolute after:block after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-[#B08D57] group-hover:after:w-full after:transition-all after:duration-1200">Why Choose Us</Link>
                </MenubarItem>
                <MenubarItem className="hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold cursor-pointer group">
                  <Link href="/contact" className="flex w-full text-shadow-sm relative after:absolute after:block after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-[#B08D57] group-hover:after:w-full after:transition-all after:duration-1200">Contact</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  );
} 