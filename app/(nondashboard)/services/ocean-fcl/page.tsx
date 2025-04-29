import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function OceanFCLService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ocean-fcl-banner.jpg"
            alt="Ocean FCL Import/Export"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">OCEAN FCL (IMPORT / EXPORT)</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Ocean FCL (Import / Export)</span>
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
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/ocean-fcl" className="block">
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
                    Swift Logistics offers comprehensive Ocean Full Container Load (FCL) solutions for importers and exporters 
                    worldwide. Our FCL service provides dedicated container space for your shipments, ensuring security, 
                    efficiency, and cost-effectiveness for larger cargo volumes. With strategic partnerships with major ocean 
                    carriers, we deliver reliable transit times on all major global trade routes.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our Ocean FCL services cater to businesses of all sizes, from established multinational corporations to 
                    growing small and medium enterprises. Whether you're importing raw materials, exporting finished products, 
                    or managing complex international supply chains, our FCL solutions provide the flexibility and reliability 
                    your business demands in today's competitive global marketplace.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Swift Logistics simplifies the complexities of international container shipping with our end-to-end FCL 
                    service offering. From origin pickup and container loading to destination delivery and customs clearance, 
                    our experienced teams manage every aspect of your containerized shipments with precision and care, allowing 
                    you to focus on your core business activities.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    We understand that visibility and control are essential for effective supply chain management. Our advanced 
                    digital platform provides real-time tracking of your FCL shipments, automated notifications at key milestones, 
                    and centralized document management to keep you informed and in control throughout the shipping process.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Swift Logistics' FCL services include specialized container types to accommodate diverse cargo requirements, 
                    including standard dry containers, high-cube containers, refrigerated containers, open-top containers, and 
                    flat rack containers. This versatility ensures we can transport virtually any type of cargo safely and 
                    efficiently across global markets.
                  </p>
                  <p className="text-gray-700">
                    With a global network spanning 130+ countries and strategic partnerships with major shipping lines, Swift 
                    Logistics provides competitive rates, reliable capacity, and extensive route coverage for your FCL shipments. 
                    Our volume agreements with carriers and optimized routing options help maximize efficiency and minimize costs 
                    in your international supply chain.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Ocean FCL Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      Swift Logistics offers tailored FCL solutions to meet diverse shipping needs. Our import services include 
                      origin coordination, carrier booking, documentation management, customs clearance, and final delivery. 
                      For exports, we provide container sourcing, loading supervision, documentation preparation, carrier 
                      coordination, and regulatory compliance assistance.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our container options range from standard 20' and 40' containers to specialized equipment including 
                      high-cube containers for volume-sensitive cargo, refrigerated containers for temperature-controlled 
                      goods, open-top containers for oversized items, and flat rack containers for machinery and equipment. 
                      This versatility allows us to accommodate virtually any cargo type efficiently.
                    </p>
                    <p className="text-gray-700">
                      Beyond basic transportation, our value-added services include cargo insurance, origin consolidation, 
                      destination deconsolidation, packaging solutions, warehousing, distribution, and customs consultation. 
                      We also offer specialized solutions for hazardous materials, temperature-sensitive goods, and high-value 
                      merchandise, ensuring proper handling for all cargo types.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/ocean-fcl-container.jpg"
                      alt="Ocean FCL container loading"
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
                        "Swift Logistics has transformed our import operations with their FCL service. Their proactive approach 
                        to documentation and customs clearance has reduced our port delays by over 40%. Their tracking system 
                        provides real-time visibility that helps us better plan our production schedules. Their team's responsiveness 
                        and attention to detail make them a valuable extension of our supply chain department."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-3.jpg"
                            alt="Michael R."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Michael R.</p>
                          <p className="text-sm text-gray-500">Supply Chain Director, Manufacturing Industry</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a growing e-commerce retailer, finding reliable FCL service was critical to our expansion into Asian 
                        markets. Swift Logistics not only secured competitive rates but also provided invaluable guidance on 
                        documentation requirements and import regulations. Their container loading supervision at origin ensured 
                        maximum space utilization and cargo protection. Their end-to-end service has simplified what could have 
                        been an overwhelming process."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-4.jpg"
                            alt="Anita L."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Anita L.</p>
                          <p className="text-sm text-gray-500">Operations Manager, E-commerce Company</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    The Top 3 Reasons to Choose Our Ocean FCL Services:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Global Network & Carrier Relationships
                        </h4>
                        <p className="text-gray-700">
                          With established partnerships with all major shipping lines and presence in 130+ countries, Swift 
                          Logistics offers unmatched global coverage for your FCL shipments. Our substantial volume agreements 
                          translate into competitive rates, priority space allocation during peak seasons, and alternative 
                          routing options when needed. Our global network ensures consistent service quality and local expertise 
                          at both origin and destination points worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Digital Supply Chain Visibility</h4>
                        <p className="text-gray-700">
                          Our proprietary digital platform transforms how you manage your ocean shipments, providing real-time 
                          container tracking, automated milestone alerts, exception management, and centralized document access. 
                          This enhanced visibility enables proactive issue resolution, informed decision-making, and improved 
                          inventory planning. Integration capabilities with your ERP or TMS systems further streamline your 
                          supply chain operations and eliminate manual data entry.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Customs & Compliance Expertise</h4>
                        <p className="text-gray-700">
                          Our specialized customs teams maintain up-to-date knowledge of ever-changing import/export regulations, 
                          documentation requirements, and tariff classifications worldwide. This expertise minimizes the risk of 
                          costly delays, penalties, or cargo holds. We provide proactive guidance on compliance matters, prepare 
                          and validate all required documentation, and ensure your FCL shipments move smoothly through customs 
                          at both origin and destination, maintaining supply chain integrity.
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
                          src="/images/customs-clearance-banner.jpg"
                          alt="Customs Clearance Service"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Customs Clearance Service</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our specialized customs clearance services ensure compliant and efficient processing of your FCL 
                          shipments through customs authorities worldwide.
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
                          src="/images/warehouse-operations.jpg"
                          alt="Warehousing & Distribution"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Warehousing & Distribution</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Complement your FCL shipments with our strategic warehousing solutions for inventory management, 
                          order fulfillment, and distribution services.
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
                          src="/images/cargo-insurance.jpg"
                          alt="Cargo Insurance Services"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Cargo Insurance Services</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Protect your valuable FCL shipments with our comprehensive cargo insurance solutions designed 
                          for international container transportation.
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