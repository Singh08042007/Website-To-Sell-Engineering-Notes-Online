import React from 'react';
import { ArrowRight, Download, Star, Users, BookOpen, Sparkles, Trophy, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:via-purple-900 dark:to-gray-800 transition-colors duration-300">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-300">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg rotate-45 opacity-20"></div>
        </div>
        <div className="absolute top-3/4 right-1/4 animate-bounce delay-700">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"></div>
        </div>
        <div className="absolute top-1/2 right-1/3 animate-bounce delay-1000">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-40" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-pink-900/40 text-blue-800 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-blue-200 dark:border-blue-700">
                <div className="relative">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <div className="absolute inset-0 animate-ping">
                    <Star className="w-5 h-5 text-yellow-400 fill-current opacity-75" />
                  </div>
                </div>
                <span>Premium Quality Notes</span>
                <Trophy className="w-4 h-4 text-yellow-600" />
              </div>
              
              {/* Enhanced Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight">
                <span className="block mb-2">Engineering</span>
                <span className="block mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Online Notes:
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  High-Quality PDF
                </span>
              </h1>
              
              {/* Enhanced Description */}
              <div className="relative">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  Get <span className="font-bold text-blue-600 dark:text-blue-400">BTech CSE specialized</span> AI & Data Science online notes at 
                  <span className="font-bold text-green-600 dark:text-green-400"> very affordable cost</span>. 
                  Excel in your engineering studies with our comprehensive, well-structured study material.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a 
                href="#products" 
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-black rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 text-base sm:text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse"></div>
                <div className="relative flex items-center space-x-3">
                  <span>Browse Notes</span>
                  <div className="p-1 bg-white/20 rounded-lg group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
              
              <a 
                href="#features" 
                className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white font-bold rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl text-base sm:text-lg transform hover:scale-105 active:scale-95"
              >
                <Download className="mr-3 w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:animate-bounce" />
                <span>Learn More</span>
              </a>
            </div>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-8 pt-8">
              {[
                { icon: Users, label: '1000+ Students', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
                { icon: BookOpen, label: '50+ Subjects', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/30' },
                { icon: Star, label: '4.9 Rating', color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' }
              ].map((stat, index) => (
                <div key={index} className={`group flex items-center space-x-3 ${stat.bg} px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}>
                  <div className={`p-2 ${stat.color} bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:animate-pulse`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                  alt="Engineering Notes" 
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-purple-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
                
                {/* Floating Elements on Image */}
                <div className="absolute top-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce delay-500">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200">50% OFF</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-3 shadow-lg animate-pulse">
                  <div className="flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span className="text-sm font-bold">Instant Download</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Background Decorations */}
            <div className="absolute -top-8 -right-8 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}