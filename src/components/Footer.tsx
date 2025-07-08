import React from 'react';
import { BookOpen, Mail, Phone, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <span className="text-lg sm:text-xl font-bold">Engineering Notes Hub</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Premium quality engineering notes for BTech CSE students specializing in AI & Data Science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Notes</a></li>
              <li><a href="#cart" className="text-gray-400 hover:text-white transition-colors">Cart</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Subjects</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><span className="text-gray-400">Artificial Intelligence</span></li>
              <li><span className="text-gray-400">Machine Learning</span></li>
              <li><span className="text-gray-400">Data Science</span></li>
              <li><span className="text-gray-400">Programming</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a href="mailto:singhdeepinder414@gmail.com" className="flex items-start space-x-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                <Mail className="w-4 h-4" />
                <span className="break-all">singhdeepinder414@gmail.com</span>
              </a>
              <a href="tel:8699037981" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                <Phone className="w-4 h-4" />
                <span>+91 8699037981</span>
              </a>
              <a href="https://www.instagram.com/deep__cheema__2007/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                <Instagram className="w-4 h-4" />
                <span>@deep__cheema__2007</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1 text-sm sm:text-base">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for Engineering Students</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            © 2024 Engineering Notes Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}