import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export default function RoadFreightService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/road-freight-banner.jpg"
            alt="Road Freight Service"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">ROAD FREIGHT SERVICE</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Road Freight Service</span>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4 text-gray-800">SWIFT LOGISTICS SERVICES</h3>
              <ul className="space-y-2">
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/air-freight" className="block text-gray-700">
                    Air Freight Service
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/sea-freight" className="block text-gray-700">
                    Sea Freight Service
                  </Link>
                </li>
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/road-freight" className="block">
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
                    Eco Global Shipping's Road Freight Service offers flexible and reliable ground transportation 
                    solutions for shipments of all sizes. Whether you need local delivery, cross-border transportation, 
                    or long-haul trucking, our extensive fleet and network of trusted partners ensure your cargo reaches 
                    its destination safely and on time.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our road freight services are designed to provide the perfect balance of speed, reliability, and 
                    cost-effectiveness. We offer various vehicle types to accommodate different cargo requirements, 
                    from small parcels to full truckloads, hazardous materials, temperature-controlled goods, and 
                    oversized equipment.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With real-time tracking capabilities and experienced drivers, we maintain visibility and control 
                    throughout the transportation process, giving you peace of mind and the ability to plan with confidence.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Our road freight service is an integral part of our comprehensive logistics solutions, seamlessly 
                    connecting with our air, sea, and rail services to provide complete door-to-door transportation. 
                    We handle all aspects of road transportation, including route planning, documentation, customs 
                    clearance for cross-border shipments, and specialized handling requirements.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Safety is our top priority, and all our drivers and vehicles comply with the highest industry 
                    standards and regulations. Our fleet is regularly maintained and equipped with advanced 
                    communication and tracking systems to ensure reliable performance and timely updates.
                  </p>
                  <p className="text-gray-700">
                    Whether you need scheduled deliveries, just-in-time logistics, or emergency transportation, 
                    our road freight experts will design a solution that meets your specific requirements and 
                    optimizes your supply chain.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Road Freight Expertise</h3>
                    <p className="text-gray-700 mb-4">
                      With years of experience in ground transportation, our team possesses extensive knowledge of 
                      road networks, regulations, and best practices across different regions. We leverage this 
                      expertise to plan optimal routes, avoid potential delays, and ensure efficient delivery.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our road freight specialists work closely with customers to understand their specific needs 
                      and develop customized transportation plans that align with their business requirements and 
                      budget constraints.
                    </p>
                    <p className="text-gray-700">
                      We continuously invest in our fleet and technology to enhance our service capabilities and 
                      provide innovative solutions that address the evolving needs of our clients in today's 
                      fast-paced business environment.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/road-freight-trucks.jpg"
                      alt="Road freight trucks"
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
                        "Eco Global Shipping's road freight service has been instrumental in streamlining our distribution 
                        network. Their reliable scheduling, careful handling, and proactive communication have significantly 
                        improved our delivery performance."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-2.jpg"
                            alt="Thomas R."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Thomas R.</p>
                          <p className="text-sm text-gray-500">Regional Distribution Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We've been using Eco Global Shipping for our cross-border deliveries for three years now. Their road freight team consistently goes above and beyond to ensure our time-sensitive shipments arrive on schedule, even when facing challenging conditions or unexpected obstacles."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-3.jpg"
                            alt="Laura M."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Laura M.</p>
                          <p className="text-sm text-gray-500">Supply Chain Director</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    Why Choose Our Road Freight Service:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Extensive Fleet & Network Coverage
                        </h4>
                        <p className="text-gray-700">
                          Our diverse fleet of vehicles and extensive partner network enable us to provide comprehensive 
                          road freight solutions across multiple regions, with the flexibility to accommodate various 
                          cargo types and delivery requirements.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Advanced Tracking & Security</h4>
                        <p className="text-gray-700">
                          Our vehicles are equipped with GPS tracking and monitoring systems, providing real-time 
                          visibility of your shipments and ensuring the security of your cargo throughout the 
                          transportation process.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Experienced Team & Reliable Service</h4>
                        <p className="text-gray-700">
                          Our professional drivers and logistics coordinators have extensive experience in road 
                          transportation, ensuring safe handling, timely delivery, and efficient resolution of any 
                          challenges that may arise during transit.
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
                          src="/images/warehouse-operations.jpg"
                          alt="Warehousing & Distribution"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Warehousing & Distribution</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Complement your road freight with our warehousing solutions for efficient storage, inventory 
                          management, and distribution of your goods.
                        </p>
                        <Link
                          href="/services/warehousing"
                          className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                        >
                          MORE INFO <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src="/images/rail-freight-cargo.jpg"
                          alt="Rail Freight Service"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Rail Freight Service</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          For long-distance, high-volume shipments, our rail freight service offers a cost-effective 
                          and environmentally friendly alternative to road transportation.
                        </p>
                        <Link
                          href="/services/rail-freight"
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
                          Combine road freight with other transportation modes for a seamless, efficient, and 
                          cost-effective end-to-end logistics solution.
                        </p>
                        <Link
                          href="/services/multimodal-transport"
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