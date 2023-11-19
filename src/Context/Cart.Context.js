import React, { createContext, useContext, useState } from "react";

// WE NEED BOILER PLATE CODE
const CartContext = createContext({
  cart: [],
  handleAddToCart: () => {},
  shouldDisable: () => {},
});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const value = {
    cart,
    handleAddToCart,
    shouldDisable,
  };

  function handleAddToCart(data) {
    const cartCopy = [...cart];
    cartCopy.push(data);
    setCart(cartCopy);
  }

  function shouldDisable(data) {
    const matchedData = cart.find((d) => d.id === data.id);
    return matchedData ? true : false;
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
