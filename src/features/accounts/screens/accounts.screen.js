import React from "react";
import { View, Text, Button } from "react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Account Screen</Text>
      <Button
        title="to Login screen"
        onPress={() => navigation.navigate("LogIn")}
      />
    </View>
  );
};
