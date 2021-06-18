import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { TabNavigator } from "./tab.navigator";
import { MenuNavigator } from "./menu.navigator";
import { LocationScreen } from "../../features/settings/screens/location.screen";

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        gestureDirection: "horizontal-inverted",
      }}
    >
      <MainStack.Screen name="Main" component={TabNavigator} />
      <MainStack.Screen
        name="Menu"
        component={MenuNavigator}
        options={
          {
            //gestureDirection: "horizontal-inverted",
          }
        }
      />
      <MainStack.Screen name="Location" component={LocationScreen} />
    </MainStack.Navigator>
  );
};
