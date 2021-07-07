import React from "react";
import styled from "styled-components";
import { TextInput, ActivityIndicator } from "react-native-paper";
import { theme } from "../../../infrastructure/theme";

export const NameInput = styled(TextInput)`
  margin: 20px;
`;

export const DefaultInput = (props) => {
  return (
    <NameInput
      {...props}
      theme={{
        colors: {
          primary: theme.colors.brand.spring,
          underlineColor: theme.colors.brand.transparent,
        },
      }}
      label={props.label}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 128,
  animating: true,
  color: theme.colors.brand.spring,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;
