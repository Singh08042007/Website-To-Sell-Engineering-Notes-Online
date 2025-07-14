import React from 'react';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TawkChat from './components/TawkChat';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Hero />
          <Features />
          <Products />
          <Cart />
          <Contact />
          <Footer />
          <TawkChat />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;