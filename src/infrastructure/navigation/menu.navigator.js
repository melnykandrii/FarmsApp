import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import { AboutScreen } from "../../features/settings/screens/about.screen";
import { theme } from "../theme";
import { MenuScreen } from "../../features/settings/screens/menu.screen";

const SetStack = createStackNavigator();

export const MenuNavigator = ({ route, navigation }) => {
  return (
    <SetStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SetStack.Screen
        options={{ header: () => null }}
        name="Menu"
        component={MenuScreen}
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
      <SetStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerTintColor: theme.colors.brand.spring,
        }}
      />
    </SetStack.Navigator>
  );
};
