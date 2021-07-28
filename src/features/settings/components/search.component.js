import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { theme } from "../../../infrastructure/theme";
import { LocationContext } from "../../../services/location/location.context";
import { SearchView } from "../styles/search.styles";

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
