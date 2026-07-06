
import React, { createContext, useState, useContext } from 'react';

// Initialize and export the context object for dependency injection
export const CartContext = createContext(null);

/**
 * Global Cart State Provider Component
 * Manages item counts, quantities, and real-time total price increments.
 */
export function CartProvider({ children }) {
  // Array state storing objects representing jerseys currently added to cart
  const [cart, setCart] = useState([]);

  // Function to add jerseys or increment quantities reactively
  const addToCart = (jersey) => {
    setCart((prevCart) => {
      // Search the array to see if the unique product layout ID exists
      const existingItem = prevCart.find((item) => item.id === jersey.id);
      
      if (existingItem) {
        // If it exists, step up the quantity attribute by 1 element
        return prevCart.map((item) =>
          item.id === jersey.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If it is a completely new entry, append it with an initial quantity base of 1
      return [...prevCart, { ...jersey, quantity: 1 }];
    });
  };

  // Compute total physical product count inside cart (+1 item, +2 items etc.)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Compute cumulative pricing values based on current active checkout quantities
  const totalPrice = cart.reduce((sum, item) => sum + item.newPrice * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}


 // Safely extracts cart state elements without complex nested markup tree setups
 
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be wrapped inside a valid CartProvider scope.');
  }
  return context;
};
