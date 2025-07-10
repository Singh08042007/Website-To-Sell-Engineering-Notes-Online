import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, Sparkles, Gift, Mail } from 'lucide-react';
import RazorpayPayment from './RazorpayPayment';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0);
  const totalDiscount = originalTotal - total;

  return (
    <section id="cart" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
          Shopping Cart
        </h2>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <Trash2 className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4">Your cart is empty</p>
            <a 
              href="#products" 
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm sm:text-base"
            >
              Browse Notes
            </a>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="group relative bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative flex items-center space-x-3 sm:space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow duration-300" 
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <p className="text-lg font-bold text-green-600 dark:text-green-400">₹{item.price}</p>
                          <p className="text-sm text-gray-400 line-through">₹{item.originalPrice}</p>
                          <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-md text-xs font-bold">
                            50% OFF
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Digital Download • Lifetime Access</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-end space-x-3 sm:space-x-4">
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                        <span className="flex items-center space-x-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Digital Download</span>
                        </span>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden max-w-2xl mx-auto">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-400/10 to-emerald-400/10 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
                Order Summary
              </h3>
              
              <div className="relative space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-gray-700/60 rounded-xl backdrop-blur-sm">
                  <span>Original Price</span>
                  <span className="text-lg font-semibold line-through text-gray-500">₹{originalTotal}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl border border-red-200 dark:border-red-800">
                  <div className="flex items-center space-x-2">
                    <span>Discount (50% OFF)</span>
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      MEGA SAVE!
                    </span>
                  </div>
                  <span className="text-xl font-bold text-green-600 dark:text-green-400">-₹{totalDiscount}</span>
                </div>
                
                <div className="border-t-2 border-dashed border-gray-300 dark:border-gray-600 pt-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800">
                    <span>Final Total</span>
                    <span className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">₹{total}</span>
                  </div>
                  <div className="text-center mt-3">
                    <span className="inline-flex items-center space-x-2 text-sm bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full font-bold">
                      <Gift className="w-4 h-4" />
                      <span>You save ₹{totalDiscount} with this order!</span>
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
              
              <RazorpayPayment total={total} cartItems={cartItems} />
              
              <button 
                onClick={() => window.location.href = '#contact'}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-bold mt-4 text-sm sm:text-base border-2 border-transparent hover:border-green-300 hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Need Help? Contact Us</span>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}