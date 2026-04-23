'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { cn } from '@/lib/utils';
import { handleSmoothScroll } from '@/lib/utils/smoothScroll';
import { homeNavItems } from './navigation';

const NAVBAR_SCROLL_OFFSET = 100;

export function SiteNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    if (pathname === '/') {
      setActiveSection(window.location.hash.replace('#', '') || 'home');
    }
  }, [pathname]);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();

    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      return;
    }

    handleSmoothScroll(event, sectionId, NAVBAR_SCROLL_OFFSET);
    setActiveSection(sectionId);
  };

  const handleLogoClick = () => {
    if (pathname !== '/') {
      router.push('/#home');
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '#home');
    setActiveSection('home');
  };

  return (
    <motion.header
      className="fixed top-0 z-50 w-full bg-primary-dark/75 backdrop-blur-md"
      id="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-3 md:px-6">
        <button
          aria-label="Go to home"
          className="flex cursor-pointer items-center"
          onClick={handleLogoClick}
          type="button"
        >
          <motion.span
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image
              src="/affseclogodarktrans.png"
              alt="Affillia Security Logo"
              width={120}
              height={30}
              className="mr-2"
              priority
            />
          </motion.span>
        </button>

        <nav className="hidden items-center space-x-6 md:flex" aria-label="Primary navigation">
          {homeNavItems.map((item) => {
            const isActive = pathname === '/' && activeSection === item.sectionId;

            return (
              <a
                href={item.href}
                key={item.href}
                className={cn(
                  'text-shadow-sm relative font-medium transition-colors hover:text-accent-gold',
                  isActive && 'text-accent-gold'
                )}
                onClick={(event) => handleSectionClick(event, item.sectionId)}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-[-4px] left-0 block h-[2px] w-full bg-accent-gold"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </a>
            );
          })}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: 'default', size: 'sm' }),
                'border-2 border-accent-gold bg-accent-gold font-bold text-primary-dark hover:bg-white hover:text-blue-900'
              )}
            >
              Contact
            </Link>
          </motion.div>
        </nav>

        <div className="md:hidden">
          <Menubar className="border-none bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="text-shadow-sm bg-transparent px-3 text-white hover:bg-primary-dark/50 data-[state=open]:bg-primary-dark/50">
                <Menu className="size-6" aria-hidden="true" />
              </MenubarTrigger>
              <MenubarContent className="mr-2 min-w-[200px] border-accent-gold/30 bg-primary-dark/90 text-white backdrop-blur-md">
                {homeNavItems.map((item) => (
                  <MenubarItem
                    key={item.href}
                    className="cursor-pointer hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold"
                    asChild
                  >
                    <a
                      href={item.href}
                      className="text-shadow-sm flex w-full"
                      onClick={(event) => handleSectionClick(event, item.sectionId)}
                    >
                      {item.label}
                    </a>
                  </MenubarItem>
                ))}
                <MenubarItem
                  className="cursor-pointer hover:bg-primary-dark/50 hover:text-accent-gold focus:bg-primary-dark/50 focus:text-accent-gold"
                  asChild
                >
                  <Link href="/contact" className="text-shadow-sm flex w-full">
                    Contact
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </motion.header>
  );
}

