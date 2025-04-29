import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/truck.jpg"
            alt="About Swift Logistics"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">ABOUT US</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Company History</h2>
              <p className="text-gray-700 mb-4">
                Swift Logistics & Delivery Company was commissioned in 2008 as an emerging organization designed to cater to the growing demands in the field of logistics. Since our incorporation, we have extended our operations and established branches both within and outside the country, developing an international presence.
              </p>
              <p className="text-gray-700 mb-4">
                Today, we stand as one of the leading logistics companies in the U.A.E, Kazakhstan, and Qatar, with a wide network covering all major ports in the Middle East, Europe, and North America. Our major logistics hub is located in Charleston, South Carolina, where we begin the process of optimizing and customizing supply chain solutions across our global network spanning six continents.
              </p>
              <p className="text-gray-700">
                To streamline our worldwide operations, we collaborate with global networks that provide highly equipped professional logistics services. The Swift Logistics officials, with decades of experience, enjoy a good reputation as Sea/Air freight forwarders, Charters & General Agents in the Middle East with branch offices located throughout North America.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/freight-man.jpg"
                alt="Swift Logistics History"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="inline-block p-4 bg-teal-500 rounded-full text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-700">
                  To provide total logistics solutions in an efficient manner for client satisfaction. We accomplish this through our skilled and professional operation teams, which possess the experience and knowledge to handle cargo moved by Sea, Air, and Road/Rail Ramp. We believe in providing Logistics and Transportation services of uncompromising superior quality at the most economical value, assuring total and consistent customer satisfaction.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="inline-block p-4 bg-teal-500 rounded-full text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-700">
                  To be recognized as the premier global logistics provider, delivering smart solutions through a policy based on the continual search for the most effective, practical, and safest End-to-End Logistics Solutions. We aim to create a dynamic freight management company that has few equals in their ability to provide exceptional services, shipment of high valuable goods, and meeting the needs of clients shipping goods all over the world.
                </p>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Services</h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
              <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
                As a valuables service-focused company, we provide our customers with a highly flexible approach to supply chain management across various transportation modes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/sea-freight.jpg"
                    alt="Sea Freight Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-400">Sea Freight Service</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive ocean freight forwarding with standard shipping, project cargo (including RO/RO & foreign-to-foreign cargo), and exceptional pricing options.
                  </p>
                  <Link
                    href="/services/sea-freight"
                    className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                  >
                    LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/air.jpg"
                    alt="Air Freight Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-400">Air Freight Service</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Expedited air freight solutions with global coverage, ideal for time-sensitive shipments and high-value cargo requiring special handling.
                  </p>
                  <Link
                    href="/services/air-freight"
                    className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                  >
                    LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/road-freight-trucks.jpg"
                    alt="Road & Rail Freight"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-400">Road & Rail Freight</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Efficient domestic logistics with our own fleet of trucks, container trucks, and trailers for primary & secondary transportation, JIT deliveries, and more.
                  </p>
                  <Link
                    href="/services/road-freight"
                    className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                  >
                    LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/services" 
                className="inline-flex items-center px-6 py-3 bg-teal-500 text-white font-medium rounded hover:bg-teal-600 transition-colors"
              >
                VIEW ALL SERVICES <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Swift Logistics</h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 text-center">
                <div className="inline-block p-4 bg-teal-500 rounded-full text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Global Network</h3>
                <p className="text-gray-600">
                  Wide network covering major ports in the Middle East, Europe, North America, and six continents.
                </p>
              </div>
              
              <div className="p-6 text-center">
                <div className="inline-block p-4 bg-teal-500 rounded-full text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Experienced Team</h3>
                <p className="text-gray-600">
                  Skilled professionals with decades of experience in freight management and logistics.
                </p>
              </div>
              
              <div className="p-6 text-center">
                <div className="inline-block p-4 bg-teal-500 rounded-full text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Custom Solutions</h3>
                <p className="text-gray-600">
                  Flexible approaches to supply chain management tailored to meet complex transportation needs.
                </p>
              </div>
              
              <div className="p-6 text-center">
                <div className="inline-block p-4 bg-teal-500 rounded-full text-white mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">Competitive Pricing</h3>
                <p className="text-gray-600">
                  Uncompromising superior quality at the most economical value for consistent customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Global Presence */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Global Presence</h2>
            <p className="text-gray-700 mb-6">
              Swift Logistics & Delivery Company operates across multiple continents with strategic locations designed to serve our global clients efficiently. Our presence includes:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="font-bold mb-3 text-gray-800">Middle East</h3>
                <p className="text-gray-600 mb-2">• United Arab Emirates (Headquarters)</p>
                <p className="text-gray-600 mb-2">• Qatar</p>
                <p className="text-gray-600">• Other key regional ports</p>
              </div>
              
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="font-bold mb-3 text-gray-800">Central Asia</h3>
                <p className="text-gray-600 mb-2">• Kazakhstan</p>
                <p className="text-gray-600">• Regional logistics networks</p>
              </div>
              
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="font-bold mb-3 text-gray-800">North America</h3>
                <p className="text-gray-600 mb-2">• Charleston, SC (Major Hub)</p>
                <p className="text-gray-600">• Branch offices across the continent</p>
              </div>
            </div>
            
            <p className="text-gray-700">
              With a physical presence on six continents and partnerships with global networks, we ensure seamless 
              logistics operations worldwide, allowing us to serve our clients wherever their business takes them.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm relative">
              <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "Swift Logistics has been our trusted partner for over 5 years. Their attention to detail, competitive rates, and exceptional customer service have made them our preferred logistics partner for all international shipments."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/david.jpg"
                    alt="David M."
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-bold">David M.</p>
                  <p className="text-sm text-gray-500">Global Manufacturing Corp.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm relative">
              <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "The team at Swift Logistics has transformed our supply chain operations. Their global network and expertise in customs procedures have eliminated delays and reduced costs significantly. A true partner in our business growth."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/sarah.jpg"
                    alt="Sarah K."
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-bold">Sarah K.</p>
                  <p className="text-sm text-gray-500">Tech Innovations Ltd.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm relative">
              <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "Working with Swift Logistics has given us peace of mind. Their transparent communication, proactive problem-solving, and reliable service have made them an invaluable extension of our team."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/micheal.jpg"
                    alt="Michael R."
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-bold">Michael R.</p>
                  <p className="text-sm text-gray-500">Retail Solutions Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact our team today to discuss how Swift Logistics can streamline your logistics operations and provide customized solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-white text-teal-600 font-bold rounded hover:bg-gray-100 transition-colors"
            >
              CONTACT US
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-3 bg-transparent border-2 border-white font-bold rounded hover:bg-teal-600 transition-colors"
            >
              EXPLORE OUR SERVICES
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}