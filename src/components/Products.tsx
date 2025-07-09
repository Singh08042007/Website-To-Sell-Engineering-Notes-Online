import React from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ShoppingCart, Star, Download, Clock } from 'lucide-react';

export default function Products() {
  const { addToCart } = useCart();

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Premium Engineering Notes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            High-quality PDF notes for BTech CSE specializing in AI & Data Science. 
            Affordable pricing with comprehensive coverage of all essential topics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 mx-auto max-w-sm md:max-w-none"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                    50% OFF
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    ₹{product.price}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">4.9</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      ₹{product.price}
                    </span>
                    <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-md text-xs font-semibold">
                    SAVE 50%
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 h-16 sm:h-20 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>PDF</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Lifetime</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}