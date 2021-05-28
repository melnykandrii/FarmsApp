import React, { useContext } from "react";
import {
  FlatList,
  RefreshControl,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LoadingState } from "../../../components/utils/loading-state.component";
import { theme } from "../../../infrastructure/theme/index";
import { Search } from "../components/search.component";

const RestautantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(10).then(() => setRefreshing(false));
  }, []);

  if (refreshing) {
    return (
      <SafeArea>
        <Search />
        <LoadingState />
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      {isLoading && <LoadingState />}
      <Search />
      <RestautantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Restaurant Details", {
                  restaurant: item,
                  restname: item.name,
                  restaddress: item.address,
                })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.ui.error}
            colors={[theme.colors.ui.error]}
          />
        }
      />
    </SafeArea>
  );
};
