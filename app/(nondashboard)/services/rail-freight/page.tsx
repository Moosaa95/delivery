import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export default function RailFreightService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rail-freight-banner.jpg"
            alt="Rail Freight Service"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">RAIL FREIGHT SERVICE</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Rail Freight Service</span>
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
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/sea-freight" className="block text-gray-700">
                    Sea Freight Service
                  </Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/road-freight" className="block text-gray-700">
                    Road Freight Service
                  </Link>
                </li>
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/rail-freight" className="block">
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
                    Eco Global Delivery's Rail Freight Service offers an efficient, reliable, and environmentally 
                    friendly transportation solution for moving large volumes of cargo over long distances. Our 
                    comprehensive rail network connects major economic centers and integrates seamlessly with other 
                    transportation modes to provide complete logistics solutions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Rail freight is particularly advantageous for heavy or bulky shipments, offering significant 
                    cost savings compared to road transportation while reducing carbon emissions. Our service is 
                    ideal for industries such as manufacturing, construction, agriculture, and energy that require 
                    regular movement of substantial cargo volumes.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With strategic partnerships with major rail operators and terminals worldwide, we ensure reliable 
                    capacity, competitive rates, and consistent service quality across our rail freight operations.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Our rail freight services include both containerized cargo and bulk shipments, with specialized 
                    solutions for various commodity types. We handle all aspects of rail transportation, from initial 
                    planning and documentation to terminal operations, customs clearance, and final delivery.
                  </p>
                  <p className="text-gray-700 mb-4">
                    For cross-border shipments, our expertise in international regulations and customs procedures 
                    ensures smooth transit across different countries and regions. We coordinate closely with customs 
                    authorities and other stakeholders to prevent delays and maintain compliance with all applicable 
                    requirements.
                  </p>
                  <p className="text-gray-700">
                    Our advanced tracking systems provide visibility throughout the rail journey, allowing you to 
                    monitor your shipments and plan downstream activities with confidence. Our logistics experts 
                    work closely with you to design optimal rail freight solutions that align with your supply 
                    chain requirements and business objectives.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Rail Freight Expertise</h3>
                    <p className="text-gray-700 mb-4">
                      With extensive experience in rail logistics, our team possesses deep knowledge of rail networks, 
                      terminal operations, and intermodal connections across different regions. We leverage this 
                      expertise to optimize routing, minimize transit times, and ensure efficient handling of your cargo.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our rail freight specialists understand the unique characteristics and requirements of different 
                      cargo types, from standard containers to specialized equipment for oversized or hazardous materials. 
                      This specialized knowledge enables us to provide tailored solutions that address your specific 
                      transportation needs.
                    </p>
                    <p className="text-gray-700">
                      We continuously monitor industry developments and invest in our capabilities to enhance our 
                      service offerings and provide innovative rail freight solutions that deliver value to our clients.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/rail-freight-cargo.jpg"
                      alt="Rail freight cargo transport"
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
                        "Switching to Eco Global Delivery's rail freight service has significantly reduced our 
                        transportation costs and environmental footprint. Their expertise in coordinating complex 
                        rail shipments has been invaluable to our supply chain operations."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/richard.jpg"
                            alt="Richard H."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Richard H.</p>
                          <p className="text-sm text-gray-500">Logistics Director, Manufacturing Inc.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We've been impressed by Eco Global Delivery's ability to handle our large-volume rail 
                        shipments with consistent reliability. Their proactive approach to problem-solving and 
                        excellent communication have made them a trusted partner in our logistics network."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/patricia.jpg"
                            alt="Patricia K."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Patricia K.</p>
                          <p className="text-sm text-gray-500">Supply Chain Manager, Industrial Solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    Why Choose Our Rail Freight Service:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Cost-Effective & Environmentally Friendly
                        </h4>
                        <p className="text-gray-700">
                          Rail freight offers significant cost advantages for large shipments over long distances, 
                          with substantially lower carbon emissions compared to road transportation, supporting your 
                          sustainability goals while optimizing your logistics budget.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Extensive Network & Reliable Capacity</h4>
                        <p className="text-gray-700">
                          Our partnerships with major rail operators provide access to an extensive network of routes 
                          and terminals, ensuring reliable capacity and consistent service quality for your shipments 
                          across different regions.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Seamless Intermodal Integration</h4>
                        <p className="text-gray-700">
                          Our rail freight service integrates seamlessly with other transportation modes, providing 
                          complete door-to-door solutions that combine the efficiency of rail with the flexibility 
                          of road transport for first and last-mile delivery.
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
                          src="/images/multimodal-transport-operations.jpg"
                          alt="Multimodal Transport"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Multimodal Transport</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Combine rail with other transportation modes for a seamless, efficient, and comprehensive 
                          logistics solution tailored to your specific requirements.
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
                          src="/images/warehouse-operations.jpg"
                          alt="Warehousing & Distribution"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Warehousing & Distribution</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Enhance your rail freight operations with strategic warehousing and distribution services 
                          for efficient inventory management and order fulfillment.
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
                          src="/images/project-cargo-transport.jpg"
                          alt="Project Cargo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Project Cargo</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Specialized solutions for oversized and heavy equipment transportation, leveraging rail 
                          capabilities for efficient movement of exceptional cargo.
                        </p>
                        <Link
                          href="/services/project-cargo"
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