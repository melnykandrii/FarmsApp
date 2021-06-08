import React, { useState, useContext, useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  MainContainer,
  BoxContainer,
  TitleContainer,
  BottomContainer,
  LogoImage,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onSignUp, isLoading, error } = useContext(AuthenticationContext);

  const refPass = useRef();
  const refRepeatPass = useRef();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

  return (
    <AccountBackground>
      <AccountCover />
      <MainContainer>
        <TitleContainer>
          <LogoImage />
        </TitleContainer>
        <BoxContainer>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={keyboardVerticalOffset}
          >
            <AccountContainer>
              <AuthInput
                theme={{
                  colors: { primary: "green", underlineColor: "transparent" },
                }}
                label="E-mail"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
                blurOnSubmit={false}
                onSubmitEditing={() => refPass.current.focus()}
                onChangeText={(u) => setEmail(u)}
              />
              <Spacer size="large">
                <AuthInput
                  theme={{
                    colors: { primary: "green", underlineColor: "transparent" },
                  }}
                  label="Password"
                  value={password}
                  textContentType="password"
                  returnKeyType="next"
                  secureTextEntry
                  autoCompleteType="password"
                  autoCapitalize="none"
                  blurOnSubmit={false}
                  ref={refPass}
                  onSubmitEditing={() => refRepeatPass.current.focus()}
                  onChangeText={(p) => setPassword(p)}
                />
              </Spacer>
              <Spacer size="large">
                <AuthInput
                  theme={{
                    colors: { primary: "green", underlineColor: "transparent" },
                  }}
                  label="Repeat Password"
                  value={repeatedPassword}
                  textContentType="password"
                  returnKeyType="done"
                  secureTextEntry
                  autoCompleteType="password"
                  autoCapitalize="none"
                  ref={refRepeatPass}
                  onChangeText={(p) => setRepeatedPassword(p)}
                />
              </Spacer>
              {error && (
                <Spacer size="large">
                  <Text variant="error">{error}</Text>
                </Spacer>
              )}
              <Spacer size="large">
                <AuthButton
                  icon="account-key"
                  mode="contained"
                  onPress={() => onSignUp(email, password, repeatedPassword)}
                  loading={isLoading ? true : false}
                >
                  Sign Up
                </AuthButton>
              </Spacer>
              <Spacer size="large">
                <AuthButton
                  icon="account-arrow-left"
                  mode="contained"
                  onPress={() => navigation.goBack()}
                >
                  Accounts
                </AuthButton>
              </Spacer>
            </AccountContainer>
          </KeyboardAvoidingView>
        </BoxContainer>
        <BottomContainer>
          <Text variant="caption"> @andriiM2021 </Text>
        </BottomContainer>
      </MainContainer>
    </AccountBackground>
  );
};
