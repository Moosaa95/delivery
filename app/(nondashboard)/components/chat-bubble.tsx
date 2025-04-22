"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "agent"; time: string }[]>([
    {
      text: "Hello! How can I help you with your shipping needs today?",
      sender: "agent",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Add user message
    const userMessage = {
      text: newMessage,
      sender: "user" as const,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }
    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    // Simulate agent response after a short delay
    setTimeout(() => {
      const responses = [
        "I'd be happy to help with that. Could you provide more details?",
        "Thank you for your question. Let me check that for you.",
        "We offer several shipping options for that destination. Would you like me to explain them?",
        "I understand your concern. Let me connect you with our specialized team.",
        "That's a great question! Our express shipping would be perfect for your needs.",
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const agentMessage = {
        text: randomResponse,
        sender: "agent" as const,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, agentMessage])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col overflow-hidden border border-gray-200 transition-all">
          <div className="bg-gradient-to-r from-purple-600 to-teal-500 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full mr-3">
                <MessageCircle className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-white">Swift Support</h3>
                <p className="text-xs text-white/80">We typically reply in a few minutes</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-teal-500 text-white rounded-tr-none"
                        : "bg-white text-gray-800 shadow-sm rounded-tl-none"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === "user" ? "text-teal-100" : "text-gray-500"}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
            <button
              type="submit"
              className="ml-2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-gradient-to-r from-purple-600 to-teal-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
