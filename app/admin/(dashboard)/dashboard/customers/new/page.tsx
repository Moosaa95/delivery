// "use client"

// import type React from "react"

// import { useState } from "react"
// import Link from "next/link"
// import { ArrowLeft, Save } from "lucide-react"

// export default function NewCustomerPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "United States",
//     type: "Business",
//     notes: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // In a real application, you would send the form data to your API here
//     console.log("Form submitted:", formData)
//     // Then redirect to the customers list or the new customer's detail page
//   }

//   return (
//     <div className="py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         <div className="flex items-center mb-6">
//           <Link href="/admin/dashboard/customers" className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
//             <ArrowLeft className="h-5 w-5 text-gray-500" />
//           </Link>
//           <h1 className="text-2xl font-semibold text-gray-900">Add New Customer</h1>
//         </div>

//         <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//           <form onSubmit={handleSubmit}>
//             <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">Customer Information</h3>
//               <p className="mt-1 text-sm text-gray-500">
//                 Please fill in the customer details. Fields marked with * are required.
//               </p>
//             </div>

//             <div className="px-4 py-5 sm:p-6">
//               <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
//                 <div className="sm:col-span-3">
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                     Full Name *
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="company" className="block text-sm font-medium text-gray-700">
//                     Company Name
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="company"
//                       id="company"
//                       value={formData.company}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                     Email Address *
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                     Phone Number *
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="tel"
//                       name="phone"
//                       id="phone"
//                       required
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-6">
//                   <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//                     Street Address *
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="address"
//                       id="address"
//                       required
//                       value={formData.address}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                     City *
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="city"
//                       id="city"
//                       required
//                       value={formData.city}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//                     State / Province
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="state"
//                       id="state"
//                       value={formData.state}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
//                     ZIP / Postal Code *
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       name="postalCode"
//                       id="postalCode"
//                       required
//                       value={formData.postalCode}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//                     Country *
//                   </label>
//                   <div className="mt-1">
//                     <select
//                       id="country"
//                       name="country"
//                       required
//                       value={formData.country}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     >
//                       <option value="United States">United States</option>
//                       <option value="Canada">Canada</option>
//                       <option value="Mexico">Mexico</option>
//                       <option value="United Kingdom">United Kingdom</option>
//                       <option value="Germany">Germany</option>
//                       <option value="France">France</option>
//                       <option value="Spain">Spain</option>
//                       <option value="Italy">Italy</option>
//                       <option value="Australia">Australia</option>
//                       <option value="Japan">Japan</option>
//                       <option value="China">China</option>
//                       <option value="India">India</option>
//                       <option value="Brazil">Brazil</option>
//                       <option value="South Africa">South Africa</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label htmlFor="type" className="block text-sm font-medium text-gray-700">
//                     Customer Type *
//                   </label>
//                   <div className="mt-1">
//                     <select
//                       id="type"
//                       name="type"
//                       required
//                       value={formData.type}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     >
//                       <option value="Business">Business</option>
//                       <option value="Individual">Individual</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="sm:col-span-6">
//                   <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
//                     Notes
//                   </label>
//                   <div className="mt-1">
//                     <textarea
//                       id="notes"
//                       name="notes"
//                       rows={3}
//                       value={formData.notes}
//                       onChange={handleChange}
//                       className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                     ></textarea>
//                   </div>
//                   <p className="mt-2 text-sm text-gray-500">
//                     Add any additional information about this customer that might be helpful.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
//               <Link
//                 href="/admin/dashboard/customers"
//                 className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//               >
//                 Cancel
//               </Link>
//               <button
//                 type="submit"
//                 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//               >
//                 <Save className="h-4 w-4 mr-2" />
//                 Save Customer
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function NewCustomerPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Add New Customer</h1>
        {/* Add your form or component here */}
      </div>
    </div>
  )
}