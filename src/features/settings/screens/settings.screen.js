import React, { useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = () => {
  const { onLogOut } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <View style={styles.container}>
        <Text>Settings Screen!</Text>
        <Button title="Log Out" onPress={() => onLogOut()} />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
