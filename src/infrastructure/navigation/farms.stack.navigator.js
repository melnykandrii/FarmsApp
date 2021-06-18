import * as React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { FarmsScreen } from "../../features/farms/screens/farms.screen";
import { FarmDetailsScreen } from "../../features/farms/screens/farm-details.screen";
import { MainLogo } from "../../features/farms/components/farm-logo.component";
import { theme } from "../../infrastructure/theme";
import HeaderButton from "../../components/utils/header.button.component";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FarmStack = createStackNavigator();

export const FarmsNavigator = () => {
  return (
    <FarmStack.Navigator
      screenOptions={({ navigation }) => ({
        title: (
          <MainLogo
            onHelp={() => {
              navigation.navigate("Location");
            }}
          />
        ),
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerTintColor: theme.colors.brand.spring,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}
    >
      <FarmStack.Screen
        name="Farms"
        component={FarmsScreen}
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
      <FarmStack.Screen name="Farm Details" component={FarmDetailsScreen} />
    </FarmStack.Navigator>
  );
};
