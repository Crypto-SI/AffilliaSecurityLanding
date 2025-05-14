import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { MainNavbar } from '@/src/components/MainNavbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <MainNavbar />

      {/* Add padding for the fixed header */}
      <div className="h-16 md:h-20"></div>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center bg-primary-dark text-text-light overflow-hidden">
        {/* Abstract Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-accent-gold/30"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-gold opacity-5 rounded-bl-full transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-accent-gold opacity-5 rounded-tr-full transform -translate-x-1/4 translate-y-1/4"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="order-2 md:order-1 md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Your Security <span className="text-[#B08D57]">Is Our Priority</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl">
              Personal protection services for high-net-worth individuals, providing the highest level of security while maintaining absolute discretion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }), 
                  "bg-accent-gold hover:bg-accent-gold/90 text-primary-dark"
                )}
              >
                Request Consultation
              </Link>
              <a 
                href="#services" 
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }), 
                  "bg-accent-gold hover:bg-white text-primary-dark hover:text-blue-900 font-bold border-2 border-accent-gold"
                )}
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Shield-like geometric shape behind logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-xs max-h-xs bg-gradient-to-br from-accent-gold/10 to-accent-gold/30 rounded-tl-3xl rounded-br-3xl transform rotate-12"></div>
                <div className="absolute w-full h-full max-w-xs max-h-xs border-2 border-accent-gold/40 rounded-tl-3xl rounded-br-3xl transform -rotate-12"></div>
              </div>
              
              {/* Logo with subtle glow */}
              <div className="relative shadow-2xl rounded-lg bg-gradient-to-br from-primary-dark/80 to-primary-dark p-12 backdrop-blur-sm border border-white/10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-gold/30 to-primary-dark/50 rounded-lg blur opacity-30"></div>
                <div className="relative">
                  <Image 
                    src="/affseclogolight.png" 
                    alt="Affillia Security Logo" 
                    width={300} 
                    height={80} 
                    className="mx-auto mb-6"
                  />
                  <div className="flex justify-center items-center gap-4 mt-8">
                    <div className="flex flex-col items-center">
                      <span className="text-accent-gold text-3xl font-bold">25+</span>
                      <span className="text-sm text-gray-400">Years Experience</span>
                    </div>
                    <div className="h-10 w-px bg-gray-700"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-accent-gold text-3xl font-bold">100%</span>
                      <span className="text-sm text-gray-400">Confidentiality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#F7F7F7" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-primary-light">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary-dark">
              About <span className="text-[#B08D57]">Affillia Security</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image 
                  src="/affseclogodarktrans.png" 
                  alt="Affillia Security Team" 
                  width={500} 
                  height={350} 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-6">
                  Affillia Security is a premier personal close protection company dedicated to ensuring the safety and security of high-net-worth individuals and their families.
                </p>
                <p className="text-lg mb-6">
                  Founded on a commitment to excellence, our team consists of extensively trained security professionals with backgrounds in military special forces, law enforcement, and specialized security operations.
                </p>
                <p className="text-lg">
                  We understand the unique security challenges faced by wealthy individuals and provide custom solutions that balance comprehensive protection with lifestyle flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#B08D57]">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#B08D57]">
              <div className="bg-primary-dark relative px-6 py-5">
                <h3 className="text-2xl font-bold text-[#B08D57] text-center">Personal Protection</h3>
              </div>
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/personalprotection.png" 
                  alt="Personal Protection" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Tailored close protection services for high-net-worth individuals, executives, and their families. Our protection specialists blend seamlessly into your lifestyle while providing vigilant security.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Discrete bodyguard services
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Travel security planning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Event security management
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#B08D57]">
              <div className="bg-primary-dark relative px-6 py-5">
                <h3 className="text-2xl font-bold text-[#B08D57] text-center">Residential Security</h3>
              </div>
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/residential.png" 
                  alt="Residential Security" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Comprehensive security solutions for luxury residences and estates, designed to protect your home and loved ones while maintaining privacy and comfort.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Property risk assessments
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Stationed security personnel
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced technical security systems
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#B08D57]">
              <div className="bg-primary-dark relative px-6 py-5">
                <h3 className="text-2xl font-bold text-[#B08D57] text-center">Risk Assessment</h3>
              </div>
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/risk.png" 
                  alt="Risk Assessment" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Proactive threat assessment and security planning to identify vulnerabilities and develop strategies for mitigating risks specific to high-profile individuals.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Personal vulnerability analysis
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Digital security assessment
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom security protocols
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-primary-dark text-text-light">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Why Choose <span className="text-[#B08D57]">Affillia Security</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border border-[#B08D57] bg-primary-dark/50 hover:bg-primary-dark/70 transition-all">
              <div className="w-20 h-20 rounded-full bg-accent-gold/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Elite Experience</h3>
              <p>
                Our personnel come from elite military and law enforcement backgrounds with extensive training in VIP protection.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-[#B08D57] bg-primary-dark/50 hover:bg-primary-dark/70 transition-all">
              <div className="w-20 h-20 rounded-full bg-accent-gold/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Tailored Approach</h3>
              <p>
                We develop customized security plans based on your specific needs, lifestyle, and risk profile.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-[#B08D57] bg-primary-dark/50 hover:bg-primary-dark/70 transition-all">
              <div className="w-20 h-20 rounded-full bg-accent-gold/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Absolute Discretion</h3>
              <p>
                We maintain the highest standards of confidentiality and privacy for our high-net-worth clients.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-[#B08D57] bg-primary-dark/50 hover:bg-primary-dark/70 transition-all">
              <div className="w-20 h-20 rounded-full bg-accent-gold/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Global Capability</h3>
              <p>
                Our network extends worldwide, providing seamless security for international travel and global operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-gold">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-dark">Ready to Enhance Your Security?</h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-dark max-w-3xl mx-auto">
            Contact us today for a confidential consultation. Your safety is our priority.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "bg-[#1A202C] text-white hover:bg-[#1A202C]/90")}
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-text-light py-12">
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
              <a href="#home" className="hover:text-accent-gold transition-colors">Home</a>
              <a href="#about-us" className="hover:text-accent-gold transition-colors">About Us</a>
              <a href="#services" className="hover:text-accent-gold transition-colors">Services</a>
              <a href="#why-choose-us" className="hover:text-accent-gold transition-colors">Why Choose Us</a>
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