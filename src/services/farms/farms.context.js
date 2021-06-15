import React, { useState, useContext, createContext, useEffect } from "react";

import { farmsRequest, farmsTransform } from "./farms.service";

import { LocationContext } from "../location/location.context";

export const FarmsContext = createContext();

export const FarmsContextProvider = ({ children }) => {
  const [farms, setFarms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveFarms = (loc) => {
    setIsLoading(true);
    setFarms([]);
    farmsRequest(loc)
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
