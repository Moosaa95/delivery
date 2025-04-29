// API client for interacting with the Django backend

export interface ApiResponse<T> {
    data: T | null
    error: string | null
  }
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"
  
  // export async function fetchCustomers(
  //   searchTerm = "",
  //   filterType = "all",
  //   sortBy = "name",
  //   sortOrder = "asc",
  // ): Promise<ApiResponse<any>> {
  //   try {
  //     const response = await fetch(
  //       `/api/customers?search=${searchTerm}&type=${filterType}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
  //     )
  
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`)
  //     }
  
  //     const data = await response.json()
  //     return { data, error: null }
  //   } catch (error) {
  //     console.error("Error fetching customers:", error)
  //     return { data: null, error: "Failed to fetch customers" }
  //   }
  // }
  
  // export async function fetchCustomer(id: string): Promise<ApiResponse<any>> {
  //   try {
  //     const response = await fetch(`/api/customers/${id}`)
  
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`)
  //     }
  
  //     const data = await response.json()
  //     return { data, error: null }
  //   } catch (error) {
  //     console.error(`Error fetching customer ${id}:`, error)
  //     return { data: null, error: "Failed to fetch customer" }
  //   }
  // }
  
  // export async function createCustomer(customerData: any): Promise<ApiResponse<any>> {
  //   try {
  //     const response = await fetch("/api/customers", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(customerData),
  //     })
  
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`)
  //     }
  
  //     const data = await response.json()
  //     return { data, error: null }
  //   } catch (error) {
  //     console.error("Error creating customer:", error)
  //     return { data: null, error: "Failed to create customer" }
  //   }
  // }
  
  // export async function updateCustomer(id: string, customerData: any): Promise<ApiResponse<any>> {
  //   try {
  //     const response = await fetch(`/api/customers/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(customerData),
  //     })
  
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`)
  //     }
  
  //     const data = await response.json()
  //     return { data, error: null }
  //   } catch (error) {
  //     console.error(`Error updating customer ${id}:`, error)
  //     return { data: null, error: "Failed to update customer" }
  //   }
  // }
  
  // export async function deleteCustomer(id: string): Promise<ApiResponse<any>> {
  //   try {
  //     const response = await fetch(`/api/customers/${id}`, {
  //       method: "DELETE",
  //     })
  
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`)
  //     }
  
  //     return { data: null, error: null }
  //   } catch (error) {
  //     console.error(`Error deleting customer ${id}:`, error)
  //     return { data: null, error: "Failed to delete customer" }
  //   }
  // }
  
  export async function fetchShipments(
    searchTerm = "",
    filterStatus = "all",
    sortBy = "date",
    sortOrder = "desc",
  ): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(
        `/api/shipments?search=${searchTerm}&status=${filterStatus}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
      )
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
  
      const data = await response.json()
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching shipments:", error)
      return { data: null, error: "Failed to fetch shipments" }
    }
  }
  
  export async function fetchShipment(id: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`/api/shipments/${id}`)
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
  
      const data = await response.json()
      return { data, error: null }
    } catch (error) {
      console.error(`Error fetching shipment ${id}:`, error)
      return { data: null, error: "Failed to fetch shipment" }
    }
  }
  
  export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
  }
  
  export async function createShipment(shipmentData: any): Promise<ApiResponse<any>> {
    try {
      const response = await fetch("/api/shipments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shipmentData),
      });
      console.log("RESPONSE======LIBS", response, process.env.NEXT_PUBLIC_API_URL, shipmentData);
      
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error: ${response.status}`);
      }
  
      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error("Error creating shipment:", error);
      return { 
        data: null, 
        error: error instanceof Error ? error.message : "Failed to create shipment" 
      };
    }
  }
  
  export async function updateShipment(id: string, shipmentData: any): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`/api/shipments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shipmentData),
      })
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
  
      const data = await response.json()
      return { data, error: null }
    } catch (error) {
      console.error(`Error updating shipment ${id}:`, error)
      return { data: null, error: "Failed to update shipment" }
    }
  }
  
  export async function deleteShipment(id: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`/api/shipments/${id}`, {
        method: "DELETE",
      })
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
  
      return { data: null, error: null }
    } catch (error) {
      console.error(`Error deleting shipment ${id}:`, error)
      return { data: null, error: "Failed to delete shipment" }
    }
  }
  
  export async function fetchDashboardData(): Promise<ApiResponse<any>> {
    try {
      const response = await fetch("/api/dashboard")
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
  
      const data = await response.json()
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
      return { data: null, error: "Failed to fetch dashboard data" }
    }
  }
  