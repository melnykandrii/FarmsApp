import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/restaurants/screens/settings.screen";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.stack.navigator";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Restaurants") {
            iconName = focused ? "md-fast-food" : "md-fast-food-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "ios-map" : "ios-map-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
