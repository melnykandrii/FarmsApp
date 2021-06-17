import React, { useContext, useCallback, useState } from "react";
import { RefreshControl, TouchableOpacity } from "react-native";
import { FarmInfoCard } from "../../farms/components/farm-info-card.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { theme } from "../../../infrastructure/theme";
import { FavList } from "../components/fav-list.style.component";
import { Refresher } from "../../../components/refresher/refresher.component";

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
    <FavList
      data={favourites}
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
            <FarmInfoCard farm={item} />
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
    <Refresher text="No favourites yet" />
  );
};
