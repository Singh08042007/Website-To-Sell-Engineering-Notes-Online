import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
      <div className="space-y-4">
        <a 
          href="mailto:singhdeepinder414@gmail.com" 
          className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600"
        >
          <Mail className="w-5 h-5" />
          <span>singhdeepinder414@gmail.com</span>
        </a>
        <a 
          href="tel:8699037981" 
          className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600"
        >
          <Phone className="w-5 h-5" />
          <span>+91 8699037981</span>
        </a>
        <a 
          href="https://www.instagram.com/deep__cheema__2007/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600"
        >
          <Instagram className="w-5 h-5" />
          <span>@deep__cheema__2007</span>
        </a>
      </div>
    </div>
  );
}