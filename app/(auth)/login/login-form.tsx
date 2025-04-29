// "use client"

// import type React from "react"
// import { useState } from "react"
// import { AlertCircle } from "lucide-react"
// import { useAuth } from "@/app/context/auth-context"

// export default function LoginForm() {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   // const { login, loading, error, clearError } = useAuth()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     // if (login) {
//     //   await login(username, password)
//     // }
//   }

//   return (
//     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//       {error && (
//         <div className="bg-red-50 border-l-4 border-red-400 p-4">
//           <div className="flex">
//             <div className="flex-shrink-0">
//               <AlertCircle className="h-5 w-5 text-red-400" />
//             </div>
//             <div className="ml-3">
//               <p className="text-sm text-red-700">{error}</p>
//             </div>
//             <div className="ml-auto pl-3">
//               <div className="-mx-1.5 -my-1.5">
//                 <button
//                   type="button"
//                   onClick={clearError}
//                   className="inline-flex rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
//                 >
//                   <span className="sr-only">Dismiss</span>
//                   <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="rounded-md shadow-sm -space-y-px">
//         <div>
//           <label htmlFor="username" className="sr-only">
//             Username
//           </label>
//           <input
//             id="username"
//             name="username"
//             type="text"
//             autoComplete="username"
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
//             placeholder="Username"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="sr-only">
//             Password
//           </label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             autoComplete="current-password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
//             placeholder="Password"
//           />
//         </div>
//       </div>

//       <div>
//         <button
//           type="submit"
//           disabled={loading}
//           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50"
//         >
//           {loading ? (
//             <>
//               <svg
//                 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                 ></path>
//               </svg>
//               Signing in...
//             </>
//           ) : (
//             "Sign in"
//           )}
//         </button>
//       </div>
//     </form>
//   )
// }

export default function LoginForm() {
  return (
    <>
      <h1>Login</h1>
    </>
  )
}