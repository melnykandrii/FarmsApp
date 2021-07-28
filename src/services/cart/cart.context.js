import React, { createContext, useEffect, useState, useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [farm, setFarm] = useState(null);
  const [error, setError] = useState(null);
  const [sum, setSum] = useState(0);
  const saveCart = async (frm, crt, uid) => {
    try {
      const jsonValue = JSON.stringify({ farm: frm, cart: crt });
      await AsyncStorage.setItem(`@cart-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
      setError(e);
    }
  };

  const loadCart = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@cart-${uid}`);
      if (value !== null) {
        const { farm: frm, cart: crt } = JSON.parse(value);
        setFarm(frm);
        setCart(crt);
      }
    } catch (e) {
      console.log("error loading", e);
      setError(e);
    }
  };

  useEffect(() => {
    if (user && user.uid) {
      loadCart(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid) {
      saveCart(farm, cart, user.uid);
    }
  }, [farm, cart, user]);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);
    setSum(newSum);
  }, [cart]);

  const add = (item, frm) => {
    if (!farm || farm.placeId !== frm.placeId) {
      setFarm(frm);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const remove = (item) => {
    const newCart = cart.filter((i) => i.placeId !== farm.placeId);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
    setFarm(null);
  };
  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        removeFromCart: remove,
        farm,
        cart,
        error,
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
