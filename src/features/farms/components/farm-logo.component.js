import styled from "styled-components";
import React from "react";
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const Logo = styled.Image.attrs({
  source: require("../../../../assets/adaptive_icon.png"),
  resizeMode: "cover",
})`
  border-radius: 45px;
  width: ${(props) => props.theme.sizepx[13]};
  height: ${(props) => props.theme.sizepx[13]};
  justify-content: center;
`;

const LogoShadow = styled.View`
  },`;

export const MainLogo = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onHelp} useForeground>
      <LogoShadow style={styles.imageView}>
        <Logo />
      </LogoShadow>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  imageView: {
    height: 46,
    width: 46,
    borderRadius: 45,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 45,
    justifyContent: "center",
  },
});
