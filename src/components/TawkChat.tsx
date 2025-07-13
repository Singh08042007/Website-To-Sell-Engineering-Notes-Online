import React, { useEffect } from 'react';

export default function TawkChat() {
  useEffect(() => {
    // Only load if not already loaded
    if (window.Tawk_API) {
      return;
    }

    // Simple initialization
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Create and load script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/686f6c89ca9b1d190e69db47/1ivpjvugm';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Add error handling
    script.onerror = () => {
      console.warn('Tawk.to failed to load');
    };
    
    script.onload = () => {
      console.log('Tawk.to loaded successfully');
    };

    document.head.appendChild(script);
  }, []);

  return null;
}

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}