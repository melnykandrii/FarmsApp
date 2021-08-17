import React, { useState, useContext, createContext, useEffect } from "react";

import { farmsRequest, farmsTransform } from "./farms.service";

import { LocationContext } from "../location/location.context";

export const FarmsContext = createContext();

export const FarmsContextProvider = ({ children }) => {
  const [filterS, setFilterS] = useState("vegetables");
  const [filterR, setFilterR] = useState("farms");
  const [filterB, setFilterB] = useState("farms");
  const [filterA, setFilterA] = useState("farm");
  const [filterP, setFilterP] = useState("farm");
  const [farms, setFarms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const onFilterHandler = (
    filterKeywordS,
    filterKeywordR,
    filterKeywordB,
    filterKeywordA,
    filterKeywordP
  ) => {
    setFilterS(filterKeywordS);
    setFilterR(filterKeywordR);
    setFilterB(filterKeywordB);
    setFilterA(filterKeywordA);
    setFilterP(filterKeywordP);
  };

  const retrieveFarms = (loc, k1, k2, k3, k4, k5) => {
    setIsLoading(true);
    setFarms([]);
    farmsRequest(loc, k1, k2, k3, k4, k5)
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
      retrieveFarms(
        locationString,
        filterS,
        filterR,
        filterB,
        filterA,
        filterP
      );
    }
  }, [location, filterS, filterR, filterB, filterA, filterP]);

  return (
    <FarmsContext.Provider
      value={{
        farms,
        isLoading,
        error,
        filter: onFilterHandler,
        filterS,
        filterR,
        filterB,
        filterA,
        filterP,
      }}
    >
      {children}
    </FarmsContext.Provider>
  );
};
