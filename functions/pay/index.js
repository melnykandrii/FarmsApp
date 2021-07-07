module.exports.payRequest = (request, response, stripeClient) => {
  const body = JSON.parse(request.body);
  const { token, amount } = body;
  console.log(body.token, body.amount, body.name);
  stripeClient.paymentIntents
    .create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      response.json(paymentIntent);
    })
    .catch((e) => {
      console.log(e);
      response.status(400);
      response.send(e);
    });
};
