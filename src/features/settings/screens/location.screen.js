import React from "react";
import {
  LocationScreenView,
  TopButtonsContainer,
  TopContainer,
  ImageContainer,
  MapImage,
  BottomContainer,
  BodyText,
  HeaderText,
} from "../components/location.styles";
import { ScreenButton } from "../../../components/buttons/screen-button.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const LocationScreen = ({ navigation }) => {
  return (
    <LocationScreenView>
      <TopContainer>
        <TopButtonsContainer>
          <ScreenButton
            title="Skip"
            onNavigate={() => navigation.navigate("Main")}
          />
        </TopButtonsContainer>
      </TopContainer>
      <ImageContainer>
        <HeaderText variant="header">Select your location</HeaderText>
        <Spacer size="large">
          <MapImage />
        </Spacer>
        <Spacer size="large">
          <BodyText variant="body" style={{}}>
            In order to see farms nearest for you please select your location or
            enable location service.
          </BodyText>
        </Spacer>
      </ImageContainer>

      <BottomContainer>
        <ScreenButton
          title="Select location"
          onNavigate={() => navigation.navigate("Main")}
        />
        <Spacer size="large">
          <ScreenButton
            title="Enable location"
            onNavigate={() => navigation.navigate("Main")}
          />
        </Spacer>
      </BottomContainer>
    </LocationScreenView>
  );
};
