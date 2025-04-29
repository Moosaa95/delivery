import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Air Freight Service",
      description: "Fast and reliable air transportation for time-sensitive shipments worldwide.",
      image: "/images/air.jpg",
      link: "/services/air-freight",
    },
    {
      title: "Sea Freight Service",
      description: "Cost-effective ocean shipping solutions for large volume cargo.",
      image: "/images/sea-freight.jpg",
      link: "/services/sea-freight",
    },
    {
      title: "Road Freight Service",
      description: "Efficient ground transportation for domestic and cross-border shipments.",
      image: "/images/road-freight-trucks.jpg",
      link: "/services/road-freight",
    },
    {
      title: "Rail Freight Service",
      description: "Environmentally friendly rail transport for long-distance cargo.",
      image: "/images/rail-freight-cargo.jpg",
      link: "/services/rail-freight",
    },
    {
      title: "Multimodal Transport Service",
      description: "Integrated shipping solutions combining multiple transportation methods.",
      image: "/images/multimodal-transport-operations.jpg",
      link: "/services/multimodal-transport",
    },
    {
      title: "Warehousing & Distribution Service",
      description: "Secure storage and efficient distribution of your goods.",
      image: "/images/warehouse-operations.jpg",
      link: "/services/warehousing",
    },
    {
      title: "Customs Clearance Service",
      description: "Expert assistance with customs documentation and regulatory compliance.",
      image: "/images/customs-clearance-banner.jpg",
      link: "/services/customs-clearance",
    },
    {
      title: "Cargo Insurance Services",
      description: "Comprehensive coverage to protect your shipments against loss or damage.",
      image: "/images/cargo-insurance.jpg",
      link: "/services/cargo-insurance",
    },
    // {
    //   title: "Swift Logistics Service",
    //   description: "Tailored logistics solutions for businesses of all sizes.",
    //   image: "/images/swift-logistics.jpg",
    //   link: "/services/swift-logistics",
    // },
  ]

  const otherServices = [
    {
      title: "Bulk Liquid Logistics",
      description: "Specialized transport solutions for liquid cargo in bulk quantities.",
      image: "/images/bulk-liquid-tanks.jpg",
      link: "/services/bulk-liquid",
    },
    {
      title: "Customs Compliance",
      description: "Expert guidance to ensure your shipments meet all customs regulations.",
      image: "/images/customs-compliance.jpg",
      link: "/services/customs-compliance",
    },
    {
      title: "Foreign to Foreign",
      description: "Shipping services between international locations outside your home country.",
      image: "/images/foreign-to-foreign-operations.jpg",
      link: "/services/foreign-to-foreign",
    },
    {
      title: "Household goods & Autos",
      description: "Reliable transport for personal belongings and vehicles during relocation.",
      image: "/images/household-goods-packing.jpg",
      link: "/services/household-autos",
    },
    {
      title: "Ocean FCL (Import / Export)",
      description: "Full container load shipping services for international trade.",
      image: "/images/ocean-fcl-container.jpg",
      link: "/services/ocean-fcl",
    },
    {
      title: "Project Cargo",
      description: "Specialized handling for oversized, heavy, high-value or complex pieces of equipment.",
      image: "/images/project-cargo-transport.jpg",
      link: "/services/project-cargo",
    },
    {
      title: "Roll on Roll Off",
      description: "Efficient transport solution for wheeled cargo like vehicles and heavy machinery.",
      image: "/images/roro-ship-loading.jpg",
      link: "/services/roll-on-roll-off",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/project-cargo-transport.jpg"
            alt="Our Services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">OUR SERVICES</h1>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Main Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Swift Logistics offers a comprehensive range of transportation and logistics services designed to meet all
              your shipping needs, from air and sea freight to specialized logistics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-400">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Other Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our specialized services tailored to meet specific logistics challenges and unique shipping
              requirements for various industries and cargo types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-400">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship with Swift Logistics?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your logistics needs and discover how our services can help your business
            grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-teal-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Contact Us
            </Link>
            {/* <Link
              href="/quote"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Get a Quote
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  )
}
