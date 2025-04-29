// // Named exports for all auth functions
// export interface User {
//   id: number
//   username: string
//   email: string
//   first_name: string
//   last_name: string
//   profile: {
//     role: string
//     last_login_time: string
//   }
// }

// export interface JwtPayload {
//   exp: number
//   iat: number
//   jti: string
//   token_type: string
//   user_id: number
// }

// export async function login(username: string, password: string) {
//   const response = await fetch("/api/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username, password }),
//   })

//   if (!response.ok) {
//     const error = await response.json()
//     throw new Error(error.detail || "Login failed")
//   }

//   return await response.json()
// }

// export async function logout() {
//   const response = await fetch("/api/auth/logout", {
//     method: "POST",
//   })

//   if (!response.ok) {
//     const error = await response.json()
//     throw new Error(error.detail || "Logout failed")
//   }

//   return await response.json()
// }

// export async function refreshToken() {
//   const response = await fetch("/api/auth/refresh", {
//     method: "POST",
//   })

//   if (!response.ok) {
//     throw new Error("Failed to refresh token")
//   }

//   return await response.json()
// }

// export async function getUserProfile() {
//   const response = await fetch("/api/auth/profile")

//   if (!response.ok) {
//     if (response.status === 401) {
//       // Try to refresh the token
//       try {
//         await refreshToken()
//         // Retry the original request
//         const retryResponse = await fetch("/api/auth/profile")
//         if (retryResponse.ok) {
//           return await retryResponse.json()
//         }
//       } catch (error) {
//         throw new Error("Authentication expired")
//       }
//     }
//     throw new Error("Failed to fetch user profile")
//   }

//   return await response.json()
// }

// export function isTokenExpired(token: string) {
//   try {
//     const decoded = jwtDecode<JwtPayload>(token)
//     const currentTime = Date.now() / 1000
//     return decoded.exp < currentTime
//   } catch (error) {
//     return true
//   }
// }

// // Add this import at the top of the file
// import { jwtDecode } from "jwt-decode"
