import * as React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { FarmsScreen } from "../../features/farms/screens/farms.screen";
import { FarmDetailsScreen } from "../../features/farms/screens/farm-details.screen";

const FarmStack = createStackNavigator();

export const FarmsNavigator = () => {
  return (
    <FarmStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <FarmStack.Screen name="Farms" component={FarmsScreen} />
      <FarmStack.Screen name="Farm Details" component={FarmDetailsScreen} />
    </FarmStack.Navigator>
  );
};
