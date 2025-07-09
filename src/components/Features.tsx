import React from 'react';
import { Brain, Database, Code, Zap, Shield, Download, Sparkles, Trophy, Target } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Comprehensive notes on artificial intelligence, neural networks, and machine learning algorithms with real-world applications.',
    color: 'from-blue-500 to-cyan-500',
    accent: 'bg-blue-500',
    delay: 'delay-100'
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'Complete coverage of data analysis, statistics, visualization, and big data technologies with practical examples.',
    color: 'from-purple-500 to-pink-500',
    accent: 'bg-purple-500',
    delay: 'delay-200'
  },
  {
    icon: Code,
    title: 'Programming Languages',
    description: 'Detailed notes on Python, Java, C++, and other essential programming languages with coding best practices.',
    color: 'from-green-500 to-emerald-500',
    accent: 'bg-green-500',
    delay: 'delay-300'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized PDFs with fast loading times, excellent readability, and mobile-friendly design for all devices.',
    color: 'from-yellow-500 to-orange-500',
    accent: 'bg-yellow-500',
    delay: 'delay-400'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All notes are reviewed by industry experts, fact-checked, and updated regularly with latest curriculum.',
    color: 'from-red-500 to-rose-500',
    accent: 'bg-red-500',
    delay: 'delay-500'
  },
  {
    icon: Download,
    title: 'Instant Access',
    description: 'Download immediately after purchase with lifetime access to updates and new versions at no extra cost.',
    color: 'from-indigo-500 to-purple-500',
    accent: 'bg-indigo-500',
    delay: 'delay-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span>Why We're The Best Choice</span>
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Why Choose Our 
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Premium Notes?
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-6">
              Specially crafted for <span className="font-bold text-blue-600 dark:text-blue-400">BTech CSE students</span> focusing on 
              <span className="font-bold text-purple-600 dark:text-purple-400"> AI & Data Science</span>. 
              Get the competitive edge you need to excel in your studies and career.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Expert Reviewed', 'Updated Content', 'Lifetime Access', '50% Off'].map((badge, index) => (
                <div key={index} className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-bold shadow-md">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden ${feature.delay}`}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              {/* Icon Container */}
              <div className="relative mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Floating Sparkle */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Side Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 group-hover:animate-pulse" />
                <span className="text-lg font-bold">Ready to Excel in Your Studies?</span>
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}