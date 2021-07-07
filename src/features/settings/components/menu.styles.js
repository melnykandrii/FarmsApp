import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "../../../infrastructure/theme";
import { Platform } from "react-native";

export const MenuBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
`;

export const MenuCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const MenuScreenView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const TopContainer = styled.View`
  flex: 1;
  padding-top: ${(props) =>
    Platform.OS === "android" ? props.theme.sizepx[13] : props.theme.sizepx[3]};
`;

export const TopButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-right: ${(props) => props.theme.sizepx[3]};
  padding-left: ${(props) => props.theme.sizepx[3]};
`;

export const MenuContainer = styled.View`
  flex: 17;
`;

export const VersionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Item = styled(List.Item)`
  padding: ${(props) => props.theme.space[4]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const AvatarIcon = styled(Avatar.Icon).attrs({
  backgroundColor: theme.colors.brand.spring,
  size: 180,
  icon: "human",
})``;

export const AvatarPhoto = styled(Avatar.Image).attrs({
  size: 180,
  backgroundColor: theme.colors.brand.spring,
})``;

export const ListIcon = styled(List.Icon).attrs({
  color: theme.colors.brand.spring,
})``;
