import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components/native";
import { RefreshControl, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestautantList } from "../../restaurants/components/restaurant-list.styles";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Text } from "../../../components/typography/text.component";
import { theme } from "../../../infrastructure/theme";
import { EmptyScrollView } from "../../../components/empty-screens/empty-screen.styles";

const FavouritesEmpty = styled.View`
  align-items: center;
  justify-content: center;
`;

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(10).then(() => setRefreshing(false));
  }, []);

  return favourites.length ? (
    <RestautantList
      data={favourites}
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
          tintColor={theme.colors.brand.spring}
          colors={[theme.colors.brand.spring]}
        />
      }
    />
  ) : (
    <EmptyScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FavouritesEmpty>
        <Text centr>No favourites yet</Text>
      </FavouritesEmpty>
    </EmptyScrollView>
  );
};
