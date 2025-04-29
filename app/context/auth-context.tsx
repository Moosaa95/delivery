// "use client"

// import type React from "react"
// import { createContext, useContext, useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { login as loginApi, logout as logoutApi, getUserProfile, type User } from "@/lib/auth"

// interface AuthContextType {
//   user: User | null
//   loading: boolean
//   error: string | null
//   login: (username: string, password: string) => Promise<void>
//   logout: () => Promise<void>
//   clearError: () => void
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const router = useRouter()

//   useEffect(() => {
//     // Check if user is already logged in
//     const checkAuth = async () => {
//       try {
//         const userData = await getUserProfile()
//         setUser(userData)
//       } catch (error) {
//         // Not authenticated or token expired
//         setUser(null)
//       } finally {
//         setLoading(false)
//       }
//     }

//     checkAuth()
//   }, [])

//   const login = async (username: string, password: string) => {
//     setLoading(true)
//     setError(null)

//     try {
//       const response = await loginApi(username, password)
//       setUser(response.user)
//       router.push("/admin/dashboard") // Redirect to dashboard after login
//     } catch (error) {
//       if (error instanceof Error) {
//         setError(error.message)
//       } else {
//         setError("An unknown error occurred during login")
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   const logout = async () => {
//     setLoading(true)

//     try {
//       await logoutApi()
//       setUser(null)
//       router.push("/login") // Redirect to login page after logout
//     } catch (error) {
//       if (error instanceof Error) {
//         setError(error.message)
//       } else {
//         setError("An unknown error occurred during logout")
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   const clearError = () => {
//     setError(null)
//   }

//   return (
//     <AuthContext.Provider value={{ user, loading, error, login, logout, clearError }}>{children}</AuthContext.Provider>
//   )
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }
