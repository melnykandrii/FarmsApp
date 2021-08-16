import React from "react";
import { Searchbar } from "react-native-paper";
import { theme } from "../../../infrastructure/theme";
import { SearchView } from "../styles/search.styles";

export const Search = ({ setSearchKeyword }) => {
  return (
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
  );
};
