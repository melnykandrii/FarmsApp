import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "../../infrastructure/theme";

const DefaultHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={theme.colors.brand.spring}
    />
  );
};

export default DefaultHeaderButton;
