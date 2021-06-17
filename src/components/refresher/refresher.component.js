import React, { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { theme } from "../../infrastructure/theme";
import { EmptyScrollView } from "../empty-screens/empty.screen.styles";
import { EmptyScreen } from "../empty-screens/empty.screen.component";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const Refresher = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(10).then(() => setRefreshing(false));
  }, []);

  return (
    <EmptyScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={theme.colors.brand.spring}
          colors={[theme.colors.brand.spring]}
        />
      }
    >
      <EmptyScreen {...props} />
    </EmptyScrollView>
  );
};
