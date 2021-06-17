import React from "react";
import { EmptyScreen } from "../../../components/empty-screens/empty.screen.component";
import { EmptyScrollView } from "../../../components/empty-screens/empty.screen.styles";
import { Refresher } from "../../../components/refresher/refresher.component";

export const CheckOutScreen = () => {
  return (
    <EmptyScrollView refreshControl={<Refresher />}>
      <EmptyScreen text="Your cart is empty" />
    </EmptyScrollView>
  );
};
