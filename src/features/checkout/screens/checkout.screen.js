import React, { useContext, useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { BodyButton } from "../../../components/buttons/screen-button.component";
import { CartRefresher } from "../../../components/refresher/refresher.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CartContext } from "../../../services/cart/cart.context";
import { FarmInfoCard } from "../../farms/components/farm-info-card.component";
import { CreditCard } from "../components/credit-card.component";
import { Text } from "../../../components/typography/text.component";
import { List, Divider } from "react-native-paper";
import {
  DefaultInput,
  PaymentProcessing,
} from "../components/check-out.styles";
import { KeyboardView } from "../../../components/utils/keyboard-avoiding.component";
import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckOutScreen = ({ navigation }) => {
  const { cart, farm, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card!",
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess");
      })
      .catch((err) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", {
          error: err,
        });
      });
  };

  return cart.length ? (
    <KeyboardView>
      <ScrollView>
        {isLoading && <PaymentProcessing />}
        <View>
          <FarmInfoCard farm={farm} />
        </View>

        <View>
          <Spacer size="large" position="left">
            <Spacer size="medium" position="top">
              <Text>Your Order:</Text>
              <List.Section>
                {cart.map(({ item, price }, i) => {
                  return (
                    <List.Item
                      key={`item-${i}`}
                      title={`${item} - ${price / 100}`}
                    />
                  );
                })}
              </List.Section>
              <Text>Total: {sum / 100}</Text>
            </Spacer>
          </Spacer>
        </View>

        <View>
          <Spacer size="large" position="top" />
          <Divider />
          <DefaultInput
            label="Name"
            value={name}
            onChangeText={(n) => setName(n)}
          />
        </View>

        <View>
          {name.length > 0 && (
            <CreditCard
              name={name}
              onSuccess={setCard}
              onError={() =>
                navigation.navigate("CheckoutError", {
                  error: "Something went wrong processing your credit card!",
                })
              }
            />
          )}
        </View>
        <View>
          <Spacer size="large" position="top">
            <BodyButton
              disabled={isLoading}
              title="Pay"
              mode="contained"
              icon="credit-card"
              onPress={onPay}
            />
          </Spacer>
          <Spacer size="large" position="top">
            <Spacer size="large" position="bottom">
              <BodyButton
                disabled={isLoading}
                color="white"
                title="Clear Cart"
                mode="contained"
                icon="cart-off"
                onPress={clearCart}
              />
            </Spacer>
          </Spacer>
        </View>
      </ScrollView>
    </KeyboardView>
  ) : (
    <CartRefresher text="Your Cart is Empty!" icon="cart-off" />
  );
};
