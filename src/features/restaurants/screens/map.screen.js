import React from "react";
import { SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

const MapSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const MapScreen = () => (
  <MapSafeAreaView>
    <View style={styles.container}>
      <Text>Map Screen!</Text>
    </View>
  </MapSafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
