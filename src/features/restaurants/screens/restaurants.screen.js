import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LoadingState } from "../../../components/utils/loading-state.component";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestautantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  if (isLoading && !error) {
    return <LoadingState />;
  }
  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>

      <RestautantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
