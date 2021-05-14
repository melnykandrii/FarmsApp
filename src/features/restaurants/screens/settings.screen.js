import React from "react";
import { SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

const SettingsSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SettingsScreen = () => (
  <SettingsSafeAreaView>
    <View style={styles.container}>
      <Text>Settings Screen!</Text>
    </View>
  </SettingsSafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
