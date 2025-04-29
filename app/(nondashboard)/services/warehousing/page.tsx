import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function WarehousingDistributionService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/warehousing-banner.jpg"
            alt="Warehousing & Distribution Service"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">WAREHOUSING & DISTRIBUTION</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Warehousing & Distribution</span>
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
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/warehousing" className="block">
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
                    Swift Logistics offers state-of-the-art warehousing and distribution solutions designed to optimize 
                    your supply chain performance. Our strategically located facilities across the globe provide secure 
                    storage, efficient inventory management, and seamless distribution services tailored to your 
                    specific business requirements.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With over two decades of experience in warehousing and distribution management, we leverage our 
                    expertise and advanced technology to deliver cost-effective solutions that enhance operational 
                    efficiency, reduce transit times, and improve overall customer satisfaction for businesses of all sizes.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our warehousing facilities are equipped with the latest security systems, inventory management 
                    technologies, and climate-controlled environments to ensure your products are stored in optimal 
                    conditions. Whether you need short-term storage or long-term warehousing solutions, Swift Logistics 
                    has the infrastructure and expertise to meet your needs.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Swift Logistics' comprehensive distribution network allows us to provide timely and reliable delivery 
                    services to any destination worldwide. We handle everything from order processing and picking to 
                    packing, labeling, and final delivery, ensuring a smooth and efficient flow of goods from warehouse 
                    to end customer.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our integrated warehouse management system offers real-time visibility into inventory levels, order 
                    status, and shipment tracking, empowering you with the information needed to make strategic business 
                    decisions. This transparency extends throughout the entire supply chain, from receipt of goods to 
                    final delivery.
                  </p>
                  <p className="text-gray-700">
                    By outsourcing your warehousing and distribution needs to Swift Logistics, you can focus on your 
                    core business activities while we handle the complexities of inventory management, order fulfillment, 
                    and distribution logistics. Our scalable solutions adapt to your changing needs, providing flexibility 
                    and agility in today's dynamic market environment.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Warehousing Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      Swift Logistics offers a wide range of warehousing solutions including general warehousing, 
                      bonded warehousing, temperature-controlled storage, hazardous materials storage, and high-security 
                      facilities for valuable goods. Our multi-client warehouses and dedicated facilities are designed 
                      to accommodate diverse product types and storage requirements.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We provide value-added services such as kitting, labeling, repackaging, quality control, and 
                      returns management to support your specific operational needs. Our experienced warehouse teams 
                      follow strict quality and safety standards to ensure proper handling of your products at all times.
                    </p>
                    <p className="text-gray-700">
                      With Swift Logistics' warehousing solutions, you benefit from reduced capital investment in 
                      facilities and equipment, lower operational costs, flexible storage capacity, and improved 
                      inventory accuracy, all contributing to a more efficient and profitable supply chain.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/warehouse-operations.jpg"
                      alt="Modern warehouse operations"
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
                        "Since partnering with Swift Logistics for our warehousing needs, we've experienced a 30% 
                        improvement in order fulfillment speed and a significant reduction in inventory discrepancies. 
                        Their attention to detail and proactive approach has transformed our distribution operations."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-5.jpg"
                            alt="Jennifer K."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Jennifer K.</p>
                          <p className="text-sm text-gray-500">Retail Solutions Group</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Swift Logistics' distribution services have been a game-changer for our e-commerce business. 
                        Their strategic warehouse locations and efficient order processing have dramatically reduced 
                        our delivery times and improved customer satisfaction scores by 40% within just six months."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-6.jpg"
                            alt="Marcus T."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Marcus T.</p>
                          <p className="text-sm text-gray-500">GrowFast E-Commerce</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    The Top 3 Reasons to Choose Our Warehousing & Distribution Services:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Strategic Warehouse Network
                        </h4>
                        <p className="text-gray-700">
                          Our strategically located warehousing facilities across major global trade hubs enable 
                          faster delivery times and reduced transportation costs. With over 45 distribution centers 
                          in 27 countries, we provide optimal storage solutions close to your key markets, giving you 
                          a competitive edge in customer service and operational efficiency.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Advanced Technology Integration</h4>
                        <p className="text-gray-700">
                          Our warehouses are equipped with cutting-edge technology including automated storage and 
                          retrieval systems, RF scanning, and cloud-based inventory management software. This 
                          technological infrastructure ensures 99.8% inventory accuracy, reduces processing times 
                          by up to 40%, and provides real-time visibility across your entire supply chain.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Customized Solutions with Scalability</h4>
                        <p className="text-gray-700">
                          We recognize that every business has unique requirements. Our flexible warehousing and 
                          distribution solutions are tailored to your specific needs and can scale as your business 
                          grows. Whether you need seasonal storage expansion, specialized handling for unique products, 
                          or multi-channel distribution support, our solutions adapt to your changing business landscape.
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
                          Our air freight services complement our warehousing solutions by providing rapid transit 
                          options for time-sensitive shipments, ensuring your goods reach their destination quickly 
                          and securely.
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
                          src="/images/customs-clearance-banner.jpg"
                          alt="Customs Clearance Service"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Customs Clearance Service</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our customs clearance expertise ensures smooth transitions from international shipments 
                          directly to our warehousing facilities, minimizing delays and streamlining your global 
                          supply chain.
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
                          Protect your inventory with our comprehensive cargo insurance options that provide coverage 
                          during storage and distribution, giving you peace of mind across your entire supply chain.
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