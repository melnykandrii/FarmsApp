import * as React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { LocationScreen } from "../../features/settings/screens/location.screen";
import { SelectLocationScreen } from "../../features/settings/screens/select-location.screen";

const LocationStack = createStackNavigator();

export const LocationNavigator = () => {
  return (
    <LocationStack.Navigator
      initialRouteName="LocationScreen"
      headerMode="none"
      screenOptions={({ navigation }) => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}
    >
      <LocationStack.Screen name="LocationScreen" component={LocationScreen} />
      <LocationStack.Screen
        name="SelectLocationScreen"
        component={SelectLocationScreen}
      />
    </LocationStack.Navigator>
  );
};
