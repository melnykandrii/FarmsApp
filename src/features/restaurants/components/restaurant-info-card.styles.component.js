import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const SectionIcons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RatingIcon = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const EndIconsSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CloseLabel = styled.Text`
  font-size: ${(props) => props.theme.sizes[1]};
  font-family: ${(props) => props.theme.fonts.monospace};
  color: ${(props) => props.theme.colors.ui.error};
  margin-right: 5px;
`;

export const AmenityIcon = styled(MaterialIcons)`
  font-size: ${(props) => props.theme.sizes[0]};
  color: ${(props) => props.theme.colors.ui.primary};
  margin-left: 50px;
`;

export const AmenityImage = styled.Image`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
  margin-left: 5px;
`;

export const SvgIcon = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;
