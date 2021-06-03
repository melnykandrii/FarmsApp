import { StatusBar as ExpoStatusBar } from "expo-status-bar";
//import firebase from "firebase/app";
import * as firebase from "firebase";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useDomine,
  Domine_400Regular,
} from "@expo-google-fonts/domine";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCixp2EBVmQNMsjWKzwt-s2_u7xIOXOJj0",
  authDomain: "mealstogo-b8bad.firebaseapp.com",
  projectId: "mealstogo-b8bad",
  storageBucket: "mealstogo-b8bad.appspot.com",
  messagingSenderId: "745538310414",
  appId: "1:745538310414:web:d6a96f1a51f11eb34a875f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [domineLoaded] = useDomine({
    Domine_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !domineLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
