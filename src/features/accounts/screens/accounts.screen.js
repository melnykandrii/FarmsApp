import React, { useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  HeaderLabel,
  HeaderContainer,
  TitleContainer,
  MainContainer,
  BottomContainer,
  BoxContainer,
  AnimationContainer,
  LogoImage,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LoadingScreen } from "./loading.screen";

export const AccountScreen = ({ navigation }) => {
  const { retriveUser } = useContext(AuthenticationContext);
  return retriveUser ? (
    <LoadingScreen />
  ) : (
    <AccountBackground>
      <AccountCover />
      <MainContainer>
        <TitleContainer>
          <LogoImage />
        </TitleContainer>
        <AnimationContainer>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../../assets/watermelon.json")}
          />
        </AnimationContainer>
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
          <Text variant="caption"> @AM2021 </Text>
        </BottomContainer>
      </MainContainer>
    </AccountBackground>
  );
};
