import React, { useContext, useState, useCallback } from "react";
import { RefreshControl, TouchableOpacity } from "react-native";

import { FarmInfoCard } from "../components/farm-info-card.component";
import { FarmList } from "../components/farm-list.styles";
import { LoadingState } from "../../../components/utils/loading-state.component";
import { theme } from "../../../infrastructure/theme/index";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { FarmsContext } from "../../../services/farms/farms.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../components/animations/fade.animation";
import { LocationContext } from "../../../services/location/location.context";
import { ErrorScreen } from "../../../components/error-screen/error.screen.component";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const FarmsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { isLoading, farms, error } = useContext(FarmsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const hasError = !!error || !!locationError;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(10).then(() => setRefreshing(false));
  }, []);

  if (refreshing) {
    return (
      <>
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggled={() => setIsToggled(!isToggled)}
        />
        <LoadingState />
      </>
    );
  }

  return (
    <>
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
      {hasError && (
        <ErrorScreen text="Something went wrong retriving the data" />
      )}
      {!hasError && (
        <FarmList
          data={farms}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Farm Details", {
                    farm: item,
                    farmname: item.name,
                    farmaddress: item.address,
                  })
                }
              >
                <FadeInView>
                  <FarmInfoCard farm={item} />
                </FadeInView>
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
      )}
    </>
  );
};
