import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Package, Globe, Truck, Clock, Shield, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Global logistics network"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow-lg">
              Global Logistics <span className="text-cyan-400">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Eco Global Shipping provides reliable shipping and logistics services to over 200 countries with speed,
              security, and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/track"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 text-lg"
              >
                <Package className="w-5 h-5" />
                Track Your Parcel
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 text-lg border border-white/30"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Main Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We offer comprehensive logistics solutions tailored to your specific needs, ensuring your shipments arrive
              safely and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Air Freight Service",
                description:
                  "Fast and reliable air transportation for time-sensitive shipments worldwide with expert handling and tracking.",
                icon: <Clock className="w-10 h-10 text-cyan-500" />,
                link: "/services/air-freight",
              },
              {
                title: "Sea Freight Service",
                description:
                  "Cost-effective ocean shipping solutions for large volume cargo with comprehensive port-to-port service.",
                icon: <Globe className="w-10 h-10 text-cyan-500" />,
                link: "/services/sea-freight",
              },
              {
                title: "Road Freight Service",
                description:
                  "Efficient ground transportation for domestic and cross-border shipments with flexible scheduling options.",
                icon: <Truck className="w-10 h-10 text-cyan-500" />,
                link: "/services/road-freight",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-5 bg-cyan-50 p-4 rounded-lg inline-block">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-blue-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-cyan-600 font-medium flex items-center gap-2 hover:text-cyan-700 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Why Choose Eco Global Shipping?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                With decades of experience and a commitment to excellence, we've built a reputation for reliable,
                efficient, and secure logistics services.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "We can choose the best solution for you!",
                    description:
                      "We organize nearly 132000+ movements per year and have 370 network offices around the globe. Eco Global Shipping has more than 21 years of experience in international transportation and logistics.",
                    icon: <CheckCircle className="w-6 h-6 text-cyan-500" />,
                  },
                  {
                    title: "We put people first!",
                    description:
                      "We build strong, ethical and long-term partnerships with our customers and carriers. Our professionals are well trained and knowledgeable, ready to meet customers' needs.",
                    icon: <Shield className="w-6 h-6 text-cyan-500" />,
                  },
                  {
                    title: "Our focus is on innovation!",
                    description:
                      "We believe that our services should satisfy the high expectations of our customers by implementing modern technology and avant-garde know-how in our work.",
                    icon: <Globe className="w-6 h-6 text-cyan-500" />,
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-cyan-100 p-3 rounded-lg h-fit">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-blue-800">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/container.jpg"
                alt="Eco Global Shipping operations center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Other Specialized Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover our specialized services tailored to meet specific logistics challenges and unique shipping
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Roll On Roll Off",
                description:
                  "Low-cost method for transporting vehicles of any kind – from cars, motorcycles, ATVs, to trucks, boats and construction machinery.",
                image: "/images/truck.jpg",
                link: "/services/roll-on-roll-off",
              },
              {
                title: "Ocean FCL (Import / Export)",
                description:
                  "Shipping internationally can be complex. We minimize the complexity by offering a single point of contact for all your FCL needs.",
                image: "/images/contrust.jpg",
                link: "/services/ocean-fcl",
              },
              {
                title: "Customs Compliance",
                description:
                  "Expert guidance to ensure your shipments meet all customs regulations with proper documentation and import/export compliance.",
                image: "/images/custom.jpg",
                link: "/services/customs-compliance",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="text-cyan-600 font-medium flex items-center gap-2 hover:text-cyan-700 transition-colors"
                  >
                    MORE INFO <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center border border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-8 py-3 rounded-full font-medium transition-colors"
            >
              View All Specialized Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Track Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow-sm">Track Your Shipment</h2>
            <p className="text-lg mb-8 text-gray-100">
              Enter your tracking number to get real-time updates on your shipment's status and location.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Enter tracking number"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <Link
                href="/track"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-medium transition-all whitespace-nowrap"
              >
                Track Now
              </Link>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
              <div className="text-cyan-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-700 italic mb-4 relative z-10">
                "Eco Global Shipping Company International is a game changer! The customer service is unmatched and
                their ability to handle the types of chemicals I send their way makes them the best choice for moving
                hazardous cargo hands down."
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
              <div className="text-cyan-500 text-4xl absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-700 italic mb-4 relative z-10">
                "Eco Global Shipping Company International has shown that they are the best company out there to handle
                my freight. Their attention to detail and commitment to on-time delivery has made them our exclusive
                logistics partner."
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
      </section>

      {/* Top 3 Reasons Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-shadow-sm">
            The Top 3 Reasons Why You Should Contact Us Today:
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="flex">
                <div className="text-7xl font-bold text-gray-700 mr-6">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-300">We can choose the best solution for you!</h3>
                  <p className="text-gray-300">
                  With over 15 years of experience, we manage complex supply chains across six continents through 
                  our network covering major ports in the Middle East, Europe, and North America. Our Charleston hub 
                  serves as the nerve center for optimizing global operations, handling specialized cargo via sea, air, 
                  and land transportation.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="text-7xl font-bold text-gray-700 mr-6">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-300">Customer-Centric Solutions</h3>
                  <p className="text-gray-300">
                  Our skilled teams combine decades of freight management experience with a relentless focus on 
                  client satisfaction. We maintain flexible approaches to supply chain management, offering 
                  personalized service through 370+ network offices worldwide and JIT delivery solutions for 
                  time-sensitive shipments.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="text-7xl font-bold text-gray-700 mr-6">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-300">Innovative Supply Chain Management</h3>
                  <p className="text-gray-300">
                  We implement cutting-edge logistics technology to deliver smart, end-to-end solutions. From 
                  real-time cargo tracking to customized clearance procedures, our systems ensure transparent 
                  operations and continuous improvement. This tech-driven approach helps maintain our position as 
                  preferred partners for Fortune 500 companies and emerging markets alike.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl hidden lg:block">
              <Image
                src="/images/truck-with-container.jpg"
                alt="Logistics truck with container"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow-sm">
            Ready to Ship with Eco Global Shipping?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your logistics needs and discover how our services can help your business
            grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-white text-cyan-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Contact Us
            </Link>
            {/* <Link
              href="/quote"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Get a Quote
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  )
}
