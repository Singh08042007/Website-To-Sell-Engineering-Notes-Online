import React from 'react';
import { Brain, Database, Code, Zap, Shield, Download } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Comprehensive notes on artificial intelligence, neural networks, and machine learning algorithms.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'Complete coverage of data analysis, statistics, and big data technologies.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Programming Languages',
    description: 'Detailed notes on Python, Java, C++, and other essential programming languages.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized PDFs with fast loading times and excellent readability on all devices.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All notes are reviewed by industry experts and updated regularly.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: Download,
    title: 'Instant Access',
    description: 'Download immediately after purchase with lifetime access to updates.',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Our Notes?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Specially crafted for BTech CSE students focusing on AI & Data Science. 
            Get the competitive edge you need to excel in your studies and career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}