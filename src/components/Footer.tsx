import React from 'react';
import { BookOpen, Mail, Phone, Instagram, Heart, Sparkles, Star, Trophy, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Enhanced Brand Section */}
          <div className="space-y-6 lg:col-span-2">
            <div className="group flex items-center space-x-4 cursor-pointer">
              <div className="relative">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl group-hover:shadow-blue-500/25 transition-shadow duration-300 group-hover:scale-110 transform">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Engineering Notes Hub
                </span>
                <div className="flex items-center space-x-2 mt-1">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-bold text-gray-300">Premium Quality Since 2024</span>
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium max-w-md">
              Premium quality <span className="font-bold text-blue-400">engineering notes</span> for BTech CSE students specializing in 
              <span className="font-bold text-purple-400"> AI & Data Science</span>. Your success is our mission.
            </p>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Star, label: '4.9/5 Rating', color: 'text-yellow-400' },
                { icon: Zap, label: '1000+ Students', color: 'text-blue-400' },
                { icon: Trophy, label: '50+ Subjects', color: 'text-purple-400' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-sm font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-black mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-4">
              {[
                { href: '#features', label: 'Features', icon: Sparkles },
                { href: '#products', label: 'Notes', icon: BookOpen },
                { href: '#cart', label: 'Cart', icon: Star },
                { href: '#contact', label: 'Contact', icon: Heart }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 font-semibold hover:translate-x-2 transform"
                  >
                    <link.icon className="w-4 h-4 group-hover:animate-pulse" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-black mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
              <span>Contact Info</span>
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  href: 'mailto:singhdeepinder414@gmail.com',
                  text: 'singhdeepinder414@gmail.com',
                  color: 'hover:text-blue-400'
                },
                {
                  icon: Phone,
                  href: 'tel:8699037981',
                  text: '+91 8699037981',
                  color: 'hover:text-green-400'
                },
                {
                  icon: Instagram,
                  href: 'https://www.instagram.com/deep__cheema__2007/',
                  text: '@deep__cheema__2007',
                  color: 'hover:text-pink-400'
                }
              ].map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href} 
                  target={contact.icon === Instagram ? '_blank' : undefined}
                  rel={contact.icon === Instagram ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center space-x-3 text-gray-300 ${contact.color} transition-all duration-300 font-medium hover:translate-x-2 transform`}
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  <span className="break-all text-sm sm:text-base">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <div className="relative">
                <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <Heart className="w-5 h-5 text-red-400 fill-current opacity-75" />
                </div>
              </div>
              <span>for Engineering Students</span>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
            
            <div className="text-center sm:text-right">
              <p className="text-gray-400 text-sm font-medium">
                © 2024 Engineering Notes Hub. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Empowering students • Building futures
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}