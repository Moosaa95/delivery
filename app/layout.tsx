import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TawkMenuHider from "./tawk";
import CustomTawkChat from "./tawk";
// import removeBranding from "./brand";
// import { AuthProvider } from "./context/auth-context";
// import TawkWidget from "./tawk";
// import TawkToChat from "./tawk";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eco Global Delivery",
  description: "Eco Global Delivery Logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
//   const INTERVAL_MS = 100;
// setInterval(removeBranding, INTERVAL_MS);

  return (
    <html lang="en">
      <script 
        src="https://delivery-bjl2.onrender.com/static/chat/chat-widget.js" 
        data-base-url="https://delivery-bjl2.onrender.com/static/chat/chat-widget.js" 
        defer>
      </script>
            
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <AuthProvider> */}
        {children}
        
      </body>
    </html>
  );
}

