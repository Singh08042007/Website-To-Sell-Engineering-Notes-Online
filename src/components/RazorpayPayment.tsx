import React from 'react';
import { CreditCard, Shield, Zap, ExternalLink, ArrowRight } from 'lucide-react';

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
  const handleCheckout = () => {
    if (total === 0) return;
    
    // Open the Razorpay payment link in a new tab
    window.open('https://razorpay.me/@engineeringnotespayment', '_blank');
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

      {/* Checkout Amount Display */}
      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border-2 border-dashed border-blue-200 dark:border-blue-700">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Total Checkout Amount</p>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            ₹{total}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </p>
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
                Click "Checkout & Pay" to proceed to our secure Razorpay payment page. 
                Enter the exact amount of <strong>₹{total}</strong> and complete your payment. 
                Download links will be sent to your email immediately after successful payment.
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