import React, { useEffect, useContext } from "react";
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
//import * as Location from "expo-location";

import { LocationContext } from "../../../services/location/location.context";
import { LoadingScreen } from "../../accounts/screens/loading.screen";

export const LocationScreen = ({ navigation }) => {
  const {
    keyword,
    coord,
    isFetching,
    getLocationHandler,
    onSkip,
    checkLocation,
  } = useContext(LocationContext);

  useEffect(() => {
    if (coord) {
      navigation.navigate("Main", {
        screen: "Tabs",
        params: {
          screen: "Farms",
        },
      });
    }
  }, [coord, navigation]);

  useEffect(() => {
    if (keyword) {
      navigation.navigate("Main", {
        screen: "Tabs",
        params: {
          screen: "Farms",
        },
      });
    }
  }, [keyword, navigation]);
  /*
  useEffect(() => {
    setPickedLocation(coord);
  }, [coord]);

  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const getLocationHandler = async () => {
    const hasService = await verifyLocationService();
    if (!hasService) {
      return;
    }
    const hasPermission = await requestLocationPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const deviceLocation = await Location.getCurrentPositionAsync({
        accuracy: 5,
      });
      setPickedLocation({
        lat: deviceLocation.coords.latitude,
        lng: deviceLocation.coords.longitude,
      });
      console.log("locationScreen", pickedLocation);
      //userLocation(pickedLocation);
      navigation.navigate("Main", {
        screen: "Tabs",
        params: {
          screen: "TestMap",
          params: {
            userlocation: deviceLocation.coords,
          },
        },
      });
    } catch (err) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or select your location!",
        [{ text: "OK" }]
      );
    }
    setIsFetching(false);
  };
  */

  /*const onNavi = () => {
    getLocationHandler();
    navigation.navigate("Main", {
      screen: "Tabs",
      params: {
        screen: "TestMap",
      },
    });
  };*/

  const skipScreen = () => {
    onSkip();
    navigation.navigate("Main");
  };

  return checkLocation ? (
    <LoadingScreen />
  ) : (
    <MenuBackground>
      <MenuCover />
      <TopContainer>
        <TopButtonsContainer>
          <ScreenButton title="Skip" onNavigate={skipScreen} />
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
