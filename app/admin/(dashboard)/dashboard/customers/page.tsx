// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Search, Filter, ChevronDown, ArrowUpDown, Download, Plus, Mail, Phone, Edit, Trash2, Eye } from "lucide-react"

// export default function CustomersPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filterType, setFilterType] = useState("all")
//   const [sortBy, setSortBy] = useState("name")
//   const [sortOrder, setSortOrder] = useState("asc")

//   // Sample customer data
//   const allCustomers = [
//     {
//       id: "CUST001",
//       name: "Vicki Negron",
//       company: "Negron Shipping LLC",
//       email: "vicki.negron@example.com",
//       phone: "+1 (802) 289-1119",
//       country: "United States",
//       status: "Active",
//       type: "Business",
//       shipments: 12,
//       joinDate: "Jan 15, 2023",
//     },
//     {
//       id: "CUST002",
//       name: "John Smith",
//       company: "Global Trade Co.",
//       email: "john.smith@example.com",
//       phone: "+1 (555) 123-4567",
//       country: "United States",
//       status: "Active",
//       type: "Business",
//       shipments: 28,
//       joinDate: "Mar 22, 2022",
//     },
//     {
//       id: "CUST003",
//       name: "Sarah Johnson",
//       company: "Johnson Imports",
//       email: "sarah.johnson@example.com",
//       phone: "+1 (555) 987-6543",
//       country: "Canada",
//       status: "Active",
//       type: "Business",
//       shipments: 17,
//       joinDate: "Nov 10, 2022",
//     },
//     {
//       id: "CUST004",
//       name: "Michael Chen",
//       company: "",
//       email: "michael.chen@example.com",
//       phone: "+49 30 12345678",
//       country: "Germany",
//       status: "Inactive",
//       type: "Individual",
//       shipments: 3,
//       joinDate: "Jun 5, 2023",
//     },
//     {
//       id: "CUST005",
//       name: "Elena Rodriguez",
//       company: "Rodriguez Exports S.L.",
//       email: "elena.rodriguez@example.com",
//       phone: "+34 91 123 4567",
//       country: "Spain",
//       status: "Active",
//       type: "Business",
//       shipments: 42,
//       joinDate: "Feb 18, 2022",
//     },
//     {
//       id: "CUST006",
//       name: "David Wilson",
//       company: "Wilson Logistics",
//       email: "david.wilson@example.com",
//       phone: "+1 (555) 234-5678",
//       country: "United States",
//       status: "Active",
//       type: "Business",
//       shipments: 31,
//       joinDate: "Apr 3, 2022",
//     },
//     {
//       id: "CUST007",
//       name: "Sophia Lee",
//       company: "",
//       email: "sophia.lee@example.com",
//       phone: "+82 2 1234 5678",
//       country: "South Korea",
//       status: "Active",
//       type: "Individual",
//       shipments: 5,
//       joinDate: "Sep 12, 2023",
//     },
//     {
//       id: "CUST008",
//       name: "James Brown",
//       company: "Brown & Associates",
//       email: "james.brown@example.com",
//       phone: "+61 2 9876 5432",
//       country: "Australia",
//       status: "Active",
//       type: "Business",
//       shipments: 19,
//       joinDate: "Jul 29, 2022",
//     },
//     {
//       id: "CUST009",
//       name: "Olivia Martinez",
//       company: "Martinez Global",
//       email: "olivia.martinez@example.com",
//       phone: "+52 55 1234 5678",
//       country: "Mexico",
//       status: "Inactive",
//       type: "Business",
//       shipments: 8,
//       joinDate: "Oct 7, 2022",
//     },
//     {
//       id: "CUST010",
//       name: "William Taylor",
//       company: "",
//       email: "william.taylor@example.com",
//       phone: "+1 (604) 555-7890",
//       country: "Canada",
//       status: "Active",
//       type: "Individual",
//       shipments: 2,
//       joinDate: "Dec 15, 2023",
//     },
//   ]

//   // Filter customers based on search term and type
//   const filteredCustomers = allCustomers.filter((customer) => {
//     const matchesSearch =
//       searchTerm === "" ||
//       customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       customer.id.toLowerCase().includes(searchTerm.toLowerCase())

//     const matchesType = filterType === "all" || customer.type.toLowerCase() === filterType.toLowerCase()

//     return matchesSearch && matchesType
//   })

//   // Sort customers
//   const sortedCustomers = [...filteredCustomers].sort((a, b) => {
//     let comparison = 0
//     if (sortBy === "name") {
//       comparison = a.name.localeCompare(b.name)
//     } else if (sortBy === "company") {
//       comparison = a.company.localeCompare(b.company)
//     } else if (sortBy === "email") {
//       comparison = a.email.localeCompare(b.email)
//     } else if (sortBy === "country") {
//       comparison = a.country.localeCompare(b.country)
//     } else if (sortBy === "shipments") {
//       comparison = a.shipments - b.shipments
//     } else if (sortBy === "joinDate") {
//       comparison = new Date(a.joinDate) > new Date(b.joinDate) ? 1 : -1
//     }

//     return sortOrder === "asc" ? comparison : -comparison
//   })

//   const handleSort = (column: string) => {
//     if (sortBy === column) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc")
//     } else {
//       setSortBy(column)
//       setSortOrder("asc")
//     }
//   }

//   return (
//     <div className="py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
//           <Link
//             href="/admin/dashboard/customers/new"
//             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//           >
//             <Plus className="h-4 w-4 mr-2" />
//             Add Customer
//           </Link>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         <div className="mt-8">
//           {/* Filters and Search */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 mb-6">
//             <div className="flex-1 min-w-0">
//               <div className="relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Search className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
//                   placeholder="Search by name, company, email, or ID"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
//               <div className="relative inline-block text-left">
//                 <div>
//                   <button
//                     type="button"
//                     className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//                     id="filter-menu"
//                     aria-expanded="true"
//                     aria-haspopup="true"
//                   >
//                     <Filter className="h-5 w-5 text-gray-400 mr-2" />
//                     {filterType === "all" ? "All Types" : filterType}
//                     <ChevronDown className="h-5 w-5 text-gray-400 ml-2" />
//                   </button>
//                 </div>

//                 <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 hidden">
//                   <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="filter-menu">
//                     <button
//                       onClick={() => setFilterType("all")}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                       All Types
//                     </button>
//                     <button
//                       onClick={() => setFilterType("business")}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                       Business
//                     </button>
//                     <button
//                       onClick={() => setFilterType("individual")}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                       role="menuitem"
//                     >
//                       Individual
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//               >
//                 <Download className="h-5 w-5 text-gray-400 mr-2" />
//                 Export
//               </button>
//             </div>
//           </div>

//           {/* Customers Table */}
//           <div className="flex flex-col">
//             <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//               <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//                 <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                           onClick={() => handleSort("name")}
//                         >
//                           <div className="flex items-center">
//                             Name/Company
//                             <ArrowUpDown className="h-4 w-4 ml-1" />
//                           </div>
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                           onClick={() => handleSort("email")}
//                         >
//                           <div className="flex items-center">
//                             Contact
//                             <ArrowUpDown className="h-4 w-4 ml-1" />
//                           </div>
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                           onClick={() => handleSort("country")}
//                         >
//                           <div className="flex items-center">
//                             Country
//                             <ArrowUpDown className="h-4 w-4 ml-1" />
//                           </div>
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Status
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                           onClick={() => handleSort("shipments")}
//                         >
//                           <div className="flex items-center">
//                             Shipments
//                             <ArrowUpDown className="h-4 w-4 ml-1" />
//                           </div>
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                           onClick={() => handleSort("joinDate")}
//                         >
//                           <div className="flex items-center">
//                             Join Date
//                             <ArrowUpDown className="h-4 w-4 ml-1" />
//                           </div>
//                         </th>
//                         <th scope="col" className="relative px-6 py-3">
//                           <span className="sr-only">Actions</span>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {sortedCustomers.map((customer) => (
//                         <tr key={customer.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-10 w-10 bg-cyan-100 rounded-full flex items-center justify-center">
//                                 <span className="text-cyan-600 font-medium text-sm">
//                                   {customer.name
//                                     .split(" ")
//                                     .map((n) => n[0])
//                                     .join("")}
//                                 </span>
//                               </div>
//                               <div className="ml-4">
//                                 <div className="text-sm font-medium text-gray-900">{customer.name}</div>
//                                 {customer.company && <div className="text-sm text-gray-500">{customer.company}</div>}
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm text-gray-900 flex items-center">
//                               <Mail className="h-4 w-4 text-gray-400 mr-1" />
//                               {customer.email}
//                             </div>
//                             <div className="text-sm text-gray-500 flex items-center">
//                               <Phone className="h-4 w-4 text-gray-400 mr-1" />
//                               {customer.phone}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.country}</td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span
//                               className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                                 customer.status === "Active"
//                                   ? "bg-green-100 text-green-800"
//                                   : "bg-gray-100 text-gray-800"
//                               }`}
//                             >
//                               {customer.status}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.shipments}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.joinDate}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <div className="flex items-center justify-end space-x-2">
//                               <Link
//                                 href={`/admin/dashboard/customers/${customer.id}`}
//                                 className="text-cyan-600 hover:text-cyan-900"
//                               >
//                                 <Eye className="h-4 w-4" />
//                               </Link>
//                               <Link
//                                 href={`/admin/dashboard/customers/${customer.id}/edit`}
//                                 className="text-cyan-600 hover:text-cyan-900"
//                               >
//                                 <Edit className="h-4 w-4" />
//                               </Link>
//                               <button className="text-red-600 hover:text-red-900">
//                                 <Trash2 className="h-4 w-4" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Pagination */}
//           <div className="flex items-center justify-between mt-4">
//             <div className="flex-1 flex justify-between sm:hidden">
//               <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//                 Previous
//               </button>
//               <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//                 Next
//               </button>
//             </div>
//             <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//               <div>
//                 <p className="text-sm text-gray-700">
//                   Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
//                   <span className="font-medium">{filteredCustomers.length}</span> results
//                 </p>
//               </div>
//               <div>
//                 <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                   <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                     <span className="sr-only">Previous</span>
//                     <svg
//                       className="h-5 w-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                   <button
//                     aria-current="page"
//                     className="z-10 bg-cyan-50 border-cyan-500 text-cyan-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
//                   >
//                     1
//                   </button>
//                   <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
//                     2
//                   </button>
//                   <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
//                     3
//                   </button>
//                   <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
//                     ...
//                   </span>
//                   <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
//                     10
//                   </button>
//                   <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                     <span className="sr-only">Next</span>
//                     <svg
//                       className="h-5 w-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function CustomersPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center">
         <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
        </div>
      </div>
    </div>
  )
}