// 'use client';

// import { useEffect } from 'react';
// import { useAuth } from './context/auth-context';


// export default function TawkToChat() {
//   const { user } = useAuth(); // Assuming your auth context provides the user object

//   useEffect(() => {
//     // Initialize Tawk_API
//     window.Tawk_API = window.Tawk_API || {};
//     window.Tawk_LoadStart = new Date();

//     // Load Tawk.to script
//     const s1 = document.createElement('script');
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/680e60a700e88619103ef140/1ips2j403';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     document.head.appendChild(s1);

//     // Configure Tawk.to when it loads
//     window.Tawk_API.onLoad = function() {
//       // Set visitor email so admin can see it
//       if (user?.email) {
//         window.Tawk_API.setAttributes({
//           email: user.email,
//           // You can also set name if available
//           name: user.first_name || user.email.split('@')[0]
//         }, function(error:any) {
//           if (error) console.error('Error setting visitor attributes:', error);
//         });
//       }

//       // Hide unwanted elements
//       window.Tawk_API.customStyle({
//         // Hide "powered by" text and other elements
//         zIndex : "1000",
//         position : "fixed",
//         visibility : "visible",
//         bottom : "0px",
//         right : "0px",
//         // Hide the "Powered by tawk.to" branding
//         "widget-brand" : {
//           display: "none !important"
//         },
//         // Hide "change name" option
//         "widget-menu" : {
//           display: "none !important"
//         }
//       });
//     };

//     // Clean up on unmount
//     return () => {
//       if (s1.parentNode) s1.parentNode.removeChild(s1);
//       delete window.Tawk_API;
//       delete window.Tawk_LoadStart;
//     };
//   }, [user]);

//   return null;
// }



// components/TawkWidget.tsx
// "use client";

// import { useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic';

// // Dynamically import with SSR disabled
// const TawkMessengerReact = dynamic(
//   () => import('@tawk.to/tawk-messenger-react'),
//   { ssr: false }
// );

// export default function TawkWidget() {
//   const tawkMessengerRef = useRef<any>();

//   // Initialize with default configuration
//   const initTawk = () => {
//     if (tawkMessengerRef.current) {
//       tawkMessengerRef.current.onLoad = () => {
//         console.log('Chat widget loaded');
//         // Set default attributes
//         tawkMessengerRef.current.setAttributes({
//           name: 'Guest User',
//           email: 'guest@example.com',
//           hash: 'hash' // Add any additional user metadata
//         });
//       };
//     }
//   };

//   const handleMinimize = () => {
//     if (tawkMessengerRef.current) {
//       tawkMessengerRef.current.minimize();
//     }
//   };

//   useEffect(() => {
//     initTawk();
//   }, []);

//   return (
//     <>
//       {/* Customize the appearance */}
//       <TawkMessengerReact
//         ref={tawkMessengerRef}
//         propertyId="6810cbc909ac26190b4a9f3c"
//         widgetId="1iq0po3qm"
//       />
      
//       {/* Optional: Style the minimize button */}
//       <button 
//         onClick={handleMinimize}
//         className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
//       >
//         Minimize Chat
//       </button>
//     </>
//   );
// }

export default function TawkToChat() {  
  return (
    <h1>Hey takws</h1>
  )}