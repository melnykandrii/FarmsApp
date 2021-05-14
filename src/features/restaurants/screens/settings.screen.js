import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";

export const SettingsScreen = () => (
  <SafeArea>
    <View style={styles.container}>
      <Text>Settings Screen!</Text>
    </View>
  </SafeArea>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
