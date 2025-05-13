import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="fixed top-0 z-50 w-full transition-all duration-300 ease-in-out" id="navbar">
        <div className="mx-auto w-full max-w-6xl flex justify-between items-center p-4 md:px-8">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/affseclogodark.png" 
                alt="Affillia Security Logo" 
                width={160} 
                height={40} 
                className="mr-2"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#home" className="font-medium hover:text-accent-gold transition-colors">Home</Link>
            <Link href="/#about-us" className="font-medium hover:text-accent-gold transition-colors">About Us</Link>
            <Link href="/#services" className="font-medium hover:text-accent-gold transition-colors">Services</Link>
            <Link href="/#why-choose-us" className="font-medium hover:text-accent-gold transition-colors">Why Choose Us</Link>
            <Link 
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "text-accent-gold border-accent-gold hover:bg-accent-gold hover:text-primary-dark"
              )}
            >
              Contact
            </Link>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Add padding for the fixed header */}
      <div className="h-16 md:h-20"></div>

      {/* Contact Hero Section */}
      <section className="relative bg-primary-dark text-text-light py-16">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/contact-bg.jpg')] bg-cover bg-center"></div>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-accent-gold">Affillia Security</span>
            </h1>
            <p className="text-xl md:text-2xl mb-0">
              Reach out for a confidential consultation on your security needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-light flex-grow">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-primary-dark">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    >
                      <option value="">Please select</option>
                      <option value="personal-protection">Personal Protection</option>
                      <option value="residential-security">Residential Security</option>
                      <option value="risk-assessment">Risk Assessment</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      className="mt-1 h-4 w-4 text-accent-gold focus:ring-accent-gold border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      I agree to the privacy policy and understand that my information will be handled with the utmost confidentiality.
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-accent-gold text-primary-dark font-bold py-3 px-4 rounded-md hover:bg-primary-dark hover:text-text-light transition-colors border border-accent-gold"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="bg-primary-dark text-text-light p-8 rounded-lg shadow-lg mb-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-accent-gold">Phone</p>
                        <p className="mt-1">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-accent-gold">Email</p>
                        <p className="mt-1">contact@affilliasecurity.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-accent-gold">Office</p>
                        <p className="mt-1">1234 Security Avenue, Suite 500<br />New York, NY 10001</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-primary-dark">Our Response Commitment</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      At Affillia Security, we understand that security needs can be time-sensitive. Our team is committed to responding to all inquiries within 24 hours.
                    </p>
                    <p className="text-gray-700">
                      For urgent matters requiring immediate attention, please contact our direct line at +1 (555) 999-8888.
                    </p>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <p className="text-sm text-gray-500">
                        <strong>Note:</strong> All communications with Affillia Security are treated with the highest level of confidentiality. We implement strict privacy protocols to protect our clients' information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-text-light py-12">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="mb-6 md:mb-0">
              <Image 
                src="/affseclogolight.png" 
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
              <a href="#" className="hover:text-accent-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 