import { Platform, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { theme } from "../../../infrastructure/theme";

export const LocationScreenView = styled.View`
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
  justify-content: flex-end;
  padding-right: ${(props) => props.theme.sizepx[3]};
  padding-left: ${(props) => props.theme.sizepx[3]};
`;

export const ImageContainer = styled.View`
  flex: 7;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.sizepx[1]};
`;

export const ActivityContainer = styled.View`
  flex: 2;
  padding: ${(props) => props.theme.sizepx[1]};
  justify-content: space-between;
  align-items: center;
`;

export const Activity = styled(ActivityIndicator).attrs({
  color: theme.colors.brand.spring,
  size: "large",
})``;

export const SearchContainer = styled.View`
  flex: 3;
  padding: ${(props) => props.theme.sizepx[0]};
`;

export const ButtonContainer = styled.View`
  flex: 3;
  justify-content: flex-start;
  align-items: center;
  padding: ${(props) => props.theme.sizepx[0]};
`;

export const BottomContainer = styled.View`
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.sizepx[2]};
`;

export const MapImage = styled.Image.attrs({
  source: require("../../../../assets/location_round.png"),
  resizeMode: "cover",
})`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.brand.spring};
  border-radius: ${(props) => props.theme.sizepx[10]};
  width: ${(props) => props.theme.sizepx[14]};
  height: ${(props) => props.theme.sizepx[14]};
  justify-content: center;
`;

export const HeaderText = styled(Text)`
  text-align: center;
`;

export const BodyText = styled(Text)`
  text-align: center;
`;
