import React from 'react';

import { useCart } from '../context/CartContext.js';
 
 //Implements the requested global sticky +1 items counter component view layout.
 
export default function Navbar({ setActivePage }) {
  // Destructure reactive parameters from global state
  const { totalItems, totalPrice } = useCart();

  return (
    <nav className="bg-emerald-700 text-white shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div 
          className="flex items-center space-x-2 cursor-pointer select-none"
          onClick={() => setActivePage('home')}
        >
          <span className="text-2xl font-black tracking-wider text-white">
            PL<span className="text-emerald-300">KITS</span>
          </span>
        </div>

        {/* Global Page Routing Handles */}
        <div className="flex items-center space-x-8">
          <button onClick={() => setActivePage('home')} className="hover:text-emerald-200 font-semibold transition-colors">Home</button>
          <button onClick={() => setActivePage('shop')} className="hover:text-emerald-200 font-semibold transition-colors">Shop Kits</button>
          
          {/* Request Fulfillment: Top container layout area showing +1 items calculations */}
          <div className="flex items-center bg-white text-emerald-950 px-4 py-2 rounded-full font-bold shadow-sm space-x-2">
            <svg xmlns="http://w3.org" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {/* Real-time reactive items count indicator (+1 item, +2 items, etc.) */}
            <span className="font-mono text-sm tracking-wide">
              {totalItems > 0 ? `+${totalItems} ${totalItems === 1 ? 'item' : 'items'}` : '0 items'}
            </span>
            {totalItems > 0 && (
              <span className="border-l pl-2 text-emerald-700 font-black">${totalPrice}</span>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}
