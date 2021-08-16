import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/accounts/screens/accounts.screen";
import { LogInScreen } from "../../features/accounts/screens/login.screen";
import { RegisterScreen } from "../../features/accounts/screens/register.screen";

const AuthStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Onboard" component={AccountScreen} />
      <AuthStack.Screen name="LogIn" component={LogInScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
