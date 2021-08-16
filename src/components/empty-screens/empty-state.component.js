import React, { useCallback, useState } from "react";
import { RefreshControl } from "react-native";
import { theme } from "../../infrastructure/theme";
import { EmptyScrollView } from "./empty.screen.styles";
import { EmptyStateScreen } from "./empty.screen.component";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const EmptyState = (props) => {
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
      <EmptyStateScreen {...props} />
    </EmptyScrollView>
  );
};
