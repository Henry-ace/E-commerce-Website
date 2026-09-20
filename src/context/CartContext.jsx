// context/CartContext.jsx
import { createContext, useContext } from "react";
import { useGetCart } from "../hooks/CartItems";






const CartContext = createContext(null);

export function CartProvider({ children }) {
  const cart = useGetCart(); // called ONCE, here

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}