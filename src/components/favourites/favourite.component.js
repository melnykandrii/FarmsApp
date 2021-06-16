import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { theme } from "../../infrastructure/theme";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: ${(props) => props.theme.sizepx[1]};
  right: ${(props) => props.theme.sizepx[1]};
  z-index: 9;
`;

export const Favourite = ({ farm }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  //not optimazed, it renders for each farm, performance issue here;
  const isFavourite = favourites.find((r) => r.placeId === farm.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addToFavourites(farm) : removeFromFavourites(farm)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={26}
        color={isFavourite ? theme.colors.ui.favorite : theme.colors.bg.primary}
      />
    </FavouriteButton>
  );
};
