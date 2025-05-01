import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <Image
                              src="/eco-global-three.png"
                              alt="Eco Global Delivery"
                              width={150}
                              height={250}
                              className=""
                            />
            </div>
            <p className="text-gray-400 mb-6">
              Eco Global Delivery provides innovative shipping and logistics solutions for businesses and
              individuals worldwide. With our global network and advanced technology, we ensure your packages arrive
              safely and on time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Main Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Air Freight Service", href: "/services/air-freight" },
                { name: "Sea Freight Service", href: "/services/sea-freight" },
                { name: "Road Freight Service", href: "/services/road-freight" },
                { name: "Rail Freight Service", href: "/services/rail-freight" },
                { name: "Multimodal Transport", href: "/services/multimodal-transport" },
                { name: "Warehousing & Distribution", href: "/services/warehousing" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Other Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Bulk Liquid Logistics", href: "/services/bulk-liquid" },
                { name: "Customs Compliance", href: "/services/customs-compliance" },
                { name: "Foreign to Foreign", href: "/services/foreign-to-foreign" },
                { name: "Household goods & Autos", href: "/services/household-autos" },
                { name: "Ocean FCL (Import / Export)", href: "/services/ocean-fcl" },
                { name: "Project Cargo", href: "/services/project-cargo" },
                { name: "Roll on Roll Off", href: "/services/roll-on-roll-off" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                Global City 134th accounting quarter,<br />
                      867 1/A, Kazybek Bi district,<br />
                      Karaganda, Kazakhstan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400">+7 778 527 6027</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:info@ecoglobaldelivery.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  info@ecoglobaldelivery.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400">Mon - Fri: 8am - 5pm EST</span>
              </li>
            </ul>

            
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Eco Global Delivery. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="hover:text-cyan-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
