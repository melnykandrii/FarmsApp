import React from "react";
import { FarmsContextProvider } from "../../services/farms/farms.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { MainNavigator } from "./main.navigator";
import { CartContextProvider } from "../../services/cart/cart.context";

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <FarmsContextProvider>
          <CartContextProvider>
            <MainNavigator />
          </CartContextProvider>
        </FarmsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
