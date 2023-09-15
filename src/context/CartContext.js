import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, cantidad }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalCantidad = cart.reduce((total, product) => total + product.cantidad, 0);
  const total = cart.reduce((total, product) => total + product.precio * product.cantidad, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalCantidad, total }}>
      {children}
    </CartContext.Provider>
  );
};

