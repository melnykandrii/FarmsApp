import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  //favourites state with empty array after first rendering;
  const { user } = useContext(AuthenticationContext);
  const [favourites, SetFavourites] = useState([]);
  //storing data locally
  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };
  //Reading data
  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        SetFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };
  // add function;
  const add = (farm) => {
    SetFavourites([...favourites, farm]);
  };
  //remove function
  const remove = (farm) => {
    const newFavourites = favourites.filter((x) => x.placeId !== farm.placeId);
    SetFavourites(newFavourites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
