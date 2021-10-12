import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { theme } from "../../../infrastructure/theme";
import { LocationContext } from "../../../services/location/location.context";
import { SearchView } from "../styles/search.styles";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchView>
      <Searchbar
        theme={{
          colors: { primary: theme.colors.brand.spring },
        }}
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};
