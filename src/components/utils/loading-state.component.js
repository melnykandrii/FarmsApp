import React from "react";
import styled from "styled-components/native";
import { theme } from "../../infrastructure/theme/index";

const LoadingView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Activity = styled.ActivityIndicator.attrs({
  color: theme.colors.ui.error,
})``;
/*const RestautantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;*/
const LoadingText = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
`;
export const LoadingState = () => {
  return (
    <LoadingView>
      <Activity animating={true} />
      <LoadingText>Loading...</LoadingText>
    </LoadingView>
  );
};
