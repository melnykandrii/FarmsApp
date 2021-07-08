import React, { useState, useContext, useEffect } from "react";
import {
  TopButtonsContainer,
  TopContainer,
  BottomContainer,
  BodyText,
  HeaderText,
  SearchContainer,
  ButtonContainer,
} from "../components/location.styles";
import {
  ScreenButton,
  BodyButton,
} from "../../../components/buttons/screen-button.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { MenuBackground, MenuCover } from "../components/menu.styles";
import { SearchView } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { theme } from "../../../infrastructure/theme";
import { Searchbar } from "react-native-paper";
import { SelectButton } from "../../../components/buttons/buttons.component";

export const SelectLocationScreen = ({ navigation }) => {
  const { search } = useContext(LocationContext);
  const keyword = "";
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  console.log(searchKeyword);

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
          <SearchView>
            <Searchbar
              theme={{
                colors: { primary: theme.colors.brand.spring },
              }}
              placeholder="Select your location"
              value={null}
              autoCompleteType="street-address"
              dataDetectorTypes="address"
              returnKeyType="done"
              onChangeText={(text) => {
                setSearchKeyword(text);
              }}
            />
          </SearchView>
        </Spacer>
      </SearchContainer>
      <ButtonContainer>
        <Spacer size="xxl" position="top">
          <SelectButton
            title="Select"
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
