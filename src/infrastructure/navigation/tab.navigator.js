import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FarmsNavigator } from "./farms.stack.navigator";
import { theme } from "../theme";
import { Icon } from "react-native-elements";
import { FavNavigator } from "./favourites.navigator";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Farms") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "ios-map" : "ios-map-outline";
          } else if (route.name === "Favourite") {
            iconName = focused ? "heart" : "heart-outline";
          }
          return (
            <Icon name={iconName} type="ionicon" size={size} color={color} />
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
      <Tab.Screen name="Favourite" component={FavNavigator} />
    </Tab.Navigator>
  );
};
