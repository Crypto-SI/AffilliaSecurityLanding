'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';

export interface ServiceCardData {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  features: string[];
  variants: Variants;
}

export function ServiceCard({ service }: { service: ServiceCardData }) {
  return (
    <motion.article
      className="overflow-hidden rounded-lg border border-accent-gold bg-white shadow-lg"
      variants={service.variants}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 10px 30px rgba(176, 141, 87, 0.2)',
        transition: { duration: 0.8 },
      }}
    >
      <div className="relative bg-primary-dark px-6 py-5">
        <h3 className="text-center text-2xl font-bold text-accent-gold">
          {service.title}
        </h3>
      </div>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="mb-4 text-gray-700">{service.description}</p>
        <ul className="space-y-2 text-gray-700">
          {service.features.map((feature) => (
            <li className="flex items-center" key={feature}>
              <Check className="mr-2 size-5 shrink-0 text-accent-gold" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

