import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51J2e5xDdstQY4q5oEj99kEUVRbImfFhZPlCRhrDaX36d7f3Tv17Pdu7npzwjgbmzOOc52fwMofVEkfLUCjZtn4Bl006Rq5q1XM"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment!");
    }
    return res.json();
  });
};
