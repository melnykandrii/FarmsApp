import React, { useContext, useEffect, useState, useCallback } from "react";

import { useFocusEffect } from "@react-navigation/native";
import MapView from "react-native-maps";
import { LocationContext } from "../../../services/location/location.context";
import { FarmsContext } from "../../../services/farms/farms.context";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Map } from "../styles/map.styles";
import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";
import { theme } from "../../../infrastructure/theme";
import { UserCallout } from "../components/map-user-callout.component";

const TestMap = ({ navigation }) => {
  const { coord, location } = useContext(LocationContext);
  const { farms = [] } = useContext(FarmsContext);
  const { user, photo, getProfilePicture } = useContext(AuthenticationContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [getProfilePicture, user])
  );
  console.log(photo);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.03,
        }}
      >
        {farms.map((farm) => {
          return (
            <MapView.Marker
              key={farm.name}
              title={farm.name}
              coordinate={{
                latitude: farm.geometry.location.lat,
                longitude: farm.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() => navigation.navigate("Farm Details", { farm })}
              >
                <MapCallout farm={farm} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
        {coord && (
          <MapView.Marker
            title="My location"
            coordinate={{
              latitude: coord.lat,
              longitude: coord.lng,
            }}
            pinColor={theme.colors.brand.spring}
          >
            <MapView.Callout>
              <UserCallout user={user} photo={photo} />
            </MapView.Callout>
          </MapView.Marker>
        )}
      </Map>
    </>
  );
};
export const TestMapScreen = ({ navigation, route }) => {
  const { location } = useContext(LocationContext);
  if (!location) {
    return (
      <Map
        region={{
          latitude: 0,
          longitude: 0,
        }}
      />
    );
  }
  return <TestMap navigation={navigation} route={route} />;
};
