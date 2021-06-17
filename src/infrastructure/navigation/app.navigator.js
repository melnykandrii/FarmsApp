import React from "react";
import { FarmsContextProvider } from "../../services/farms/farms.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { MainNavigator } from "./main.navigator";

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <FarmsContextProvider>
          <MainNavigator />
        </FarmsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
