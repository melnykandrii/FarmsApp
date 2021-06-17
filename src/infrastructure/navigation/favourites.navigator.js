import * as React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { MainLogo } from "../../features/farms/components/farm-logo.component";
import { theme } from "../../infrastructure/theme";
import HeaderButton from "../../components/utils/header.button.component";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const FavStack = createStackNavigator();

export const FavNavigator = () => {
  return (
    <FavStack.Navigator
      screenOptions={({ navigation }) => ({
        title: (
          <MainLogo
            onHelp={() => {
              navigation.navigate("Menu", {
                screen: "About",
                initial: false,
              });
            }}
          />
        ),
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerTintColor: theme.colors.brand.spring,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}
    >
      <FavStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="grid"
                onPress={() => {
                  //navigation.toggleDrawer();
                  //console.log('Search tapped')
                  navigation.navigate("Menu");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </FavStack.Navigator>
  );
};
