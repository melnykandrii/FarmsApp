import React from "react";
import { View, Text, Button } from "react-native";
import { AccountBackground } from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <Text>Register screen</Text>
      <Button
        title="to Accont screen"
        onPress={() => navigation.navigate("Main")}
      />
    </AccountBackground>
  );
};
