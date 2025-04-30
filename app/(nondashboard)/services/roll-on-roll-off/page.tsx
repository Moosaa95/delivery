import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function RollOnRollOffService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/roll-on-roll-off-banner.jpg"
            alt="Roll On Roll Off Services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">ROLL ON ROLL OFF</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Roll On Roll Off</span>
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
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/roll-on-roll-off" className="block">
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
                    Eco Global Delivery offers comprehensive Roll-on/Roll-off (RoRo) shipping services designed for efficient 
                    transportation of wheeled cargo including vehicles, trucks, trailers, agricultural equipment, construction 
                    machinery, and military vehicles. Our RoRo solutions provide a cost-effective alternative to container 
                    shipping for oversized and wheeled cargo that can be driven or towed onto specialized vessels.
                  </p>
                  <p className="text-gray-700 mb-4">
                    RoRo transportation utilizes purpose-built vessels with internal ramps and multiple decks designed to 
                    accommodate wheeled cargo of various dimensions. These specialized ships allow vehicles and rolling 
                    equipment to be driven directly on and off the vessel, eliminating the need for cranes or specialized 
                    lifting equipment required in traditional container or break-bulk shipping methods.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Eco Global Delivery has established partnerships with premier RoRo carriers operating regular services across 
                    major global trade routes. Our extensive network allows us to offer frequent sailings, competitive rates, 
                    and reliable schedules for your wheeled cargo requirements. Whether you're relocating a single vehicle or 
                    managing a fleet of heavy equipment, our RoRo services provide dependable and secure transportation solutions.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Our RoRo services feature comprehensive cargo preparation protocols to ensure your vehicles and equipment 
                    arrive in optimal condition. Eco Global Delivery manages all aspects of loading preparation, including fuel 
                    level management, battery disconnection, alarm deactivation, and securing of loose components according 
                    to maritime regulations and carrier requirements.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The safe handling of your valuable vehicles and equipment is our top priority throughout the RoRo shipping 
                    process. Our service includes professional lashing and securing by certified personnel using specialized 
                    equipment designed specifically for vehicle transportation. Each unit is individually secured to the vessel 
                    deck using appropriate lashing points to prevent movement during ocean transit.
                  </p>
                  <p className="text-gray-700">
                    Eco Global Delivery manages all documentation requirements for international RoRo shipments, including bills of 
                    lading, certificates of origin, commercial invoices, and vehicle-specific documentation such as title 
                    certificates and export permits. Our customs specialists are well-versed in vehicle import/export regulations 
                    across major markets, ensuring compliant and efficient border crossings for your wheeled cargo.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our RoRo Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      Eco Global Delivery offers comprehensive commercial vehicle transportation services for car manufacturers, 
                      dealers, and fleet operators. Our RoRo solutions efficiently handle bulk shipments of new and used 
                      automobiles, providing specialized preparation, documentation, and tracking throughout the transportation 
                      process. We maintain strict quality standards to ensure vehicles arrive in pristine condition.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our heavy equipment RoRo services cater to construction, mining, agricultural, and industrial sectors 
                      requiring transportation of oversized wheeled machinery. We handle specialized documentation requirements, 
                      equipment preparation guidelines, and customs regulations specific to heavy machinery exports and imports. 
                      Our solutions include both self-propelled equipment and machinery requiring towing or specialized handling.
                    </p>
                    <p className="text-gray-700">
                      Eco Global Delivery provides specialized RoRo services for high-value, oversized, and project cargo. Our 
                      expertise includes transportation of buses, trucks, specialized vehicles, military equipment, and customized 
                      machinery. For oversized cargo exceeding standard dimensions, we offer comprehensive route planning, permit 
                      acquisition, and coordination with port authorities to ensure seamless transit from origin to destination.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/roro-ship-loading.jpg"
                      alt="RoRo vessel loading vehicles"
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
                        "Eco Global Delivery has been handling our quarterly shipments of excavators and wheel loaders between 
                        Europe and Australia for over three years. Their RoRo service has consistently provided reliable 
                        transit times and excellent care of our equipment. Their documentation expertise has eliminated customs 
                        delays we previously experienced, and their transparent tracking keeps us informed throughout the 
                        shipping process."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-7.jpg"
                            alt="Robert K."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Robert K.</p>
                          <p className="text-sm text-gray-500">Supply Chain Director, Construction Equipment Manufacturer</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As an automotive dealer specializing in luxury vehicles, we needed a logistics partner who understood 
                        the unique requirements of high-value automobile shipping. Eco Global Delivery' RoRo service has exceeded 
                        our expectations with their attention to detail during vehicle preparation and their specialized 
                        handling procedures. The condition of vehicles upon arrival has been impeccable, which is critical for 
                        our discerning customers."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-8.jpg"
                            alt="Sophia L."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Sophia L.</p>
                          <p className="text-sm text-gray-500">Operations Manager, Luxury Auto Imports</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    The Top 3 Reasons to Choose Our RoRo Services:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Extensive Global RoRo Network
                        </h4>
                        <p className="text-gray-700">
                          Eco Global Delivery maintains strategic partnerships with leading RoRo carriers operating across all major 
                          global trade routes. Our extensive network provides access to frequent sailings, reliable schedules, 
                          and specialized vessel types designed for specific cargo categories. This comprehensive coverage allows 
                          us to offer optimal routing options regardless of your origin or destination requirements, with service 
                          to major automotive ports and terminals worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Specialized Vehicle Handling Expertise</h4>
                        <p className="text-gray-700">
                          Our RoRo team brings decades of specialized experience in vehicle and equipment transportation logistics. 
                          This expertise translates into meticulous preparation protocols, proper securing techniques, and handling 
                          procedures tailored to each specific vehicle type. From high-value luxury automobiles to oversized mining 
                          equipment, our specialized knowledge ensures your wheeled cargo receives appropriate care throughout the 
                          transportation process, minimizing the risk of damage during transit.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Integrated Door-to-Door Solutions</h4>
                        <p className="text-gray-700">
                          Eco Global Delivery offers comprehensive door-to-door RoRo services that extend beyond port-to-port 
                          transportation. Our integrated solutions encompass inland transportation at both origin and destination, 
                          temporary storage, customs clearance, and final delivery. This end-to-end approach provides seamless 
                          coordination across all transportation phases, simplifying the logistics process for our clients while 
                          ensuring consistent quality standards and accountability throughout the entire movement.
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
                          src="/images/project-cargo-transport.jpg"
                          alt="Project Cargo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Project Cargo</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our specialized project cargo services handle oversized and complex shipments requiring customized 
                          transportation solutions and expert planning.
                        </p>
                        <Link
                          href="/services/project-cargo"
                          className="text-teal-600 font-medium flex items-center text-sm hover:text-teal-700 transition-colors"
                        >
                          MORE INFO <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src="/images/household-goods-packing.jpg"
                          alt="Household goods & Autos"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Household goods & Autos</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our comprehensive household goods and automotive shipping services provide seamless relocation solutions 
                          for individuals and families.
                        </p>
                        <Link
                          href="/services/household-autos"
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
                          Our specialized customs team manages vehicle-specific documentation and compliance requirements for 
                          smooth international border crossings.
                        </p>
                        <Link
                          href="/services/customs-clearance"
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