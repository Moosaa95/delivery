import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ForeignToForeignService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/foreign-to-foreign-banner.jpg"
            alt="Foreign to Foreign"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">FOREIGN TO FOREIGN</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Foreign to Foreign</span>
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
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/foreign-to-foreign" className="block">
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
                  Eco Global Delivery specializes in Foreign to Foreign (F2F) transportation services, facilitating the 
                    seamless movement of goods between international locations without entering your home country. 
                    This specialized service addresses the unique challenges and opportunities presented by cross-border 
                    trade between third countries, helping businesses optimize their global supply chains.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our Foreign to Foreign solutions are designed for multinational companies, global distributors, 
                    and international manufacturers who need to move products directly from suppliers to customers 
                    across different countries. By eliminating unnecessary transit through your home country, we 
                    help reduce transportation costs, minimize handling, decrease transit times, and avoid redundant 
                    customs procedures.
                  </p>
                  <p className="text-gray-700 mb-4">
                  Eco Global Delivery leverages our extensive global network spanning 130+ countries to coordinate 
                    complex Foreign to Foreign shipments with precision and efficiency. Our local expertise in 
                    each region ensures compliance with all relevant regulations while our centralized management 
                    platform provides you with complete visibility and control throughout the entire process.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Our integrated technology solutions enable real-time tracking and monitoring of your Foreign to 
                    Foreign shipments, providing comprehensive visibility across multiple carriers, modes of transport, 
                    and international boundaries. This transparency allows for proactive management of potential 
                    disruptions and informed decision-making throughout the logistics process.
                  </p>
                  <p className="text-gray-700 mb-4">
                  Eco Global Delivery' Foreign to Foreign service includes expert management of all documentation, 
                    customs procedures, and regulatory requirements in both origin and destination countries. Our 
                    teams coordinate effectively across time zones and jurisdictions to ensure smooth operations and 
                    clear communication at every stage of the shipment journey.
                  </p>
                  <p className="text-gray-700">
                    With Eco Global Delivery as your Foreign to Foreign partner, you benefit from optimized transportation 
                    routes, reduced supply chain complexity, decreased inventory carrying costs, and enhanced global 
                    market responsiveness. Our specialized expertise in cross-border logistics enables your business 
                    to expand international operations with confidence and efficiency.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Foreign to Foreign Solutions</h3>
                    <p className="text-gray-700 mb-4">
                    Eco Global Delivery offers comprehensive Foreign to Foreign services across all major transportation 
                      modes, including air, sea, road, and rail. Our multimodal capabilities enable us to select the 
                      optimal combination of transportation methods based on your specific product requirements, 
                      timeline constraints, and budget considerations.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We provide specialized handling for various cargo types within our Foreign to Foreign service, 
                      including general cargo, temperature-controlled shipments, hazardous materials, oversized equipment, 
                      and high-value products. Each solution is tailored to the unique characteristics of your goods and 
                      the specific requirements of the origin and destination markets.
                    </p>
                    <p className="text-gray-700">
                      Our Foreign to Foreign services extend beyond basic transportation to include value-added options 
                      such as intermediate warehousing, cross-docking, consolidation, deconsolidation, labeling, quality 
                      inspection, and specialized packaging. These capabilities enable flexible supply chain strategies 
                      that enhance efficiency and responsiveness across your global operations.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/foreign-to-foreign-operations.jpg"
                      alt="Foreign to Foreign operations"
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
                        "Eco Global Delivery' Foreign to Foreign service has transformed our Asian distribution network. 
                        By moving products directly from our factories in China to customers throughout Southeast Asia, 
                        we've reduced transit times by 60% and lowered overall logistics costs by 25%. Their local teams 
                        in each country provide invaluable market knowledge and regulatory expertise."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-4.jpg"
                            alt="David L."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">David L.</p>
                          <p className="text-sm text-gray-500">Global Logistics Director, TechManufacture Corp</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a European retailer sourcing products globally and selling across multiple continents, 
                        Eco Global Delivery' Foreign to Foreign capability has been a game-changer for our business. 
                        Their ability to coordinate complex movements between our suppliers and distribution centers 
                        without involving our headquarters has simplified operations and accelerated our market expansion."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-6.jpg"
                            alt="Elena S."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Elena S.</p>
                          <p className="text-sm text-gray-500">Supply Chain VP, EuroGlobal Retail</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    The Top 3 Reasons to Choose Our Foreign to Foreign Services:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Global Network with Local Expertise
                        </h4>
                        <p className="text-gray-700">
                          Our extensive network covers 130+ countries with owned offices or trusted partners in all major 
                          global trade hubs. Each location is staffed with logistics professionals who understand local 
                          languages, customs procedures, regulatory requirements, and business practices. This combination 
                          of global reach and local knowledge ensures smooth operations across diverse international markets.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Centralized Control with Complete Visibility</h4>
                        <p className="text-gray-700">
                          Our proprietary technology platform provides centralized management of all Foreign to Foreign 
                          shipments while maintaining complete visibility across different regions and transportation modes. 
                          With real-time tracking, comprehensive documentation management, and automated status updates, you 
                          maintain control of your global shipments through a single, user-friendly interface regardless of 
                          their physical locations.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Optimized Global Supply Chain Solutions</h4>
                        <p className="text-gray-700">
                          Our Foreign to Foreign services go beyond basic transportation to include strategic supply chain 
                          optimization. We analyze your global flow of goods to identify opportunities for consolidation, 
                          route optimization, inventory positioning, and modal shifts that reduce costs and improve service 
                          levels. This consultative approach transforms international logistics from a necessary expense into 
                          a competitive advantage for your business.
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
                          src="/images/customs-compliance.jpg"
                          alt="Customs Compliance"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Customs Compliance</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our customs compliance services ensure your Foreign to Foreign shipments meet all regulatory 
                          requirements in origin, transit, and destination countries, preventing delays and penalties.
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
                          src="/images/multimodal-transport-operations.jpg"
                          alt="Multimodal Transport Service"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Multimodal Transport Service</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our multimodal transportation capabilities enable optimized Foreign to Foreign movements using 
                          the best combination of air, sea, road, and rail options for your specific requirements.
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
                          Our global network of warehousing facilities supports your Foreign to Foreign operations with 
                          strategic inventory positioning, cross-docking, and regional distribution capabilities.
                        </p>
                        <Link
                          href="/services/warehousing"
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