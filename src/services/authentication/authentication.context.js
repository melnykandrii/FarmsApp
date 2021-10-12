import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  loginRequest,
  signUpRequest,
  authStateChanged,
  logOut,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [retriveUser, setRetriveUser] = useState(true);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    setRetriveUser(false);
  }, []);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  authStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
      setRetriveUser(false);
    } else {
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        console.log(e);
      });
  };

  const onSignUp = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      setIsLoading(false);
      return;
    }

    signUpRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        console.log(e);
      });
  };

  const onLogOut = () => {
    logOut().then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        photo,
        getProfilePicture,
        error,
        onLogin,
        onSignUp,
        onLogOut,
        retriveUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
