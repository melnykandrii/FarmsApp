import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { FarmsContext } from "../../../services/farms/farms.context";

import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const FarmsMap = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { farms = [] } = useContext(FarmsContext);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;
  //console.log(location);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
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
      </Map>
    </>
  );
};
export const MapScreen = ({ navigation }) => {
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
  return <FarmsMap navigation={navigation} />;
};
