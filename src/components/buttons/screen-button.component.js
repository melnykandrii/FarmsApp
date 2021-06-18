import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../typography/text.component";

export const ScreenButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onNavigate}>
      <Text variant="button">{props.title}</Text>
    </TouchableOpacity>
  );
};
