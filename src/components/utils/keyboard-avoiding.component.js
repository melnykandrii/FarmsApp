import React from "react";
import { Platform, KeyboardAvoidingView } from "react-native";

export const KeyboardView = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
