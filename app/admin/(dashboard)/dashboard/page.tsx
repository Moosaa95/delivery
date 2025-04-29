// import Link from "next/link"
// import {
//   Package,
//   Users,
//   Truck,
//   AlertCircle,
//   CheckCircle,
//   Clock,
//   TrendingUp,
//   TrendingDown,
//   DollarSign,
//   Calendar,
//   ArrowRight,
//   BarChart2,
//   Map,
//   Globe,
// } from "lucide-react"

// export default function Dashboard() {
//   // Sample data for the dashboard
//   const stats = [
//     {
//       name: "Active Shipments",
//       value: "1,284",
//       change: "+12.5%",
//       trend: "up",
//       icon: Package,
//       color: "bg-blue-500",
//     },
//     {
//       name: "Customers",
//       value: "3,427",
//       change: "+5.2%",
//       trend: "up",
//       icon: Users,
//       color: "bg-green-500",
//     },
//     {
//       name: "Available Drivers",
//       value: "78",
//       change: "-3.1%",
//       trend: "down",
//       icon: Truck,
//       color: "bg-yellow-500",
//     },
//     {
//       name: "Delayed Shipments",
//       value: "23",
//       change: "+2.3%",
//       trend: "up",
//       icon: AlertCircle,
//       color: "bg-red-500",
//     },
//   ]

//   const recentShipments = [
//     {
//       id: "ECO7327510138",
//       customer: "Vicki Negron",
//       origin: "Abu Dhabi, UAE",
//       destination: "Chester, VT, USA",
//       status: "In Transit",
//       statusColor: "bg-blue-100 text-blue-800",
//       date: "Apr 14, 2025",
//     },
//     {
//       id: "ECO7327510139",
//       customer: "John Smith",
//       origin: "London, UK",
//       destination: "New York, NY, USA",
//       status: "Delivered",
//       statusColor: "bg-green-100 text-green-800",
//       date: "Apr 13, 2025",
//     },
//     {
//       id: "ECO7327510140",
//       customer: "Sarah Johnson",
//       origin: "Tokyo, Japan",
//       destination: "Sydney, Australia",
//       status: "Processing",
//       statusColor: "bg-yellow-100 text-yellow-800",
//       date: "Apr 13, 2025",
//     },
//     {
//       id: "ECO7327510141",
//       customer: "Michael Chen",
//       origin: "Berlin, Germany",
//       destination: "Paris, France",
//       status: "Exception",
//       statusColor: "bg-red-100 text-red-800",
//       date: "Apr 12, 2025",
//     },
//     {
//       id: "ECO7327510142",
//       customer: "Elena Rodriguez",
//       origin: "Madrid, Spain",
//       destination: "Rome, Italy",
//       status: "Delivered",
//       statusColor: "bg-green-100 text-green-800",
//       date: "Apr 12, 2025",
//     },
//   ]

//   const getStatusIcon = (status: string) => {
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
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
//           <div className="flex items-center space-x-2">
//             <span className="text-sm text-gray-500">Last updated: April 23, 2025, 11:27 AM</span>
//             <button className="p-1 rounded-full hover:bg-gray-100">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         {/* Stats */}
//         <div className="mt-8">
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat) => (
//               <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
//                 <div className="p-5">
//                   <div className="flex items-center">
//                     <div className={`flex-shrink-0 p-3 rounded-md ${stat.color}`}>
//                       <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
//                     </div>
//                     <div className="ml-5 w-0 flex-1">
//                       <dl>
//                         <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
//                         <dd>
//                           <div className="text-lg font-medium text-gray-900">{stat.value}</div>
//                         </dd>
//                       </dl>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 px-5 py-3">
//                   <div className="flex items-center">
//                     {stat.trend === "up" ? (
//                       <TrendingUp className="h-4 w-4 text-green-500" />
//                     ) : (
//                       <TrendingDown className="h-4 w-4 text-red-500" />
//                     )}
//                     <span
//                       className={`ml-2 text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"} font-medium`}
//                     >
//                       {stat.change}
//                     </span>
//                     <span className="ml-2 text-sm text-gray-500">from last month</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Shipment Volume Chart */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-medium text-gray-900">Shipment Volume</h2>
//               <div className="flex items-center space-x-2">
//                 <select className="text-sm border-gray-300 rounded-md">
//                   <option>Last 7 days</option>
//                   <option>Last 30 days</option>
//                   <option>Last 90 days</option>
//                 </select>
//                 <button className="p-1 rounded-full hover:bg-gray-100">
//                   <BarChart2 className="h-5 w-5 text-gray-500" />
//                 </button>
//               </div>
//             </div>
//             <div className="h-64 relative">
//               {/* Chart would be rendered here with a charting library */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-full">
//                   <div className="flex justify-between mb-2">
//                     <div className="text-xs text-gray-500">Apr 17</div>
//                     <div className="text-xs text-gray-500">Apr 23</div>
//                   </div>
//                   <div className="space-y-4">
//                     <div>
//                       <div className="flex justify-between text-xs text-gray-500 mb-1">
//                         <span>Air Freight</span>
//                         <span>432 shipments</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between text-xs text-gray-500 mb-1">
//                         <span>Sea Freight</span>
//                         <span>587 shipments</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex justify-between text-xs text-gray-500 mb-1">
//                         <span>Road Freight</span>
//                         <span>265 shipments</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Global Distribution Map */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-medium text-gray-900">Global Distribution</h2>
//               <div className="flex items-center space-x-2">
//                 <select className="text-sm border-gray-300 rounded-md">
//                   <option>All Regions</option>
//                   <option>North America</option>
//                   <option>Europe</option>
//                   <option>Asia</option>
//                 </select>
//                 <button className="p-1 rounded-full hover:bg-gray-100">
//                   <Map className="h-5 w-5 text-gray-500" />
//                 </button>
//               </div>
//             </div>
//             <div className="h-64 relative">
//               {/* Map would be rendered here with a mapping library */}
//               <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
//                 <div className="text-center">
//                   <Globe className="h-12 w-12 text-gray-400 mx-auto mb-2" />
//                   <p className="text-gray-500">Global shipment distribution map</p>
//                   <p className="text-xs text-gray-400">Interactive map would be displayed here</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="mt-8">
//           <h2 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h2>
//           <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 name: "Create Shipment",
//                 icon: Package,
//                 color: "bg-cyan-600 hover:bg-cyan-700",
//                 href: "/admin/dashboard/shipments/new",
//               },
//               {
//                 name: "Add Customer",
//                 icon: Users,
//                 color: "bg-cyan-600 hover:bg-cyan-700",
//                 href: "/admin/dashboard/customers/new",
//               },
//               {
//                 name: "Schedule Pickup",
//                 icon: Calendar,
//                 color: "bg-cyan-600 hover:bg-cyan-700",
//                 href: "/admin/dashboard/schedule",
//               },
//               {
//                 name: "Generate Invoice",
//                 icon: DollarSign,
//                 color: "bg-cyan-600 hover:bg-cyan-700",
//                 href: "/admin/dashboard/invoices/new",
//               },
//             ].map((action) => (
//               <Link
//                 key={action.name}
//                 href={action.href}
//                 className={`${action.color} text-white group flex items-center justify-center px-4 py-4 rounded-lg shadow-sm text-sm font-medium transition-colors`}
//               >
//                 <action.icon className="mr-2 h-5 w-5" />
//                 {action.name}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Recent Shipments */}
//         <div className="mt-8">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Shipments</h2>
//             <Link
//               href="/admin/dashboard/shipments"
//               className="text-sm font-medium text-cyan-600 hover:text-cyan-500 flex items-center"
//             >
//               View all <ArrowRight className="ml-1 h-4 w-4" />
//             </Link>
//           </div>
//           <div className="mt-2 flex flex-col">
//             <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//               <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//                 <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Tracking ID
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Customer
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Route
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Status
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Date
//                         </th>
//                         <th scope="col" className="relative px-6 py-3">
//                           <span className="sr-only">Edit</span>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {recentShipments.map((shipment) => (
//                         <tr key={shipment.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-cyan-600">
//                             <Link href={`/admin/dashboard/shipments/${shipment.id}`}>{shipment.id}</Link>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.customer}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {shipment.origin} → {shipment.destination}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span
//                               className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${shipment.statusColor}`}
//                             >
//                               <div className="flex items-center">
//                                 {getStatusIcon(shipment.status)}
//                                 <span className="ml-1">{shipment.status}</span>
//                               </div>
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.date}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <Link
//                               href={`/admin/dashboard/shipments/${shipment.id}`}
//                               className="text-cyan-600 hover:text-cyan-900"
//                             >
//                               View
//                             </Link>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Performance Overview */}
//         <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="px-4 py-5 sm:p-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">Shipment Performance</h3>
//               <div className="mt-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="text-sm font-medium text-gray-500">On-Time Delivery</div>
//                   <div className="text-sm font-medium text-gray-900">94%</div>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "94%" }}></div>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="text-sm font-medium text-gray-500">Customer Satisfaction</div>
//                   <div className="text-sm font-medium text-gray-900">92%</div>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "92%" }}></div>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="text-sm font-medium text-gray-500">Delivery Exceptions</div>
//                   <div className="text-sm font-medium text-gray-900">3%</div>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "3%" }}></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="px-4 py-5 sm:p-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">Revenue Overview</h3>
//               <div className="mt-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="text-sm font-medium text-gray-500">Monthly Revenue</div>
//                   <div className="text-sm font-medium text-gray-900">$1,284,300</div>
//                 </div>
//                 <div className="flex items-center">
//                   <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
//                   <span className="text-sm text-green-600">+8.2% from last month</span>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="text-sm font-medium text-gray-500">Quarterly Projection</div>
//                   <div className="text-sm font-medium text-gray-900">$3,850,000</div>
//                 </div>
//                 <div className="flex items-center">
//                   <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
//                   <span className="text-sm text-green-600">+12.5% from last quarter</span>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="text-sm font-medium text-gray-500">Operating Costs</div>
//                   <div className="text-sm font-medium text-gray-900">$780,500</div>
//                 </div>
//                 <div className="flex items-center">
//                   <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
//                   <span className="text-sm text-red-600">+2.3% from last month</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-md">
//           <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
//             <Link
//               href="/admin/dashboard/activity"
//               className="text-sm font-medium text-cyan-600 hover:text-cyan-500 flex items-center"
//             >
//               View all <ArrowRight className="ml-1 h-4 w-4" />
//             </Link>
//           </div>
//           <ul className="divide-y divide-gray-200">
//             {[
//               {
//                 id: 1,
//                 user: "Admin User",
//                 action: "created a new shipment",
//                 target: "ECO7327510143",
//                 time: "5 minutes ago",
//                 icon: Package,
//                 iconColor: "bg-blue-100 text-blue-600",
//               },
//               {
//                 id: 2,
//                 user: "System",
//                 action: "updated status for shipment",
//                 target: "ECO7327510138",
//                 time: "1 hour ago",
//                 icon: Truck,
//                 iconColor: "bg-green-100 text-green-600",
//               },
//               {
//                 id: 3,
//                 user: "Admin User",
//                 action: "added a new customer",
//                 target: "Global Exports Ltd.",
//                 time: "3 hours ago",
//                 icon: Users,
//                 iconColor: "bg-purple-100 text-purple-600",
//               },
//               {
//                 id: 4,
//                 user: "System",
//                 action: "flagged shipment with exception",
//                 target: "ECO7327510141",
//                 time: "5 hours ago",
//                 icon: AlertCircle,
//                 iconColor: "bg-red-100 text-red-600",
//               },
//             ].map((activity) => (
//               <li key={activity.id}>
//                 <div className="px-4 py-4 sm:px-6">
//                   <div className="flex items-center">
//                     <div className={`flex-shrink-0 rounded-md p-2 ${activity.iconColor}`}>
//                       <activity.icon className="h-5 w-5" />
//                     </div>
//                     <div className="ml-3 flex-1">
//                       <p className="text-sm font-medium text-gray-900">
//                         <span className="font-bold">{activity.user}</span> {activity.action}{" "}
//                         <Link href="#" className="text-cyan-600 hover:text-cyan-900">
//                           {activity.target}
//                         </Link>
//                       </p>
//                       <p className="text-sm text-gray-500">{activity.time}</p>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }



export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4 text-lg">Welcome to the admin dashboard!</p>
      <p className="mt-2 text-sm text-gray-500">This is where you can manage your application.</p>
    </div>
  )
}