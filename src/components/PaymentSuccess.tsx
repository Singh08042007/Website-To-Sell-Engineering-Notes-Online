import React from 'react';
import { CheckCircle, Download, Mail, Phone } from 'lucide-react';

interface PaymentSuccessProps {
  paymentId: string;
  amount: number;
  onClose: () => void;
}

export default function PaymentSuccess({ paymentId, amount, onClose }: PaymentSuccessProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 max-w-md w-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Payment Successful!
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your payment of ₹{amount} has been processed successfully.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-300">Payment ID:</p>
            <p className="font-mono text-sm font-semibold text-gray-900 dark:text-white break-all">
              {paymentId}
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
              <Download className="w-5 h-5" />
              <span className="font-semibold">Download links will be sent to your email</span>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-300">
              If you don't receive the download links within 5 minutes, please contact us:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a 
                href="mailto:singhdeepinder414@gmail.com"
                className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email Support</span>
              </a>
              <a 
                href="tel:8699037981"
                className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400 hover:underline text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Support</span>
              </a>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}