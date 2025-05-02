import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HouseholdAndAutosService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/household-autos-banner.jpg"
            alt="Household Goods & Autos"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">HOUSEHOLD GOODS & AUTOS</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Household Goods & Autos</span>
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
                <li className="hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                  <Link href="/services/foreign-to-foreign" className="block text-gray-700">
                    Foreign to Foreign
                  </Link>
                </li>
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/household-autos" className="block">
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
                    Eco Global Delivery specializes in the international relocation of household goods and vehicles, providing 
                    comprehensive solutions for individuals, families, and corporate clients making cross-border moves. 
                    Our personalized approach ensures that your personal belongings and vehicles arrive safely at your new 
                    destination, allowing you to focus on the other aspects of your international transition.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With over two decades of experience in international relocations, we understand that household goods 
                    and vehicles represent more than just possessions—they're essential parts of your life and often carry 
                    significant emotional value. Our dedicated team of relocation specialists treats your belongings with 
                    the utmost care and respect throughout the entire moving process.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Eco Global Delivery offers door-to-door service for household goods and vehicles, handling every stage of 
                    the relocation process from professional packing at your origin residence to final delivery and 
                    setup at your new home. Our services include custom crating for valuable items, specialized vehicle 
                    transport, secure warehousing, comprehensive insurance coverage, and expert customs clearance.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    We recognize that every international move presents unique challenges and requirements. Our team 
                    works closely with you to develop a customized relocation plan that addresses your specific needs, 
                    timeline, and budget considerations. Whether you're relocating for work, retirement, or personal 
                    reasons, we tailor our approach to ensure a smooth and stress-free experience.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Eco Global Delivery leverages advanced tracking technology to provide real-time visibility into the 
                    status and location of your household goods and vehicles throughout transit. Our customer portal 
                    allows you to monitor your shipment's progress, access important documentation, and communicate 
                    directly with your dedicated move coordinator at any time.
                  </p>
                  <p className="text-gray-700">
                    With an extensive global network spanning 130+ countries, Eco Global Delivery has the expertise and 
                    resources to manage relocations to virtually any destination worldwide. Our local knowledge of 
                    customs regulations, import restrictions, and documentation requirements ensures compliance with 
                    all applicable laws and prevents unexpected delays or complications during your international move.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Household Goods & Autos Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      Eco Global Delivery provides comprehensive services for household goods transportation, including 
                      professional packing and unpacking, custom crating for fragile or high-value items, specialized 
                      handling for artwork and antiques, and secure containerization for ocean transit. Our experienced 
                      packing teams use high-quality materials and proven techniques to ensure maximum protection for 
                      your belongings.
                    </p>
                    <p className="text-gray-700 mb-4">
                      For vehicle relocations, we offer multiple transportation options including containerized shipping, 
                      Roll-on/Roll-off (RoRo) service, and air freight for luxury or classic vehicles. Our vehicle 
                      processing includes thorough documentation, proper securing for transit, comprehensive insurance 
                      coverage, and assistance with destination registration and compliance requirements.
                    </p>
                    <p className="text-gray-700">
                      Our services extend beyond transportation to include temporary storage solutions, customs clearance 
                      assistance, quarantine compliance for certain destinations, insurance arrangement, and destination 
                      services such as home finding, school search, and cultural orientation. This end-to-end support 
                      ensures a seamless transition to your new location.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/household-goods-packing.jpg"
                      alt="Professional packing of household goods"
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
                        "Moving our family from Chicago to Singapore was a daunting prospect, but Eco Global Delivery made 
                        the entire process remarkably smooth. Their attention to detail during packing was impressive—
                        not a single item was damaged. Their guidance through the complex customs process saved us 
                        countless hours and potential headaches. I particularly appreciated their transparent 
                        communication throughout the journey."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/james.jpg"
                            alt="James T."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">James T.</p>
                          <p className="text-sm text-gray-500">Executive Relocation to Singapore</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Eco Global Delivery handled the shipping of my classic Porsche from Germany to Australia with 
                        exceptional care. They arranged specialized containerization and secured all necessary permits 
                        for importing a vintage vehicle. Their knowledge of Australia's strict quarantine and compliance 
                        requirements was invaluable. The car arrived in perfect condition, and their documentation was 
                        meticulous, making the registration process straightforward."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/sophia.jpg"
                            alt="Sophia K."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Sophia K.</p>
                          <p className="text-sm text-gray-500">Vintage Car Import to Australia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    The Top 3 Reasons to Choose Our Household Goods & Autos Services:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Personalized Service & White-Glove Care
                        </h4>
                        <p className="text-gray-700">
                          Every relocation is assigned a dedicated Move Coordinator who serves as your single point of 
                          contact throughout the entire process. This personalized approach ensures clear communication, 
                          prompt responses to questions, and tailored solutions for your specific requirements. Our teams 
                          are trained in the latest packing and handling techniques for high-value and fragile items, 
                          treating your belongings with the same care they would their own.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Global Expertise & Local Knowledge</h4>
                        <p className="text-gray-700">
                          With operations in 130+ countries, Eco Global Delivery combines worldwide reach with critical local 
                          expertise. Our teams understand the unique import regulations, customs procedures, and cultural 
                          considerations of each destination country. This knowledge helps prevent unexpected delays, 
                          additional costs, or compliance issues that often arise during international relocations, 
                          particularly for vehicle imports which face varying restrictions worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Comprehensive End-to-End Solutions</h4>
                        <p className="text-gray-700">
                          Unlike many relocation providers who outsource critical services, Eco Global Delivery offers a 
                          complete in-house solution for international moves. From initial consultation and survey to 
                          final delivery and setup, we maintain direct control over every aspect of your relocation. 
                          This integrated approach ensures consistent quality standards, seamless coordination between 
                          service stages, and accountability throughout the entire process—particularly important when 
                          coordinating both household goods and vehicle relocations.
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
                          Our specialized customs clearance services for household goods and vehicles ensure compliance 
                          with import regulations and expedite the release of your personal shipments at destination.
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
                          src="/images/roll-on-roll-off-banner.jpg"
                          alt="Roll on Roll Off"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Roll on Roll Off</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our RoRo service provides an economical and efficient transportation option for vehicles, 
                          with specialized handling procedures and global port coverage for international auto shipments.
                        </p>
                        <Link
                          href="/services/roll-on-roll-off"
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
                          Our specialized insurance solutions provide comprehensive coverage for household goods and 
                          vehicles during international transit, giving you peace of mind throughout your relocation.
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