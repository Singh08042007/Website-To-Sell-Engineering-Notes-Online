import React, { useState } from 'react';
import { CreditCard, Shield, Zap } from 'lucide-react';
import PaymentSuccess from './PaymentSuccess';

interface RazorpayPaymentProps {
  total: number;
  cartItems: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function RazorpayPayment({ total, cartItems }: RazorpayPaymentProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<{
    paymentId: string;
    amount: number;
  } | null>(null);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    // Generate a unique order ID for tracking
    const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Your Razorpay key ID
      amount: total * 100, // Amount in paise (multiply by 100)
      currency: 'INR',
      name: 'Engineering Notes Hub',
      description: `Payment for ${cartItems.length} item(s)`,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=100&q=80',
      order_id: orderId, // This should ideally come from your backend
      handler: function (response: any) {
        // Payment successful
        console.log('Payment Response:', response);
        setPaymentDetails({
          paymentId: response.razorpay_payment_id,
          amount: total
        });
        setShowSuccess(true);
        
        // Here you would typically:
        // 1. Send payment details to your backend for verification
        // 2. Send download links to user's email
        // 3. Update order status in database
        
        // For now, we'll just show success message
        console.log('Payment successful!', {
          payment_id: response.razorpay_payment_id,
          order_id: response.razorpay_order_id,
          signature: response.razorpay_signature
        });
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        address: 'Engineering Notes Hub',
        items: cartItems.map(item => `${item.name} (Qty: ${item.quantity})`).join(', ')
      },
      theme: {
        color: '#3B82F6'
      },
      modal: {
        ondismiss: function() {
          console.log('Payment modal closed by user');
        }
      },
      retry: {
        enabled: true,
        max_count: 3
      }
    };

    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
        console.error('Payment failed:', response.error);
        alert(`Payment failed: ${response.error.description}`);
      });
      
      paymentObject.open();
    } catch (error) {
      console.error('Error opening Razorpay:', error);
      alert('Error opening payment gateway. Please try again.');
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setPaymentDetails(null);
    // Optionally clear cart here
  };

  return (
    <>
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>Secure Payment</span>
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
              <span className="text-gray-700 dark:text-gray-300">All Cards</span>
            </div>
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={total === 0}
          className={`w-full py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg transition-all duration-200 ${
            total === 0 
              ? 'bg-gray-400 cursor-not-allowed text-white' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transform hover:scale-105'
          }`}
        >
          <CreditCard className="w-5 h-5" />
          <span>{total === 0 ? 'Add items to cart' : `Pay ₹${total} Securely`}</span>
        </button>

        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Powered by Razorpay - India's most trusted payment gateway
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <span>💳 Credit/Debit Cards</span>
            <span>📱 UPI</span>
            <span>🏦 Net Banking</span>
            <span>💰 Wallets</span>
          </div>
        </div>
      </div>

      {showSuccess && paymentDetails && (
        <PaymentSuccess
          paymentId={paymentDetails.paymentId}
          amount={paymentDetails.amount}
          onClose={handleCloseSuccess}
        />
      )}
    </>
  );
}