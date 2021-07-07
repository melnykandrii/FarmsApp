import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { TabNavigator } from "./tab.navigator";
import { MenuNavigator } from "./menu.navigator";
import { LocationNavigator } from "./location.stack";

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Location"
      headerMode="none"
      screenOptions={{}}
    >
      <MainStack.Screen
        name="Main"
        component={TabNavigator}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: "horizontal",
        }}
      />
      <MainStack.Screen
        name="Menu"
        component={MenuNavigator}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: "horizontal-inverted",
        }}
      />
      <MainStack.Screen
        name="Location"
        component={LocationNavigator}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: "horizontal",
        }}
      />
    </MainStack.Navigator>
  );
};
