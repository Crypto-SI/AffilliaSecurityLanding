import { PageShell } from '@/components/site';

export default function Contact() {
  return (
    <PageShell>
      {/* Contact Hero */}
      <section className="bg-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-accent-gold">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Contact our team for a confidential consultation about your security needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-primary-dark text-text-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-text-light">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 bg-primary-dark/50 border border-[#B08D57] rounded-md focus:ring-accent-gold focus:border-accent-gold text-text-light"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 bg-primary-dark/50 border border-[#B08D57] rounded-md focus:ring-accent-gold focus:border-accent-gold text-text-light"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-primary-dark/50 border border-[#B08D57] rounded-md focus:ring-accent-gold focus:border-accent-gold text-text-light"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 bg-primary-dark/50 border border-[#B08D57] rounded-md focus:ring-accent-gold focus:border-accent-gold text-text-light"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 bg-primary-dark/50 border border-[#B08D57] rounded-md focus:ring-accent-gold focus:border-accent-gold text-text-light"
                  >
                    <option value="">Select a service</option>
                    <option value="personal-protection">Personal Protection</option>
                    <option value="residential-security">Residential Security</option>
                    <option value="risk-assessment">Risk Assessment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-primary-dark/50 border border-[#B08D57] rounded-md focus:ring-accent-gold focus:border-accent-gold text-text-light"
                    placeholder="Please provide details about your security needs..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-accent-gold text-primary-dark font-medium rounded-md hover:bg-accent-gold/90 transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2 p-8 rounded-lg border border-[#B08D57] bg-primary-dark/50">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-8 text-text-light">Our Location</h2>
                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <svg className="w-6 h-6 text-accent-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg text-text-light">Headquarters</h3>
                      <p className="text-gray-300">
                        123 Security Avenue,<br/>
                        London, UK
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <svg className="w-6 h-6 text-accent-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg text-text-light">Contact Information</h3>
                      <p className="text-gray-300">
                        Phone: +44 20 1234 5678<br/>
                        Email: contact@affilliasecurity.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent-gold mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg text-text-light">Business Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 8:00 AM - 6:00 PM<br/>
                        24/7 Emergency Service Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-text-light">Confidentiality Guarantee</h3>
                <p className="text-gray-300 mb-4">
                  All consultations and client information are treated with absolute confidentiality. We understand the sensitive nature of security concerns for high-net-worth individuals.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-text-light">
                    Your information is protected and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="h-80 bg-primary-dark/80 w-full">
        <div className="h-full w-full flex items-center justify-center">
          <p className="text-text-light text-lg">Interactive Map Would Go Here</p>
        </div>
      </section>
    </PageShell>
  );
} 
