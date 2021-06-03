import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../../infrastructure/theme";
import React from "react";

const DefaultInputCont = (props) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboard}
        autoCapitalize={props.autoCap}
        autoCorrect={props.autoCor}
        returnKeyType={props.returnKey}
        onSubmitEditing={props.submit}
        ref={props.inputRef}
        blurOnSubmit={props.blur}
        placeholder={props.placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor:
      Platform.OS === "android"
        ? theme.colors.ui.success
        : theme.colors.ui.primary,
    borderBottomWidth: 1,
  },
});

export default DefaultInputCont;
