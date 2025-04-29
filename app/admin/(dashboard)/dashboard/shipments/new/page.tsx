// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import {
//   ChevronLeft,
//   MapPin,
//   User,
//   Package,
//   TruckIcon,
//   Calendar,
//   Clock,
//   Info,
// } from "lucide-react"
// import { createShipment } from "@/lib/client"

// export default function NewShipment() {
//   const router = useRouter()
  
//   const [formData, setFormData] = useState({
//     customer_name: "",
//     customer_email: "",
//     customer_phone: "",
//     origin: "",
//     origin_address: "",
//     destination: "",
//     destination_address: "",
//     weight: "",
//     dimensions: "",
//     service: "Standard International",
//     estimated_delivery: "",
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [errors, setErrors] = useState({})
//   const [submitError, setSubmitError] = useState("")

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
    
//     // Clear error when field is being edited
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }))
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}
    
//     if (!formData.customer_name?.trim()) {
//       newErrors.customer_name = "Customer name is required"
//     }
    
//     if (!formData.customer_email?.trim()) {
//       newErrors.customer_email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.customer_email)) {
//       newErrors.customer_email = "Email is invalid"
//     }
    
//     if (!formData.customer_phone?.trim()) {
//       newErrors.customer_phone = "Phone number is required"
//     }
    
//     if (!formData.origin?.trim()) {
//       newErrors.origin = "Origin is required"
//     }
    
//     if (!formData.origin_address?.trim()) {
//       newErrors.origin_address = "Origin address is required"
//     }
    
//     if (!formData.destination?.trim()) {
//       newErrors.destination = "Destination is required"
//     }
    
//     if (!formData.destination_address?.trim()) {
//       newErrors.destination_address = "Destination address is required"
//     }
    
//     if (!formData.weight?.trim()) {
//       newErrors.weight = "Weight is required"
//     } else if (isNaN(parseFloat(formData.weight))) {
//       newErrors.weight = "Weight must be a number"
//     }
    
//     if (!formData.service) {
//       newErrors.service = "Service type is required"
//     }
    
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     if (!validateForm()) {
//       return
//     }
    
//     setIsSubmitting(true)
//     setSubmitError("")
    
//     try {
//       // Format the data to match the backend expectations
//       const shipmentData = {
//         customer: {
//           name: formData.customer_name,
//           email: formData.customer_email,
//           phone: formData.customer_phone,
//         },
//         origin: formData.origin,
//         origin_address: formData.origin_address,
//         destination: formData.destination,
//         destination_address: formData.destination_address,
//         weight: parseFloat(formData.weight),
//         dimensions: formData.dimensions,
//         service: formData.service,
//         estimated_delivery: formData.estimated_delivery || null,
//       }
      
//       const { data, error } = await createShipment(shipmentData)
      
//       if (error) {
//         setSubmitError(error)
//         setIsSubmitting(false)
//         return
//       }
      
//       // Redirect to the shipment detail page with the ID returned from the API
//       router.push(`/admin/dashboard/shipments/${data.id}`)
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       setSubmitError("An unexpected error occurred. Please try again.")
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         <div className="flex items-center">
//           <Link 
//             href="/admin/dashboard/shipments" 
//             className="mr-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200"
//           >
//             <ChevronLeft className="h-5 w-5 text-gray-500" />
//           </Link>
//           <h1 className="text-2xl font-semibold text-gray-900">New Shipment</h1>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
//         {submitError && (
//           <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <Info className="h-5 w-5 text-red-400" />
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-700">{submitError}</p>
//               </div>
//             </div>
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit} className="space-y-8 text-black">
//           {/* Customer Information */}
//           <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//             <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
//               <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
//                 <User className="w-5 h-5 mr-2" />
//                 Customer Information
//               </h3>
//             </div>
//             <div className="px-4 py-5 sm:p-6 space-y-6">
//               <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
//                 <div className="sm:col-span-3">
//                   <label htmlFor="customer_name" className="block text-sm font-medium text-gray-700">
//                     Customer Name
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="customer_name"
//                       id="customer_name"
//                       value={formData.customer_name}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.customer_name ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.customer_name && (
//                       <p className="mt-1 text-sm text-red-600">{errors.customer_name}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="customer_email" className="block text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="email"
//                       name="customer_email"
//                       id="customer_email"
//                       value={formData.customer_email}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.customer_email ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.customer_email && (
//                       <p className="mt-1 text-sm text-red-600">{errors.customer_email}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="customer_phone" className="block text-sm font-medium text-gray-700">
//                     Phone Number
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="customer_phone"
//                       id="customer_phone"
//                       value={formData.customer_phone}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.customer_phone ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.customer_phone && (
//                       <p className="mt-1 text-sm text-red-600">{errors.customer_phone}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Route Information */}
//           <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//             <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
//               <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
//                 <MapPin className="w-5 h-5 mr-2" />
//                 Route Information
//               </h3>
//             </div>
//             <div className="px-4 py-5 sm:p-6 space-y-6">
//               <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
//                 <div className="sm:col-span-3">
//                   <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
//                     Origin Location
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="origin"
//                       id="origin"
//                       placeholder="City, Country"
//                       value={formData.origin}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.origin ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.origin && (
//                       <p className="mt-1 text-sm text-red-600">{errors.origin}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
//                     Destination Location
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="destination"
//                       id="destination"
//                       placeholder="City, Country"
//                       value={formData.destination}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.destination ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.destination && (
//                       <p className="mt-1 text-sm text-red-600">{errors.destination}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-6">
//                   <label htmlFor="origin_address" className="block text-sm font-medium text-gray-700">
//                     Origin Address
//                   </label>
//                   <div className="mt-1">
//                     <textarea
//                       id="origin_address"
//                       name="origin_address"
//                       rows={2}
//                       value={formData.origin_address}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.origin_address ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.origin_address && (
//                       <p className="mt-1 text-sm text-red-600">{errors.origin_address}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-6">
//                   <label htmlFor="destination_address" className="block text-sm font-medium text-gray-700">
//                     Destination Address
//                   </label>
//                   <div className="mt-1">
//                     <textarea
//                       id="destination_address"
//                       name="destination_address"
//                       rows={2}
//                       value={formData.destination_address}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.destination_address ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.destination_address && (
//                       <p className="mt-1 text-sm text-red-600">{errors.destination_address}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Shipment Information */}
//           <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//             <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
//               <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
//                 <Package className="w-5 h-5 mr-2" />
//                 Shipment Details
//               </h3>
//             </div>
//             <div className="px-4 py-5 sm:p-6 space-y-6">
//               <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
//                 <div className="sm:col-span-2">
//                   <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
//                     Weight (kg)
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="weight"
//                       id="weight"
//                       value={formData.weight}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.weight ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.weight && (
//                       <p className="mt-1 text-sm text-red-600">{errors.weight}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700">
//                     Dimensions (L × W × H cm)
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="dimensions"
//                       id="dimensions"
//                       placeholder="45 × 35 × 25"
//                       value={formData.dimensions}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label htmlFor="service" className="block text-sm font-medium text-gray-700">
//                     Service Type
//                   </label>
//                   <div className="mt-1">
//                     <select
//                       id="service"
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     >
//                       <option value="Standard International">Standard International</option>
//                       <option value="Express International">Express International</option>
//                       <option value="Priority International">Priority International</option>
//                       <option value="Economy">Economy</option>
//                     </select>
//                     {errors.service && (
//                       <p className="mt-1 text-sm text-red-600">{errors.service}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="estimated_delivery" className="block text-sm font-medium text-gray-700">
//                     Estimated Delivery Date
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="date"
//                       name="estimated_delivery"
//                       id="estimated_delivery"
//                       value={formData.estimated_delivery}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form Actions */}
//           <div className="flex justify-end space-x-3">
//             <Link
//               href="/admin/dashboard/shipments"
//               className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//             >
//               Cancel
//             </Link>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50"
//             >
//               {isSubmitting ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Creating...
//                 </>
//               ) : (
//                 "Create Shipment"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }


export default function NewShipment() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">New Shipment</h1>
      </div>
    </div>
  )
}