import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { theme } from "../../infrastructure/theme";

export const CloseIcon = (props) => {
  return (
    <TouchableOpacity onPress={props.onClose}>
      <Icon
        name="times"
        type="font-awesome-5"
        color={theme.colors.brand.spring}
      />
    </TouchableOpacity>
  );
};
