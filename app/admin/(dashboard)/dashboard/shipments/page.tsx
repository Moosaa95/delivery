// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import {
//   Package,
//   Search,
//   Filter,
//   ChevronDown,
//   Download,
//   Plus,
//   CheckCircle,
//   Clock,
//   Truck,
//   AlertCircle,
//   MoreHorizontal,
// } from "lucide-react"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"

// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"

// export default function Shipments() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filterStatus, setFilterStatus] = useState("all")
//   const [shipments, setShipments] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
  
//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage] = useState(10)
  
//   // Sorting state
//   const [sorting, setSorting] = useState({ column: "date", direction: "desc" })

//   // Fetch shipments from the database
//   useEffect(() => {
//     const fetchShipments = async () => {
//       try {
//         // Replace with your actual API endpoint
//         const response = await fetch('/api/shipments')
//         const data = await response.json()
        
//         // Transform the data to match the component's format
//         const formattedShipments = data.map(shipment => ({
//           id: shipment.id,
//           customer: shipment.customer_name,
//           origin: shipment.origin,
//           destination: shipment.destination,
//           status: shipment.status,
//           statusColor: getStatusColor(shipment.status),
//           date: shipment.date,
//           weight: `${shipment.weight} kg`,
//           service: shipment.service,
//           estimatedDelivery: shipment.estimated_delivery,
//           trackingEvents: shipment.tracking_events || []
//         }))
        
//         setShipments(formattedShipments)
//         setIsLoading(false)
//       } catch (error) {
//         console.error("Error fetching shipments:", error)
//         setIsLoading(false)
//       }
//     }

//     fetchShipments()
//   }, [])

//   // Filter shipments based on search term and status
//   const filteredShipments = shipments.filter((shipment) => {
//     const matchesSearch =
//       searchTerm === "" ||
//       shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       shipment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       shipment.destination.toLowerCase().includes(searchTerm.toLowerCase())

//     const matchesStatus = filterStatus === "all" || shipment.status.toLowerCase() === filterStatus.toLowerCase()

//     return matchesSearch && matchesStatus
//   })

//   // Sort shipments
//   const sortedShipments = [...filteredShipments].sort((a, b) => {
//     let comparison = 0
//     const column = sorting.column
    
//     if (column === "date") {
//       comparison = new Date(a.date) > new Date(b.date) ? 1 : -1
//     } else if (column === "id") {
//       comparison = a.id > b.id ? 1 : -1
//     } else if (column === "customer") {
//       comparison = a.customer > b.customer ? 1 : -1
//     } else if (column === "status") {
//       comparison = a.status > b.status ? 1 : -1
//     }

//     return sorting.direction === "asc" ? comparison : -comparison
//   })

//   // Get current page data
//   const indexOfLastShipment = currentPage * itemsPerPage
//   const indexOfFirstShipment = indexOfLastShipment - itemsPerPage
//   const currentShipments = sortedShipments.slice(indexOfFirstShipment, indexOfLastShipment)
//   const totalPages = Math.ceil(sortedShipments.length / itemsPerPage)

//   const getStatusBadgeColor = (status) => {
//     switch (status.toLowerCase()) {
//       case "in transit":
//         return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
//       case "delivered":
//         return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
//       case "processing":
//         return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
//       case "exception":
//         return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
//       default:
//         return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
//     }
//   }
  
//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case "in transit":
//         return "bg-blue-100 text-blue-800"
//       case "delivered":
//         return "bg-green-100 text-green-800"
//       case "processing":
//         return "bg-yellow-100 text-yellow-800"
//       case "exception":
//         return "bg-red-100 text-red-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   const getStatusIcon = (status) => {
//     switch (status.toLowerCase()) {
//       case "in transit":
//         return <Truck className="w-4 h-4" />
//       case "delivered":
//         return <CheckCircle className="w-4 h-4" />
//       case "processing":
//         return <Clock className="w-4 h-4" />
//       case "exception":
//         return <AlertCircle className="w-4 h-4" />
//       default:
//         return <Package className="w-4 h-4" />
//     }
//   }

//   const handleSort = (column) => {
//     setSorting(prev => ({
//       column,
//       direction: prev.column === column && prev.direction === "asc" ? "desc" : "asc"
//     }))
//   }
  
//   const handlePageChange = (page) => {
//     setCurrentPage(page)
//   }

//   const handleExport = () => {
//     console.log("Exporting data...")
//     // Implement your export functionality here
//   }

//   const renderPagination = () => {
//     const pages = []
//     const maxPagesToShow = 5
    
//     // Always show first page
//     pages.push(
//       <PaginationItem key="first">
//         <PaginationLink 
//           onClick={() => handlePageChange(1)}
//           isActive={currentPage === 1}
//         >
//           1
//         </PaginationLink>
//       </PaginationItem>
//     )
    
//     // Calculate start and end of pagination range
//     let startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2))
//     let endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 3)
    
//     if (endPage - startPage < maxPagesToShow - 3) {
//       startPage = Math.max(2, endPage - maxPagesToShow + 3)
//     }
    
//     // Add ellipsis after first page if needed
//     if (startPage > 2) {
//       pages.push(
//         <PaginationItem key="ellipsis-start">
//           <PaginationEllipsis />
//         </PaginationItem>
//       )
//     }
    
//     // Add pages in range
//     for (let i = startPage; i <= endPage; i++) {
//       pages.push(
//         <PaginationItem key={i}>
//           <PaginationLink
//             onClick={() => handlePageChange(i)}
//             isActive={currentPage === i}
//           >
//             {i}
//           </PaginationLink>
//         </PaginationItem>
//       )
//     }
    
//     // Add ellipsis before last page if needed
//     if (endPage < totalPages - 1) {
//       pages.push(
//         <PaginationItem key="ellipsis-end">
//           <PaginationEllipsis />
//         </PaginationItem>
//       )
//     }
    
//     // Always show last page if there's more than one page
//     if (totalPages > 1) {
//       pages.push(
//         <PaginationItem key="last">
//           <PaginationLink
//             onClick={() => handlePageChange(totalPages)}
//             isActive={currentPage === totalPages}
//           >
//             {totalPages}
//           </PaginationLink>
//         </PaginationItem>
//       )
//     }
    
//     return pages
//   }

//   return (
//     <div className="py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-semibold text-gray-900">Shipments</h1>
//           <Link href="/admin/dashboard/shipments/new">
//             <Button variant="default" className="bg-cyan-600 hover:bg-cyan-700">
//               <Plus className="h-4 w-4 mr-2" />
//               New Shipment
//             </Button>
//           </Link>
//         </div>

//         <div className="mt-8">
//           <Card>
//             <CardHeader className="pb-2">
//               <CardTitle>Shipment Management</CardTitle>
//               <CardDescription>
//                 Track and manage all your shipments from one place.
//               </CardDescription>
//             </CardHeader>
            
//             <CardContent>
//               {/* Filters and Search */}
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 mb-6">
//                 <div className="flex-1 min-w-0">
//                   <div className="relative rounded-md">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Search className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <Input
//                       type="text"
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="pl-10"
//                       placeholder="Search by ID, customer, or location"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
//                   <Select 
//                     value={filterStatus}
//                     onValueChange={setFilterStatus}
//                   >
//                     <SelectTrigger className="w-[180px]">
//                       <SelectValue placeholder="Filter by status" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All Statuses</SelectItem>
//                       <SelectItem value="in transit">In Transit</SelectItem>
//                       <SelectItem value="delivered">Delivered</SelectItem>
//                       <SelectItem value="processing">Processing</SelectItem>
//                       <SelectItem value="exception">Exception</SelectItem>
//                     </SelectContent>
//                   </Select>

//                   <Button variant="outline" onClick={handleExport}>
//                     <Download className="h-5 w-5 text-gray-400 mr-2" />
//                     Export
//                   </Button>
//                 </div>
//               </div>

//               {/* Loading state */}
//               {isLoading ? (
//                 <div className="flex justify-center items-center py-12">
//                   <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
//                 </div>
//               ) : (
//                 <>
//                   {/* Shipments Table */}
//                   <div className="rounded-md border">
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead 
//                             className="w-[120px] cursor-pointer"
//                             onClick={() => handleSort("id")}
//                           >
//                             <div className="flex items-center">
//                               Tracking ID
//                               {sorting.column === "id" && (
//                                 <span className="ml-1">{sorting.direction === "asc" ? "↑" : "↓"}</span>
//                               )}
//                             </div>
//                           </TableHead>
//                           <TableHead 
//                             className="cursor-pointer"
//                             onClick={() => handleSort("customer")}
//                           >
//                             <div className="flex items-center">
//                               Customer
//                               {sorting.column === "customer" && (
//                                 <span className="ml-1">{sorting.direction === "asc" ? "↑" : "↓"}</span>
//                               )}
//                             </div>
//                           </TableHead>
//                           <TableHead>Route</TableHead>
//                           <TableHead 
//                             className="cursor-pointer"
//                             onClick={() => handleSort("status")}
//                           >
//                             <div className="flex items-center">
//                               Status
//                               {sorting.column === "status" && (
//                                 <span className="ml-1">{sorting.direction === "asc" ? "↑" : "↓"}</span>
//                               )}
//                             </div>
//                           </TableHead>
//                           <TableHead>Service</TableHead>
//                           <TableHead 
//                             className="cursor-pointer"
//                             onClick={() => handleSort("date")}
//                           >
//                             <div className="flex items-center">
//                               Date
//                               {sorting.column === "date" && (
//                                 <span className="ml-1">{sorting.direction === "asc" ? "↑" : "↓"}</span>
//                               )}
//                             </div>
//                           </TableHead>
//                           <TableHead className="text-right">Actions</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {currentShipments.length > 0 ? (
//                           currentShipments.map((shipment) => (
//                             <TableRow key={shipment.id} className="hover:bg-gray-50">
//                               <TableCell className="font-medium text-cyan-600">
//                                 <Link href={`/admin/dashboard/shipments/${shipment.id}`}>{shipment.id}</Link>
//                               </TableCell>
//                               <TableCell>{shipment.customer}</TableCell>
//                               <TableCell>
//                                 <div className="flex flex-col">
//                                   <span>From: {shipment.origin}</span>
//                                   <span>To: {shipment.destination}</span>
//                                 </div>
//                               </TableCell>
//                               <TableCell>
//                                 <Badge 
//                                   variant="outline" 
//                                   className={getStatusBadgeColor(shipment.status)}
//                                 >
//                                   <div className="flex items-center">
//                                     {getStatusIcon(shipment.status)}
//                                     <span className="ml-1">{shipment.status}</span>
//                                   </div>
//                                 </Badge>
//                               </TableCell>
//                               <TableCell>{shipment.service}</TableCell>
//                               <TableCell>{shipment.date}</TableCell>
//                               <TableCell className="text-right">
//                                 <DropdownMenu>
//                                   <DropdownMenuTrigger asChild>
//                                     <Button variant="ghost" className="h-8 w-8 p-0">
//                                       <span className="sr-only">Open menu</span>
//                                       <MoreHorizontal className="h-4 w-4" />
//                                     </Button>
//                                   </DropdownMenuTrigger>
//                                   <DropdownMenuContent align="end">
//                                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                                     <DropdownMenuItem>
//                                       <Link href={`/admin/dashboard/shipments/${shipment.id}`} className="flex w-full">
//                                         View details
//                                       </Link>
//                                     </DropdownMenuItem>
//                                     <DropdownMenuItem>
//                                       <Link href={`/admin/dashboard/shipments/${shipment.id}/edit`} className="flex w-full">
//                                         Edit shipment
//                                       </Link>
//                                     </DropdownMenuItem>
//                                     <DropdownMenuSeparator />
//                                     <DropdownMenuItem>Print label</DropdownMenuItem>
//                                     <DropdownMenuItem>Download invoice</DropdownMenuItem>
//                                   </DropdownMenuContent>
//                                 </DropdownMenu>
//                               </TableCell>
//                             </TableRow>
//                           ))
//                         ) : (
//                           <TableRow>
//                             <TableCell colSpan={7} className="h-24 text-center">
//                               No shipments found matching your criteria
//                             </TableCell>
//                           </TableRow>
//                         )}
//                       </TableBody>
//                     </Table>
//                   </div>
//                 </>
//               )}
//             </CardContent>
            
//             {/* Pagination */}
//             <CardFooter>
//               {!isLoading && sortedShipments.length > 0 && (
//                 <div className="flex w-full items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-700">
//                       Showing <span className="font-medium">{indexOfFirstShipment + 1}</span> to{" "}
//                       <span className="font-medium">
//                         {Math.min(indexOfLastShipment, sortedShipments.length)}
//                       </span>{" "}
//                       of <span className="font-medium">{sortedShipments.length}</span> results
//                     </p>
//                   </div>
                  
//                   <Pagination>
//                     <PaginationContent>
//                       <PaginationItem>
//                         <PaginationPrevious 
//                           onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
//                           className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
//                         />
//                       </PaginationItem>
                      
//                       {renderPagination()}
                      
//                       <PaginationItem>
//                         <PaginationNext 
//                           onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
//                           className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
//                         />
//                       </PaginationItem>
//                     </PaginationContent>
//                   </Pagination>
//                 </div>
//               )}
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function Shipments() {
  return (
    <h1>List</h1>
  )
}