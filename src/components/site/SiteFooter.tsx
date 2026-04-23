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
        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 text-center md:flex-row md:text-left">
          <p>&copy; {COPYRIGHT_YEAR} Affillia Security. All rights reserved.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex gap-4">
              <Link href="/privacy" className="transition-colors hover:text-accent-gold">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-accent-gold">
                Terms of Service
              </Link>
            </div>
            <a
              href="https://webarastudio.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Made by WebAra Studio"
              className="transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-gold"
            >
              <Image
                src="/webarabadge.png"
                alt="Made by WebAra Studio"
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
