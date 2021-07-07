import React from "react";
import { Text, View } from "react-native";

export const NextScreen = ({ navigation, props, route }) => {
  const strawbery = route.params.strawberySet;
  const city = route.params.citySet;

  return (
    <View>
      <Text>Strawbery filter set to {JSON.stringify(strawbery)}</Text>
      <Text>Your city is {JSON.stringify(city)}</Text>
      <Text>Also Your city is {Object.values(city)}</Text>
    </View>
  );
};
