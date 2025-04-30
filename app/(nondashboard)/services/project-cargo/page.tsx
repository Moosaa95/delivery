import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectCargoService() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/project-cargo-banner.jpg"
            alt="Project Cargo Services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">PROJECT CARGO</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="mx-2">›</span>
            <span>Project Cargo</span>
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
                <li className="bg-teal-500 text-white px-4 py-2 rounded">
                  <Link href="/services/project-cargo" className="block">
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
                    Eco Global Delivery specializes in the transportation of complex, oversized, and high-value project cargo 
                    for engineering, construction, energy, and industrial sectors worldwide. Our project cargo services 
                    are designed to handle the unique challenges of transporting heavy equipment, machinery, infrastructure 
                    components, and industrial materials that exceed standard shipping dimensions and weight limitations.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our dedicated project cargo team brings decades of specialized experience in planning and executing 
                    logistics for major infrastructure projects, power plants, manufacturing facilities, mining operations, 
                    oil and gas developments, and renewable energy installations. We understand that project cargo requires 
                    exceptional attention to detail, customized planning, and flawless execution to ensure on-time delivery 
                    without compromising safety or equipment integrity.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Eco Global Delivery offers end-to-end project cargo solutions that encompass every aspect of your oversized 
                    transportation needs. From preliminary feasibility studies and route surveys to specialized equipment 
                    procurement, documentation management, customs clearance, and final site delivery, our comprehensive 
                    approach ensures seamless coordination across all project phases and stakeholders.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    Every project cargo assignment begins with detailed analysis and planning. Our engineering team conducts 
                    thorough assessments of cargo dimensions, weight distribution, lifting requirements, and structural 
                    considerations to determine the optimal handling methods, equipment needs, and transportation routes. 
                    This meticulous preparation identifies potential challenges early and develops effective mitigation 
                    strategies before mobilization begins.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Eco Global Delivery maintains an extensive global network of specialized equipment providers, carriers, port 
                    operators, and heavy-lift specialists. This network enables us to source and deploy the most appropriate 
                    resources for your specific project requirements, whether you need heavy-lift vessels, multi-axle trailers, 
                    specialized cranes, or custom lifting equipment. Our established relationships ensure equipment availability 
                    even in remote locations or during high-demand periods.
                  </p>
                  <p className="text-gray-700">
                    Project cargo transportation often involves multiple parties, complex documentation, and strict compliance 
                    requirements. Eco Global Delivery provides centralized project management with a dedicated Project Director who 
                    serves as your single point of contact throughout the entire operation. This approach ensures clear 
                    communication, consistent coordination, and accountability across all transportation phases, simplifying 
                    complex logistics chains for our clients.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Our Project Cargo Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      Eco Global Delivery offers specialized transport engineering services including technical feasibility studies, 
                      route surveys, infrastructure assessments, load analysis, lifting plans, and securing calculations. Our 
                      engineering expertise ensures proper handling techniques and equipment selection for your oversized cargo, 
                      minimizing risks and optimizing efficiency.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our project cargo services encompass specialized equipment procurement and operation, including heavy-lift 
                      vessels, flat rack containers, open-top containers, break-bulk solutions, roll-on/roll-off services, 
                      multi-axle trailers, and specialized cranes. We manage permits, escorts, and route modifications for 
                      road transportation, ensuring compliant and safe movement of oversized loads.
                    </p>
                    <p className="text-gray-700">
                      We provide comprehensive support services critical for successful project cargo execution, including 
                      customs clearance expertise for oversized equipment, specialized cargo insurance with appropriate coverage 
                      levels, on-site supervision during critical loading/unloading operations, and detailed documentation 
                      management. Our digital tracking platform offers real-time visibility for project stakeholders throughout 
                      the entire transportation process.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src="/images/project-cargo-transport.jpg"
                      alt="Heavy equipment transportation"
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
                        "Eco Global Delivery handled the transportation of four 120-ton turbines for our power plant project in 
                        Southeast Asia. Their detailed planning approach identified and resolved potential bottlenecks before 
                        they became issues. Their engineering team developed custom lifting and securing solutions that protected 
                        our sensitive equipment throughout the journey. The on-site supervision during critical operations gave 
                        us complete confidence in their execution."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-5.jpg"
                            alt="David C."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">David C.</p>
                          <p className="text-sm text-gray-500">Project Director, Energy Sector</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                      <div className="text-teal-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our mining equipment relocation project involved moving oversized crushers and excavators through 
                        challenging terrain and underdeveloped infrastructure. Eco Global Delivery conducted comprehensive route 
                        surveys and coordinated necessary road modifications. Their project management was exceptional—the 
                        dedicated coordinator kept us informed at every stage and quickly addressed emerging challenges. 
                        Their expertise in customs procedures for temporary equipment imports saved us weeks of potential delays."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src="/images/testimonial-6.jpg"
                            alt="Elena M."
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">Elena M.</p>
                          <p className="text-sm text-gray-500">Logistics Manager, Mining Corporation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    The Top 3 Reasons to Choose Our Project Cargo Services:
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          Specialized Project Engineering Expertise
                        </h4>
                        <p className="text-gray-700">
                          Eco Global Delivery' dedicated project engineering team brings specialized technical knowledge to every 
                          aspect of your project cargo requirements. Our engineers develop detailed method statements, lifting 
                          plans, and transport solutions based on thorough analysis of cargo specifications, route conditions, 
                          and handling requirements. This engineering-focused approach ensures that technical considerations are 
                          incorporated from the earliest planning stages, resulting in optimized solutions that balance safety, 
                          efficiency, and cost-effectiveness.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Single-Source Project Management</h4>
                        <p className="text-gray-700">
                          Our turnkey approach to project cargo logistics provides you with a dedicated Project Director who 
                          serves as your single point of contact throughout the entire operation. This centralized management 
                          structure ensures seamless coordination across multiple transportation modes, service providers, and 
                          regulatory authorities. By integrating all aspects of your project cargo movement under one management 
                          team, we eliminate communication gaps, streamline decision-making, and maintain consistent quality 
                          standards across the entire project lifecycle.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="text-5xl font-bold text-gray-200 mr-6">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-gray-800">Global Specialized Equipment Network</h4>
                        <p className="text-gray-700">
                          Eco Global Delivery maintains strategic partnerships with specialized equipment providers worldwide, 
                          giving us unmatched capabilities to source and deploy the right equipment for your specific project 
                          requirements. Our established relationships with heavy-lift vessel operators, specialized trailer 
                          providers, crane services, and custom equipment fabricators ensure equipment availability and competitive 
                          rates even for the most challenging projects. This extensive network allows us to provide optimal 
                          solutions regardless of cargo dimensions, weight, or destination challenges.
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
                          src="/images/roll-on-roll-off.jpg"
                          alt="Roll on Roll Off"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">Roll on Roll Off</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Our RoRo services provide an efficient transportation option for wheeled project cargo such as 
                          construction equipment, trucks, and specialized vehicles.
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
                          Our specialized insurance solutions provide comprehensive coverage tailored to the unique risks 
                          associated with high-value project cargo.
                        </p>
                        <Link
                          href="/services/cargo-insurance"
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
                          Our specialized customs teams manage the complex documentation and compliance requirements for 
                          oversized and project cargo at international borders.
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