import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../typography/text.component";
import styled from "styled-components";
import { Button } from "react-native-paper";
import { theme } from "../../infrastructure/theme";

const StyledButton = styled(Button)`
  padding: ${(props) => props.theme.space[2]};
  width: 60%;
  align-self: center;
`;
export const BodyButton = (props) => {
  return (
    <StyledButton
      {...props}
      color={props.color || theme.colors.brand.spring}
      onPress={props.onPress}
    >
      {props.title}
    </StyledButton>
  );
};

export const ScreenButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onNavigate}>
      <Text variant="button">{props.title}</Text>
    </TouchableOpacity>
  );
};
