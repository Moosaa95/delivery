// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Search, Package, MapPin, Truck, CheckCircle, Clock, AlertCircle } from "lucide-react"
// import Link from "next/link"

// export default function TrackPage() {
//   const [trackingNumber, setTrackingNumber] = useState("")
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null)

//   interface TrackingEvent {
//     date: string
//     time: string
//     location: string
//     status: string
//     description: string
//   }

//   interface TrackingResult {
//     trackingNumber: string
//     status: "in-transit" | "delivered" | "exception" | "pending"
//     estimatedDelivery: string
//     service: string
//     origin: string
//     destination: string
//     events: TrackingEvent[]
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!trackingNumber.trim()) return

//     // Simulate tracking result
//     const mockResult: TrackingResult = {
//       trackingNumber: trackingNumber,
//       status: ["in-transit", "delivered", "exception", "pending"][Math.floor(Math.random() * 4)] as any,
//       estimatedDelivery: "April 18, 2025",
//       service: "Express International",
//       origin: "New York, USA",
//       destination: "London, UK",
//       events: [
//         {
//           date: "April 14, 2025",
//           time: "10:30 AM",
//           location: "London Sorting Facility, UK",
//           status: "In Transit",
//           description: "Package is out for delivery",
//         },
//         {
//           date: "April 13, 2025",
//           time: "8:45 PM",
//           location: "London Heathrow Airport, UK",
//           status: "In Transit",
//           description: "Package has arrived at regional facility",
//         },
//         {
//           date: "April 12, 2025",
//           time: "3:20 PM",
//           location: "Paris Charles de Gaulle Airport, France",
//           status: "In Transit",
//           description: "Package in transit to next facility",
//         },
//         {
//           date: "April 11, 2025",
//           time: "11:15 AM",
//           location: "New York JFK Airport, USA",
//           status: "In Transit",
//           description: "Package has departed from origin facility",
//         },
//         {
//           date: "April 10, 2025",
//           time: "2:30 PM",
//           location: "New York Sorting Facility, USA",
//           status: "Processed",
//           description: "Package processed at origin facility",
//         },
//         {
//           date: "April 10, 2025",
//           time: "9:45 AM",
//           location: "New York, USA",
//           status: "Information Received",
//           description: "Shipping information received",
//         },
//       ],
//     }

//     setTrackingResult(mockResult)
//     setIsSubmitted(true)
//   }

//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "in-transit":
//         return "text-blue-600 bg-blue-100"
//       case "delivered":
//         return "text-green-600 bg-green-100"
//       case "exception":
//         return "text-red-600 bg-red-100"
//       case "pending":
//         return "text-yellow-600 bg-yellow-100"
//       default:
//         return "text-gray-600 bg-gray-100"
//     }
//   }

//   const getStatusIcon = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "in-transit":
//         return <Truck className="w-5 h-5" />
//       case "delivered":
//         return <CheckCircle className="w-5 h-5" />
//       case "exception":
//         return <AlertCircle className="w-5 h-5" />
//       case "pending":
//         return <Clock className="w-5 h-5" />
//       default:
//         return <Package className="w-5 h-5" />
//     }
//   }

//   return (
//     <main className="min-h-screen py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Track Your Shipment</h1>

//           <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="tracking" className="block text-sm font-medium text-gray-700 mb-1">
//                   Enter Tracking Number
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="tracking"
//                     type="text"
//                     value={trackingNumber}
//                     onChange={(e) => setTrackingNumber(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                     placeholder="e.g. SWIFT1234567890"
//                     required
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center hover:from-purple-700 hover:to-teal-600 transition-colors"
//               >
//                 <Search className="w-5 h-5 mr-2" />
//                 Track Shipment
//               </button>
//             </form>
//           </div>

//           {isSubmitted && trackingResult && (
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               {/* Tracking Header */}
//               <div className="bg-gradient-to-r from-purple-600 to-teal-500 p-6 text-white">
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//                   <div>
//                     <h2 className="text-2xl font-bold mb-2">Tracking Number: {trackingResult.trackingNumber}</h2>
//                     <p className="text-white/80">Service: {trackingResult.service}</p>
//                   </div>
//                   <div
//                     className={`mt-4 md:mt-0 px-4 py-2 rounded-full flex items-center ${getStatusColor(
//                       trackingResult.status,
//                     )}`}
//                   >
//                     {getStatusIcon(trackingResult.status)}
//                     <span className="ml-2 font-medium capitalize">{trackingResult.status.replace("-", " ")}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Tracking Summary */}
//               <div className="p-6 border-b border-gray-200">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
//                     <p className="font-medium">{trackingResult.estimatedDelivery}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">From</p>
//                     <div className="flex items-start">
//                       <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-1" />
//                       <p className="font-medium">{trackingResult.origin}</p>
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-1">To</p>
//                     <div className="flex items-start">
//                       <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-1" />
//                       <p className="font-medium">{trackingResult.destination}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Tracking Timeline */}
//               <div className="p-6">
//                 <h3 className="text-lg font-bold mb-6">Shipment Progress</h3>
//                 <div className="space-y-6">
//                   {trackingResult.events.map((event, index) => (
//                     <div key={index} className="flex">
//                       <div className="mr-4 relative">
//                         <div
//                           className={`w-4 h-4 rounded-full ${
//                             index === 0 ? "bg-teal-500" : "bg-gray-300"
//                           } flex items-center justify-center`}
//                         >
//                           {index === 0 && <div className="w-2 h-2 rounded-full bg-white"></div>}
//                         </div>
//                         {index < trackingResult.events.length - 1 && (
//                           <div className="w-0.5 bg-gray-300 absolute top-4 bottom-0 left-1/2 -translate-x-1/2"></div>
//                         )}
//                       </div>
//                       <div className={`pb-6 ${index === trackingResult.events.length - 1 ? "pb-0" : ""}`}>
//                         <div className="flex flex-col sm:flex-row sm:items-center mb-1">
//                           <p className="font-medium text-gray-900">{event.status}</p>
//                           <div className="sm:ml-4 text-sm text-gray-500">
//                             {event.date} • {event.time}
//                           </div>
//                         </div>
//                         <p className="text-gray-600 mb-1">{event.description}</p>
//                         <p className="text-sm text-gray-500">{event.location}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="p-6 bg-gray-50 border-t border-gray-200">
//                 <div className="flex flex-wrap gap-4">
//                   <Link
//                     href="/contact"
//                     className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
//                   >
//                     Need Help?
//                   </Link>
//                   <button
//                     onClick={() => window.print()}
//                     className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
//                   >
//                     Print Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Tracking Help */}
//           <div className="mt-12 bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-bold mb-6">Tracking Information</h2>
//             <div className="space-y-6">
//               <div>
//                 <h3 className="font-medium text-lg mb-2">How to Track Your Shipment</h3>
//                 <p className="text-gray-600">
//                   Enter your tracking number in the field above and click "Track Shipment" to get real-time updates on
//                   your package's status and location.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-medium text-lg mb-2">Where to Find Your Tracking Number</h3>
//                 <p className="text-gray-600">
//                   Your tracking number can be found in your shipping confirmation email, receipt, or in your Swift
//                   Logistics account dashboard.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-medium text-lg mb-2">Understanding Tracking Statuses</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
//                   <div className="flex items-center p-3 bg-blue-50 rounded-lg">
//                     <Truck className="w-5 h-5 text-blue-600 mr-3" />
//                     <div>
//                       <p className="font-medium text-blue-800">In Transit</p>
//                       <p className="text-sm text-blue-700">Your package is on its way</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center p-3 bg-green-50 rounded-lg">
//                     <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
//                     <div>
//                       <p className="font-medium text-green-800">Delivered</p>
//                       <p className="text-sm text-green-700">Your package has been delivered</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
//                     <Clock className="w-5 h-5 text-yellow-600 mr-3" />
//                     <div>
//                       <p className="font-medium text-yellow-800">Pending</p>
//                       <p className="text-sm text-yellow-700">Your shipment is being processed</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center p-3 bg-red-50 rounded-lg">
//                     <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
//                     <div>
//                       <p className="font-medium text-red-800">Exception</p>
//                       <p className="text-sm text-red-700">There's an issue with your shipment</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="font-medium text-lg mb-2">Need Help?</h3>
//                 <p className="text-gray-600">
//                   If you're having trouble tracking your shipment or have questions about your delivery, please contact
//                   our customer service team at (800) 123-4567 or email us at{" "}
//                   <a href="mailto:support@swiftlogistics.com" className="text-teal-600 hover:underline">
//                     support@swiftlogistics.com
//                   </a>
//                   .
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }


"use client"

import type React from "react"

import { useState } from "react"
import { Search, Package, Truck, CheckCircle, Clock, AlertCircle, Info, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null)

  interface TrackingEvent {
    date: string
    time: string
    location: string
    status: string
    description: string
  }

  interface ShipmentDetails {
    trackingNumber: string
    referenceNumber: string
    shippingDate: string
    expectedDelivery: string
    senderName: string
    senderAddress: string
    senderEmail: string
    senderPhone: string
    shipFrom: string
    receiverName: string
    receiverAddress: string
    receiverPhone: string
    receiverEmail: string
    deliveryLocation: string
    shipmentType: string
    deliveryWeight: string
    numberOfPieces: string
    costOfDelivery: string
    packageImage?: string
  }

  interface TrackingResult {
    trackingNumber: string
    status: "in-transit" | "delivered" | "exception" | "pending"
    estimatedDelivery: string
    service: string
    origin: string
    destination: string
    events: TrackingEvent[]
    shipmentDetails: ShipmentDetails
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return

    // Simulate tracking result with detailed shipment information
    const mockResult: TrackingResult = {
      trackingNumber: trackingNumber,
      status: ["in-transit", "delivered", "exception", "pending"][Math.floor(Math.random() * 4)] as any,
      estimatedDelivery: "April 18, 2025",
      service: "Express International",
      origin: "Abu Dhabi, UAE",
      destination: "Chester, VT, USA",
      events: [
        {
          date: "April 14, 2025",
          time: "10:30 AM",
          location: "Chester Distribution Center, VT, USA",
          status: "In Transit",
          description: "Package is out for delivery",
        },
        {
          date: "April 13, 2025",
          time: "8:45 PM",
          location: "Boston Logan Airport, MA, USA",
          status: "In Transit",
          description: "Package has arrived at regional facility",
        },
        {
          date: "April 12, 2025",
          time: "3:20 PM",
          location: "London Heathrow Airport, UK",
          status: "In Transit",
          description: "Package in transit to next facility",
        },
        {
          date: "April 11, 2025",
          time: "11:15 AM",
          location: "Dubai International Airport, UAE",
          status: "In Transit",
          description: "Package has departed from origin facility",
        },
        {
          date: "April 10, 2025",
          time: "2:30 PM",
          location: "Abu Dhabi Sorting Facility, UAE",
          status: "Processed",
          description: "Package processed at origin facility",
        },
        {
          date: "April 02, 2025",
          time: "9:45 AM",
          location: "Abu Dhabi, UAE",
          status: "Information Received",
          description: "Shipping information received",
        },
      ],
      shipmentDetails: {
        trackingNumber: trackingNumber || "SWIFT7327510138",
        referenceNumber: "UAE007327518138",
        shippingDate: "April 02, 2025",
        expectedDelivery: "April 18, 2025",
        senderName: "Dwayne Strand",
        senderAddress: "Abu Dhabi - UAE",
        senderEmail: "dwayne4strand@gmail.com",
        senderPhone: "+1 (347) 651-0080",
        shipFrom: "United Arab Emirates",
        receiverName: "Vicki Negron",
        receiverAddress: "1609 Mattson Rd, Chester, VT 05143, USA",
        receiverPhone: "+1 (802) 289-1119",
        receiverEmail: "vickinegron1961@yahoo.com",
        deliveryLocation: "United States of America",
        shipmentType: "Package",
        deliveryWeight: "31.2kg",
        numberOfPieces: "1 Box",
        costOfDelivery: "13,590 Dirham",
        packageImage: "/images/package-image.jpg",
      },
    }

    setTrackingResult(mockResult)
    setIsSubmitted(true)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in-transit":
        return "text-blue-600 bg-blue-100"
      case "delivered":
        return "text-green-600 bg-green-100"
      case "exception":
        return "text-red-600 bg-red-100"
      case "pending":
        return "text-yellow-600 bg-yellow-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "in-transit":
        return <Truck className="w-5 h-5" />
      case "delivered":
        return <CheckCircle className="w-5 h-5" />
      case "exception":
        return <AlertCircle className="w-5 h-5" />
      case "pending":
        return <Clock className="w-5 h-5" />
      default:
        return <Package className="w-5 h-5" />
    }
  }

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Track Your Shipment</h1>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="tracking" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter Tracking Number
                </label>
                <div className="relative">
                  <input
                    id="tracking"
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="e.g. SWIFT1234567890"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center hover:from-purple-700 hover:to-teal-600 transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Track Shipment
              </button>
            </form>
          </div>

          {isSubmitted && trackingResult && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              {/* Tracking Header */}
              <div className="bg-gradient-to-r from-purple-600 to-teal-500 p-6 text-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Tracking Summary</h2>
                    <p className="text-white/80">Service: {trackingResult.service}</p>
                  </div>
                  <div
                    className={`mt-4 md:mt-0 px-4 py-2 rounded-full flex items-center ${getStatusColor(
                      trackingResult.status,
                    )}`}
                  >
                    {getStatusIcon(trackingResult.status)}
                    <span className="ml-2 font-medium capitalize">{trackingResult.status.replace("-", " ")}</span>
                  </div>
                </div>
              </div>

              {/* Shipment Details */}
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-teal-500" />
                  Shipment Details
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Sender Information */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Tracking Number:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.trackingNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Reference Number:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.referenceNumber}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Shipping Date:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.shippingDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Expected Delivery Date:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.expectedDelivery}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Sender's Name:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.senderName}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Ship From:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.shipFrom}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Sender's Address:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.senderAddress}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Shipment Type:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.shipmentType}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Sender's Email:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.senderEmail}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Contact Telephone/Mobile:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.senderPhone}</p>
                    </div>
                  </div>

                  {/* Right Column - Receiver Information */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Receiver's Name:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.receiverName}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Delivery Location:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.deliveryLocation}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Receiver's Address:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.receiverAddress}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Receiver's Telephone:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.receiverPhone}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Receiver's Email:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.receiverEmail}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Delivery Status:</p>
                      <p className="font-medium capitalize">{trackingResult.status.replace("-", " ")}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Delivery Weight:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.deliveryWeight}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">No. of Pieces:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.numberOfPieces}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Cost of Delivery:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.costOfDelivery}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Package Images */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src="/images/tracking-illustration.jpg"
                      alt="Tracking service illustration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200">
                    <Image src="/images/package-image.jpg" alt="Your package" fill className="object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-medium">Your Package</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold mb-6">Shipment Progress</h3>
                <div className="space-y-6">
                  {trackingResult.events.map((event, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 relative">
                        <div
                          className={`w-4 h-4 rounded-full ${
                            index === 0 ? "bg-teal-500" : "bg-gray-300"
                          } flex items-center justify-center`}
                        >
                          {index === 0 && <div className="w-2 h-2 rounded-full bg-white"></div>}
                        </div>
                        {index < trackingResult.events.length - 1 && (
                          <div className="w-0.5 bg-gray-300 absolute top-4 bottom-0 left-1/2 -translate-x-1/2"></div>
                        )}
                      </div>
                      <div className={`pb-6 ${index === trackingResult.events.length - 1 ? "pb-0" : ""}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-1">
                          <p className="font-medium text-gray-900">{event.status}</p>
                          <div className="sm:ml-4 text-sm text-gray-500">
                            {event.date} • {event.time}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-1">{event.description}</p>
                        <p className="text-sm text-gray-500">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Support
                  </Link>
                  <button
                    onClick={() => window.print()}
                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 mr-2"
                    >
                      <polyline points="6 9 6 2 18 2 18 9"></polyline>
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                      <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                    Print Details
                  </button>
                  <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Updates
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tracking Help */}
          {!isSubmitted && (
            <div className="mt-12 bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Tracking Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">How to Track Your Shipment</h3>
                  <p className="text-gray-600">
                    Enter your tracking number in the field above and click "Track Shipment" to get real-time updates on
                    your package's status and location.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Where to Find Your Tracking Number</h3>
                  <p className="text-gray-600">
                    Your tracking number can be found in your shipping confirmation email, receipt, or in your Swift
                    Logistics account dashboard.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Understanding Tracking Statuses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Truck className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium text-blue-800">In Transit</p>
                        <p className="text-sm text-blue-700">Your package is on its way</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-green-800">Delivered</p>
                        <p className="text-sm text-green-700">Your package has been delivered</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                      <Clock className="w-5 h-5 text-yellow-600 mr-3" />
                      <div>
                        <p className="font-medium text-yellow-800">Pending</p>
                        <p className="text-sm text-yellow-700">Your shipment is being processed</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                      <div>
                        <p className="font-medium text-red-800">Exception</p>
                        <p className="text-sm text-red-700">There's an issue with your shipment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
