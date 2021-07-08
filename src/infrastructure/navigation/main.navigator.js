import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { TabNavigator } from "./tab.navigator";
import { MenuNavigator } from "./menu.navigator";

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Tabs"
      headerMode="none"
      screenOptions={{}}
    >
      <MainStack.Screen
        name="Tabs"
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
    </MainStack.Navigator>
  );
};
