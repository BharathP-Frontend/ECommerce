import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    cartItems.includes(item)
      ? alert("Item already added to cart")
      : setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prev) => prev.filter((product) => product !== item));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
