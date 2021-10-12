import React from "react";
import { EmptyState } from "../../../components/empty-screens/empty-state.component";
import { theme } from "../../../infrastructure/theme";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return <EmptyState label={error} icon="close" bg={theme.colors.ui.error} />;
};
