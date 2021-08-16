import { StyleSheet, Switch, View } from "react-native";
import { Text } from "../typography/text.component";
import { theme } from "../../infrastructure/theme";
import React from "react";
import styled from "styled-components";

const FilterStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  width: 68%;
  margin-vertical: 10px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const FilterSwitch = (props) => {
  return (
    <FilterStyled>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{
          false: theme.colors.ui.secondary,
          true: theme.colors.ui.secondary,
        }}
        thumbColor={
          props.state ? theme.colors.bg.secondary : theme.colors.bg.secondary
        }
        ios_backgroundColor={theme.colors.ui.primary}
        onValueChange={props.onChange}
        value={props.state}
      />
    </FilterStyled>
  );
};
