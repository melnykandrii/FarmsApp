import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";

export const CameraProfile = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

export const CameraButton = styled.TouchableOpacity`
  flex: 0.2;
  align-self: flex-end;
  align-items: center;
`;

export const FlashIcon = styled(Icon).attrs({
  name: "bolt",
  type: "font-awesome-5",
})``;

export const SnapIcon = styled(Icon).attrs({
  name: "circle",
  type: "font-awesome-5",
  color: "white",
  size: 60,
  solid: false,
})``;

export const CameraTypeIcon = styled(Icon).attrs({
  name: "sync",
  type: "font-awesome-5",
  color: "white",
})``;
