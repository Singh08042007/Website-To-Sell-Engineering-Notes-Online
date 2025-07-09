import React from 'react';
import { Sparkles, Gift, Download, Clock, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

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
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 mx-auto max-w-sm md:max-w-none border border-gray-200 dark:border-gray-700"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"></div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    <span className="flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>50% OFF</span>
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ₹{product.price}
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-gray-900 dark:text-white">4.9</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    <span className="flex items-center space-x-1">
                      <Gift className="w-3 h-3" />
                      <span>SAVE 50%</span>
                    </span>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 h-16 sm:h-20 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4 text-blue-500" />
                      <span>PDF</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span>Lifetime</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl text-sm sm:text-base overflow-hidden group"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                  
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                  <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}