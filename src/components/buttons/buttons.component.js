import React from "react";
import styled from "styled-components";
import { Button } from "react-native-elements";
import { theme } from "../../infrastructure/theme/index";

const StyleButton = styled(Button).attrs({
  disabledTitleStyle: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.title,
  },
  titleStyle: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.title,
    color: theme.colors.brand.spring,
  },
})`
  padding: ${(props) => props.theme.space[2]};
  align-self: center;
`;

export const SelectButton = (props) => {
  return (
    <StyleButton
      {...props}
      color={props.color || theme.colors.brand.spring}
      onPress={props.onPress}
      title={props.title}
    />
  );
};
