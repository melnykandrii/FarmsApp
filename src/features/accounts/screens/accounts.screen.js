import React from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  HeaderLabel,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
    <AccountContainer>
      <HeaderLabel>Please Sign In</HeaderLabel>
      <Spacer size="large">
        <AuthButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("LogIn")}
        >
          LogIn
        </AuthButton>
      </Spacer>
      <Spacer size="large">
        <AuthButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          SignUp
        </AuthButton>
      </Spacer>
    </AccountContainer>
  </AccountBackground>
);
