import React from "react";
import { View, Text, Button } from "react-native";

export const LogInScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>LogIn screen</Text>
      <Button
        title="to Register screen"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};
