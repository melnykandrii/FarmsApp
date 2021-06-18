import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51J2e5xDdstQY4q5oEj99kEUVRbImfFhZPlCRhrDaX36d7f3Tv17Pdu7npzwjgbmzOOc52fwMofVEkfLUCjZtn4Bl006Rq5q1XM"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
