import React from "react";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";

export const CreditCard = () => {
  // method handle the input data
  const onChange = async (cartInfo) => {
    const { values, status } = cartInfo;
    const isIncomplete = Object.values(status).includes("incomplete");
    //console.log(cartInfo);
    const card = {
      number: "4242424242424242",
      exp_month: "05",
      exp_year: "22",
      cvc: "333",
      name: "Me",
    };
    const info = await card;
    console.log(info);
  };
  return <CreditCardInput onChange={onChange} />;
};
