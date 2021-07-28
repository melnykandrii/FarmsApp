import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Activity,
  ActivityContainer,
  TopButtonsContainer,
  TopContainer,
  ImageContainer,
  MapImage,
  BottomContainer,
  BodyText,
  HeaderText,
} from "../styles/location.styles";
import { ScreenButton } from "../../../components/buttons/screen-button.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { MenuBackground, MenuCover } from "../styles/menu.styles";
import * as Location from "expo-location";

export const LocationScreen = ({ navigation }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const verifyLocationService = async () => {
    const res = await Location.hasServicesEnabledAsync();
    if (res === false) {
      Alert.alert(
        "Insufusiant permisions!",
        "Location service is disabled, please make sure you've enabled it.",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const verifyLocationPermissions = async () => {
    const result = await Location.requestForegroundPermissionsAsync();
    if (result.status !== "granted") {
      Alert.alert(
        "Insufusiant permisions!",
        "You need to grant location permisions!",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasService = await verifyLocationService();
    if (!hasService) {
      return;
    }
    const hasPermission = await verifyLocationPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getLastKnownPositionAsync();
      console.log(location);
      setPickedLocation(null);
    } catch (err) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or pick a location on the map.",
        [{ text: "OK" }]
      );
    }
    setIsFetching(false);
  };

  return (
    <MenuBackground>
      <MenuCover />
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
        <Spacer size="xxl">
          <MapImage />
        </Spacer>
        <Spacer size="large" />
      </ImageContainer>
      <ActivityContainer>
        <BodyText variant="body">
          In order to see farms nearest for you please select your location or
          enable location service.
        </BodyText>
        <Spacer size="large" />
        {isFetching ? <Activity /> : null}
      </ActivityContainer>
      <BottomContainer>
        <ScreenButton
          title="Select location"
          onNavigate={() => navigation.navigate("SelectLocationScreen")}
        />
        <Spacer size="large">
          <ScreenButton
            title="Enable location"
            onNavigate={getLocationHandler}
          />
        </Spacer>
      </BottomContainer>
    </MenuBackground>
  );
};
