'use client';

import { CalendarDays, LockKeyhole, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Elite Experience',
    description:
      'Our personnel come from elite military and law enforcement backgrounds with extensive training in VIP protection.',
    Icon: ShieldCheck,
  },
  {
    title: 'Tailored Approach',
    description:
      'We develop customized security plans based on your specific needs, lifestyle, and risk profile.',
    Icon: CalendarDays,
  },
  {
    title: 'Absolute Discretion',
    description:
      'We maintain the highest standards of confidentiality and privacy for our high-net-worth clients.',
    Icon: LockKeyhole,
  },
  {
    title: 'Global Capability',
    description:
      'Our network extends worldwide, providing seamless security for international travel and global operations.',
    Icon: Zap,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.5,
      ease: 'easeInOut',
    },
  },
};

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-primary-dark py-20 text-text-light">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Why Choose <span className="text-accent-gold">Affillia Security</span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.6 } },
          }}
        >
          {reasons.map(({ title, description, Icon }) => (
            <motion.article
              key={title}
              className="rounded-lg border border-accent-gold bg-primary-dark/50 p-6 text-center transition-all hover:bg-primary-dark/70"
              variants={cardVariants}
            >
              <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-accent-gold/20">
                <Icon className="size-10 text-accent-gold" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-bold">{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

