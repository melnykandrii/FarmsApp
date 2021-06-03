import React from "react";
import styled from "styled-components/native";
import { theme } from "../../infrastructure/theme/index";

const LoadingView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Activity = styled.ActivityIndicator.attrs({
  color: theme.colors.brand.spring,
})`
  margin-left: -35px;
`;
/*const RestautantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;*/
const LoadingText = styled.Text`
  color: ${(props) => props.theme.colors.brand.spring};
  margin-left: -25px;
`;
export const LoadingState = () => {
  return (
    <LoadingView>
      <Activity animating={true} />
      <LoadingText>Loading...</LoadingText>
    </LoadingView>
  );
};
