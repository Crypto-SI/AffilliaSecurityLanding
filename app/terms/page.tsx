import Link from 'next/link';
import { MainNavbar } from '@/src/components/MainNavbar';
import Image from 'next/image';
import { cn } from "@/src/lib/utils";

export const metadata = {
  title: 'Terms of Service | Affillia Security',
  description: 'Terms of Service for Affillia Security services.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <MainNavbar />

      {/* Add padding for the fixed header */}
      <div className="h-16 md:h-20"></div>

      {/* Terms of Service Header */}
      <section className="bg-primary-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of <span className="text-accent-gold">Service</span>
            </h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="max-w-none bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-6">
              Welcome to Affillia Security. These Terms of Service ("Terms") govern your use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              2. Service Description
            </h2>
            <p className="text-gray-700 mb-6">
              Affillia Security provides personal protection and security services for high-net-worth individuals and their families. Our services include but are not limited to personal protection, residential security, and risk assessment.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              3. Client Confidentiality
            </h2>
            <p className="text-gray-700 mb-6">
              We take client confidentiality extremely seriously. All information shared with Affillia Security is treated with the highest level of discretion and security. We implement strict protocols to protect client identity and information.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              4. Service Agreements
            </h2>
            <p className="text-gray-700 mb-6">
              All services provided by Affillia Security are subject to a formal service agreement. These agreements outline the specific scope of work, duration, obligations of both parties, and fee structure. Service agreements take precedence over these general Terms in case of any conflict.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              5. Payment Terms
            </h2>
            <p className="text-gray-700 mb-6">
              Payment terms are outlined in individual service agreements. Standard payment terms require an initial deposit with the balance due according to the schedule specified in the agreement. We accept various payment methods as outlined in your service agreement.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-6">
              While Affillia Security strives to provide the highest level of protection, we cannot guarantee absolute security in all circumstances. Our liability is limited as specified in individual service agreements and applicable law.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              7. Termination
            </h2>
            <p className="text-gray-700 mb-6">
              Either party may terminate services according to the terms outlined in the service agreement. Early termination may be subject to fees as specified in your agreement.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              8. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-6">
              Affillia Security reserves the right to modify these Terms at any time. Any changes will be effective upon posting the updated Terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              9. Governing Law
            </h2>
            <p className="text-gray-700 mb-6">
              These Terms are governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in the United Kingdom.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              10. Contact Us
            </h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms, please contact us at{' '}
              <Link href="mailto:legal@affilliasecurity.com" className="text-accent-gold hover:underline">
                legal@affilliasecurity.com
              </Link>{' '}
              or through our{' '}
              <Link href="/contact" className="text-accent-gold hover:underline">
                contact page
              </Link>.
            </p>

            <div className="mt-10 pt-10 border-t border-gray-200">
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-text-light py-12 mt-auto">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="mb-6 md:mb-0">
              <Image 
                src="/affseclogodarktrans.png" 
                alt="Affillia Security Logo" 
                width={180} 
                height={50} 
              />
            </div>
            <nav className="flex flex-wrap justify-center gap-8">
              <Link href="/#home" className="hover:text-accent-gold transition-colors">Home</Link>
              <Link href="/#about-us" className="hover:text-accent-gold transition-colors">About Us</Link>
              <Link href="/#services" className="hover:text-accent-gold transition-colors">Services</Link>
              <Link href="/#why-choose-us" className="hover:text-accent-gold transition-colors">Why Choose Us</Link>
              <Link href="/contact" className="hover:text-accent-gold transition-colors">Contact</Link>
            </nav>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Affillia Security. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-4">
              <Link href="/privacy" className="hover:text-accent-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 