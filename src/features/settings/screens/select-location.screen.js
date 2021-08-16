import React, { useState, useContext, useEffect } from "react";
import {
  TopButtonsContainer,
  TopContainer,
  BottomContainer,
  BodyText,
  HeaderText,
  SearchContainer,
  ButtonContainer,
} from "../styles/location.styles";
import { ScreenButton } from "../../../components/buttons/screen-button.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { MenuBackground, MenuCover } from "../styles/menu.styles";
import { LocationContext } from "../../../services/location/location.context";
import { SelectButton } from "../../../components/buttons/buttons.component";
import { Search } from "../components/search.component";

export const SelectLocationScreen = ({ navigation }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <MenuBackground>
      <MenuCover />
      <TopContainer>
        <TopButtonsContainer>
          <ScreenButton
            title="Skip"
            onNavigate={() => navigation.navigate("Main")}
          />
        </TopButtonsContainer>
      </TopContainer>
      <SearchContainer>
        <HeaderText variant="header">Select your location</HeaderText>
        <Spacer size="xxl">
          <Search setSearchKeyword={setSearchKeyword} />
        </Spacer>
      </SearchContainer>
      <ButtonContainer>
        <Spacer size="xxl" position="top">
          <SelectButton
            title="Confirm"
            onPress={() => {
              search(searchKeyword);
              navigation.navigate("Main");
            }}
            disabled={!searchKeyword}
            type="clear"
          />
        </Spacer>
      </ButtonContainer>

      <BottomContainer>
        <Spacer size="large">
          <BodyText variant="body" style={{}}>
            Please type in your location in the location field and press on the
            Confirm button below.
          </BodyText>
        </Spacer>
      </BottomContainer>
    </MenuBackground>
  );
};
