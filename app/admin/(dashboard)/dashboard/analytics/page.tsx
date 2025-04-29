// "use client"

// import { useState } from "react"
// import { BarChart2, TrendingUp, Calendar, Download, Map, Package, Truck, DollarSign, Users } from "lucide-react"

// export default function AnalyticsPage() {
//   const [timeRange, setTimeRange] = useState("month")

//   return (
//     <div className="py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
//           <div className="flex items-center space-x-3">
//             <div className="flex items-center space-x-2 bg-white rounded-md shadow-sm p-1">
//               <button
//                 onClick={() => setTimeRange("week")}
//                 className={`px-3 py-1 text-sm rounded-md ${
//                   timeRange === "week" ? "bg-cyan-100 text-cyan-800 font-medium" : "text-gray-500 hover:bg-gray-100"
//                 }`}
//               >
//                 Week
//               </button>
//               <button
//                 onClick={() => setTimeRange("month")}
//                 className={`px-3 py-1 text-sm rounded-md ${
//                   timeRange === "month" ? "bg-cyan-100 text-cyan-800 font-medium" : "text-gray-500 hover:bg-gray-100"
//                 }`}
//               >
//                 Month
//               </button>
//               <button
//                 onClick={() => setTimeRange("quarter")}
//                 className={`px-3 py-1 text-sm rounded-md ${
//                   timeRange === "quarter" ? "bg-cyan-100 text-cyan-800 font-medium" : "text-gray-500 hover:bg-gray-100"
//                 }`}
//               >
//                 Quarter
//               </button>
//               <button
//                 onClick={() => setTimeRange("year")}
//                 className={`px-3 py-1 text-sm rounded-md ${
//                   timeRange === "year" ? "bg-cyan-100 text-cyan-800 font-medium" : "text-gray-500 hover:bg-gray-100"
//                 }`}
//               >
//                 Year
//               </button>
//             </div>
//             <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
//               <Calendar className="h-5 w-5 text-gray-500" />
//             </button>
//             <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
//               <Download className="h-5 w-5 text-gray-500" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         {/* Key Metrics */}
//         <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {[
//             {
//               name: "Total Shipments",
//               value: "8,294",
//               change: "+12.5%",
//               trend: "up",
//               icon: Package,
//               color: "bg-blue-500",
//             },
//             {
//               name: "Revenue",
//               value: "$1.2M",
//               change: "+8.2%",
//               trend: "up",
//               icon: DollarSign,
//               color: "bg-green-500",
//             },
//             {
//               name: "Active Customers",
//               value: "3,427",
//               change: "+5.2%",
//               trend: "up",
//               icon: Users,
//               color: "bg-purple-500",
//             },
//             {
//               name: "On-Time Delivery",
//               value: "94%",
//               change: "+1.3%",
//               trend: "up",
//               icon: Truck,
//               color: "bg-cyan-500",
//             },
//           ].map((stat) => (
//             <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
//               <div className="p-5">
//                 <div className="flex items-center">
//                   <div className={`flex-shrink-0 p-3 rounded-md ${stat.color}`}>
//                     <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
//                   </div>
//                   <div className="ml-5 w-0 flex-1">
//                     <dl>
//                       <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
//                       <dd>
//                         <div className="text-lg font-medium text-gray-900">{stat.value}</div>
//                       </dd>
//                     </dl>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-5 py-3">
//                 <div className="flex items-center">
//                   {stat.trend === "up" ? (
//                     <TrendingUp className="h-4 w-4 text-green-500" />
//                   ) : (
//                     <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />
//                   )}
//                   <span
//                     className={`ml-2 text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"} font-medium`}
//                   >
//                     {stat.change}
//                   </span>
//                   <span className="ml-2 text-sm text-gray-500">from last {timeRange}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Charts Section */}
//         <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Revenue Chart */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-medium text-gray-900">Revenue Trends</h2>
//               <div className="flex items-center space-x-2">
//                 <select className="text-sm border-gray-300 rounded-md">
//                   <option>All Services</option>
//                   <option>Air Freight</option>
//                   <option>Sea Freight</option>
//                   <option>Road Freight</option>
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
//                     <div className="text-xs text-gray-500">Jan</div>
//                     <div className="text-xs text-gray-500">Feb</div>
//                     <div className="text-xs text-gray-500">Mar</div>
//                     <div className="text-xs text-gray-500">Apr</div>
//                   </div>
//                   <div className="relative h-40 flex items-end">
//                     <div className="w-1/4 px-2">
//                       <div className="bg-blue-500 h-24 rounded-t-md"></div>
//                     </div>
//                     <div className="w-1/4 px-2">
//                       <div className="bg-blue-500 h-28 rounded-t-md"></div>
//                     </div>
//                     <div className="w-1/4 px-2">
//                       <div className="bg-blue-500 h-20 rounded-t-md"></div>
//                     </div>
//                     <div className="w-1/4 px-2">
//                       <div className="bg-blue-500 h-32 rounded-t-md"></div>
//                     </div>
//                     {/* Overlay line chart */}
//                     <div className="absolute inset-0 flex items-end">
//                       <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
//                         <path d="M0,120 L100,80 L200,140 L300,40" fill="none" stroke="#10B981" strokeWidth="3" />
//                         <circle cx="0" cy="120" r="4" fill="#10B981" />
//                         <circle cx="100" cy="80" r="4" fill="#10B981" />
//                         <circle cx="200" cy="140" r="4" fill="#10B981" />
//                         <circle cx="300" cy="40" r="4" fill="#10B981" />
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="flex justify-between mt-2">
//                     <div className="text-xs font-medium text-gray-700">$280K</div>
//                     <div className="text-xs font-medium text-gray-700">$320K</div>
//                     <div className="text-xs font-medium text-gray-700">$260K</div>
//                     <div className="text-xs font-medium text-gray-700">$380K</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Shipment Volume by Region */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-medium text-gray-900">Shipment Volume by Region</h2>
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
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-full space-y-4">
//                   <div className="flex items-center">
//                     <div className="w-32 text-sm text-gray-600">North America</div>
//                     <div className="flex-1">
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
//                       </div>
//                     </div>
//                     <div className="w-16 text-right text-sm font-medium text-gray-700">3,245</div>
//                   </div>
//                   <div className="flex items-center">
//                     <div className="w-32 text-sm text-gray-600">Europe</div>
//                     <div className="flex-1">
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: "48%" }}></div>
//                       </div>
//                     </div>
//                     <div className="w-16 text-right text-sm font-medium text-gray-700">2,187</div>
//                   </div>
//                   <div className="flex items-center">
//                     <div className="w-32 text-sm text-gray-600">Asia</div>
//                     <div className="flex-1">
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "72%" }}></div>
//                       </div>
//                     </div>
//                     <div className="w-16 text-right text-sm font-medium text-gray-700">1,842</div>
//                   </div>
//                   <div className="flex items-center">
//                     <div className="w-32 text-sm text-gray-600">Australia</div>
//                     <div className="flex-1">
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "25%" }}></div>
//                       </div>
//                     </div>
//                     <div className="w-16 text-right text-sm font-medium text-gray-700">620</div>
//                   </div>
//                   <div className="flex items-center">
//                     <div className="w-32 text-sm text-gray-600">South America</div>
//                     <div className="flex-1">
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "18%" }}></div>
//                       </div>
//                     </div>
//                     <div className="w-16 text-right text-sm font-medium text-gray-700">400</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Service Performance */}
//         <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
//           <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">Service Performance</h3>
//             <div className="flex items-center space-x-2">
//               <select className="text-sm border-gray-300 rounded-md">
//                 <option>Last 30 Days</option>
//                 <option>Last 90 Days</option>
//                 <option>Last 12 Months</option>
//               </select>
//             </div>
//           </div>
//           <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div>
//                 <h4 className="text-base font-medium text-gray-900 mb-4">Air Freight</h4>
//                 <div className="space-y-4">
//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <div className="text-sm font-medium text-gray-500">On-Time Delivery</div>
//                       <div className="text-sm font-medium text-gray-900">96%</div>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-green-500 h-2 rounded-full" style={{ width: "96%" }}></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <div className="text-sm font-medium text-gray-500">Customer Satisfaction</div>
//                       <div className="text-sm font-medium text-gray-900">94%</div>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-blue-500 h-2 rounded-full" style={{ width: "94%" }}></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <div className="text-sm font-medium text-gray-500">Damage Rate</div>
//                       <div className="text-sm font-medium text-gray-900">0.8%</div>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-red-500 h-2 rounded-full" style={{ width: "0.8%" }}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="text-base font-medium text-gray-900 mb-4">Sea Freight</h4>
//                 <div className="space-y-4">
//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <div className="text-sm font-medium text-gray-500">On-Time Delivery</div>
//                       <div className="text-sm font-medium text-gray-900">92%</div>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <div className="text-sm font-medium text-gray-500">Customer Satisfaction</div>
//                       <div className="text-sm font-medium text-gray-900">90%</div>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <div className="text-sm font-medium text-gray-500">Damage Rate</div>
//                       <div className="text-sm font-medium text-gray-900">1.2%</div>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-red-500 h-2 rounded-full" style={{ width: "1.2%" }}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="text-base font-medium text-gray-900 mb-4">Road Freight</h4>
//                 <div className="space-y-4">
//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <div className="text-sm font-medium text-gray-500">On-Time Delivery</div>
//                       <div className="text-sm font-medium text-gray-900">94%</div>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-green-500 h-2 rounded-full" style={{ width: "94%" }}></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <div className="text-sm font-medium text-gray-500">Customer Satisfaction</div>
//                       <div className="text-sm font-medium text-gray-900">92%</div>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <div className="text-sm font-medium text-gray-500">Damage Rate</div>
//                       <div className="text-sm font-medium text-gray-900">0.5%</div>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-red-500 h-2 rounded-full" style={{ width: "0.5%" }}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function AnalyticsPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <p className="mt-2 text-sm text-gray-600">Overview of your shipping performance and trends</p>
      </div>
    </div>
  )
}
