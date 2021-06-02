import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";

import { Button } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: theme.colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const HeaderLabel = styled.Text`
  color: ${(props) => props.theme.colors.brand.secondary};
  font-size: ${(props) => props.theme.sizes[3]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
