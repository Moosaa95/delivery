import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export default function MultimodalTransportService() {
return (
  <main className="min-h-screen">
    {/* Hero Banner */}
    <section className="relative h-[300px] md:h-[400px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/multimodal-transport-banner.jpg"
          alt="Multimodal Transport Service"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">MULTIMODAL TRANSPORT SERVICE</h1>
        <div className="flex items-center text-sm md:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <span className="mx-2">›</span>
          <span>Multimodal Transport Service</span>
        </div>
      </div>
    </section>

    {/* Service Navigation */}
    <section className="bg-gray-100 py-4 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Eco LOGISTICS SERVICES</h3>
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
              <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                <Link href="/services/rail-freight" className="block text-gray-700">
                  Rail Freight Service
                </Link>
              </li>
              <li className="bg-teal-500 text-white px-4 py-2 rounded">
                <Link href="/services/multimodal-transport" className="block">
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
                  Multimodal transport is the seamless integration of two or more modes of transportation to move goods from origin to destination. Eco Global Delivery specializes in creating efficient multimodal solutions that combine the strengths of air, sea, rail, and road transport to optimize your supply chain.
                </p>
                <p className="text-gray-700 mb-4">
                  Our multimodal transport service offers a comprehensive door-to-door solution that handles every aspect of your shipment's journey. By strategically combining different transport modes, we can reduce costs, minimize transit times, and lower the environmental impact of your logistics operations.
                </p>
                <p className="text-gray-700 mb-4">
                  With a single point of contact and a unified documentation process, multimodal transport simplifies complex international shipping. Our experienced team coordinates all aspects of your shipment, ensuring smooth transitions between transport modes and providing real-time visibility throughout the entire journey.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Benefits of Multimodal Transport</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Reduced overall transportation costs through optimized routing</li>
                  <li>Faster transit times by utilizing the most efficient combination of transport modes</li>
                  <li>Enhanced reliability with backup options if one mode faces disruption</li>
                  <li>Lower carbon footprint by incorporating eco-friendly transport options</li>
                  <li>Simplified administration with a single contract and point of contact</li>
                  <li>Reduced handling and potential damage with specialized equipment</li>
                  <li>Greater flexibility to adapt to changing market conditions</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Our Multimodal Expertise</h3>
                  <p className="text-gray-700 mb-4">
                    Eco Global Delivery has developed extensive expertise in designing and executing multimodal transport solutions across diverse industries and geographies. Our global network of partners and agents ensures seamless coordination at every transfer point.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We specialize in complex multimodal routes that might include sea-air combinations for time-sensitive shipments, rail-road solutions for inland destinations, or comprehensive door-to-door services that utilize multiple transport modes to optimize efficiency.
                  </p>
                  <p className="text-gray-700">
                    Our advanced tracking systems provide complete visibility of your cargo throughout its journey, regardless of which transport mode is being used at any given time. This end-to-end transparency allows for proactive management and immediate response to any potential disruptions.
                  </p>
                </div>
                <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                  <Image
                    src="/images/multimodal-transport-operations.jpg"
                    alt="Multimodal transport operations"
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
                      "Eco Global Delivery' multimodal solution cut our shipping costs by 22% while reducing transit time by nearly a week. Their ability to seamlessly coordinate between ocean and rail transport has transformed our supply chain efficiency."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src="/marcus.jpg"
                          alt="Marcus L."
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-bold">Marcus L.</p>
                        <p className="text-sm text-gray-500">Global Supply Chain Director, TechInnovate Inc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                    <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-4 relative z-10">
                      "When our usual shipping route was disrupted by severe weather, Eco Global Delivery quickly rerouted our shipment using their multimodal network. Their flexibility and problem-solving approach ensured we met our delivery deadlines despite the challenges."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src="/sophia.jpg"
                          alt="Sophia R."
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-bold">Sophia R.</p>
                        <p className="text-sm text-gray-500">Logistics Manager, Precision Manufacturing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                  Why Choose Eco Global Delivery for Multimodal Transport:
                </h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-800">
                        Integrated Global Network
                      </h4>
                      <p className="text-gray-700">
                        Our extensive network spans across continents, with strategic partnerships at key transport hubs worldwide. This global presence allows us to create seamless connections between different transport modes, ensuring your cargo moves efficiently regardless of destination.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-800">Advanced Technology Integration</h4>
                      <p className="text-gray-700">
                        Our proprietary tracking platform provides real-time visibility across all transport modes, allowing you to monitor your shipment's progress from origin to destination. This transparency enables proactive management and immediate response to any potential disruptions.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-800">Customized Solutions</h4>
                      <p className="text-gray-700">
                        We understand that every supply chain has unique requirements. Our team analyzes your specific needs and designs tailored multimodal solutions that optimize for your priorities, whether they're cost reduction, speed, reliability, or environmental impact.
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
                        alt="Warehousing & Distribution Service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2">Warehousing & Distribution</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Complement your multimodal transport with our strategic warehousing solutions, offering inventory management, order fulfillment, and distribution services.
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
                        src="/images/customs-clearance-banner.jpg"
                        alt="Customs Clearance Service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2">Customs Clearance Service</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Our customs clearance expertise ensures smooth border crossings for your multimodal shipments, with proper documentation and compliance management.
                      </p>
                      <Link
                        href="/services/customs-clearance"
                        className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                      >
                        MORE INFO <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src="/images/cargo-insurance.jpg"
                        alt="Cargo Insurance Services"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2">Cargo Insurance Services</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Protect your multimodal shipments with comprehensive cargo insurance coverage, providing peace of mind throughout the entire transport journey.
                      </p>
                      <Link
                        href="/services/cargo-insurance"
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
