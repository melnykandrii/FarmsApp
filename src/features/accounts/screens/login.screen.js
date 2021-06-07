import React, { useState, useContext, useRef } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  HeaderLabel,
  HeaderText,
  HeaderContainer,
  AuthInput,
  MainContainer,
  BoxContainer,
  TitleContainer,
  BottomContainer,
  Title,
  ErrorContainer,
  AnimationContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Alert } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  const refPass = useRef();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

  return (
    <AccountBackground>
      <AccountCover />
      <MainContainer>
        <TitleContainer>
          <Title>Meals to Go</Title>
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
                autoCapitalize="none"
                returnKeyType="next"
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
                  secureTextEntry
                  autoCapitalize="none"
                  returnKeyType="done"
                  ref={refPass}
                  onChangeText={(p) => setPassword(p)}
                />
              </Spacer>
              <ErrorContainer>
                {error && (
                  <Spacer size="large">
                    <Text variant="error">{error}</Text>
                  </Spacer>
                )}
              </ErrorContainer>
              <Spacer size="large">
                <AuthButton
                  icon="account-check"
                  mode="contained"
                  onPress={() => onLogin(email, password)}
                  loading={isLoading ? true : false}
                >
                  Login
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
