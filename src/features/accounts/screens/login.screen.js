import React, { useState, useContext } from "react";
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
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <MainContainer>
        <TitleContainer>
          <Title>Meals to Go</Title>
        </TitleContainer>
        <BoxContainer>
          <AccountContainer>
            <HeaderContainer>
              <HeaderLabel>Please Log In.</HeaderLabel>
              <HeaderText>Using your email and password.</HeaderText>
            </HeaderContainer>
            <AuthInput
              label="E-mail"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
            />
            <Spacer size="large">
              <AuthInput
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                secure
                onChangeText={(p) => setPassword(p)}
              />
            </Spacer>
            {error && (
              <Spacer size="large">
                <Text variant="error">{error}</Text>
              </Spacer>
            )}
            <Spacer size="large">
              <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => onLogin(email, password)}
              >
                Login
              </AuthButton>
            </Spacer>
          </AccountContainer>
        </BoxContainer>
        <BottomContainer>
          <Text variant="caption"> @andriiM2021 </Text>
        </BottomContainer>
      </MainContainer>
    </AccountBackground>
  );
};
