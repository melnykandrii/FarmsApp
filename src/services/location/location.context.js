import React, {
  useState,
  createContext,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

import * as Location from "expo-location";
import {
  locationRequest,
  locationTransform,
  revLocationRequest,
} from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coord, setCoord] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [checkLocation, setCheckLocation] = useState(false);

  /*const onMyLocation = (userLocation) => {
    setIsLoading(true);
    setKeyword("");
    setCoord(userLocation);
  };*/
  useEffect(() => {
    setCheckLocation(true);
    checkLocationHandler();
    setCheckLocation(false);
  }, [checkLocationHandler]);

  useEffect(() => {
    if (!coord) {
      return;
    }
    setKeyword("");
    setIsLoading(true);
    revLocationRequest(coord)
      .then(locationTransform)
      .then((result) => {
        setError(null);
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  }, [coord]);

  const onSkip = () => {
    setIsLoading(true);
    setKeyword("Toronto");
  };

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    setIsLoading(true);
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setError(null);
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  }, [keyword]);

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

  const requestLocationPermissions = async () => {
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

  const getPermissions = async () => {
    const result = await Location.getForegroundPermissionsAsync();
    if (result.status !== "granted") {
      console.log("there is no permissions");
      return false;
    }
    return true;
  };

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
      setCoord({
        lat: deviceLocation.coords.latitude,
        lng: deviceLocation.coords.longitude,
      });
      //userLocation(pickedLocation);
    } catch (err) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or select your location!",
        [{ text: "OK" }]
      );
    }
    setIsFetching(false);
  };

  const checkLocationHandler = useCallback(async () => {
    const hasPermission = await getPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const deviceLocation = await Location.getLastKnownPositionAsync();
      setCoord({
        lat: deviceLocation.coords.latitude,
        lng: deviceLocation.coords.longitude,
      });
      //userLocation(pickedLocation);
    } catch (err) {
      console.log("Wasn't able to fetch location", err);
    }
    setIsFetching(false);
  }, []);

  const saveKeyword = async (value, uid) => {
    try {
      const jsonValue = value;
      await AsyncStorage.setItem(`@keyword-${uid}`, jsonValue);
      console.log(jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadKeyword = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@keyword-${uid}`);
      if (value !== null) {
        setKeyword(value);
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const removeKeyword = async (uid) => {
    try {
      const value = await AsyncStorage.removeItem(`@keyword-${uid}`);
      if (value == null) {
        setKeyword("");
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  useEffect(() => {
    if (user && user.uid) {
      loadKeyword(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && keyword.length) {
      saveKeyword(keyword, user.uid);
    }
  }, [keyword, user]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
        coord,
        onSkip,
        verifyLocationService,
        requestLocationPermissions,
        isFetching,
        getLocationHandler,
        getPermissions,
        checkLocationHandler,
        checkLocation,
        removeKeyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
