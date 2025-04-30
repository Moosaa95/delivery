import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export default function SeaFreightService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sea-freight.jpg"
            alt="Sea Freight Service"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">SEA FREIGHT SERVICE</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Sea Freight Service</span>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4 text-gray-800">ECO GLOBAL DELIVERY SERVICES</h3>
              <ul className="space-y-2">
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/air-freight" className="block text-gray-700">
                    Air Freight Service
                  </Link>
                </li>
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/sea-freight" className="block">
                    Sea Freight Service
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/road-freight" className="block text-gray-700">
                    Road Freight Service
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/rail-freight" className="block text-gray-700">
                    Rail Freight Service
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/multimodal-transport" className="block text-gray-700">
                    Multimodal Transport Service
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/warehousing" className="block text-gray-700">
                    Warehousing & Distribution
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/customs-clearance" className="block text-gray-700">
                    Customs Clearance Service
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/cargo-insurance" className="block text-gray-700">
                    Cargo Insurance Services
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-bold mb-4 mt-8 text-gray-800">OTHER SERVICES</h3>
              <ul className="space-y-2">
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/bulk-liquid" className="block text-gray-700">
                    Bulk Liquid Logistics
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/customs-compliance" className="block text-gray-700">
                    Customs Compliance
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/foreign-to-foreign" className="block text-gray-700">
                    Foreign to Foreign
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/household-autos" className="block text-gray-700">
                    Household goods & Autos
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/ocean-fcl" className="block text-gray-700">
                    Ocean FCL (Import / Export)
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/project-cargo" className="block text-gray-700">
                    Project Cargo
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/roll-on-roll-off" className="block text-gray-700">
                    Roll on Roll Off
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-3/4 lg:w-4/5 md:pl-8">
              {/* Main Content */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">General Information</h2>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Eco Global Shipping offers comprehensive sea freight solutions designed to meet the diverse needs of 
                    businesses shipping goods across oceans. Our sea freight service is the backbone of international trade, 
                    providing cost-effective transportation for large volumes of cargo over long distances.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With access to major shipping lines and ports worldwide, we ensure your cargo reaches its destination 
                    safely and on schedule. Our extensive network allows us to offer competitive rates and flexible 
                    scheduling options for both FCL (Full Container Load) and LCL (Less than Container Load) shipments.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We understand that sea freight is often the most economical option for large shipments, and our 
                    experienced team works diligently to optimize your supply chain, reduce costs, and ensure smooth 
                    operations from port to port.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Our sea freight services include comprehensive port-to-port and door-to-door solutions, with 
                    specialized options for refrigerated cargo, hazardous materials, oversized equipment, and bulk 
                    commodities. We handle all documentation, customs clearance, and regulatory compliance to ensure 
                    your shipments move without delay.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Eco Global Shipping maintains strong relationships with major carriers, enabling us to secure space 
                    even during peak seasons and on high-demand routes. Our advanced tracking systems provide real-time 
                    visibility of your cargo throughout its journey, giving you peace of mind and allowing for proactive 
                    management of your supply chain.
                  </p>
                  <p className="text-gray-700">
                    Whether you're shipping raw materials, finished products, or specialized equipment, our sea freight 
                    experts will design a solution that meets your specific requirements for timing, budget, and handling.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Sea Freight Expertise</h3>
                    <p className="text-gray-700 mb-4">
                      With decades of experience in international shipping, our team possesses deep knowledge of global 
                      trade routes, port operations, and maritime regulations. We leverage this expertise to navigate 
                      the complexities of ocean freight and deliver reliable service to our clients.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our sea freight specialists continuously monitor market conditions, carrier performance, and route 
                      efficiency to identify opportunities for improvement and cost savings. This proactive approach 
                      ensures that your cargo moves via the most optimal routes and carriers.
                    </p>
                    <p className="text-gray-700">
                      We pride ourselves on our ability to handle complex shipments and challenging requirements, 
                      providing customized solutions that address your unique logistics needs.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/sea.jpg"
                      alt="Sea freight cargo loading"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Testimonials */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">What Our Clients Say</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Eco Global Shipping has transformed our international supply chain. Their sea freight service is 
                        reliable, cost-effective, and their team is always available to address our concerns. They've become 
                        an essential partner in our business growth."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-3.jpg"
                            alt="Marcus L."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Marcus L.</p>
                          <p className="text-sm text-gray-500">Global Trade Solutions</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We've been using Eco Global Shipping for our sea freight needs for over five years. Their attention 
                        to detail, competitive rates, and exceptional customer service have made them our preferred logistics 
                        partner for all our international shipments."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-1.jpg"
                            alt="Jennifer K."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Jennifer K.</p>
                          <p className="text-sm text-gray-500">Pacific Imports Inc.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    Why Choose Our Sea Freight Service:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Global Network & Strong Carrier Relationships
                        </h4>
                        <p className="text-gray-700">
                          Our established relationships with major shipping lines and presence at key ports worldwide 
                          ensure competitive rates, reliable space allocation, and priority handling for your cargo.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Comprehensive Service Portfolio</h4>
                        <p className="text-gray-700">
                          From FCL and LCL shipments to specialized cargo handling, our sea freight services cover all 
                          aspects of ocean transportation, complemented by customs clearance, warehousing, and inland 
                          distribution for a complete door-to-door solution.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Advanced Technology & Visibility</h4>
                        <p className="text-gray-700">
                          Our state-of-the-art tracking systems provide real-time updates on your shipments, allowing 
                          you to monitor progress, anticipate arrivals, and manage your supply chain with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Services */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    Other Services That You Might Want To Know About
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src="/images/air.jpg"
                          alt="Air Freight Service"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Air Freight Service</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          When time is critical, our air freight service offers the fastest transportation solution with 
                          global coverage and reliable handling of your urgent shipments.
                        </p>
                        <Link
                          href="/services/air-freight"
                          className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                        >
                          MORE INFO <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src="/images/multimodal-transport-operations.jpg"
                          alt="Multimodal Transport"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Multimodal Transport</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Optimize your supply chain with our integrated multimodal solutions that combine sea, air, road, 
                          and rail transportation for maximum efficiency and cost-effectiveness.
                        </p>
                        <Link
                          href="/services/multimodal-transport"
                          className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                        >
                          MORE INFO <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src="/images/customs-clearance-banner.jpg"
                          alt="Customs Clearance"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Customs Clearance</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Navigate complex customs regulations with ease through our expert customs clearance services, 
                          ensuring smooth and compliant international shipments.
                        </p>
                        <Link
                          href="/services/customs-clearance"
                          className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                        >
                          MORE INFO <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}