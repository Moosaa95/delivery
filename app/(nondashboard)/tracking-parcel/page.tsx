"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

export default function TrackParcel() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Track Your Parcel</h1>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="e.g. CRU1234567890"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center hover:from-cyan-600 hover:to-blue-700 transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Track Parcel
              </button>
            </form>
          </div>

          {isSubmitted && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Tracking Information</h2>
                <p className="text-gray-600 mb-6">No information found for tracking number: {trackingNumber}</p>
                <p className="text-sm text-gray-500">
                  Please verify your tracking number and try again, or contact customer support for assistance.
                </p>
              </div>
            </div>
          )}

          <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Tracking Help</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">How to Track Your Shipment</h3>
                <p className="text-gray-600">
                  Enter your tracking number in the field above and click "Track Parcel" to get real-time updates on
                  your shipment status.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Where to Find Your Tracking Number</h3>
                <p className="text-gray-600">
                  Your tracking number can be found in your shipping confirmation email or on your receipt.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Need Help?</h3>
                <p className="text-gray-600">
                  If you're having trouble tracking your shipment, please contact our customer service team at (218)
                  618-7994 or email us at info@ecoglobaldelivery.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
