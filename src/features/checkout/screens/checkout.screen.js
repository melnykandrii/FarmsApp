import React from "react";
import { Platform } from "react-native";
import { Refresher } from "../../../components/refresher/refresher.component";
import { CreditCard } from "../components/credit-card.component";

export const CheckOutScreen = () => {
  return Platform.OS === "android" ? (
    <Refresher text="Your Cart is Empty" />
  ) : (
    <CreditCard />
  );
};
