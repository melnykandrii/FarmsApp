import React, { useContext, useState, useCallback } from "react";
import { RefreshControl, TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestautantList } from "../components/restaurant-list.styles";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { LoadingState } from "../../../components/utils/loading-state.component";
import { theme } from "../../../infrastructure/theme/index";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(10).then(() => setRefreshing(false));
  }, []);

  if (refreshing) {
    return (
      <SafeArea>
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggled={() => setIsToggled(!isToggled)}
        />
        <LoadingState />
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      {isLoading && <LoadingState />}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
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
            tintColor={theme.colors.brand.spring}
            colors={[theme.colors.brand.spring]}
          />
        }
      />
    </SafeArea>
  );
};
