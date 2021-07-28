import React from "react";
import { CreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCard = ({ name, onSuccess, onError }) => {
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
  return <CreditCardInput onChange={onChange} />;
};
