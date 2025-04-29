import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function BulkLiquidLogisticsService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bulk-liquid-banner.jpg"
            alt="Bulk Liquid Logistics"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">BULK LIQUID LOGISTICS</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Bulk Liquid Logistics</span>
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
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/bulk-liquid" className="block">
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
                    Swift Logistics offers specialized bulk liquid transportation solutions designed to meet the unique 
                    requirements of the chemical, food, pharmaceutical, and petroleum industries. With our extensive 
                    expertise in handling liquid cargo, we provide safe, compliant, and efficient logistics services for 
                    a wide range of products from non-hazardous food-grade liquids to complex chemical compounds.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our comprehensive bulk liquid logistics services encompass the entire supply chain, including tank 
                    container leasing, multimodal transportation, storage solutions, and regulatory compliance management. 
                    We leverage our global network of specialized equipment, dedicated facilities, and industry 
                    partnerships to deliver customized solutions that ensure product integrity throughout transit.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Understanding the critical nature of bulk liquid transportation, Swift Logistics implements 
                    rigorous safety protocols and quality control measures at every stage of the logistics process. 
                    Our team of highly trained professionals has extensive experience handling sensitive and 
                    hazardous liquid products, ensuring your cargo reaches its destination safely and on schedule.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Swift Logistics maintains a diverse fleet of specialized equipment for bulk liquid transportation, 
                    including ISO tank containers, flexitanks, road tankers, and specialized bulk vessels. This variety 
                    allows us to select the optimal equipment configuration for your specific product requirements, 
                    volume considerations, and destination constraints.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our digital tracking and monitoring systems provide real-time visibility into your shipment's 
                    location, temperature, pressure, and other critical parameters. This technology-driven approach 
                    ensures proactive management of your bulk liquid cargo and immediate response to any potential 
                    issues that may arise during transit.
                  </p>
                  <p className="text-gray-700">
                    With Swift Logistics as your bulk liquid logistics partner, you benefit from our industry-specific 
                    knowledge, global capabilities, and unwavering commitment to operational excellence. We understand 
                    the complexities involved in transporting liquid cargo and deliver solutions that balance safety, 
                    compliance, efficiency, and cost-effectiveness.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Bulk Liquid Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      Swift Logistics offers a comprehensive range of bulk liquid transportation options, including 
                      ISO tank containers for hazardous and high-value liquids, flexitanks for non-hazardous products, 
                      and specialized IBC solutions for smaller volume requirements. Each solution is selected based on 
                      your specific product characteristics, volume needs, and destination requirements.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our services include temperature-controlled transportation for sensitive products, specialized 
                      handling for hazardous materials, and dedicated cleaning and preparation protocols that meet the 
                      highest industry standards. We also provide bulk liquid storage solutions at strategic locations 
                      worldwide, supporting efficient supply chain operations.
                    </p>
                    <p className="text-gray-700">
                      With expertise in international regulations governing the transportation of liquid cargo, our team 
                      manages all documentation, permits, and compliance requirements, ensuring smooth border crossings 
                      and regulatory adherence throughout the logistics process.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/bulk-liquid-tanks.jpg"
                      alt="Bulk liquid tank containers"
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
                        "Swift Logistics has transformed our chemical transportation operations. Their expertise 
                        in handling our sensitive products and navigating complex regulations has eliminated shipping 
                        delays and ensured consistent product quality upon arrival. Their team's responsiveness and 
                        attention to detail make them an invaluable partner."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-7.jpg"
                            alt="Robert M."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Robert M.</p>
                          <p className="text-sm text-gray-500">ChemSolutions International</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a food oil manufacturer, maintaining product integrity is critical to our business. 
                        Swift Logistics' flexitank solutions and temperature monitoring capabilities have significantly 
                        reduced contamination risks and improved our export operations. Their global network has also 
                        opened new markets for our products."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-8.jpg"
                            alt="Amelia P."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Amelia P.</p>
                          <p className="text-sm text-gray-500">Golden Harvest Oils</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    The Top 3 Reasons to Choose Our Bulk Liquid Logistics Services:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Specialized Expertise & Equipment
                        </h4>
                        <p className="text-gray-700">
                          With over 15 years of experience in bulk liquid logistics, our team brings specialized 
                          knowledge in handling diverse liquid products including chemicals, edible oils, pharmaceuticals, 
                          and petroleum products. Our extensive fleet of ISO tanks, flexitanks, and specialized containers 
                          ensures we always have the right equipment for your specific product requirements and volume needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Comprehensive Safety Protocols</h4>
                        <p className="text-gray-700">
                          Safety is paramount in bulk liquid transportation. Our rigorous safety management system includes 
                          thorough equipment inspection procedures, specialized driver training, real-time monitoring of 
                          critical parameters, and detailed contingency planning. Our exceptional safety record demonstrates 
                          our commitment to protecting your product, people, and the environment throughout the logistics process.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Global Network with Local Expertise</h4>
                        <p className="text-gray-700">
                          Our extensive global network spans over 130 countries, with specialized bulk liquid facilities at 
                          key transportation hubs worldwide. We combine this global reach with local expertise in regional 
                          regulations, infrastructure capabilities, and market conditions. This unique combination ensures 
                          efficient operations and compliance with all applicable standards, regardless of origin or destination.
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
                          src="/images/sea-freight.jpg"
                          alt="Sea Freight Service"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Sea Freight Service</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our sea freight services provide efficient transportation options for bulk liquid cargo via 
                          specialized vessels and tank containers, with global port coverage and comprehensive logistics support.
                        </p>
                        <Link
                          href="/services/sea-freight"
                          className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                        >
                          MORE INFO <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src="/images/customs-compliance.jpg"
                          alt="Customs Compliance"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Customs Compliance</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our customs compliance services ensure your bulk liquid shipments meet all regulatory requirements 
                          for hazardous materials, controlled substances, and specialized products during international transport.
                        </p>
                        <Link
                          href="/services/customs-compliance"
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
                          Our specialized cargo insurance solutions for bulk liquid transportation provide comprehensive coverage 
                          against contamination, leakage, temperature variation, and other risks specific to liquid products.
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