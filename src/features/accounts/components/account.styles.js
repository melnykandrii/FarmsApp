import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";

import { Button, TextInput } from "react-native-paper";

export const LogoImage = styled.Image.attrs({
  source: require("../../../../assets/adaptive_icon.png"),
  resizeMode: "cover",
})`
  border-radius: 45px;
  width: ${(props) => props.theme.sizepx[5]};
  height: ${(props) => props.theme.sizepx[5]};
`;

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
  background-color: rgba(255, 255, 255, 0.5);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[5]};
  margin-top: ${(props) => props.theme.space[2]};
  align-items: center;
`;

export const AuthButton = styled(Button).attrs({
  color: theme.colors.brand.spring,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 200px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  align-self: center;
  max-width: 300px;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const TitleContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const AnimationContainer = styled.View`
  flex: 2;
`;

export const BoxContainer = styled.View`
  flex: 5;
  align-items: center;
  justify-content: flex-start;
`;

export const BottomContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.sizepx[3]};
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.brand.spring};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`;

export const HeaderLabel = styled.Text`
  color: ${(props) => props.theme.colors.brand.spring};
  font-size: ${(props) => props.theme.sizepx[2]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const HeaderText = styled.Text`
  color: ${(props) => props.theme.colors.brand.secondary};
  font-size: ${(props) => props.theme.sizepx[1]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
