"use client"

import type React from "react"

import { useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  Truck,
  FileText,
  BarChart3,
  HelpCircle,
  MessageSquare,
} from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Shipments", href: "/admin/dashboard/shipments", icon: Package },
    { name: "Customers", href: "/admin/dashboard/customers", icon: Users },
    { name: "Drivers", href: "/admin/dashboard/drivers", icon: Truck },
    { name: "Reports", href: "/admin/dashboard/reports", icon: FileText },
    { name: "Analytics", href: "/admin/dashboard/analytics", icon: BarChart3 },
    { name: "Settings", href: "/admin/dashboard/settings", icon: Settings },
  ]

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 flex z-40 md:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } transition-opacity ease-linear duration-300`}
      >
        <div
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          } transition-opacity ease-linear duration-300`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-800 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition ease-in-out duration-300`}
        >
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex-shrink-0 flex items-center px-4">
            <Image
              src="/images/eco-global-logo-white.png"
              alt="Eco Global Shipping"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                      isActive ? "bg-cyan-900 text-white" : "text-cyan-100 hover:bg-cyan-700 hover:text-white"
                    }`}
                  >
                    <item.icon
                      className={`mr-4 flex-shrink-0 h-6 w-6 ${
                        isActive ? "text-cyan-300" : "text-cyan-200 group-hover:text-cyan-100"
                      }`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-cyan-700 p-4">
            <Link href="/admin/login" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <div className="h-9 w-9 rounded-full bg-cyan-700 flex items-center justify-center text-white">
                    <span className="text-sm font-medium">AD</span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-white">Admin User</p>
                  <div className="flex items-center text-sm font-medium text-cyan-200 group-hover:text-white">
                    <LogOut className="mr-1 h-4 w-4" />
                    Log out
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-cyan-900">
              <Image
                src="/images/eco-global-logo-white.png"
                alt="Eco Global Shipping"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto bg-cyan-800">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        isActive ? "bg-cyan-900 text-white" : "text-cyan-100 hover:bg-cyan-700 hover:text-white"
                      }`}
                    >
                      <item.icon
                        className={`mr-3 flex-shrink-0 h-6 w-6 ${
                          isActive ? "text-cyan-300" : "text-cyan-200 group-hover:text-cyan-100"
                        }`}
                      />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-cyan-700 bg-cyan-800 p-4">
              <Link href="/admin/login" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <div className="h-9 w-9 rounded-full bg-cyan-700 flex items-center justify-center text-white">
                      <span className="text-sm font-medium">AD</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Admin User</p>
                    <div className="flex items-center text-xs font-medium text-cyan-200 group-hover:text-white">
                      <LogOut className="mr-1 h-4 w-4" />
                      Log out
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <div className="w-full flex md:ml-0">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <Search className="h-5 w-5" />
                  </div>
                  <input
                    id="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>

              {/* Help */}
              <button className="ml-3 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                <span className="sr-only">Get help</span>
                <HelpCircle className="h-6 w-6" />
              </button>

              {/* Messages */}
              <button className="ml-3 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                <span className="sr-only">View messages</span>
                <MessageSquare className="h-6 w-6" />
              </button>

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-cyan-700 flex items-center justify-center text-white">
                      <span className="text-sm font-medium">AD</span>
                    </div>
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
      </div>
    </div>
  )
}
