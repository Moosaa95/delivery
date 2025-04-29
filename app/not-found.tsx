// app/not-found.js
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/not-found-banner.jpg"
            alt="Page Not Found"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">PAGE NOT FOUND</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-teal-600 mb-6">
              <span className="text-8xl font-bold">404</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Oops! The page you're looking for doesn't exist.
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              The page might have been moved, deleted, or never existed.
              Let's get you back on track.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <Link
                href="/"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" /> Return to Homepage
              </Link>
              
              <Link
                href="/contact-us"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md transition-colors flex items-center justify-center"
              >
                Contact Support <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            {/* Search */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 max-w-xl mx-auto">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Try searching for what you need:
              </h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-md transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Popular Pages
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services"
                className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-gray-800 mb-2">Our Services</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Explore our comprehensive logistics and transportation solutions.
                </p>
                <span className="text-teal-600 font-medium flex items-center text-sm">
                  View Services <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link
                href="/track"
                className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-gray-800 mb-2">Track Shipment</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Get real-time updates on your cargo location and status.
                </p>
                <span className="text-teal-600 font-medium flex items-center text-sm">
                  Track Now <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link
                href="/contact-us"
                className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-gray-800 mb-2">Contact Us</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Reach out to our team for assistance with your logistics needs.
                </p>
                <span className="text-teal-600 font-medium flex items-center text-sm">
                  Get in Touch <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}