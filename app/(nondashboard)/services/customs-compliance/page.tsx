import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CustomsComplianceService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/customs-compliance-banner.jpg"
            alt="Customs Compliance"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CUSTOMS COMPLIANCE</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Customs Compliance</span>
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
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/customs-compliance" className="block">
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
                    Swift Logistics provides comprehensive customs compliance services designed to navigate the 
                    complexities of international trade regulations. Our team of certified customs specialists and 
                    global trade experts ensures your shipments meet all regulatory requirements across borders, 
                    minimizing delays and avoiding costly penalties.
                  </p>
                  <p className="text-gray-700 mb-4">
                    In today's rapidly changing regulatory environment, staying compliant with customs regulations 
                    is more challenging than ever. Our customs compliance services offer proactive solutions that 
                    keep pace with evolving international trade laws, documentation requirements, and tariff 
                    classifications, allowing you to focus on your core business operations.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We combine deep regulatory knowledge with advanced technology to deliver customs compliance 
                    solutions that streamline cross-border trade. From pre-shipment compliance verification to 
                    post-entry audits, our end-to-end approach ensures accuracy, transparency, and efficiency 
                    throughout the customs process.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Our customs compliance team works closely with customs authorities worldwide, maintaining strong 
                    relationships that facilitate smooth interactions and resolution of complex issues. This network, 
                    combined with our industry expertise, enables us to anticipate potential compliance challenges and 
                    implement effective mitigation strategies.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Swift Logistics' customized compliance solutions are tailored to your specific industry requirements, 
                    product characteristics, and global footprint. Whether you're dealing with restricted goods, 
                    controlled substances, or specialized products, we develop compliance protocols that address your 
                    unique needs while ensuring full regulatory adherence.
                  </p>
                  <p className="text-gray-700">
                    With Swift Logistics as your customs compliance partner, you benefit from reduced compliance risks, 
                    optimized duty and tax liabilities, accelerated customs clearance, and enhanced supply chain 
                    visibility. Our commitment to compliance excellence supports your business growth while protecting 
                    your reputation in the global marketplace.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Customs Compliance Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      Swift Logistics offers a comprehensive range of customs compliance services, including tariff 
                      classification, valuation analysis, country of origin determination, and special trade program 
                      qualification. Our solutions ensure accurate declarations and full compliance with all applicable 
                      regulations, reducing the risk of delays, fines, and penalties.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We provide detailed compliance audits and risk assessments that identify potential vulnerabilities 
                      in your customs processes. Based on these findings, we develop robust compliance programs with 
                      clear guidelines, procedures, and internal controls to address risks and ensure ongoing regulatory 
                      adherence.
                    </p>
                    <p className="text-gray-700">
                      Our team also offers specialized services for complex compliance scenarios, including binding 
                      ruling requests, prior disclosures, protest filings, and focused assessment support. These 
                      services help resolve challenging compliance issues and establish favorable precedents for 
                      future transactions.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/customs-compliance-documents.jpg"
                      alt="Customs compliance documents"
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
                        "Swift Logistics' customs compliance team has been instrumental in streamlining our global 
                        operations. Their proactive approach to regulatory changes and attention to detail has virtually 
                        eliminated customs delays and saved us thousands in potential penalties. They truly function as 
                        an extension of our international team."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-3.jpg"
                            alt="Sarah J."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Sarah J.</p>
                          <p className="text-sm text-gray-500">Global Compliance Director, TechExports Inc.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a pharmaceutical company, we face complex regulatory requirements for our international 
                        shipments. Swift Logistics provides expert guidance that ensures our products move smoothly 
                        across borders while maintaining full compliance with all applicable regulations. Their 
                        knowledge of controlled substance requirements is particularly valuable to our business."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-5.jpg"
                            alt="Michael R."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Michael R.</p>
                          <p className="text-sm text-gray-500">Supply Chain Manager, MediPharm Solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    The Top 3 Reasons to Choose Our Customs Compliance Services:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Certified Expertise & Global Knowledge
                        </h4>
                        <p className="text-gray-700">
                          Our team includes licensed customs brokers, certified customs specialists, and trade compliance 
                          experts with decades of combined experience. This deep expertise is complemented by our global 
                          network of local compliance professionals who provide on-the-ground knowledge of regional 
                          regulations and practices across 130+ countries, ensuring comprehensive compliance coverage.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Advanced Compliance Technology</h4>
                        <p className="text-gray-700">
                          We leverage sophisticated compliance management systems that automate documentation verification, 
                          perform real-time regulatory checks, and maintain comprehensive audit trails. Our technology 
                          platforms integrate with customs authorities worldwide, providing instant updates on regulatory 
                          changes and enabling digital submission of declarations for faster processing and reduced error rates.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Proactive Risk Management</h4>
                        <p className="text-gray-700">
                          Rather than simply reacting to compliance issues, we implement proactive risk management strategies 
                          that identify and address potential problems before they impact your supply chain. Our comprehensive 
                          compliance assessments, regular process reviews, and continuous monitoring of regulatory developments 
                          ensure your operations remain ahead of compliance requirements while minimizing risks and liabilities.
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
                          Our customs clearance services provide efficient processing of import and export documentation, 
                          duties calculation, and regulatory compliance to ensure smooth passage of your goods across borders.
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
                          src="/images/foreign-to-foreign-operations.jpg"
                          alt="Foreign to Foreign"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Foreign to Foreign</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our foreign-to-foreign services manage complex compliance requirements for shipments moving between 
                          countries without entering your home jurisdiction, ensuring full regulatory adherence.
                        </p>
                        <Link
                          href="/services/foreign-to-foreign"
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
                          Our comprehensive cargo insurance solutions protect your shipments against loss, damage, and liability 
                          risks, complementing our compliance services for complete supply chain protection.
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