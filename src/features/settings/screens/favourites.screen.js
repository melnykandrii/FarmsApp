import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components/native";
import { RefreshControl, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { FarmInfoCard } from "../../farms/components/farm-info-card.component";
import { FarmList } from "../../farms/components/farm-list.styles";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Text } from "../../../components/typography/text.component";
import { theme } from "../../../infrastructure/theme";
import { EmptyScrollView } from "../../../components/empty-screens/empty-screen.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

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
    <FarmList
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
    <EmptyScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FavouritesEmpty>
        <Icon
          name="exclamation-triangle"
          type="font-awesome-5"
          color={theme.colors.brand.spring}
        />
        <Spacer size="large">
          <Text centr>No favourites yet</Text>
        </Spacer>
      </FavouritesEmpty>
    </EmptyScrollView>
  );
};
