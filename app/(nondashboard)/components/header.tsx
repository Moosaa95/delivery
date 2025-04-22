"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, User, Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const mainServices = [
    { name: "Air Freight Service", href: "/services/air-freight" },
    { name: "Sea Freight Service", href: "/services/sea-freight" },
    { name: "Road Freight Service", href: "/services/road-freight" },
    { name: "Rail Freight Service", href: "/services/rail-freight" },
    { name: "Multimodal Transport Service", href: "/services/multimodal-transport" },
    { name: "Warehousing & Distribution Service", href: "/services/warehousing" },
    { name: "Customs Clearance Service", href: "/services/customs-clearance" },
    { name: "Cargo Insurance Services", href: "/services/cargo-insurance" },
    { name: "Swift Logistics Service", href: "/services/swift-logistics" },
  ]

  const otherServices = [
    { name: "Bulk Liquid Logistics", href: "/services/bulk-liquid" },
    { name: "Customs Compliance", href: "/services/customs-compliance" },
    { name: "Foreign to Foreign", href: "/services/foreign-to-foreign" },
    { name: "Household goods & Autos", href: "/services/household-autos" },
    { name: "Ocean FCL (Import / Export)", href: "/services/ocean-fcl" },
    { name: "Project Cargo", href: "/services/project-cargo" },
    { name: "Roll on Roll Off", href: "/services/roll-on-roll-off" },
  ]

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-teal-400" />
              <span>(800) 123-4567</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Mail className="w-4 h-4 text-teal-400" />
              <a href="mailto:info@swiftlogistics.com" className="hover:text-teal-300 transition-colors">
                info@swiftlogistics.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/track" className="text-sm hover:text-teal-300 transition-colors hidden md:inline-block">
              Track Shipment
            </Link>
            <Link href="/quote" className="text-sm hover:text-teal-300 transition-colors hidden md:inline-block">
              Get a Quote
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-1 bg-teal-600 px-3 py-1 rounded-full text-sm hover:bg-teal-700 transition-colors"
            >
              <User className="w-3 h-3" />
              <span>Client Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/swift-logo.png"
                alt="Swift Logistics"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-1">
                <li>
                  <Link
                    href="/"
                    className="px-4 py-2 rounded-md text-gray-800 hover:text-teal-600 font-medium transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="relative">
                  <button
                    onClick={() => toggleDropdown("mainServices")}
                    className="px-4 py-2 rounded-md text-gray-800 hover:text-teal-600 font-medium transition-colors flex items-center"
                  >
                    Our Main Services
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {activeDropdown === "mainServices" && (
                    <div className="absolute top-full left-0 bg-teal-500 shadow-lg rounded-md py-2 w-64 z-50">
                      {mainServices.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-white hover:bg-teal-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={() => toggleDropdown("otherServices")}
                    className="px-4 py-2 rounded-md text-gray-800 hover:text-teal-600 font-medium transition-colors flex items-center"
                  >
                    Other Services
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {activeDropdown === "otherServices" && (
                    <div className="absolute top-full left-0 bg-teal-500 shadow-lg rounded-md py-2 w-64 z-50">
                      {otherServices.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-white hover:bg-teal-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    href="/track"
                    className="px-4 py-2 rounded-md text-gray-800 hover:text-teal-600 font-medium transition-colors"
                  >
                    Track
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="px-4 py-2 rounded-md text-gray-800 hover:text-teal-600 font-medium transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-md text-gray-800 hover:text-teal-600 font-medium transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/quote"
                    className="ml-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-md font-medium transition-colors"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => toggleDropdown("mobilemainServices")}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors"
                  >
                    <span>Our Main Services</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === "mobilemainServices" && (
                    <div className="pl-6 mt-1 space-y-1">
                      {mainServices.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li>
                  <button
                    onClick={() => toggleDropdown("mobileotherServices")}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors"
                  >
                    <span>Other Services</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === "mobileotherServices" && (
                    <div className="pl-6 mt-1 space-y-1">
                      {otherServices.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    href="/track"
                    className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Track
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    href="/quote"
                    className="block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
