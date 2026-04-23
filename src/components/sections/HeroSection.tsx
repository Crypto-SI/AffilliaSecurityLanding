'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PARTICLE_COUNT = 150;

const seededRandom = (seed: number) => {
  const value = (seed * 9301 + 49297) % 233280;
  return value / 233280;
};

const goldDustParticles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const seed = i + 1;

  return {
    height: `${1 + seededRandom(seed * 11) * 5}px`,
    width: `${1 + seededRandom(seed * 13) * 5}px`,
    left: `${seededRandom(seed * 17) * 100}%`,
    top: `${seededRandom(seed * 19) * 85}%`,
    y: -10 - seededRandom(seed * 23) * 20,
    x: seededRandom(seed * 29) * 10 - 5,
    duration: 2 + seededRandom(seed * 31) * 3,
    repeatDelay: seededRandom(seed * 37) * 3,
  };
});

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary-dark text-text-light"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-accent-gold/30" />
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="absolute right-0 top-0 h-1/2 w-1/2 translate-x-1/4 -translate-y-1/4 rounded-bl-full bg-accent-gold opacity-5" />
          <div className="absolute bottom-0 left-0 h-1/2 w-3/4 -translate-x-1/4 translate-y-1/4 rounded-tr-full bg-accent-gold opacity-5" />
        </div>
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-30" />
          {goldDustParticles.map((particle, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full"
              style={{
                height: particle.height,
                width: particle.width,
                backgroundColor: 'rgba(176, 141, 87, 0.6)',
                left: particle.left,
                top: particle.top,
                boxShadow: '0 0 3px rgba(176, 141, 87, 0.5)',
                mixBlendMode: 'color-dodge',
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [0, particle.y],
                x: [0, particle.x],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatDelay: particle.repeatDelay,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-30 mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="order-2 mt-8 md:order-1 md:mt-0 md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Your Security <span className="text-accent-gold">Is Our Priority</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg text-gray-300 md:text-xl">
            Personal protection services for high-net-worth individuals, providing the highest
            level of security while maintaining absolute discretion.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-accent-gold text-primary-dark hover:bg-accent-gold/90'
              )}
            >
              Request Consultation
            </Link>
            <a
              href="#services"
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'border-2 border-accent-gold bg-accent-gold font-bold text-primary-dark hover:bg-white hover:text-blue-900'
              )}
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full max-h-xs w-full max-w-xs rotate-12 rounded-br-3xl rounded-tl-3xl bg-gradient-to-br from-accent-gold/10 to-accent-gold/30" />
              <div className="absolute h-full max-h-xs w-full max-w-xs -rotate-12 rounded-br-3xl rounded-tl-3xl border-2 border-accent-gold/40" />
            </div>

            <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-primary-dark/80 to-primary-dark p-12 shadow-2xl backdrop-blur-sm">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-accent-gold/30 to-primary-dark/50 opacity-30 blur" />
              <div className="relative">
                <Image
                  src="/affseclogolight.png"
                  alt="Affillia Security Logo"
                  width={300}
                  height={80}
                  className="mx-auto mb-6"
                  priority
                />
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-accent-gold">25+</span>
                    <span className="text-sm text-gray-400">Years Experience</span>
                  </div>
                  <div className="h-10 w-px bg-gray-700" />
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-accent-gold">100%</span>
                    <span className="text-sm text-gray-400">Confidentiality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-auto w-full">
          <path
            fill="#F7F7F7"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}

