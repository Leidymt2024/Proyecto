import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return { cart, addToCart, removeFromCart };
};
