import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";

import { Button, TextInput } from "react-native-paper";

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
  padding: ${(props) => props.theme.space[5]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: theme.colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const TitleContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: flex-end;
`;

export const BoxContainer = styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;
`;

export const BottomContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.sizes[3]};
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.brand.secondary};
`;

export const HeaderLabel = styled.Text`
  color: ${(props) => props.theme.colors.brand.secondary};
  font-size: ${(props) => props.theme.sizes[2]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const HeaderText = styled.Text`
  color: ${(props) => props.theme.colors.brand.secondary};
  font-size: ${(props) => props.theme.sizes[1]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;
