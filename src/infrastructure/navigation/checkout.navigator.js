import * as React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { MainLogo } from "../../features/farms/components/farm-logo.component";
import { theme } from "../../infrastructure/theme";
import HeaderButton from "../../components/utils/header.button.component";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CheckOutScreen } from "../../features/checkout/screens/checkout.screen";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen";

const CartStack = createStackNavigator();

export const CheckoutNavigator = () => {
  return (
    <CartStack.Navigator
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
      <CartStack.Screen
        name="Cart"
        component={CheckOutScreen}
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
      <CartStack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccessScreen}
        options={{ headerShown: false }}
      />
      <CartStack.Screen
        name="CheckoutError"
        component={CheckoutErrorScreen}
        options={{ headerShown: false }}
      />
    </CartStack.Navigator>
  );
};
