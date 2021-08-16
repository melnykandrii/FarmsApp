import React, { useState, useContext, createContext, useEffect } from "react";

import { farmsRequest, farmsTransform } from "./farms.service";

import { LocationContext } from "../location/location.context";

export const FarmsContext = createContext();

export const FarmsContextProvider = ({ children }) => {
  const [farms, setFarms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");
  const [key3, setKey3] = useState("");

  useEffect((isStrawberry, isBlueberry, isApple) => {
    if (isStrawberry) {
      setKey1("strawberry");
    } else {
      setKey1("");
    }
    if (isBlueberry) {
      setKey2("blueberry");
    } else {
      setKey2("");
    }
    if (isApple) {
      setKey3("apple");
    } else {
      setKey3("");
    }
  }, []);
  console.log("Straw-", key1, key2, key3);

  const retrieveFarms = (loc, k1, k2, k3) => {
    setIsLoading(true);
    setFarms([]);
    farmsRequest(loc, k1, k2, k3)
      .then(farmsTransform)
      .then((results) => {
        setError(null);
        setIsLoading(false);
        setFarms(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      setIsLoading(true);
      const locationString = `${location.lat},${location.lng}`;
      retrieveFarms(locationString);
    }
  }, [location]);

  return (
    <FarmsContext.Provider value={{ farms, isLoading, error }}>
      {children}
    </FarmsContext.Provider>
  );
};
