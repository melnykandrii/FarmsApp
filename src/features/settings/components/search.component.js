import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "../../../infrastructure/theme";
import { LocationContext } from "../../../services/location/location.context";

export const SearchView = styled.View`
  padding: ${(props) => props.theme.space[5]};
  width: 96%;
`;

/*const SearchView = styled.View`
  position: absolute;
  z-index: 999;
  top: ${(props) => props.theme.space[2]};
  width: 98%;
  left: ${(props) => props.theme.space[2]};
`;*/

export const Search = ({ navigation }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
    console.log(keyword);
  }, [keyword]);

  return (
    <SearchView>
      <Searchbar
        theme={{
          colors: { primary: theme.colors.brand.spring },
        }}
        placeholder="Select your location"
        value={null}
        onSubmitEditing={() => {
          search(searchKeyword);
          navigation.navigate("Main");
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};
