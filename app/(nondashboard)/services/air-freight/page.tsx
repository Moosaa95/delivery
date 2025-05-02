import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AirFreightService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/airfreight-hero.jpg"
            alt="Air Freight Service"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">AIR FREIGHT SERVICE</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Air Freight Service</span>
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
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/air-freight" className="block">
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
                  Eco Global Delivery has a mission to provide our customers with safe and efficient transportation
                    services around the globe. Our company has proved itself through a steadily strong performance as an
                    air freight forwarder, and is up to use the most modern and forward-thinking solutions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our success stems from being able to provide the fastest flights on the most suitable routes with
                    the best packing options. We are here to help you in finding the best available opportunities for
                    the services you request choosing the best suited environment for your shipments is our core
                    mission. Being able to satisfy that on a regular basis defines our success.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Whatever your deadline or destination, Eco Global Delivery provides fast, reliable and flexible air
                    freight solutions. We cover all major airports across the globe and overseas, offering advice on the
                    best routes, quickest transit times and a range of options to suit your timescale requirements and
                    budget. Our staff work closely with reputable air carriers, ensuring you faster and hassle-free
                    clearance of goods.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                  Eco Global Delivery is an international forwarder specialized in air transportation forwarding your
                    shipments destined worldwide. Over the year, our best in class air cargo services has satisfied huge
                    bandwidth of customers. Our well trained and experienced team strives to find the most cost
                    efficient solutions to forward your freight by air.
                  </p>
                  <p className="text-gray-700 mb-4">
                    By using our international network and relations we make sure our clients have the best forwarding
                    solutions for their cargo. Eco Global Delivery has been providing time-definite domestic and
                    international air freight services to satisfied customers. Our internal expertise and relationships
                    with all major air carriers is unparalleled in the marketplace.
                  </p>
                  <p className="text-gray-700">
                    Our knowledge and strong partner relationships allow us to offer customers reliable, flexible, and
                    cost-effective air-freight shipping solutions, whether your needs are for domestic or international
                    air cargo transport services.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Mission & Vision</h3>
                    <p className="text-gray-700 mb-4">
                      As a result of our dedication to customer service excellence and professionalism, we have earned a
                      significant national and international reputation as a reliable business partner to enterprises of
                      any size or industry.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Are you ready to expand your business, to reach new destinations and to enter different markets?
                      Trust our experience in international transportation and let us be your reliable partner in
                      lifting your commercial activities to another level!
                    </p>
                    <p className="text-gray-700">
                      We have the necessary equipment, manpower and expertise to offer an integral approach to transport
                      that includes a wide range of transportation, logistics and warehouse services worldwide.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/air.jpg"
                      alt="Air freight cargo loading"
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
                        "Eco Global Delivery is a game changer! The customer service is unmatched and their ability to
                        handle the types of chemicals I send their way makes them the best choice for moving hazardous
                        cargo hands down."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/vic.jpg"
                            alt="Vic B."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Vic B.</p>
                          <p className="text-sm text-gray-500">Chemical Manufacturing Inc.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Eco Global Delivery has shown that they are the best company out there to handle my freight. Their
                        attention to detail and commitment to on-time delivery has made them our exclusive logistics
                        partner."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/deborah.jpg"
                            alt="Deborah C."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Deborah C.</p>
                          <p className="text-sm text-gray-500">Global Exports Ltd.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    The Top 3 Reasons Why You Should Contact Us Today:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          We can choose the best solution for you!
                        </h4>
                        <p className="text-gray-700">
                          We organize nearly 132000+ movements per year and have 370 network offices around the globe.
                          Eco Global Delivery has more than 21 years of experience in the sphere of international
                          transportation and logistics, which makes us a reliable and competent partner to our
                          customers.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">We put people first!</h4>
                        <p className="text-gray-700">
                          We build strong, ethical and long-term partnerships with our customers and carriers. Our
                          professionals are well trained and knowledgeable, ready to meet customers needs and answer
                          their questions. It is our belief that the working process should be easy, flexible, and
                          transparent.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Our focus is on innovation!</h4>
                        <p className="text-gray-700">
                          We believe that the services, offered by our company, should satisfy the high expectations of
                          our customers. We are dedicated in creating added value for our customers by implementing
                          modern technology and avant-garde know-how in our work. That is why the desire of constant
                          improvement is the driving force behind our transportation business.
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
                          src="/images/roll-on-roll-off-banner.jpg"
                          alt="Roll On Roll Off"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Roll On Roll Off</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          You could benefit from our RO/RO service as a low-cost method for transporting vehicles of any
                          kind – from cars, motorcycles, ATVs, to trucks, boats and construction machinery.
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
                          src="/images/ocean-fcl-container.jpg"
                          alt="Ocean FCL (Import / Export)"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Ocean FCL (Import / Export)</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Single point of contact: Shipping internationally can be a complex process. Here at Eco Global Delivery, we minimize the complexity by offering a single point of contact.
                        </p>
                        <Link
                          href="/services/ocean-fcl"
                          className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                        >
                          MORE INFO <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src="/images/customs-compliance-banner.jpg"
                          alt="Customs Compliance"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Customs Compliance</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Per United States Customs regulations, all importers are required to acquire an Import Bond,
                          which provides the necessary permissions to importers to clear their inbound cargo.
                        </p>
                        <Link
                          href="/services/customs-compliance"
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
