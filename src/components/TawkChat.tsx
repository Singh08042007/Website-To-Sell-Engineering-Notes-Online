import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

interface TawkChatProps {
  propertyId?: string;
  widgetId?: string;
}

export default function TawkChat({ 
  propertyId = '686f6c89ca9b1d190e69db47', 
  widgetId = '1ivpjvugm' 
}: TawkChatProps) {
  useEffect(() => {
    // Initialize Tawk_API if not already done
    if (!window.Tawk_API) {
      window.Tawk_API = {};
      window.Tawk_LoadStart = new Date();

      // Configure Tawk.to settings
      window.Tawk_API.onLoad = function() {
        console.log('Tawk.to chat widget loaded successfully');
      };

      // Customize the chat widget appearance
      window.Tawk_API.customStyle = {
        visibility: {
          desktop: {
            position: 'br', // bottom right
            xOffset: 20,
            yOffset: 20
          },
          mobile: {
            position: 'br',
            xOffset: 10,
            yOffset: 10
          }
        }
      };

      // Set visitor information
      window.Tawk_API.visitor = {
        name: 'Engineering Student',
        email: ''
      };

      // Dynamically load the Tawk.to script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      // Insert the script
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    }

  }, [propertyId, widgetId]);

  return null; // This component doesn't render anything visible
}