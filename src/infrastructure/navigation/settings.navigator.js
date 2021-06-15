import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import { theme } from "../theme";

const SetStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SetStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}
    >
      <SetStack.Screen
        options={{ header: () => null }}
        name="Settings"
        component={SettingsScreen}
      />
      <SetStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerTintColor: theme.colors.brand.spring,
        }}
      />
      <SetStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerTintColor: theme.colors.brand.spring,
        }}
      />
    </SetStack.Navigator>
  );
};
