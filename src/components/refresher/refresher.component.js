import React, { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { theme } from "../../infrastructure/theme";
import { EmptyScrollView } from "../empty-screens/empty.screen.styles";
import { EmptyScreen } from "../empty-screens/empty.screen.component";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
