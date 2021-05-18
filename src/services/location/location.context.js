import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState("san francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const onSearch = (searchKeyword = "Antwerp") => {
    console.log(searchKeyword);
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword.toLocaleLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    onSearch();
  }, []);
  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
