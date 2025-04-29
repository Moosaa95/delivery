import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CustomsClearanceService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/customs-clearance-banner.jpg"
            alt="Customs Clearance Service"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CUSTOMS CLEARANCE SERVICE</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Customs Clearance Service</span>
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
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/customs-clearance" className="block">
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
                    Swift Logistics offers comprehensive customs clearance services to streamline your international trade
                    operations. Our expert team navigates the complexities of global customs regulations, ensuring your
                    shipments clear customs efficiently and in full compliance with local laws and regulations.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With ever-changing international trade regulations, customs clearance can be one of the most challenging
                    aspects of global shipping. Our dedicated customs brokers have extensive experience working with customs
                    authorities worldwide and stay up-to-date with the latest regulations to prevent delays and avoid costly
                    penalties.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Whether you're importing or exporting goods, our customs clearance specialists will handle all documentation,
                    duty calculations, and communication with customs officials on your behalf. We pride ourselves on providing
                    transparent, reliable, and cost-effective customs solutions tailored to your specific business needs.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Swift Logistics' customs clearance services cover a wide range of shipments including standard commercial
                    goods, hazardous materials, perishable items, and high-value products. Our global network of customs brokers
                    ensures that your cargo moves smoothly through customs checkpoints anywhere in the world.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By leveraging the latest customs compliance technology and our established relationships with customs
                    authorities, we expedite the clearance process without compromising on compliance. Our advanced tracking
                    systems provide real-time updates on the status of your shipments, giving you complete visibility throughout
                    the customs clearance process.
                  </p>
                  <p className="text-gray-700">
                    Our customs clearance experts are available 24/7 to address any concerns and provide guidance on complex
                    customs matters. We believe that proactive communication and meticulous attention to detail are essential
                    for successful customs clearance operations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Customs Clearance Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      At Swift Logistics, we offer a comprehensive range of customs clearance services to meet the diverse needs
                      of our clients. We handle import and export declarations, duty and tax assessments, classification of goods,
                      and compliance with trade agreements and preferential tariff treatments.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our team can assist with obtaining necessary permits and licenses, managing temporary imports and exports,
                      handling ATA Carnets, and navigating complex regulations for specialized cargo such as dangerous goods or
                      items subject to special trade restrictions.
                    </p>
                    <p className="text-gray-700">
                      We also offer customs consulting services to help businesses optimize their international supply chains,
                      reduce costs, and ensure long-term compliance with global trade regulations.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/customs-clearance-process.jpg"
                      alt="Customs clearance process"
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
                        "Swift Logistics has transformed our customs clearance process. Their expertise has saved us countless
                        hours of paperwork and significantly reduced our shipment delays. Their proactive approach to potential
                        compliance issues is invaluable to our business."
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
                          <p className="text-sm text-gray-500">International Trading Co.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "After switching to Swift Logistics for our customs clearance needs, we've experienced a dramatic
                        improvement in efficiency. Their team's knowledge of international trade regulations has helped us
                        avoid costly penalties and optimize our duty payments."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-4.jpg"
                            alt="Sarah L."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Sarah L.</p>
                          <p className="text-sm text-gray-500">Global Imports Inc.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    The Top 3 Reasons to Choose Our Customs Clearance Service:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Expertise in Global Customs Regulations
                        </h4>
                        <p className="text-gray-700">
                          Our team of licensed customs brokers has extensive knowledge of customs regulations in over 100
                          countries. We stay current with changing trade policies and international agreements to ensure your
                          shipments comply with all requirements and benefit from available duty reductions and exemptions.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Advanced Technology Solutions</h4>
                        <p className="text-gray-700">
                          We utilize state-of-the-art customs management systems that integrate with global customs authorities,
                          allowing for electronic submission of declarations and real-time tracking of customs status. Our
                          technology platform minimizes paperwork, reduces errors, and speeds up the clearance process.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Personalized Customer Service</h4>
                        <p className="text-gray-700">
                          Each client is assigned a dedicated customs specialist who understands your specific industry
                          requirements and business objectives. Our team provides personalized guidance throughout the customs
                          process and is available around the clock to address any concerns or emergencies that may arise.
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
                          Our customs compliance services help you navigate complex regulations, secure import bonds, and
                          implement trade compliance programs that prevent violations and penalties.
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
                          src="/images/air.jpg"
                          alt="Air Freight Service"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Air Freight Service</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our air freight services provide fast, reliable transportation solutions for time-sensitive shipments,
                          with comprehensive customs clearance support at origin and destination.
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
                          src="/images/sea-freight.jpg"
                          alt="Sea Freight Service"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Sea Freight Service</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our comprehensive sea freight solutions include efficient customs clearance services at ports worldwide,
                          ensuring smooth transitions from vessel to final destination.
                        </p>
                        <Link
                          href="/services/sea-freight"
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