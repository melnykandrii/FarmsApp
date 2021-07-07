import React from "react";
import { CartRefresher } from "../../../components/refresher/refresher.component";
import { theme } from "../../../infrastructure/theme";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return <CartRefresher text={error} icon="close" bg={theme.colors.ui.error} />;
};
