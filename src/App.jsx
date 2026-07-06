import React, { useState } from 'react';
import { CartProvider } from './context/cartContext.jsx';
import Navbar from './pages/navBar.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';

/**
 * Root Application Entry Component
 * Manages view routing states while nesting layers inside the Cart Context loop.
 */
export default function App() {
  // Client route navigation index ("home" or "shop")
  const [activePage, setActivePage] = useState('home');

  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800 selection:bg-emerald-200">
        
        {/* Pass functional hooks down into children layers via standard component attributes */}
        <Navbar setActivePage={setActivePage} />
        
        {/* Conditional Component View Render Engine */}
        <main>
          {activePage === 'home' ? (
            <Home setActivePage={setActivePage} />
          ) : (
            <Shop />
          )}
        </main>
        
      </div>
    </CartProvider>
  );
}
