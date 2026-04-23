import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CtaSection() {
  return (
    <section className="bg-accent-gold py-16">
      <div className="mx-auto w-full max-w-6xl px-4 text-center md:px-8">
        <h2 className="mb-6 text-3xl font-bold text-primary-dark md:text-4xl">
          Ready to Enhance Your Security?
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-xl text-primary-dark md:text-2xl">
          Contact us today for a confidential consultation. Your safety is our priority.
        </p>
        <div className="group relative inline-block">
          <div className="absolute -inset-1 animate-pulse rounded-lg bg-gradient-to-r from-primary-dark via-accent-gold to-primary-dark opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'relative rounded-md border-2 border-accent-gold bg-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-accent-gold hover:text-primary-dark'
            )}
          >
            Schedule a Consultation <span className="ml-2">-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

