"use client"

import { useState, useEffect } from "react"
import { Search, Package, Truck, CheckCircle, AlertCircle, Clock, Info, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import PackageVisualization from "./TrackPicture"
// import {toZonedTime , format } from 'date-fns-tz'
import { format, parseISO } from 'date-fns'

// Define interfaces for the tracking data
interface TrackingEvent {
  id?: number
  date: string
  time?: string
  location: string
  status?: string
  description: string
}

interface ShipmentDetails {
  trackingNumber: string
  referenceNumber?: string
  shippingDate: string
  expectedDelivery: string
  senderName?: string
  senderAddress?: string
  senderEmail?: string
  senderPhone?: string
  shipFrom: string
  receiverName?: string
  receiverAddress?: string
  receiverPhone?: string
  receiverEmail?: string
  deliveryLocation: string
  shipmentType?: string
  deliveryWeight: string
  numberOfPieces?: string
  costOfDelivery?: string
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

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


  const fetchShipmentData = async (trackingNum: string) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/shipments/${trackingNum}`)
      console.log("RESPONSE", response)
      if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json()

      if (!data?.id) throw new Error("No shipment found")

      // Process events with proper date formatting
      const processEvents = (events: any[]): TrackingEvent[] => {
        return events.map(event => {
          const eventDate = new Date(event.date)
          const { date, time } = formatDateTime(eventDate)
          
          // Extract status from description
          const descParts = event.description.split(': ')
          const status = descParts.length > 1 ? descParts[0] : "Update"
          const description = descParts.length > 1 ? descParts.slice(1).join(': ') : event.description

          return {
            id: event.id,
            date,
            time,
            location: event.location,
            status,
            description
          }
        }).reverse() // Show latest event first
      }

      // Transform backend data to frontend structure
      const formattedResult: TrackingResult = {
        trackingNumber: data.id,
        status: mapStatusToUI(data.status),
        estimatedDelivery:  format(parseISO(data.estimated_delivery), 'MMMM d') ||  "Not available",
        service: data.service,
        origin: data.origin,
        destination: data.destination,
        events: processEvents(data.tracking_events || []),
        shipmentDetails: {
          trackingNumber: data.id,
          referenceNumber: data.customer?.id,
          shippingDate: format(parseISO(data.date), "MMMM d, yyyy") || "Not Available",
          expectedDelivery: format(parseISO(data.estimated_delivery), "MMMM d, yyyy") || "Not Available",
          senderName: data.customer?.name,
          senderAddress: data.origin_address,
          senderEmail: data.customer?.email,
          senderPhone: data.customer?.phone,
          shipFrom: data.origin,
          receiverName: data.destination_name, // Not in backend response
          receiverAddress: data.destination_address,
          receiverPhone: data.destination_phone_number, // Not in backend response
          receiverEmail: data.destination_email, // Not in backend response
          deliveryLocation: data.destination,
          shipmentType: data.service,
          deliveryWeight: `${data.weight} kg`,
          numberOfPieces: data.dimensions || "1 Box",
          costOfDelivery: "Not available", // Not in backend response
          packageImage: data.image
        }
      }

      setTrackingResult(formattedResult)
      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fetch error")
    } finally {
      setIsLoading(false)
    }
  }

  // New unified date/time formatter
  const formatDateTime = (date: Date) => ({
    date: date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }),
    time: date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  })

  // Simplified date formatter
  const formatDate = (isoString?: string) => {
    if (!isoString) return "Not available"
    try {
      const date = new Date(isoString)
      return date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })
    } catch {
      return "Invalid date"
    }
  }

  const formatTime = (dateString?: string) => {
    if (!dateString) return "Not available"
    
    try {
      const date = new Date(dateString)
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true
      })
    } catch (e) {
      return "Not available"
    }
  }

  const formatCurrency = (amount?: number | string) => {
    if (!amount) return "Not available"
    
    try {
      const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(numAmount)
    } catch (e) {
      return `${amount}`
    }
  }

  // Map API status to UI status
  const mapStatusToUI = (status?: string): "in-transit" | "delivered" | "exception" | "pending" => {
    if (!status) return "pending"
    
    const statusLower = status.toLowerCase()
    
    if (statusLower.includes("deliver")) return "delivered"
    if (statusLower.includes("transit") || statusLower.includes("ship") || 
        statusLower.includes("arrived") || statusLower.includes("processed") || 
        statusLower.includes("depart")) return "in-transit"
    if (statusLower.includes("exception") || statusLower.includes("held") || 
        statusLower.includes("problem") || statusLower.includes("fail")) return "exception"
    
    return "pending"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return
    
    fetchShipmentData(trackingNumber.trim())
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
    <main className="min-h-screen py-12 bg-gray-50 text-black">
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/track.jpeg" // Update with your image path
            alt="Global shipping network"
            fill
            className="object-cover object-center brightness-75"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Track Your Shipment
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Real-time tracking for your global shipments
          </p>
        </div>
      </section>
      <div className="px-4">
        <div className="mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Track Your Shipment</h1>

          <div className="container mx-auto bg-white rounded-xl shadow-md p-6 mb-8">
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
                    placeholder="e.g. CRU6551978271"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center hover:from-purple-700 hover:to-teal-600 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Tracking...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Track Shipment
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium">Error tracking shipment</h3>
                  <p className="mt-2 text-sm">Please try again</p>
                </div>
              </div>
            </div>
          )}

          {isSubmitted && trackingResult && (
            <div id="printable-area" className="bg-white rounded-xl shadow-md overflow-hidden mb-8 mx-4">
              {/* Tracking Header */}
              <div className="print-header">
                <h2 className="text-2xl font-bold mb-2">Shipment Tracking Report</h2>
                <p className="text-gray-600">Generated: {new Date().toLocaleDateString()}</p>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-teal-500 p-6 text-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div id="print-section">
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
                    <div className="grid grid-cols-2 gap-4" id="print-grid">
                      <div id="print-details">
                        <p className="text-sm text-gray-500">Tracking Number:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.trackingNumber}</p>
                      </div>
                      <div id="print-details">
                        <p className="text-sm text-gray-500">Reference Number:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.referenceNumber}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4" id="print-grid">
                      <div id="print-details">
                        <p className="text-sm text-gray-500">Shipping Date:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.shippingDate}</p>
                      </div>
                      <div id="print-details">
                        <p className="text-sm text-gray-500">Expected Delivery Date:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.expectedDelivery}</p>
                      </div>
                    </div>

                    <div id="print-details">
                      <p className="text-sm text-gray-500">Sender's Name:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.senderName}</p>
                    </div>

                    <div id="print-details">
                      <p className="text-sm text-gray-500">Ship From:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.shipFrom}</p>
                    </div>

                    <div id="print-details">
                      <p className="text-sm text-gray-500">Originated's Address:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.senderAddress}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Shipment Type:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.shipmentType}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Sender's Email:</p>
                      <p className="font-medium">{trackingResult.shipmentDetails.senderEmail}</p>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Delivery Weight:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.deliveryWeight}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Dimensions:</p>
                        <p className="font-medium">{trackingResult.shipmentDetails.numberOfPieces}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Package Images */}
                <PackageVisualization packageImage={trackingResult.shipmentDetails.packageImage || "/images/package-image.jpg"}  />
              </div>

              {/* Tracking Timeline */}
              <div className="p-6 border-b border-gray-200" id="print-section">
                <h3 className="text-lg font-bold mb-6">Shipment Progress</h3>
                {trackingResult.events && trackingResult.events.length > 0 ? (
                  <div className="space-y-6">
                    {trackingResult.events.map((event, index) => (
                      <div key={event.id || index} className="flex">
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
                              {event.date} {event.time ? `• ${event.time}` : ''}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-1">{event.description}</p>
                          <p className="text-sm text-gray-500">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Package className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <p>No tracking events available yet.</p>
                    <p className="text-sm mt-2">Check back later for updates on your shipment.</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Support
                  </Link>
                  {/* <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Updates
                  </button> */}
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
                    Your tracking number can be found in your shipping confirmation email, receipt, or in your account dashboard.
                    It typically starts with "CRU" followed by numbers.
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