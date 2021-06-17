import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { FarmInfoCard } from "../../farms/components/farm-info-card.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { EmptyScrollView } from "../../../components/empty-screens/empty.screen.styles";
import { FavList } from "../components/fav-list.style.component";
import { EmptyScreen } from "../../../components/empty-screens/empty.screen.component";
import { Refresher } from "../../../components/refresher/refresher.component";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

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
      refreshControl={<Refresher />}
    />
  ) : (
    <EmptyScrollView refreshControl={<Refresher />}>
      <EmptyScreen text="No favourites yet" />
    </EmptyScrollView>
  );
};
