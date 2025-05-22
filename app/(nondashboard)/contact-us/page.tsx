"use client"
import Image from "next/image"
import Link from "next/link"
import {  MapPin,  ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function ContactUs() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('');


  const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  const formData = {
    name: (event.target as any).name.value,
    email: (event.target as any).email.value,
    phone: (event.target as any).phone.value,
    subject: (event.target as any).subject.value,
    service: (event.target as any).service.value,
    message: (event.target as any).message.value,
  };

  setLoading(true);
  try {
    const response = await fetch('/api/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setResult(response.ok && data.accepted ? "Message sent successfully!" : "Failed to send message.");
  } catch (error) {
    setResult("Error: Could not send the message.");
  } finally {
    setLoading(false);
  }

};

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult("");  // Reset the result after 10 seconds
      }, 10000);

      return () => clearTimeout(timer);  // Cleanup the timer if component is unmounted or result changes
    }
  }, [result]);

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.jpg"
            alt="Contact Eco Global Delivery"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CONTACT US</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch With Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Whether you have questions about our services, need a customized logistics solution, 
                or want to discuss your specific shipping requirements, our team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Dubai Office */}
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-500 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Dubai Office</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <div className="flex">
                    <div className="w-24 font-medium">Address:</div>
                    <div>
                      Warehouse 24, Street number 5,<br />
                      Al Quoz Industrial Area 3,<br />
                      Dubai, United Arab Emirates
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-24 font-medium">Phone:</div>
                    <div className="text-teal-600 hover:text-teal-700">
                      <a href="tel:+97180000150002">+971 800 0150002</a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-24 font-medium">Email:</div>
                    <div className="text-teal-600 hover:text-teal-700">
                      <a href="mailto:dubai@ecoglobaldelivery.com">dubai@ecoglobaldelivery.com</a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-24 font-medium">Hours:</div>
                    <div>
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Kazakhstan Office */}
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-500 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Main Office - Kazakhstan</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <div className="flex">
                    <div className="w-24 font-medium">Address:</div>
                    <div>
                      Global City 134th accounting quarter,<br />
                      867 1/A, Kazybek Bi district,<br />
                      Karaganda, Kazakhstan
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-24 font-medium">Phone:</div>
                    <div className="text-teal-600 hover:text-teal-700">
                      <a href="tel:+77785276027">+7 778 527 6027</a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-24 font-medium">Email:</div>
                    <div className="text-teal-600 hover:text-teal-700">
                      <a href="mailto:info@ecoglobaldelivery.com">info@ecoglobaldelivery.com</a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-24 font-medium">Hours:</div>
                    <div>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us A Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service You're Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">Select a service</option>
                    <option value="air-freight">Air Freight</option>
                    <option value="sea-freight">Sea Freight</option>
                    <option value="road-freight">Road Freight</option>
                    <option value="rail-freight">Rail Freight</option>
                    <option value="project-cargo">Project Cargo</option>
                    <option value="roll-on-roll-off">Roll on Roll Off</option>
                    <option value="warehousing">Warehousing & Distribution</option>
                    <option value="customs-clearance">Customs Clearance</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                {result && (
                  <div className={`mt-4 p-3 rounded-md ${result.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {result}
                  </div>
                )}

              </form>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find quick answers to common questions about our services and how to get in touch with our team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">What information should I provide for a freight quote?</h3>
                <p className="text-gray-700">
                  To receive an accurate freight quote, please provide details including origin and destination locations, 
                  cargo dimensions and weight, commodity type, desired shipping timeline, and any special handling requirements. 
                  The more specific information you can provide, the more precise our quote will be.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">How quickly can I expect a response to my inquiry?</h3>
                <p className="text-gray-700">
                  Our team typically responds to all inquiries within 24 business hours. For urgent matters, we 
                  recommend contacting our offices directly by phone for immediate assistance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Do you have representatives in other countries?</h3>
                <p className="text-gray-700">
                  Yes, Eco Global Delivery maintains a global network of partners and representatives across major trade 
                  lanes worldwide. In addition to our main offices in Kazakhstan and Dubai, we have a network of trusted 
                  agents who can provide local support in most major markets.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2">How can I track my shipment?</h3>
                <p className="text-gray-700">
                Eco Global Delivery provides real-time shipment tracking through our online client portal. Once your 
                  shipment is booked, you'll receive login credentials to access our tracking platform. Alternatively, 
                  you can contact your assigned account manager for status updates on your shipments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact our logistics experts today to discuss how Eco Global Delivery can enhance your global transportation operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* <Link
                href="/request-quote"
                className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link> */}
              <Link
                href="/services"
                className="bg-transparent hover:bg-teal-700 border-2 border-white font-medium py-3 px-8 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                Explore Our Services <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}