import React, { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { theme } from "../../infrastructure/theme";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const Refresher = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(10).then(() => setRefreshing(false));
  }, []);

  return (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      tintColor={theme.colors.brand.spring}
      colors={[theme.colors.brand.spring]}
    />
  );
};
