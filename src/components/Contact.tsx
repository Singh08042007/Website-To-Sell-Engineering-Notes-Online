import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, Heart, Star, Zap } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mqaborrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! 🎉');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again. 😔');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300 relative overflow-hidden">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '12px',
            padding: '16px',
          },
        }}
      />
      
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Heart className="w-5 h-5 text-red-500" />
            <span>We're Here to Help</span>
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Get in 
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Have questions about our notes? Need help with your order? 
            We're here to help you succeed in your <span className="font-bold text-blue-600 dark:text-blue-400">engineering journey</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Enhanced Contact Info */}
          <div className="space-y-10">
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <span>Contact Information</span>
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'singhdeepinder414@gmail.com',
                    href: 'mailto:singhdeepinder414@gmail.com',
                    color: 'from-blue-600 to-purple-600',
                    hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400'
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+91 8699037981',
                    href: 'tel:8699037981',
                    color: 'from-green-600 to-emerald-600',
                    hoverColor: 'hover:text-green-600 dark:hover:text-green-400'
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'India',
                    href: '#',
                    color: 'from-purple-600 to-pink-600',
                    hoverColor: 'hover:text-purple-600 dark:hover:text-purple-400'
                  }
                ].map((contact, index) => (
                  <div key={index} className="group flex items-center space-x-6 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
                    <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform`}>
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">{contact.label}</p>
                      <a 
                        href={contact.href} 
                        className={`text-lg font-bold text-gray-900 dark:text-white ${contact.hoverColor} transition-colors break-all group-hover:underline`}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Why Choose Us */}
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              
              <div className="relative">
                <h4 className="text-xl sm:text-2xl font-black mb-6 flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Star className="w-6 h-6" />
                  </div>
                  <span>Why Choose Us?</span>
                  <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Zap, text: '24/7 Customer Support' },
                    { icon: CheckCircle, text: 'Instant Download Access' },
                    { icon: Heart, text: 'Money Back Guarantee' },
                    { icon: Star, text: 'Regular Content Updates' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <span>Send us a Message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl group-hover:border-blue-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl group-hover:border-blue-400"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 resize-none text-base font-medium shadow-lg hover:shadow-xl group-hover:border-blue-400"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-5 rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl overflow-hidden ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 active:scale-95 hover:shadow-blue-500/25'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse"></div>
                  
                  <div className="relative flex items-center space-x-3">
                    <div className="p-1 bg-white/20 rounded-lg">
                      <Send className="w-6 h-6" />
                    </div>
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && (
                      <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}