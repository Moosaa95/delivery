// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import {
//   ChevronLeft,
//   MapPin,
//   User,
//   Package,
//   Calendar,
//   CheckCircle,
//   Clock,
//   AlertCircle,
//   Truck,
//   Save,
// } from "lucide-react"

// export default function EditShipment({ params }: { params: { id: string } }) {
//   const router = useRouter()
//   const { id } = params
  
//   // For demo purposes, we'll hardcode the shipment data
//   // In a real application, this would be fetched from an API
//   const initialShipmentData = {
//     id: id || "CRU7327510138",
//     customer: "Vicki Negron",
//     customerEmail: "vicki.negron@example.com",
//     customerPhone: "+1 (555) 123-4567",
//     origin: "Abu Dhabi, UAE",
//     originAddress: "21 Marina Street, Downtown Abu Dhabi, UAE",
//     destination: "Chester, VT, USA",
//     destinationAddress: "145 Main Street, Chester, VT 05143, USA",
//     status: "In Transit",
//     statusColor: "bg-blue-100 text-blue-800",
//     date: "2025-04-14",
//     estimatedDelivery: "2025-04-20",
//     weight: "31.2",
//     dimensions: "45 × 35 × 25",
//     service: "Express International",
//   }

//   const [formData, setFormData] = useState(initialShipmentData)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [errors, setErrors] = useState({})

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
    
//     if (!formData.customer.trim()) {
//       newErrors.customer = "Customer name is required"
//     }
    
//     if (!formData.customerEmail.trim()) {
//       newErrors.customerEmail = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.customerEmail)) {
//       newErrors.customerEmail = "Email is invalid"
//     }
    
//     if (!formData.customerPhone.trim()) {
//       newErrors.customerPhone = "Phone number is required"
//     }
    
//     if (!formData.origin.trim()) {
//       newErrors.origin = "Origin is required"
//     }
    
//     if (!formData.originAddress.trim()) {
//       newErrors.originAddress = "Origin address is required"
//     }
    
//     if (!formData.destination.trim()) {
//       newErrors.destination = "Destination is required"
//     }
    
//     if (!formData.destinationAddress.trim()) {
//       newErrors.destinationAddress = "Destination address is required"
//     }
    
//     if (!formData.weight.trim()) {
//       newErrors.weight = "Weight is required"
//     }
    
//     if (!formData.service) {
//       newErrors.service = "Service type is required"
//     }
    
//     if (!formData.status) {
//       newErrors.status = "Status is required"
//     }
    
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
    
//     if (!validateForm()) {
//       return
//     }
    
//     setIsSubmitting(true)
    
//     // In a real application, this would be an API call to update the shipment
//     // For demo purposes, we'll just redirect after a short delay
//     setTimeout(() => {
//       router.push(`/admin/dashboard/shipments/${id}`)
//     }, 1000)
//   }

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "In Transit":
//         return "bg-blue-100 text-blue-800"
//       case "Delivered":
//         return "bg-green-100 text-green-800"
//       case "Processing":
//         return "bg-yellow-100 text-yellow-800"
//       case "Exception":
//         return "bg-red-100 text-red-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "In Transit":
//         return <Truck className="w-4 h-4" />
//       case "Delivered":
//         return <CheckCircle className="w-4 h-4" />
//       case "Processing":
//         return <Clock className="w-4 h-4" />
//       case "Exception":
//         return <AlertCircle className="w-4 h-4" />
//       default:
//         return <Package className="w-4 h-4" />
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
//           <h1 className="text-2xl font-semibold text-gray-900">Edit Shipment</h1>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
//         <form onSubmit={handleSubmit} className="space-y-8 text-black">
//           {/* Customer Information */}
//           <div className="bg-white shadow overflow-hidden sm:rounded-lg text-black">
//             <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
//               <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
//                 <User className="w-5 h-5 mr-2" />
//                 Customer Information
//               </h3>
//             </div>
//             <div className="px-4 py-5 sm:p-6 space-y-6">
//               <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 ">
//                 <div className="sm:col-span-3">
//                   <label htmlFor="customer" className="block text-sm font-medium text-gray-700">
//                     Customer Name
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="customer"
//                       id="customer"
//                       value={formData.customer}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 text-black focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.customer ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.customer && (
//                       <p className="mt-1 text-sm text-red-600">{errors.customer}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="email"
//                       name="customerEmail"
//                       id="customerEmail"
//                       value={formData.customerEmail}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.customerEmail ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.customerEmail && (
//                       <p className="mt-1 text-sm text-red-600">{errors.customerEmail}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">
//                     Phone Number
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="customerPhone"
//                       id="customerPhone"
//                       value={formData.customerPhone}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.customerPhone ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.customerPhone && (
//                       <p className="mt-1 text-sm text-red-600">{errors.customerPhone}</p>
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
//                   <label htmlFor="originAddress" className="block text-sm font-medium text-gray-700">
//                     Origin Address
//                   </label>
//                   <div className="mt-1">
//                     <textarea
//                       id="originAddress"
//                       name="originAddress"
//                       rows={2}
//                       value={formData.originAddress}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.originAddress ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.originAddress && (
//                       <p className="mt-1 text-sm text-red-600">{errors.originAddress}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="sm:col-span-6">
//                   <label htmlFor="destinationAddress" className="block text-sm font-medium text-gray-700">
//                     Destination Address
//                   </label>
//                   <div className="mt-1">
//                     <textarea
//                       id="destinationAddress"
//                       name="destinationAddress"
//                       rows={2}
//                       value={formData.destinationAddress}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.destinationAddress ? "border-red-300" : ""
//                       }`}
//                     />
//                     {errors.destinationAddress && (
//                       <p className="mt-1 text-sm text-red-600">{errors.destinationAddress}</p>
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

//                 <div className="sm:col-span-2">
//                   <label htmlFor="date" className="block text-sm font-medium text-gray-700">
//                     Shipping Date
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="date"
//                       name="date"
//                       id="date"
//                       value={formData.date}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label htmlFor="estimatedDelivery" className="block text-sm font-medium text-gray-700">
//                     Estimated Delivery Date
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="date"
//                       name="estimatedDelivery"
//                       id="estimatedDelivery"
//                       value={formData.estimatedDelivery}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label htmlFor="status" className="block text-sm font-medium text-gray-700">
//                     Status
//                   </label>
//                   <div className="mt-1">
//                     <select
//                       id="status"
//                       name="status"
//                       value={formData.status}
//                       onChange={handleChange}
//                       className={`shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md ${
//                         errors.status ? "border-red-300" : ""
//                       }`}
//                     >
//                       <option value="Processing">Processing</option>
//                       <option value="In Transit">In Transit</option>
//                       <option value="Delivered">Delivered</option>
//                       <option value="Exception">Exception</option>
//                     </select>
//                     {errors.status && (
//                       <p className="mt-1 text-sm text-red-600">{errors.status}</p>
//                     )}
//                   </div>
//                 </div>

//                 {formData.status && (
//                   <div className="sm:col-span-6 flex items-center">
//                     <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusColor(formData.status)}`}>
//                       <div className="flex items-center">
//                         {getStatusIcon(formData.status)}
//                         <span className="ml-1">{formData.status}</span>
//                       </div>
//                     </span>
//                   </div>
//                 )}
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
//                   Saving...
//                 </>
//               ) : (
//                 <>
//                   <Save className="h-4 w-4 mr-2" />
//                   Save Changes
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }


export default function Shipment() {
  return (
    <h1>Shipment</h1>
  )
}