import React, { useState } from "react";
import { TextInput } from "react-native";
import { Text, View, Button } from "react-native";
import { CheckBox, Input } from "react-native-elements";

export const SelectCityScreen = ({ navigation, props }) => {
  const [count, setCount] = useState(0);
  const [strawbery, setStrawbery] = useState(false);
  const [apple, setApple] = useState(false);
  const [bluberry, setBluberry] = useState(false);
  const [rosberry, setRosberry] = useState(false);
  const [city, setCity] = useState(null);
  console.log(city);
  return (
    <View>
      <Text>You clicked {count} times!</Text>
      <Button
        title="Click me"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <CheckBox
        title="Strawberry"
        checked={strawbery}
        onPress={() => setStrawbery(!strawbery)}
      />
      <Input
        label="Type in your city"
        placeholder="New York"
        value={city}
        onChangeText={(u) => setCity(u)}
      />
      <Button
        title="Select"
        onPress={() => {
          navigation.navigate("NextScreen", {
            strawberySet: strawbery,
            citySet: city,
          });
        }}
      />
    </View>
  );
};
