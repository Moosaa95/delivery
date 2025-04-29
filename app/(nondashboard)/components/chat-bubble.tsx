// "use client"

// import { useState, useEffect, useRef } from "react"
// import { MessageCircle, X, Send, Mail, Clock } from "lucide-react"

// interface Message {
//   id: number
//   content: string
//   sender_name: string
//   sender_type: 'customer' | 'admin' | 'system'
//   timestamp: string
//   read: boolean
// }

// interface AdminAvailability {
//   available: boolean
//   message: string
//   nextAvailable: string
// }

// export default function ChatBubble({ shipmentId }) {
//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState<Message[]>([])
//   const [newMessage, setNewMessage] = useState("")
//   const [socket, setSocket] = useState<WebSocket | null>(null)
//   const messagesEndRef = useRef<HTMLDivElement>(null)
//   const [isConnecting, setIsConnecting] = useState(false)
//   const [errorMessage, setErrorMessage] = useState("")
//   const [customerEmail, setCustomerEmail] = useState("")
//   const [isEmailVerified, setIsEmailVerified] = useState(false)
//   const [isVerifying, setIsVerifying] = useState(false)
//   const [adminAvailability, setAdminAvailability] = useState<AdminAvailability>({
//     available: true,
//     message: "",
//     nextAvailable: ""
//   })
//   const [hasInitialMessage, setHasInitialMessage] = useState(false)

//   // Check admin availability
//   useEffect(() => {
//     if (!shipmentId) return
    
//     const checkAvailability = async () => {
//       try {
//         const response = await fetch(`/api/chat/availability/`)
//         if (!response.ok) throw new Error("Failed to check admin availability")
//         const data = await response.json()
//         setAdminAvailability(data)
//       } catch (error) {
//         console.error('Error checking admin availability:', error)
//       }
//     }
    
//     checkAvailability()
//     // Check availability every 5 minutes
//     const intervalId = setInterval(checkAvailability, 5 * 60 * 1000)
    
//     return () => clearInterval(intervalId)
//   }, [shipmentId])

//   // Connect to WebSocket when component mounts or shipmentId changes
//   useEffect(() => {
//     if (!shipmentId || !isEmailVerified) return
    
//     setIsConnecting(true)
//     const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
//     const wsUrl = `${wsProtocol}//${window.location.host}/ws/chat/${shipmentId}/?email=${encodeURIComponent(customerEmail)}`
//     const newSocket = new WebSocket(wsUrl)

//     newSocket.onopen = () => {
//       console.log('WebSocket connected')
//       setIsConnecting(false)
//       setErrorMessage("")
//     }

//     newSocket.onmessage = (e) => {
//       const data = JSON.parse(e.data)
      
//       setMessages(prev => [...prev, {
//         id: data.message_id,
//         content: data.message,
//         sender_name: data.sender_name || (
//           data.sender_type === 'admin' ? 
//           'Support Staff' : 
//           data.sender_type === 'system' ? 
//           'System' : 'You'
//         ),
//         sender_type: data.sender_type,
//         timestamp: data.timestamp,
//         read: false
//       }])
//     }

//     newSocket.onclose = () => {
//       console.log('WebSocket disconnected')
//       setIsConnecting(false)
//     }

//     newSocket.onerror = (error) => {
//       console.error('WebSocket error:', error)
//       setErrorMessage("Connection error. Please try again later.")
//       setIsConnecting(false)
//     }

//     setSocket(newSocket)

//     // Load existing messages
//     const fetchMessages = async () => {
//       try {
//         const response = await fetch(`/api/shipments/${shipmentId}/messages/?email=${encodeURIComponent(customerEmail)}`)
//         if (!response.ok) throw new Error("Failed to fetch messages")
//         const data = await response.json()
//         setMessages(data)
        
//         // Check if this is first time customer is sending a message
//         setHasInitialMessage(data.some(msg => msg.sender_type === 'customer'))
//       } catch (error) {
//         console.error('Error fetching messages:', error)
//         setErrorMessage("Could not load previous messages")
//       }
//     }
//     fetchMessages()

//     return () => {
//       if (newSocket) {
//         newSocket.close()
//       }
//     }
//   }, [shipmentId, isEmailVerified, customerEmail])

//   // Auto-scroll to bottom when messages change
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages])

//   // Mark messages as read when chat is opened
//   useEffect(() => {
//     if (isOpen && messages.some(m => !m.read && m.sender_type === 'admin')) {
//       // Update only admin messages as read
//       setMessages(prev => 
//         prev.map(msg => msg.sender_type === 'admin' ? { ...msg, read: true } : msg)
//       )
      
//       // Send read receipt to server if connected
//       if (socket && socket.readyState === WebSocket.OPEN && isEmailVerified) {
//         socket.send(JSON.stringify({
//           action: 'mark_read',
//           email: customerEmail
//         }))
//       }
//     }
//   }, [isOpen, messages, socket, isEmailVerified, customerEmail])

//   // Send welcome message when first customer message is sent
//   useEffect(() => {
//     const handleFirstMessage = async () => {
//       if (isEmailVerified && hasInitialMessage && messages.length > 0) {
//         const isFirstCustomerMessage = messages.some(m => m.sender_type === 'customer') && 
//                                       !messages.some(m => m.sender_type === 'system' && m.content.includes('We have received your message'));
        
//         if (isFirstCustomerMessage) {
//           // Send welcome message via API
//           try {
//             await fetch(`/api/shipments/${shipmentId}/system-message/`, {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 email: customerEmail,
//                 type: 'welcome'
//               })
//             });
            
//             // The actual message will come via WebSocket
//           } catch (error) {
//             console.error('Error sending welcome message:', error)
//           }
//         }
//       }
//     }
    
//     handleFirstMessage();
//   }, [hasInitialMessage, isEmailVerified, messages, shipmentId, customerEmail])

//   const toggleChat = () => {
//     setIsOpen(!isOpen)
//   }

//   const handleEmailVerification = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!customerEmail.trim() || !shipmentId) return
    
//     setIsVerifying(true)
//     try {
//       const response = await fetch(`/api/shipments/${shipmentId}/verify-email/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: customerEmail,
//         })
//       })
      
//       if (!response.ok) {
//         const data = await response.json()
//         throw new Error(data.message || "Failed to verify email")
//       }
      
//       setIsEmailVerified(true)
//       setErrorMessage("")
//     } catch (error) {
//       console.error('Error verifying email:', error)
//       setErrorMessage(error.message || "Failed to verify email. Please check if it's correct.")
//     } finally {
//       setIsVerifying(false)
//     }
//   }

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!newMessage.trim() || !shipmentId || !isEmailVerified) return
    
//     try {
//       // Optimistically add message to UI
//       const tempId = Date.now() // Temporary ID for optimistic update
//       const optimisticMessage = {
//         id: tempId,
//         content: newMessage,
//         sender_name: 'You',
//         sender_type: 'customer',
//         timestamp: new Date().toISOString(),
//         read: false
//       }
//       setMessages(prev => [...prev, optimisticMessage])
//       setNewMessage("")
//       setHasInitialMessage(true)

//       // Send via WebSocket
//       if (socket && socket.readyState === WebSocket.OPEN) {
//         socket.send(JSON.stringify({
//           action: 'message',
//           message: newMessage,
//           sender_type: 'customer',
//           email: customerEmail
//         }))
//       } else {
//         // Fallback to REST API if WebSocket is not connected
//         const response = await fetch(`/api/shipments/${shipmentId}/messages/`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             content: newMessage,
//             sender_type: 'customer',
//             email: customerEmail
//           })
//         })
        
//         if (!response.ok) throw new Error("Failed to send message")
//       }

//       // Real message should come back via WebSocket
//     } catch (error) {
//       console.error('Error sending message:', error)
//       setErrorMessage("Failed to send message. Please try again.")
//       // Remove optimistic message if there was an error
//       setMessages(prev => prev.filter(msg => msg.id !== tempId))
//     }
//   }

//   // Format time for display
//   const formatTime = (timestamp: string) => {
//     return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//   }

//   // Count unread messages for notification badge
//   const unreadCount = messages.filter(m => !m.read && m.sender_type === 'admin').length

//   // Email validation
//   const isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//   }

//   // Message bubble style based on sender type
//   const getMessageStyles = (senderType) => {
//     switch(senderType) {
//       case 'customer':
//         return "bg-teal-500 text-white rounded-tr-none";
//       case 'admin':
//         return "bg-white text-gray-800 shadow-sm rounded-tl-none";
//       case 'system':
//         return "bg-gray-100 text-gray-700 rounded-md text-center";
//       default:
//         return "bg-white text-gray-800 shadow-sm rounded-tl-none";
//     }
//   }

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {isOpen ? (
//         <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col overflow-hidden border border-gray-200 transition-all">
//           <div className="bg-gradient-to-r from-purple-600 to-teal-500 p-4 flex justify-between items-center">
//             <div className="flex items-center">
//               <div className="bg-white p-2 rounded-full mr-3">
//                 <MessageCircle className="w-5 h-5 text-teal-600" />
//               </div>
//               <div>
//                 <h3 className="font-bold text-white">Shipment Support</h3>
//                 <p className="text-xs text-white/80">Real-time chat for shipment #{shipmentId}</p>
//               </div>
//             </div>
//             <button
//               onClick={toggleChat}
//               className="text-white hover:text-gray-200 transition-colors"
//               aria-label="Close chat"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {!adminAvailability.available && (
//             <div className="bg-amber-50 p-3 border-b border-amber-100">
//               <div className="flex items-start">
//                 <Clock className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
//                 <div>
//                   <p className="text-amber-800 text-sm font-medium">{adminAvailability.message}</p>
//                   {adminAvailability.nextAvailable && (
//                     <p className="text-amber-600 text-xs mt-1">Available again: {adminAvailability.nextAvailable}</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50">
//             {!isEmailVerified ? (
//               <div className="py-4">
//                 <h3 className="font-medium text-gray-700 mb-3">Please enter your email to start chatting</h3>
//                 <form onSubmit={handleEmailVerification} className="space-y-4">
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                     <input
//                       type="email"
//                       value={customerEmail}
//                       onChange={(e) => setCustomerEmail(e.target.value)}
//                       placeholder="Your email address"
//                       className="pl-10 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={!isValidEmail(customerEmail) || isVerifying}
//                     className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50"
//                   >
//                     {isVerifying ? "Verifying..." : "Start Chatting"}
//                   </button>
//                   {errorMessage && (
//                     <div className="bg-red-50 text-red-500 p-3 rounded text-sm">
//                       {errorMessage}
//                     </div>
//                   )}
//                 </form>
//               </div>
//             ) : isConnecting ? (
//               <div className="flex items-center justify-center h-full">
//                 <div className="animate-pulse text-gray-500">Connecting...</div>
//               </div>
//             ) : errorMessage ? (
//               <div className="bg-red-50 text-red-500 p-3 rounded">
//                 {errorMessage}
//               </div>
//             ) : messages.length === 0 ? (
//               <div className="text-center text-gray-500 py-8">
//                 <p>No messages yet.</p>
//                 <p className="text-sm mt-2">Send a message to start the conversation with our support team.</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {messages.map((message) => (
//                   <div 
//                     key={message.id} 
//                     className={`flex ${
//                       message.sender_type === 'system' 
//                         ? "justify-center" 
//                         : message.sender_type === 'customer' 
//                           ? "justify-end" 
//                           : "justify-start"
//                     }`}
//                   >
//                     <div
//                       className={`${
//                         message.sender_type === 'system' 
//                           ? "max-w-[90%]" 
//                           : "max-w-[80%]"
//                       } p-3 ${getMessageStyles(message.sender_type)}`}
//                     >
//                       <p>{message.content}</p>
//                       {message.sender_type !== 'system' && (
//                         <p className={`text-xs mt-1 ${
//                           message.sender_type === 'customer' ? "text-teal-100" : "text-gray-500"
//                         }`}>
//                           {formatTime(message.timestamp)}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//                 <div ref={messagesEndRef} />
//               </div>
//             )}
//           </div>

//           {isEmailVerified && (
//             <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex items-center">
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 placeholder="Type your message..."
//                 className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
//                 disabled={isConnecting}
//               />
//               <button
//                 type="submit"
//                 className="ml-2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors disabled:opacity-50"
//                 aria-label="Send message"
//                 disabled={isConnecting || !newMessage.trim()}
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </form>
//           )}
//         </div>
//       ) : (
//         <button
//           onClick={toggleChat}
//           className="bg-gradient-to-r from-purple-600 to-teal-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
//           aria-label="Open chat"
//         >
//           <MessageCircle className="w-6 h-6" />
//           {unreadCount > 0 && (
//             <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               {unreadCount}
//             </span>
//           )}
//         </button>
//       )}
//     </div>
//   )
// }

export default function ChatBubble({ shipmentId }: { shipmentId: string     }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ChatBubble shipmentId={shipmentId} />
    </div>
  )
}
  