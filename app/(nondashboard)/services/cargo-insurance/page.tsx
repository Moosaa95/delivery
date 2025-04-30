import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CargoInsuranceService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cargo-insurance-banner.jpg"
            alt="Cargo Insurance Service"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CARGO INSURANCE SERVICES</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Cargo Insurance Services</span>
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
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/cargo-insurance" className="block">
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
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Protect Your Valuable Cargo</h2>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                  Eco Global Delivery provides comprehensive cargo insurance solutions designed to protect your valuable shipments against loss, damage, or theft during transportation. In today's global shipping environment, having proper insurance coverage is not just an option—it's a necessity for businesses that want to mitigate risk and ensure peace of mind.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our cargo insurance services offer protection beyond the limited liability coverage provided by carriers. While most shipping contracts include basic liability, these often cover only a fraction of your cargo's actual value, leaving you exposed to significant financial risk in case of unforeseen events.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We partner with world-class insurance providers to offer flexible, customizable insurance solutions tailored to the specific needs of your business and the unique requirements of your cargo. Whether you're shipping high-value electronics, perishable goods, industrial equipment, or standard commercial products, we have insurance options to meet your needs.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Why Cargo Insurance Matters</h3>
                  <p className="text-gray-700 mb-4">
                    Many shippers mistakenly believe that carrier liability is sufficient protection for their goods. However, standard carrier liability typically only covers a small portion of the actual value—often as little as $500 per shipping unit. Additionally, carriers are not liable for losses resulting from "acts of God" such as natural disasters, or other circumstances beyond their control.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With Eco Global Delivery cargo insurance, you can secure coverage for the full commercial invoice value of your goods, plus freight and other costs (up to 110% of value). This ensures that in the event of loss or damage, you won't be left bearing the financial burden.
                  </p>
                  <p className="text-gray-700">
                    Our insurance solutions are designed to provide broad coverage, rapid claims processing, and expert assistance throughout the claims process, allowing you to focus on your core business with confidence that your shipments are properly protected.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Insurance Coverage Options</h3>
                    <p className="text-gray-700 mb-4">
                      At Eco Global Delivery, we understand that different cargo types and shipping routes come with varying levels of risk. That's why we offer several insurance coverage options to match your specific needs:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                      <li><strong>All-Risk Coverage:</strong> Comprehensive protection against all risks of physical loss or damage from any external cause</li>
                      <li><strong>Named Perils Coverage:</strong> Protection against specific listed risks at a more economical premium</li>
                      <li><strong>Door-to-Door Coverage:</strong> Insurance that extends from the point of origin to final destination</li>
                      <li><strong>Warehouse-to-Warehouse Coverage:</strong> Protection that begins when goods leave the origin warehouse and continues until they arrive at the destination warehouse</li>
                      <li><strong>Single Shipment Insurance:</strong> Coverage for one-time shipments</li>
                      <li><strong>Open Cargo Policy:</strong> Continuous coverage for multiple shipments under one policy</li>
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/cargo-insurance.jpg"
                      alt="Cargo insurance protection"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Benefits of Our Cargo Insurance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="text-teal-500 text-2xl mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg mb-2">Complete Protection</h4>
                      <p className="text-gray-700">
                        Coverage for the full value of your goods against a wide range of risks including damage, theft, and total loss.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="text-teal-500 text-2xl mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                          <line x1="9" y1="9" x2="9.01" y2="9"></line>
                          <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg mb-2">Peace of Mind</h4>
                      <p className="text-gray-700">
                        Ship with confidence knowing your valuable cargo is protected throughout its journey, regardless of carrier limitations.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="text-teal-500 text-2xl mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg mb-2">Simplified Claims</h4>
                      <p className="text-gray-700">
                        Fast and streamlined claims process with dedicated support from our insurance specialists.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="text-teal-500 text-2xl mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          <path d="M7 15h0M2 9.5h20"></path>
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg mb-2">Cost-Effective</h4>
                      <p className="text-gray-700">
                        Competitive premiums that provide excellent value compared to the potential financial impact of uninsured loss.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="text-teal-500 text-2xl mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                          <path d="M2 17l10 5 10-5"></path>
                          <path d="M2 12l10 5 10-5"></path>
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg mb-2">Flexible Options</h4>
                      <p className="text-gray-700">
                        Customizable coverage levels and terms to meet the specific requirements of your shipments and budget.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="text-teal-500 text-2xl mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg mb-2">Expert Advice</h4>
                      <p className="text-gray-700">
                        Access to knowledgeable insurance specialists who can help you determine the right coverage for your specific needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Claims Process */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    Our Streamlined Claims Process
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Report the Claim
                        </h4>
                        <p className="text-gray-700">
                          Notify our insurance team as soon as damage or loss is discovered. Our dedicated claims specialists will guide you through the process and provide all necessary forms.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Document the Situation</h4>
                        <p className="text-gray-700">
                          Gather and submit all relevant documentation including photos of damage, transportation documents, commercial invoices, and packing lists. Our team will help you identify all necessary documentation.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Quick Resolution</h4>
                        <p className="text-gray-700">
                          Once all documentation is received, our insurance partners process claims quickly and efficiently, typically within 30 days. We handle all communication with insurance providers, allowing you to focus on your business while we advocate for your interests.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Client Success Story</h3>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                    <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-gray-700 italic mb-4 relative z-10">
                      "When a container of our specialized medical equipment was damaged during a storm at sea, I was deeply concerned about the financial impact. But Eco Global Delivery' cargo insurance coverage and claims team were exceptional. They processed our claim efficiently and we received full compensation within three weeks. Their insurance service has become an essential part of our logistics strategy."
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
                        <p className="text-sm text-gray-500">MedTech Innovations</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Services */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    Related Services You May Be Interested In
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
                          Our comprehensive sea freight solutions offer reliable and cost-effective transportation for shipments of all sizes across the world's major shipping routes.
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
                          alt="Customs Clearance Service"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Customs Clearance</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our experts navigate complex customs regulations and documentation requirements to ensure your shipments clear customs quickly with minimal delays.
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
                          src="/images/project-cargo-transport.jpg"
                          alt="Project Cargo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Project Cargo</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Specialized handling and transportation solutions for oversized, heavy, high-value, or complex cargo projects requiring detailed planning and execution.
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