import React from "react";
import { FarmsContextProvider } from "../../services/farms/farms.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { MainNavigator } from "./main.navigator";
import { AuthNavigator } from "./authen.navigator";
import { CartContextProvider } from "../../services/cart/cart.context";

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <FarmsContextProvider>
          <CartContextProvider>
            <AuthNavigator />
          </CartContextProvider>
        </FarmsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
