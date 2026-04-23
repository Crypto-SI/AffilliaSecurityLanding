import Image from 'next/image';
import Link from 'next/link';
import { legalNavItems } from './navigation';

const COPYRIGHT_YEAR = 2026;

export function SiteFooter() {
  return (
    <footer className="bg-primary-dark py-12 text-text-light">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="mb-10 flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <Image
              src="/affseclogodarktrans.png"
              alt="Affillia Security Logo"
              width={180}
              height={50}
            />
          </div>
          <nav className="flex flex-wrap justify-center gap-8" aria-label="Footer navigation">
            {legalNavItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="transition-colors hover:text-accent-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p>&copy; {COPYRIGHT_YEAR} Affillia Security. All rights reserved.</p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <Link href="/privacy" className="transition-colors hover:text-accent-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-accent-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

