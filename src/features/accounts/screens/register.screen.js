import React from "react";
import { View, Text, Button } from "react-native";

export const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register screen</Text>
      <Button
        title="to Accont screen"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
};
