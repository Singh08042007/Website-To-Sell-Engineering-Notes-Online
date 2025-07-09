import React from 'react';
import { CreditCard, Shield, Zap, ExternalLink, ArrowRight, Package, Sparkles, CheckCircle, Gift } from 'lucide-react';

interface RazorpayPaymentProps {
  total: number;
  cartItems: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
}

export default function RazorpayPayment({ total, cartItems }: RazorpayPaymentProps) {
  // Payment link mapping for individual products
  const paymentLinks = {
    1: 'https://rzp.io/rzp/notespayment', // AI & Machine Learning Complete Notes
    2: 'https://rzp.io/rzp/datasciencenotes', // Data Science Fundamentals
    3: 'https://rzp.io/rzp/pythonskills', // Python Programming Mastery
    5: 'https://rzp.io/rzp/computernetworknotes', // Computer Networks & Security
    6: 'https://rzp.io/rzp/softwarenotes' // Software Engineering & Design
  };

  const getCheckoutLink = () => {
    // Get unique product IDs in cart
    const uniqueProducts = [...new Set(cartItems.map(item => item.id))];
    
    // If only one type of product, use specific link
    if (uniqueProducts.length === 1) {
      const productId = uniqueProducts[0];
      return paymentLinks[productId as keyof typeof paymentLinks];
    }
    
    // If multiple different products, use general payment link
    return 'https://rzp.io/rzp/notespricepayment';
  };

  const handleCheckout = () => {
    if (total === 0) return;
    
    const checkoutLink = getCheckoutLink();
    window.open(checkoutLink, '_blank');
  };

  const getCheckoutMessage = () => {
    const uniqueProducts = [...new Set(cartItems.map(item => item.id))];
    
    if (uniqueProducts.length === 1) {
      const productName = cartItems[0].name;
      return `Checkout for ${productName}`;
    }
    
    return `Checkout for ${uniqueProducts.length} different note types`;
  };

  const getPaymentInstructions = () => {
    const uniqueProducts = [...new Set(cartItems.map(item => item.id))];
    
    if (uniqueProducts.length === 1) {
      return `You're purchasing ${cartItems[0].name}. Click checkout to proceed to the secure payment page for this specific product.`;
    }
    
    return `You're purchasing ${uniqueProducts.length} different types of notes. Click checkout and enter the exact amount of ₹${total} on the payment page.`;
  };

  return (
    <div className="space-y-6">
      {/* Premium Security Badge */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 rounded-2xl p-6 border-2 border-blue-100 dark:border-blue-800/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-xl"></div>
        
        <div className="relative">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                Premium Secure Checkout
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Powered by Razorpay • Bank-grade security
              </p>
            </div>
            <div className="ml-auto">
              <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm">
              <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">SSL Secured</p>
            </div>
            <div className="text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm">
              <Zap className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Instant Access</p>
            </div>
            <div className="text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Order Summary */}
      <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border-2 border-dashed border-blue-200 dark:border-blue-700 shadow-lg">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Gift className="w-3 h-3" />
            <span>50% OFF APPLIED</span>
          </div>
        </div>

        <div className="text-center mb-6 mt-2">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
              {getCheckoutMessage()}
            </p>
          </div>
          
          <div className="relative inline-block">
            <div className="text-5xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent mb-2">
              ₹{total}
            </div>
            <div className="absolute -top-2 -right-8">
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                SAVE 50%
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>{[...new Set(cartItems.map(item => item.id))].length} product type{[...new Set(cartItems.map(item => item.id))].length !== 1 ? 's' : ''}</span>
            </span>
          </div>
        </div>

        {/* Enhanced Items List */}
        <div className="space-y-3">
          {[...new Set(cartItems.map(item => item.id))].map((productId, index) => {
            const item = cartItems.find(cartItem => cartItem.id === productId);
            if (!item) return null;
            
            return (
              <div key={productId} className="group relative bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <div className="flex justify-between items-center ml-4">
                  <div>
                    <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Digital Download • Lifetime Access
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-green-600 dark:text-green-400">
                      ₹{item.price}
                    </p>
                    <p className="text-xs text-gray-400 line-through">
                      ₹{item.price * 2}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Premium Checkout Button */}
      <div className="relative">
        <button
          onClick={handleCheckout}
          disabled={total === 0}
          className={`group relative w-full py-5 rounded-2xl font-black text-xl overflow-hidden transition-all duration-500 transform ${
            total === 0 
              ? 'bg-gray-400 cursor-not-allowed text-white' 
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 hover:shadow-2xl hover:scale-105 active:scale-95 shadow-xl'
          }`}
        >
          {/* Animated background */}
          {total > 0 && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          )}
          
          {/* Shimmer effect */}
          {total > 0 && (
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse"></div>
          )}
          
          <div className="relative flex items-center justify-center space-x-4">
            <div className="p-2 bg-white/20 rounded-xl">
              <CreditCard className="w-7 h-7" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg">
                {total === 0 ? 'Add items to cart' : 'Secure Checkout'}
              </span>
              {total > 0 && (
                <span className="text-2xl font-black tracking-wider">
                  ₹{total}
                </span>
              )}
            </div>
            {total > 0 && (
              <div className="p-2 bg-white/20 rounded-xl group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-7 h-7" />
              </div>
            )}
          </div>
        </button>

        {/* Glow effect */}
        {total > 0 && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-500"></div>
        )}
      </div>

      {/* Enhanced Payment Instructions */}
      {total > 0 && (
        <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/30 dark:via-emerald-900/30 dark:to-teal-900/30 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-400/20 rounded-full blur-lg"></div>
          
          <div className="relative flex items-start space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex-shrink-0">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-green-800 dark:text-green-300 text-lg mb-2 flex items-center space-x-2">
                <span>Payment Instructions</span>
                <Sparkles className="w-4 h-4 text-yellow-500" />
              </h5>
              <p className="text-sm text-green-700 dark:text-green-400 leading-relaxed mb-3">
                {getPaymentInstructions()}
              </p>
              <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-xs font-semibold text-green-800 dark:text-green-300 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Download links sent instantly to your email after payment</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Payment Methods */}
      <div className="text-center space-y-4">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          Powered by Razorpay • India's most trusted payment gateway
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: '💳', label: 'Credit/Debit Cards', color: 'from-blue-500 to-blue-600' },
            { icon: '📱', label: 'UPI Payments', color: 'from-green-500 to-green-600' },
            { icon: '🏦', label: 'Net Banking', color: 'from-purple-500 to-purple-600' },
            { icon: '💰', label: 'Digital Wallets', color: 'from-orange-500 to-orange-600' }
          ].map((method, index) => (
            <div key={index} className={`flex items-center space-x-2 bg-gradient-to-r ${method.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
              <span className="text-lg">{method.icon}</span>
              <span>{method.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}