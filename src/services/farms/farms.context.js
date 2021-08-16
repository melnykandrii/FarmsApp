import React, { useState, useContext, createContext, useEffect } from "react";

import { farmsRequest, farmsTransform } from "./farms.service";

import { LocationContext } from "../location/location.context";

export const FarmsContext = createContext();

export const FarmsContextProvider = ({ children }) => {
  const [farms, setFarms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  const [filterS, setFilterS] = useState("");
  const [filterR, setFilterR] = useState("");
  const [filterB, setFilterB] = useState("");
  const [filterA, setFilterA] = useState("");
  const [filterP, setFilterP] = useState("");

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
      setIsLoading(true);
      const locationString = `${location.lat},${location.lng}`;
      retrieveFarms(locationString);
    }
  }, [location]);

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
