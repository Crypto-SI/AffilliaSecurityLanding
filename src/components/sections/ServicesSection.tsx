'use client';

import { motion, type Variants } from 'framer-motion';
import { ServiceCard, type ServiceCardData } from './ServiceCard';

const springTransition = {
  duration: 2.5,
  ease: 'easeInOut',
  type: 'spring',
  stiffness: 20,
  damping: 15,
  bounce: 0.2,
} as const;

const serviceVariants: Variants[] = [
  {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: springTransition },
  },
  {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ...springTransition, delay: 0.5 } },
  },
  {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { ...springTransition, delay: 1 } },
  },
];

const services: ServiceCardData[] = [
  {
    title: 'Personal Protection',
    imageSrc: '/personalprotection.png',
    imageAlt: 'Personal Protection',
    description:
      'Tailored close protection services for high-net-worth individuals, executives, and their families. Our protection specialists blend seamlessly into your lifestyle while providing vigilant security.',
    features: ['Discrete bodyguard services', 'Travel security planning', 'Event security management'],
    variants: serviceVariants[0],
  },
  {
    title: 'Residential Security',
    imageSrc: '/residential.png',
    imageAlt: 'Residential Security',
    description:
      'Comprehensive security solutions for luxury residences and estates, designed to protect your home and loved ones while maintaining privacy and comfort.',
    features: [
      'Property risk assessments',
      'Stationed security personnel',
      'Advanced technical security systems',
    ],
    variants: serviceVariants[1],
  },
  {
    title: 'Risk Assessment',
    imageSrc: '/risk.png',
    imageAlt: 'Risk Assessment',
    description:
      'Proactive threat assessment and security planning to identify vulnerabilities and develop strategies for mitigating risks specific to high-profile individuals.',
    features: ['Comprehensive vulnerability analysis', 'Tailored security protocols', 'Regular security audits'],
    variants: serviceVariants[2],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold text-accent-gold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Our Premium Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.6 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

