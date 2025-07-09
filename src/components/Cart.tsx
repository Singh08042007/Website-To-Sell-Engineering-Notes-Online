import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl flex-shrink-0" 
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
                          {item.name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">₹{item.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-end space-x-3 sm:space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                        Digital Download
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 h-fit transition-colors duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Order Summary
              </h3>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Original Price</span>
                  <span className="line-through">₹{originalTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span className="flex items-center space-x-2">
                    <span>Discount (50% OFF)</span>
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-md text-xs font-semibold">
                      SAVE 50%
                    </span>
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">-₹{totalDiscount}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    <span>Final Total</span>
                    <span className="text-green-600 dark:text-green-400">₹{total}</span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      You save ₹{totalDiscount} with this order!
                    </span>
                  </div>
                </div>
              </div>
              
              <RazorpayPayment total={total} cartItems={cartItems} />
              
              <button 
                onClick={() => window.location.href = '#contact'}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 sm:py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-semibold mt-3 sm:mt-4 text-sm sm:text-base border-2 border-transparent hover:border-green-300"
              >
                Need Help? Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}