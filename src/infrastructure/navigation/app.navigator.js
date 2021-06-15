import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";
import { FarmsNavigator } from "./farms.stack.navigator";
import { theme } from "../theme";
import { FarmsContextProvider } from "../../services/farms/farms.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <FarmsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Farms") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Map") {
                  iconName = focused ? "ios-map" : "ios-map-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "settings" : "settings-outline";
                }
                return (
                  <Icon
                    name={iconName}
                    type="ionicon"
                    size={size}
                    color={color}
                  />
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: theme.colors.brand.spring,
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Farms" component={FarmsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </FarmsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
