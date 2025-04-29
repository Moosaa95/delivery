// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import {
//   Package,
//   ChevronLeft,
//   Truck,
//   CheckCircle,
//   Clock,
//   AlertCircle,
//   MapPin,
//   User,
//   Package2,
//   Calendar,
//   Edit,
//   Trash2,
//   ArrowRight,
// } from "lucide-react"

// export default function ShipmentDetail({ params}) {
//   const router = useRouter()
//   const { id } = params
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
//   // For demo purposes, we'll hardcode the shipment data
//   // In a real application, this would be fetched from an API
//   const shipment = {
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
//     date: "Apr 14, 2025",
//     estimatedDelivery: "Apr 20, 2025",
//     weight: "31.2 kg",
//     dimensions: "45 × 35 × 25 cm",
//     service: "Express International",
//     trackingEvents: [
//       {
//         date: "Apr 14, 2025 - 08:30 AM",
//         location: "Abu Dhabi International Airport, UAE",
//         description: "Shipment departed from origin airport",
//         icon: <Truck className="w-5 h-5" />,
//       },
//       {
//         date: "Apr 13, 2025 - 09:45 PM",
//         location: "Abu Dhabi Sorting Center, UAE",
//         description: "Shipment processed at sorting facility",
//         icon: <Package className="w-5 h-5" />,
//       },
//       {
//         date: "Apr 13, 2025 - 03:15 PM",
//         location: "Abu Dhabi, UAE",
//         description: "Shipment picked up",
//         icon: <Package className="w-5 h-5" />,
//       },
//       {
//         date: "Apr 12, 2025 - 11:20 AM",
//         location: "Online",
//         description: "Shipping label created",
//         icon: <Clock className="w-5 h-5" />,
//       },
//     ],
//   }

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "In Transit":
//         return <Truck className="w-5 h-5" />
//       case "Delivered":
//         return <CheckCircle className="w-5 h-5" />
//       case "Processing":
//         return <Clock className="w-5 h-5" />
//       case "Exception":
//         return <AlertCircle className="w-5 h-5" />
//       default:
//         return <Package className="w-5 h-5" />
//     }
//   }

//   const handleDelete = () => {
//     // In a real application, this would make an API call to delete the shipment
//     // For now, we'll just redirect back to the shipments list
//     setIsDeleteModalOpen(false)
//     router.push("/admin/dashboard/shipments")
//   }

//   return (
//     <div className="py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <Link 
//               href="/admin/dashboard/shipments" 
//               className="mr-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200"
//             >
//               <ChevronLeft className="h-5 w-5 text-gray-500" />
//             </Link>
//             <h1 className="text-2xl font-semibold text-gray-900">Shipment Details</h1>
//           </div>
//           <div className="flex space-x-3">
//             <Link
//               href={`/admin/dashboard/shipments/${id}/edit`}
//               className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//             >
//               <Edit className="h-4 w-4 mr-2" />
//               Edit
//             </Link>
//             <button
//               onClick={() => setIsDeleteModalOpen(true)}
//               className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//             >
//               <Trash2 className="h-4 w-4 mr-2" />
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
//         <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//           <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h3 className="text-lg leading-6 font-medium text-gray-900">
//                   Tracking ID: {shipment.id}
//                 </h3>
//                 <p className="mt-1 max-w-2xl text-sm text-gray-500">
//                   {shipment.service} • {shipment.weight}
//                 </p>
//               </div>
//               <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${shipment.statusColor}`}>
//                 <div className="flex items-center">
//                   {getStatusIcon(shipment.status)}
//                   <span className="ml-1">{shipment.status}</span>
//                 </div>
//               </span>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-5 sm:p-6">
//             {/* Shipment Information */}
//             <div className="col-span-1">
//               <h4 className="text-lg font-medium text-gray-900 mb-4">Shipment Information</h4>
//               <div className="space-y-4">
//                 <div>
//                   <div className="flex items-center text-sm font-medium text-gray-500">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     Shipping Date
//                   </div>
//                   <div className="mt-1 text-sm text-gray-900">{shipment.date}</div>
//                 </div>
//                 <div>
//                   <div className="flex items-center text-sm font-medium text-gray-500">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     Estimated Delivery
//                   </div>
//                   <div className="mt-1 text-sm text-gray-900">{shipment.estimatedDelivery}</div>
//                 </div>
//                 <div>
//                   <div className="flex items-center text-sm font-medium text-gray-500">
//                     <Package2 className="h-4 w-4 mr-2" />
//                     Weight
//                   </div>
//                   <div className="mt-1 text-sm text-gray-900">{shipment.weight}</div>
//                 </div>
//                 <div>
//                   <div className="flex items-center text-sm font-medium text-gray-500">
//                     <Package2 className="h-4 w-4 mr-2" />
//                     Dimensions
//                   </div>
//                   <div className="mt-1 text-sm text-gray-900">{shipment.dimensions}</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Customer Information */}
//             <div className="col-span-1">
//               <h4 className="text-lg font-medium text-gray-900 mb-4">Customer Information</h4>
//               <div className="space-y-4">
//                 <div>
//                   <div className="flex items-center text-sm font-medium text-gray-500">
//                     <User className="h-4 w-4 mr-2" />
//                     Customer Name
//                   </div>
//                   <div className="mt-1 text-sm text-gray-900">{shipment.customer}</div>
//                 </div>
//                 <div>
//                   <div className="flex items-center text-sm font-medium text-gray-500">
//                     <User className="h-4 w-4 mr-2" />
//                     Email
//                   </div>
//                   <div className="mt-1 text-sm text-gray-900">{shipment.customerEmail}</div>
//                 </div>
//                 <div>
//                   <div className="flex items-center text-sm font-medium text-gray-500">
//                     <User className="h-4 w-4 mr-2" />
//                     Phone
//                   </div>
//                   <div className="mt-1 text-sm text-gray-900">{shipment.customerPhone}</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Route Information */}
//             <div className="col-span-1">
//               <h4 className="text-lg font-medium text-gray-900 mb-4">Route Information</h4>
//               <div className="space-y-4">
//                 <div>
//                   <div className="flex items-center text-sm font-medium text-gray-500">
//                     <MapPin className="h-4 w-4 mr-2" />
//                     Origin
//                   </div>
//                   <div className="mt-1 text-sm text-gray-900">{shipment.origin}</div>
//                   <div className="mt-1 text-sm text-gray-500">{shipment.originAddress}</div>
//                 </div>
//                 <div className="flex justify-center py-2">
//                   <ArrowRight className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <div>
//                   <div className="flex items-center text-sm font-medium text-gray-500">
//                     <MapPin className="h-4 w-4 mr-2" />
//                     Destination
//                   </div>
//                   <div className="mt-1 text-sm text-gray-900">{shipment.destination}</div>
//                   <div className="mt-1 text-sm text-gray-500">{shipment.destinationAddress}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Tracking Timeline */}
//           <div className="px-4 py-5 sm:p-6 border-t border-gray-200">
//             <h4 className="text-lg font-medium text-gray-900 mb-4">Tracking Timeline</h4>
//             <div className="flow-root">
//               <ul className="-mb-8">
//                 {shipment.trackingEvents.map((event, index) => (
//                   <li key={index}>
//                     <div className="relative pb-8">
//                       {index !== shipment.trackingEvents.length - 1 ? (
//                         <span 
//                           className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" 
//                           aria-hidden="true"
//                         />
//                       ) : null}
//                       <div className="relative flex space-x-3">
//                         <div>
//                           <span className="h-8 w-8 rounded-full bg-cyan-50 flex items-center justify-center ring-8 ring-white">
//                             {event.icon}
//                           </span>
//                         </div>
//                         <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
//                           <div>
//                             <p className="text-sm text-gray-900">{event.description}</p>
//                             <p className="text-sm text-gray-500">{event.location}</p>
//                           </div>
//                           <div className="text-right text-sm whitespace-nowrap text-gray-500">
//                             {event.date}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Delete Confirmation Modal */}
//       {isDeleteModalOpen && (
//         <div className="fixed z-10 inset-0 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                     <Trash2 className="h-6 w-6 text-red-600" />
//                   </div>
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                     <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Shipment</h3>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-500">
//                         Are you sure you want to delete shipment {shipment.id}? This action cannot be undone.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
//                   onClick={handleDelete}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   type="button"
//                   className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:w-auto sm:text-sm"
//                   onClick={() => setIsDeleteModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

export default function ShipmentDetail() {
  return (
    <h1>Details</h1>
  )
}