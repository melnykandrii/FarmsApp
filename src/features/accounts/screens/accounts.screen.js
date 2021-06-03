import React from "react";
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
  BottomContainer,
  BoxContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
    <MainContainer>
      <TitleContainer>
        <Title>Meals to Go</Title>
      </TitleContainer>
      <BoxContainer>
        <AccountContainer>
          <HeaderContainer>
            <HeaderLabel>Please Sign In.</HeaderLabel>
          </HeaderContainer>
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
            <Text variant="hint"> Tap on SignUp to create an account. </Text>
          </Spacer>
        </AccountContainer>
      </BoxContainer>
      <BottomContainer>
        <Text variant="caption"> @andriiM2021 </Text>
      </BottomContainer>
    </MainContainer>
  </AccountBackground>
);
