import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { MainNavigator } from "../../infrastructure/navigation/main.navigator";
import { LocationNavigator } from "../../infrastructure/navigation/location.stack";

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Location"
      backBehavior="none"
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <AuthStack.Screen name="Location" component={LocationNavigator} />
      <AuthStack.Screen name="Main" component={MainNavigator} />
    </AuthStack.Navigator>
  );
};
