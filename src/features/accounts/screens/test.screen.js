import React from "react";
import { View, Text } from "react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  HeaderLabel,
  HeaderContainer,
  HeaderText,
  Title,
  TitleContainer,
  MainContainer,
  BoxContainer,
  BottomContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const TestScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
    <MainContainer>
      <TitleContainer>
        <Title>Meals to Go</Title>
      </TitleContainer>
      <BoxContainer>
        <AccountContainer>
          <Spacer size="large">
            <AuthButton
              icon="account-check"
              mode="contained"
              onPress={() => navigation.navigate("LogIn")}
            >
              LogIn
            </AuthButton>
          </Spacer>
          <Spacer size="large">
            <AuthButton
              icon="account-key"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              SignUp
            </AuthButton>
          </Spacer>
          <Spacer size="large">
            <HeaderText>Tap on SignUp to create an account.</HeaderText>
          </Spacer>
        </AccountContainer>
      </BoxContainer>
      <BottomContainer>
        <Text> @nd2021 </Text>
      </BottomContainer>
    </MainContainer>
  </AccountBackground>
);
