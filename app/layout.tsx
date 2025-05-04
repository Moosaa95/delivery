import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TawkMenuHider from "./tawk";
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
  return (
    <html lang="en">
      {/* <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6810cbc909ac26190b4a9f3c/1iq0po3qm';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
            
            // Custom script to hide the menu button
            document.addEventListener('DOMContentLoaded', function() {
              console.log("TESTING")
              const tawkFrame = document.getElementById('tawkIframe');
              console.log(tawkFrame, 'hey test')
              if (tawkFrame) {
                tawkFrame.contentWindow.document.querySelector('.tawk-powered').remove();
              }
              function hideMenuButton() {
                // Look for the menu button based on its attributes
                const menuButtons = document.querySelectorAll('button.tawk-header-text[data-text="Menu"]');
                menuButtons.forEach(button => {
                  button.style.display = 'none';
                });
                
                // Alternative selector if the above doesn't work
                const iconMenuButtons = document.querySelectorAll('button.tawk-button:has(.tawk-icon-menu)');
                iconMenuButtons.forEach(button => {
                  button.style.display = 'none';
                });
              }
              
              // Set up a mutation observer to detect when the chat widget is added
              const observer = new MutationObserver(function(mutations) {
                hideMenuButton();
              });
              
              // Start observing the document body for changes
              observer.observe(document.body, { 
                childList: true, 
                subtree: true 
              });
              
              // Also check periodically
              const checkInterval = setInterval(hideMenuButton, 1000);
              
              // Stop checking after 30 seconds to avoid unnecessary processing
              setTimeout(() => {
                clearInterval(checkInterval);
              }, 30000);
            });
          `,
        }}
      /> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <AuthProvider> */}
        {children}
        <TawkMenuHider />
        {/* <TawkWidget /> */}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}

