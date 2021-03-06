import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FarmCompactInfo } from "../../features/farms/components/farm-compact-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View.attrs({
  accessibilityRole: "scrollbar",
  testID: "FavouritesBar",
})`
  padding: ${(props) => props.theme.sizepx[0]};
  border-radius: 15px;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.ui.disabled};
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 55px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((farm) => {
          const key = farm.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("Farm Details", { farm })}
              >
                <FarmCompactInfo farm={farm} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
