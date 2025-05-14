import Link from 'next/link';
import { MainNavbar } from '@/src/components/MainNavbar';
import Image from 'next/image';
import { cn } from "@/src/lib/utils";

export const metadata = {
  title: 'Privacy Policy | Affillia Security',
  description: 'Privacy Policy for Affillia Security services.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <MainNavbar />

      {/* Add padding for the fixed header */}
      <div className="h-16 md:h-20"></div>

      {/* Privacy Policy Header */}
      <section className="bg-primary-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-accent-gold">Policy</span>
            </h1>
            <p className="text-xl text-gray-300">
              How we handle and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="max-w-none bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-6">
              At Affillia Security, we take your privacy seriously. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you use our website or services. By using our services, you consent to the practices described in this policy.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 mb-6">
              We collect information that you provide directly to us, such as:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Contact information (address, location details)</li>
              <li>Service-related information (security requirements, personal schedules)</li>
              <li>Communication records between you and our team</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We may also collect technical information when you visit our website, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and interaction patterns</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-6">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>To provide and customize our security services to your specific needs</li>
              <li>To communicate with you regarding our services</li>
              <li>To conduct security assessments and risk analyses</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              4. Information Security
            </h2>
            <p className="text-gray-700 mb-6">
              We implement strict security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Secure storage systems</li>
              <li>Limited access to personal information by our employees</li>
              <li>Regular security assessments and updates</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              5. Data Retention
            </h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining how long to keep information, we consider the nature of the information, the potential risk of harm from unauthorized use or disclosure, and legal requirements.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              6. Information Sharing
            </h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>With service providers who assist us in operating our business (subject to confidentiality agreements)</li>
              <li>When required by law or to protect our rights</li>
              <li>In the event of a merger, acquisition, or sale of all or a portion of our assets</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              7. Your Rights
            </h2>
            <p className="text-gray-700 mb-6">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict processing of your information</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 mb-6">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our site. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a revised effective date.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#B08D57] border-b border-gray-200 pb-2">
              10. Contact Us
            </h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <Link href="mailto:privacy@affilliasecurity.com" className="text-accent-gold hover:underline">
                privacy@affilliasecurity.com
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