import * as React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { LocationScreen } from "../../features/settings/screens/location.screen";
import { SelectCityScreen } from "../../features/settings/screens/select-city.screen";
import { NextScreen } from "../../features/settings/screens/next.screen";
import { SelectLocationScreen } from "../../features/settings/screens/select-location.screen";

const LocationStack = createStackNavigator();

export const LocationNavigator = () => {
  return (
    <LocationStack.Navigator
      headerMode="none"
      screenOptions={({ navigation }) => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}
    >
      <LocationStack.Screen name="LocationScreen" component={LocationScreen} />
      <LocationStack.Screen
        name="SelectCityScreen"
        component={SelectCityScreen}
      />
      <LocationStack.Screen
        name="SelectLocationScreen"
        component={SelectLocationScreen}
      />
      <LocationStack.Screen name="NextScreen" component={NextScreen} />
    </LocationStack.Navigator>
  );
};
