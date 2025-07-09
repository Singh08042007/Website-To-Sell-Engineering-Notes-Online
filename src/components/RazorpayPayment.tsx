import React from 'react';
import { CreditCard, Shield, Zap, ExternalLink, ArrowRight, Package } from 'lucide-react';

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
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
          <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>Secure Payment with Razorpay</span>
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-gray-700 dark:text-gray-300">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-600" />
            <span className="text-gray-700 dark:text-gray-300">Instant Access</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300">All Methods</span>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border-2 border-dashed border-blue-200 dark:border-blue-700">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {getCheckoutMessage()}
            </p>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            ₹{total}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} • {[...new Set(cartItems.map(item => item.id))].length} product type{[...new Set(cartItems.map(item => item.id))].length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Items in cart */}
        <div className="space-y-2">
          {[...new Set(cartItems.map(item => item.id))].map(productId => {
            const item = cartItems.find(cartItem => cartItem.id === productId);
            if (!item) return null;
            
            return (
              <div key={productId} className="flex justify-between items-center text-sm bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {item.name}
                </span>
                <span className="text-gray-900 dark:text-white font-semibold">
                  ₹{item.price}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        disabled={total === 0}
        className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-lg transition-all duration-300 transform ${
          total === 0 
            ? 'bg-gray-400 cursor-not-allowed text-white' 
            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 hover:shadow-2xl hover:scale-105 active:scale-95'
        }`}
      >
        <CreditCard className="w-6 h-6" />
        <span>{total === 0 ? 'Add items to cart' : 'Checkout & Pay'}</span>
        {total > 0 && (
          <>
            <span className="text-white/80">•</span>
            <span className="font-extrabold">₹{total}</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Payment Instructions */}
      {total > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
          <div className="flex items-start space-x-3">
            <ExternalLink className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-green-800 dark:text-green-300 mb-1">
                Payment Instructions
              </h5>
              <p className="text-sm text-green-700 dark:text-green-400 leading-relaxed">
                {getPaymentInstructions()} Download links will be sent to your email immediately after successful payment.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods */}
      <div className="text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          Powered by Razorpay - India's most trusted payment gateway
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
            <span>💳</span>
            <span>Cards</span>
          </div>
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
            <span>📱</span>
            <span>UPI</span>
          </div>
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
            <span>🏦</span>
            <span>Net Banking</span>
          </div>
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
            <span>💰</span>
            <span>Wallets</span>
          </div>
        </div>
      </div>
    </div>
  );
}