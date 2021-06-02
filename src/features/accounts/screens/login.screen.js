import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AccountBackground } from "../components/account.styles";

export const LogInScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <View style={styles.buttonCon}>
        <Text style={styles.text}>LogIn screen</Text>
        <Button
          title="to Register screen"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </AccountBackground>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "red",
    padding: 10,
    margin: 40,
  },
  buttonCon: {
    backgroundColor: "red",
    justifyContent: "center",
  },
});
