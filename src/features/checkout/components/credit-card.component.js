import React from "react";
import { LogBox } from "react-native";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCard = ({ name, onSuccess, onError }) => {
  LogBox.ignoreLogs([
    "Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.",
  ]);
  // method handle the input data
  const onChange = async (cartInfo) => {
    const { values, status } = cartInfo;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");

    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };
    if (!isIncomplete) {
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (e) {
        onError();
      }
    }
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
