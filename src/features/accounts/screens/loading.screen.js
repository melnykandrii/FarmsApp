import React from "react";
import { ActivityIndicator } from "react-native";
import {
  AccountBackground,
  AccountCover,
  TitleContainer,
  MainContainer,
  BottomContainer,
  BoxContainer,
  AnimationContainer,
  LogoImage,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";

export const LoadingScreen = () => (
  <AccountBackground>
    <AccountCover />
    <MainContainer>
      <TitleContainer>
        <LogoImage />
      </TitleContainer>
      <AnimationContainer />
      <BoxContainer>
        <Text>"Loading ..."</Text>
      </BoxContainer>
      <BottomContainer>
        <Text variant="caption"> @AM2021 </Text>
      </BottomContainer>
    </MainContainer>
  </AccountBackground>
);
